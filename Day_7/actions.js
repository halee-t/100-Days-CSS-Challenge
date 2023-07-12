const search = document.querySelector('.search-icon');
const menu = document.querySelector('.menu-icon');

let searchBar = document.querySelector('.search-input');
let navBar = document.querySelector('.nav-bar');
let main = document.querySelector('.center');

search.addEventListener('click', function(){
    searchBar.classList.toggle('active');
})

menu.addEventListener('click', function() {
    navBar.classList.toggle('activeNav');
    main.classList.toggle('activeCenter');
})
