const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)
var index=Number(localStorage.indexOf);

console.log(index)
$('.authorPic img').src=`../images/author/${index+1}.jpg`
$$('.bookZone img').forEach((imgBook,indexOfBook)=>{
    imgBook.src=`../images/home01/book_img/${index+1}/${indexOfBook+1}.jpg`
})