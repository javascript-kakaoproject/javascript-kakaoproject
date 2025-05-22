import { footerHeaderItemsData } from './chattingmockdata.js';


document.addEventListener('DOMContentLoaded', () => {
    const footerHeaderItemsContainer = document.querySelector('.footer-header-items-container');

    footerHeaderItemsContainer.innerHTML = footerHeaderItemsData
    .map(item => 
        ` <div class="footerHeaderItem-icon">
            ${item.icon}
           </div>
    `)
    .join('');
});

