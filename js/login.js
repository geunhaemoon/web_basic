
//싱글톤... 
const signinButtonOnClickHandle = () => {
    AccounSevice.getInstance().signin();
};

class AccounSevice{

    authUsername = "aaa";
    authPassword = "1234";

    
    //변수명 앞에 #을 붙이면 private 접근지정자
    static #instance = null;

    static getInstance() {
        if (this.#instance == null) {
            this.#instance = new AccounSevice();
        }
        return this.#instance;
    }

    signin() {
        const usernameInput = document.querySelector(".username-input");
        const passwordInput = document.querySelector(".password-input");
        const username = usernameInput.value;
        const password = passwordInput.value;


        //  console.log(usernameInput.value);
        //  console.log(passwordInput.value);


        if (username !== this.authUsername || password !== this.authPassword) {
            alert("사용자 정보를 확인하세요.");
            return;
        }
        alert("로그인 성공");
    }

}