// 업데이트한 프로필 데이터
const updatedProfiles = [
  { id: 1, name: '하니', image: 'https://cdn.spotvnews.co.kr/news/photo/202412/720452_1139171_731.jpg'},
  { id: 2, name: '카리나', image: 'https://cdn.smarttoday.co.kr/news/photo/202501/70217_63467_357.jpg' },
  { id: 3, name: '유나', image: 'https://i.namu.wiki/i/z8FH-y2OWJaSSIOEw19_uoMmxAyRkj7Ha18keUi98VzNT9x5EnLXIdjqdJHD_lMhNAr_bCUGDi0Tkg0JcOWkMg.webp' },
  { id: 4, name: 'IU', image: 'https://img.khan.co.kr/news/2023/01/02/news-p.v1.20230102.1f95577a65fc42a79ae7f990b39e7c21_P1.png' },
  { id: 5, name: '윈터', image: 'https://m.sportsworldi.com/content/image/2024/05/26/20240526503382.jpg' },
  { id: 6, name: '상오', image: 'https://lh6.googleusercontent.com/proxy/2nLOK6272OSb0fnUjFlor476JQbd9CvXT9BogMpN6cAGC3kVTj2oTf3Igqg0Xwmh_t4RwWuJGGWRbg4W-M4zg_p-5quDOpXaaJv7e6_aIoITufPeNEq9Qbnuaw'},
  { id: 7, name: '163센치', image: 'https://w7.pngwing.com/pngs/880/279/png-transparent-mrs-potato-head-illustration-toy-story-2-buzz-lightyear-to-the-rescue-mr-potato-head-mrs-potato-head-character-toy-story-food-cartoon-pixar.png' },
  { id: 8, name: '상오갈비뼈', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7MMAXhTe-vAKofm9fWSi1eHMH12BJI05VAA&s' }
]; 

const birthdayFriendProfiles = [
  { id: 1, name: '상오갈비뼈', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7MMAXhTe-vAKofm9fWSi1eHMH12BJI05VAA&s', birthday: '오늘 생일' },
  { id: 2, name: '163센치', image: 'https://w7.pngwing.com/pngs/880/279/png-transparent-mrs-potato-head-illustration-toy-story-2-buzz-lightyear-to-the-rescue-mr-potato-head-mrs-potato-head-character-toy-story-food-cartoon-pixar.png', birthday: '오늘 생일' },
  { id: 3, name: '하니', image: 'https://cdn.spotvnews.co.kr/news/photo/202412/720452_1139171_731.jpg', birthday: '1월 8일' },
  { id: 4, name: '상오', image: 'https://lh6.googleusercontent.com/proxy/2nLOK6272OSb0fnUjFlor476JQbd9CvXT9BogMpN6cAGC3kVTj2oTf3Igqg0Xwmh_t4RwWuJGGWRbg4W-M4zg_p-5quDOpXaaJv7e6_aIoITufPeNEq9Qbnuaw', birthday: '1월 11일'},
];

const bookmarkProfiles = [
  { id: 1, name: '하니', image: 'https://cdn.spotvnews.co.kr/news/photo/202412/720452_1139171_731.jpg', message: '병구바라기^*^' },
  { id: 2, name: '상오', image: 'https://lh6.googleusercontent.com/proxy/2nLOK6272OSb0fnUjFlor476JQbd9CvXT9BogMpN6cAGC3kVTj2oTf3Igqg0Xwmh_t4RwWuJGGWRbg4W-M4zg_p-5quDOpXaaJv7e6_aIoITufPeNEq9Qbnuaw', message: '아름아 내꺼하자 나 돈 많다 ₩' },
  { id: 3, name: '카리나', image: 'https://cdn.smarttoday.co.kr/news/photo/202501/70217_63467_357.jpg', message: '형석이 여친임 연락 X' },
];

const recommendationProfiles = [
  { id: 1, name: '안유진', image: 'https://cdn.specialtimes.co.kr/news/photo/202408/401559_402014_5132.png'},
  { id: 2, name: '채원', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSM4l30Xa-galDhdEOsgeyRX3zGI-l3KR2Hw&s'},
];

const menuItems = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="20" height="20" style="cursor:pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>',
    label: '친구'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20" style="cursor:pointer"><path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" /></svg>',
    label: '채팅'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20" style="cursor:pointer"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>',
    label: '오픈채팅'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20" style="cursor:pointer"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>',
    label: '쇼핑'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20" style="cursor:pointer"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>',
    label: '더보기'
  }
];

const footerHeaderItems = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20" style="cursor:pointer"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>',
    id: 'search-icon'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20" style="cursor:pointer"><path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" /></svg>'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20" style="cursor:pointer"><path stroke-linecap="round" stroke-linejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" /></svg>'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20" style="cursor:pointer"><path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>'
  }
];

const pungProfiles = [
  {id: 1, name: '나의 펑을 만들어보세요!', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-5-3oxK8THbnkMFnKvUr3bqY96lp_6drK9w&s', message: ''},
];

const channelProfiles = [
  {
    id: 1,
    name: '채널',
    image: 'https://w7.pngwing.com/pngs/467/268/png-transparent-kakaotalk-sk-communications-instant-messaging-client-south-korea-kakao-talk-thumbnail.png',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="10" height="10"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>'
  },
  {
    id: 2,
    name: '다양한 채널 쿠폰을 받아보세요!',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVlI2OvfYkM-PkXUXqjhc63zAM4PoRFPT_6g&s',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="10" height="10"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>'
  },
]; 