import * as fetched from './classes/fetch.class.js';

let collapsed = false;
let splitCollapse = false;  

const update = document.querySelector('#update');
const filtered = document.querySelector('#searchbar');
const collapse = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu-items-container');
const downloads = document.querySelector('.downloads');
const split = document.querySelector('.split-menu');

update.addEventListener('click', () => {
    fetched.fetchRowInsertion(); 
});

filtered.addEventListener('keyup', () => {
    fetched.filterSearch();
})

collapse.addEventListener('click', () => {
    if(collapsed == false) {
        menu.style.display = 'flex';
        collapsed = true; 
    } else {
        menu.style.display = 'none';
        collapsed = false; 
    }
})

downloads.addEventListener('click', () => {
    if(splitCollapse == false) {
        split.style.display = 'flex';
        splitCollapse = true; 
    } else {
        split.style.display = 'none';
        splitCollapse = false; 
    }
})




