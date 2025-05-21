// DOM 요소 선택
document.addEventListener('DOMContentLoaded', function() {
  // 헤더 아이콘 렌더링
  const headerIconsContainer = document.querySelector('.footerHeaderItems');
  headerIconsContainer.innerHTML = ''; // 기존 내용 초기화
  footerHeaderItems.forEach(item => {
    const iconDiv = document.createElement('div');
    iconDiv.innerHTML = item.icon;
    
    // 검색 아이콘에 이벤트 리스너 추가
    if (item.id === 'search-icon') {
      iconDiv.addEventListener('click', function() {
        window.location.href = 'searchpage/search.html';
      });
    }
    
    headerIconsContainer.appendChild(iconDiv);
  });

  // 업데이트한 프로필 렌더링
  const updateProfileContainer = document.querySelector('.updateProfile');
  updateProfileContainer.innerHTML = ''; // 기존 내용 초기화
  const profileContainer = document.createElement('div');
  profileContainer.className = 'updateProfile-container';
  
  updatedProfiles.forEach(profile => {
    const profileDiv = document.createElement('div');
    profileDiv.className = 'updateProfile-item';
    profileDiv.innerHTML = `
      <img src="${profile.image}" alt="profile">
      <p>${profile.name}</p>
    `;
    profileContainer.appendChild(profileDiv);
  });
  
  updateProfileContainer.appendChild(profileContainer);

  // 생일인 친구 프로필 렌더링
  const birthdayFriendContainer = document.querySelector('.birthdayFriendProfile');
  birthdayFriendContainer.innerHTML = ''; // 기존 내용 초기화
  
  birthdayFriendProfiles.forEach(profile => {
    const friendDiv = document.createElement('div');
    friendDiv.className = 'birthday-friend-item';
    friendDiv.innerHTML = `
      <div class="birthday-friend-info">
        <img src="${profile.image}" alt="profile">
        <div>
          <p>${profile.name}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="10" height="10" style="cursor:pointer;color:#FF6F61">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
          </svg></p>
          <p>${profile.birthday}</p>
        </div>
      </div>
      <div class="giftButton">
        <p>선물하기
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="6" height="6" style="cursor:pointer;color:#FF6F61">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
          </svg>
        </p>
      </div>
    `;
    birthdayFriendContainer.appendChild(friendDiv);
  });

  // 펑 프로필 렌더링
  const pungContainer = document.querySelector('.pungProfile');
  pungContainer.innerHTML = ''; // 기존 내용 초기화
  
  pungProfiles.forEach(profile => {
    const pungDiv = document.createElement('div');
    pungDiv.className = 'pung-item';
    pungDiv.innerHTML = `
      <div class="pung-item-info">
        <img src="${profile.image}" alt="profile" width="30" height="30" style="border-radius:30%">
        <div style="display:flex;flex-direction:column;cursor:pointer">
          <p>${profile.name}</p>
          <p>${profile.message}</p>
        </div>
      </div>
    `;
    pungContainer.appendChild(pungDiv);
  });

  // 즐겨찾기 프로필 렌더링
  const bookmarkContainer = document.querySelector('.bookmarkProfiles');
  bookmarkContainer.innerHTML = ''; // 기존 내용 초기화
  
  bookmarkProfiles.forEach(profile => {
    const bookmarkDiv = document.createElement('div');
    bookmarkDiv.className = 'bookmark-item';
    bookmarkDiv.innerHTML = `
      <div class="bookmark-info">
        <img src="${profile.image}" alt="profile" width="30" height="30" style="border-radius:30%">
        <div style="display:flex;flex-direction:column">
          <p>${profile.name}</p>
          <p>${profile.message}</p>
        </div>
      </div>
    `;
    bookmarkContainer.appendChild(bookmarkDiv);
  });

  // 추천친구 프로필 렌더링
  const recommendationContainer = document.querySelector('.recommendationProfiles');
  recommendationContainer.innerHTML = ''; // 기존 내용 초기화
  
  recommendationProfiles.forEach(profile => {
    const recommendationDiv = document.createElement('div');
    recommendationDiv.className = 'recommendation-item';
    recommendationDiv.innerHTML = `
      <div class="recommendation-info">
        <img src="${profile.image}" alt="profile" width="30" height="30" style="border-radius:30%">
        <div style="display:flex;flex-direction:column">
          <p>${profile.name}</p>
        </div>
      </div>
    `;
    recommendationContainer.appendChild(recommendationDiv);
  });

  // 채널 프로필 렌더링
  const channelContainer = document.querySelector('.channelProfile');
  channelContainer.innerHTML = ''; // 기존 내용 초기화
  
  channelProfiles.forEach(profile => {
    const channelDiv = document.createElement('div');
    channelDiv.className = 'channel-item';
    channelDiv.innerHTML = `
      <div class="channel-info">
        <img src="${profile.image}" alt="profile" width="30" height="30" style="border-radius:30%">
        <div style="display:flex;flex-direction:column">
          <p>${profile.name}</p>
        </div>
      </div>
      <div>${profile.icon}</div>
    `;
    channelContainer.appendChild(channelDiv);
  });

  // 메뉴 아이템 렌더링
  const menuContainer = document.querySelector('.menuItems');
  menuContainer.innerHTML = ''; // 기존 내용 초기화
  
  menuItems.forEach(item => {
    const menuDiv = document.createElement('div');
    menuDiv.className = 'menu-item';
    menuDiv.innerHTML = `
      ${item.icon}
      <p>${item.label}</p>
    `;
    menuContainer.appendChild(menuDiv);
  });

  // 스크롤 위치 조정
  document.querySelector('.allMainSection').scrollTop = 0;
}); 