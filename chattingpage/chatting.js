import { footerHeaderItemIcon } from './chattingmockdata.js';


document.addEventListener('DOMContentLoaded', function() {

    const footerHeaderItems = document.querySelector('.footerHeaderItems');
    footerHeaderItems.innerHTML = footerHeaderItemIcon
    .map(item => 
        ` <div class="footerHeaderItem-icon">
            ${item.icon}
           </div>
    `)
    .join('');
});