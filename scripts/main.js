import * as fetched from './classes/fetch.class.js';

const update = document.querySelector('#update');
const filtered = document.querySelector('#searchbar');

update.addEventListener('click', () => {
    fetched.fetchRowInsertion(); 
});

filtered.addEventListener('keyup', () => {
    fetched.filterSearch();
})


