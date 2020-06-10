import * as content from './content.js';
import * as animation from './animation.js';

const update = document.querySelector('#update');
const filtered = document.querySelector('#searchbar');

update.addEventListener('click', () => {
    content.fetchRowInsertion(); 
});

filtered.addEventListener('keyup', () => {
    content.filterSearch();
})


