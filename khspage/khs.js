import {headerIconsData} from './khsmockdata.js';
import {menuSectionItemData} from './khsmockdata.js';

document.addEventListener('DOMContentLoaded', function() {
    const headerIconsContainer = document.getElementById('header-icons-container');
    
    headerIconsContainer.innerHTML = headerIconsData.map(item => 
        ` <div class="header-icon">
            ${item.icon}
           </div>
    `)
    .join('');
});

document.addEventListener('DOMContentLoaded', function() {
    const menuItemsContainer = document.querySelector('.menu-section-item');

    menuItemsContainer.innerHTML = menuSectionItemData.map(item => 
        ` <div class="menu-item-container">
            ${item.icon}
            <p>${item.title}</p>
        </div>
    `)
    .join('');
})