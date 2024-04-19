/**
 * @note
 * - 아래 출처의 이미지만 사용 가능합니다.
 * - https://images.unsplash.com
 * - https://picsum.photos
 */
const BLCCU_DUMMY_DATASET = {
  USER: {
    BASICS: [
      { username: '이오리', handle: 'this-duck' },
      { username: '김수달', handle: 'i-want-to-be-otter' },
      { username: '양가람', handle: 'helloworld123' },
      { username: 'purple LUV', handle: 'purple-luv' },
      { username: 'J soo', handle: 'j-soo' },
      { username: '유파랑', handle: 'yoo-parang' },
      { username: '이야옹', handle: 'meow-meow' },
      { username: 'zero', handle: 'zero' },
      { username: '피카츄', handle: 'pikachu' },
      { username: 'OlAfIsBeSt', handle: 'olaf-is-best' },
    ],
    DESCRIPTIONS: [
      '인테리어나 집꾸미기에 관심이 많아요! 여러분의 집도 함께 꾸며드릴까요?',
      '에베레스트 등반 시작합니다',
      '바쁜 직장인 | 주말에만 합니다 ㅎㅎ',
      '저희 해달이 바다를 너무 좋아해요...',
      '블꾸 16일차',
      '오늘도 즐거운 하루!',
      '행복한 사람은 무엇을 하든 행복해요.',
    ],
    PROFILE_IMAGES: [
      'https://images.unsplash.com/photo-1541873676-a18131494184',
      'https://images.unsplash.com/photo-1604145422058-65c7ce8406c8',
      'https://images.unsplash.com/photo-1474511320723-9a56873867b5',
      'https://images.unsplash.com/photo-1611246137035-85cf61567833',
      'https://images.unsplash.com/photo-1425082661705-1834bfd09dca',
      'https://images.unsplash.com/photo-1517849845537-4d257902454a',
      'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8',
      'https://images.unsplash.com/photo-1570481662006-a3a1374699e8',
      'https://images.unsplash.com/photo-1497119146420-012f8fc80a3a',
      'https://images.unsplash.com/photo-1560809451-9e77c2e8214a',
      'https://images.unsplash.com/photo-1592194996308-7b43878e84a6',
      'https://images.unsplash.com/photo-1535591273668-578e31182c4f',
      'https://images.unsplash.com/photo-1552833172-fd5ac167c18c',
      'https://images.unsplash.com/photo-1530041539828-114de669390e',
      'https://images.unsplash.com/photo-1552058544-f2b08422138a',
      'https://images.unsplash.com/photo-1566487097168-e91a4f38bee2',
      'https://images.unsplash.com/photo-1448523183439-d2ac62aca997',
      'https://images.unsplash.com/photo-1535930749574-1399327ce78f',
      'https://images.unsplash.com/photo-1630930195151-3b8434d19cd3',
      'https://images.unsplash.com/photo-1564347534838-cbefbe31afde',
      'https://images.unsplash.com/photo-1695894214827-873113c1106f',
      'https://images.unsplash.com/photo-1590437084033-eb14d85fe40a',
      'https://images.unsplash.com/photo-1543503430-244aace16cbd',
      'https://images.unsplash.com/photo-1621352973597-a53f65a96336',
      'https://images.unsplash.com/photo-1635851677111-89f41c58b96b',
      'https://images.unsplash.com/photo-1590564310616-4984760edb51',
      'https://images.unsplash.com/photo-1560083372-efb6689e3f23',
      'https://images.unsplash.com/photo-1544032527-042957c6f7ce',
      'https://images.unsplash.com/photo-1688598895563-83b19394350f',
    ],
    BACKGROUND_IMAGES: [
      'https://images.unsplash.com/photo-1713427607343-3e2ecbec35f9',
      'https://images.unsplash.com/photo-1713390110946-2a966eebd346',
      'https://images.unsplash.com/photo-1472669750356-ec9d2cadedd3',
      'https://images.unsplash.com/photo-1522083165195-3424ed129620',
      'https://images.unsplash.com/photo-1612219069673-f5f60ebc658f',
      'https://images.unsplash.com/photo-1468793195345-d9d67818016d',
      'https://images.unsplash.com/photo-1456195705968-a793f6ae29cf',
      'https://images.unsplash.com/photo-1465832297267-70d368a8ea7f',
      'https://images.unsplash.com/photo-1713283699002-ac9462cedf0a',
      'https://images.unsplash.com/photo-1590004987778-bece5c9adab6',
    ],
  },
  POST: {
    BASICS: [
      {
        title: '눈사람 만드는 법',
        slug: 'how-to-build-a-snowman',
        description: '오늘같은 날씨엔 눈사람 만드는 것이 최고죠! 🌨',
      },
      {
        title: '비오는 날이 좋아 ☂',
        slug: 'rainy-day-lover',
        description:
          '벚꽃이 떨어지는게 아쉽긴 해도 비오는 날은 역시 좋은 것 같아요! 톡톡 떨어지는 소리가 마음을 편안하게 해주는 것 같아요. 여러분은 어떤 날씨를 좋아하시나요?',
      },
      {
        title: '우리집 고양이 자랑합니다 (*ΦωΦ*)Ψ',
        slug: 'our-cat-is-cute',
        description:
          '우리집에 고양이 있어용ㅎㅎ 귀엽죠  아직 7개월 애기입니당... 매일 매일 쑥쑥 크네영 너무 귀여워요ㅠㅠ',
      },
      {
        title: 'ⓑⓘⓡⓣⓗ ⓓⓐⓨ🎂',
        slug: 'happy-birthday-to-me',
        description:
          '저 생일이에요.....🎂 혹시 다른 분도 생일이시라면 축하드립니당ㅎㅎㅎ 오늘 딱히 한 거는 없지만 그래도 기쁩니다! 여러분도 행복하세요~',
      },
      {
        title: '나만의 티타임',
        slug: 'tea-time',
        description:
          '차 한 잔의 여유로움이 필요할 때가 있죠. 오늘은 어떤 차를 마셔볼까요?',
      },
      {
        title: '캔들과 함께하는 힐링타임',
        slug: 'candle-and-relax',
        description:
          '캔들 하나로도 힐링을 느낄 수 있어요. 오늘은 어떤 향기로 힐링을 받아볼까요?',
      },
      {
        title: '아늑한 방 꾸미기',
        slug: 'is-cozy-room-possible',
        description:
          '아늑한 방 꾸미기를 해보고 싶어요. 여러분은 어떤 방 꾸미기를 좋아하시나요? 함께 공유해주세요! 🏡',
      },
      {
        title: '내가 좋아하는 향기',
        slug: 'my-favorite-fragrance',
        description:
          '향기는 기분을 좋게 해주는 마법 같은 것이에요. 여러분은 어떤 향기를 좋아하시나요? 저는 나무 향기를 좋아해요!',
      },
      {
        title: '주방에서의 우정',
        slug: 'friendship-in-the-kitchen',
        description:
          '친구들과 함께 요리하는 것이 얼마나 즐거운 일인지 알고 계신가요? 오늘은 친구들과 함께 요리하는 시간을 가져보세요!',
      },
      {
        title: '선생님의 꽃',
        slug: 'life-or-death-of-a-cactus',
        description:
          '선생님께서 선물해주신 선물이 살아있는지 죽어있는지 궁금하시다면? 바로 이 글을 확인해보세요!',
      },
      {
        title: '올해의 선생님',
        slug: 'teacher-of-the-year',
        description:
          '올해의 선생님을 뽑아보자! 여러분이 생각하시는 올해의 선생님은 누구인가요?',
      },
      {
        title: '나무 심는 법',
        slug: 'practical-tips-for-planting-trees',
        description:
          '나무를 심는 방법을 알고 싶나요? 먼저, 나무를 심으려면 당연히 나무를 심을 곳을 정해야 해요. 그 다음으로는 씨앗을 찾아야합니다. 여러분은 어떤 나무를 심고 싶으신가요?',
      },
      {
        title: '케이크는 해답이다',
        slug: 'cake-is-the-answer',
        description:
          '케이크를 먹으면 기분이 좋아지는 것 같아요. 제가 좋아하는 케이크는 초코케이크인데, 오늘은 딸기케이크가 너무 먹고 싶어요.',
      },
    ],
    THUMBNAIL_IMAGES: [
      'https://images.unsplash.com/photo-1636399269839-9f6527e211c0',
      'https://images.unsplash.com/photo-1629199324478-d06b387816bb',
      'https://images.unsplash.com/photo-1561662680-2b9b239c538d',
      'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4',
      'https://images.unsplash.com/photo-1611690132358-e493f29c6230',
      'https://images.unsplash.com/photo-1681414844079-f5b7e928210a',
      'https://images.unsplash.com/photo-1713274944509-e8e2cfc3c3ee',
      'https://images.unsplash.com/photo-1690937956164-29ef80d706cb',
      'https://images.unsplash.com/photo-1713011415990-c6fb2633069e',
      'https://images.unsplash.com/photo-1713085942410-f08fb306b333',
      'https://images.unsplash.com/photo-1713285642521-2b90248f8995',
      'https://images.unsplash.com/photo-1688407832489-cc9db90773f5',
      'https://images.unsplash.com/photo-1712431028580-049087ee59d8',
      'https://images.unsplash.com/photo-1711973787718-c5d1b6ae489b',
      'https://images.unsplash.com/photo-1713007267005-e677cbe065ce',
      'https://images.unsplash.com/photo-1713056941757-c5897c0056aa',
      'https://images.unsplash.com/photo-1712584868296-48d016ec261e',
    ],
  },
  CATEGORIES: [
    '인테리어',
    '일기',
    '리뷰',
    '여행',
    '음식',
    '생활',
    '취미',
    '휴식',
    '운동',
    '영화',
    '음악',
    '책',
    '게임',
    '공부',
    '사진',
    '패션',
    '동물',
    '자연',
    '기술',
    '건강',
    '사랑',
    '친구',
    '가족',
    '문화',
    '역사',
    '미술',
    '디자인',
    '스포츠',
    '여행',
    '음식',
    '자동차',
    '비즈니스',
    '금융',
    '마케팅',
    '코딩',
    '데이터',
  ].map((category, index) => ({ id: index + 1, name: category })),
};

export { BLCCU_DUMMY_DATASET };
