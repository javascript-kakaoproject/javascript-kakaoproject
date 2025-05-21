 import { searchHistoryItem } from './searchmockdata.js';
import { interiorSectionItem } from './searchmockdata.js';
import { promotionItem } from './searchmockdata.js';
import { emoticonItemsProfiles } from './searchmockdata.js';

document.addEventListener('DOMContentLoaded', function () {
  // 검색 히스토리 렌더링
  const searchHistoryWrapper = document.querySelector('.search-history-wrapper');
  searchHistoryWrapper.innerHTML = searchHistoryItem
    .map(
      item => `
      <div class="search-history-item-title">
        <p>${item.name}</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </div>
    `
    )
    .join('');


  const interiorSectionItems = document.querySelector('.interior-section-items');
  interiorSectionItems.innerHTML = interiorSectionItem
    .map(item => `
      <div class="interior-itemes-profiles">
        <img src="${item.image}" alt="image" class="interior-itemes-image">
        <p>${item.name}</p>
      </div>
    `)
    .join('');


const promotionSection = document.querySelector('.promotion-section');
promotionSection.innerHTML = promotionItem
  .map(item => `
    <div class="promotion-list">
      <p>${item.name}</p>
    </div>
  `)
  .join('');



  const emoticonMenu = document.querySelector('.emoticon-menu');
  emoticonMenu.innerHTML = emoticonItemsProfiles
    .map(item => `
      <div class="emoticon-itemes-profiles">
        <img src="${item.image}" alt="image" class="emoticon-itemes-image">
        <p style="font-weight: 600; font-size: 10px;">${item.name}</p>
      </div>
    `)
    .join('');
});