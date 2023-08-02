
window.onload = () => {
    loadBookList();
}

const bookList = new Array();

//5권 이상 넣어보기 ??
bookList.push({
    bookName: "어린왕자",
    author: "A",
    publication: "1출판사"
});
bookList.push({
    bookName: "백설공주",
    author: "B",
    publication: "2출판사"
});
bookList.push({
    bookName: "신데렐라",
    author: "C",
    publication: "3출판사"
});
bookList.push({
    bookName: "미녀와 야수",
    author: "D",
    publication: "4출판사"
});
bookList.push({
    bookName: "개구리왕자",
    author: "E",
    publication: "5출판사"
});


// 출력이 되게끔 
const loadBookList = () => {
    const bookListbody = document.querySelector(".book-list");

   bookListbody.innerHTML = bookList.map((book) => {
       return `
        <li>
            <span>${book.bookName}</span> 
            <span>${book.author}</span> 
            <span>${book.publication}</span>
                
        </li>
        `;
   }).join("");
    
    console.log(bookList.join());
};


// 값 넣어서 목록에 추가하기 
const addBookOnClickHandle = () => {
    const book = {
        /*
        bookName: null,
        author: null,
        publication: null
        */
        
        bookName: document.querySelector(".book-name").value,
        author: document.querySelector(".book-author").value,
        publication: document.querySelector(".book-pulication").value,

    }

    bookList.push(book);
    loadBookList();

}



////////////////////////////////////////
/*
bookList.push({
    bookname: `${book-name}`,
    anthor: `${book-author}`,
    publication: `${book-pulication}`    
})


const loadbookList = () => {
    
    bookListInput.innerHTML = bookList.map((book) => {
        return `
        <li>
            <span>${book.}</span>
        </li>
        `;
    });

    
    

}
*/