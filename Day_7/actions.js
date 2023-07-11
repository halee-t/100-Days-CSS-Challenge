const search = document.querySelector('.search-icon');

let searchBar = document.querySelector('.search-input');
let menuBar = document.querySelector('.nav-bar')

search.addEventListener('click', function(){
    searchBar.classList.toggle('active');
    menuBar.classList.toggle('active-2');
})