/**
 * 2026 오사카·교토 4박 5일 여행 가이드 데이터
 */

export const TRIP_META = {
  title: "2026 오사카·교토 미식 & 힐링 트립",
  subtitle: "Osaka & Kyoto Gourmet Journey",
  startDate: "2026-10-31T16:35:00+09:00",
  endDate: "2026-11-04T11:45:00+09:00",
  duration: "4박 5일",
  baseLocation: "오사카 난바 · 도톤보리 인근",
  defaultExchangeRate: 9.15, // 100 JPY = 915 KRW 기준 (1 JPY = 9.15 KRW)
};

export const ITINERARY_DAYS = [
  {
    day: 1,
    date: "10월 31일 (토)",
    title: "오사카 입성 & 도톤보리의 첫날 밤",
    theme: "입국 · 라피트 특급 · 와규 야키니쿠 · 할로윈 도톤보리",
    summary: "간사이 공항에 도착해 특급 라피트로 난바 숙소에 짐을 풀고, 도톤보리 명품 와규로 첫 식사를 즐깁니다.",
    highlights: ["난카이 라피트 탑승", "마츠자카규 와규 구이", "도톤보리 글리코상 야경"],
    tips: [
      "10월 31일은 할로윈 당일 밤으로 도톤보리 중심가가 매우 붐빌 수 있습니다. 저녁 식당은 사전 예약을 적극 권장합니다.",
      "간사이 공항 입국 수속 전 'Visit Japan Web' QR코드를 미리 캡처해두면 빠른 통과가 가능합니다."
    ],
    timeline: [
      {
        time: "16:35",
        title: "간사이 국제공항(KIX) 도착",
        category: "transit",
        desc: "입국 수속 및 수하물 수령 후 난카이 전철 티켓 카운터(2층)로 이동",
        badge: "입국",
        tip: "Visit Japan Web 입국/세관 QR 준비"
      },
      {
        time: "17:30 ~ 18:20",
        title: "난카이 라피트(특급열차) 탑승 ➔ 난바역 이동",
        category: "transit",
        desc: "공항에서 난바역까지 38분~45분 쾌속 이동 (지정좌석 편안한 이동)",
        badge: "특급열차",
        cost: "약 1,450엔 (편도)"
      },
      {
        time: "18:30 ~ 19:00",
        title: "호텔 체크인 & 짐 정리",
        category: "hotel",
        desc: "난바/도톤보리 도보권 숙소 체크인 및 가벼운 외출 준비",
        badge: "체크인"
      },
      {
        time: "19:30 ~ 21:00",
        title: "[저녁] 마츠자카규 야끼니꾸 M 호젠지요코초점",
        category: "food",
        desc: "일본 3대 와규인 마츠사카 소고기 특선 구이 코스. 분위기 좋은 프라이빗 룸에서 즐기는 감동적인 첫 식사",
        badge: "미식 ★★★",
        cost: "1인 약 8,000 ~ 15,000엔",
        mapUrl: "https://maps.google.com/?cid=12107619520962549084",
        restaurantId: "matsuzakagyu-m"
      },
      {
        time: "21:00 ~ 22:30",
        title: "도톤보리 강변 산책 & 글리코상 인증샷",
        category: "sightseeing",
        desc: "화려한 네온사인과 글리코상 앞 시그니처 포즈 촬영, 도톤보리 리버워크 야경 감상",
        badge: "관광",
        tip: "할로윈 분장 인파 구경 & 소지품 주의"
      }
    ]
  },
  {
    day: 2,
    date: "11월 01일 (일)",
    title: "고즈넉한 교토 당일치기 & 정갈한 미식",
    theme: "기요미즈데라 · 기온 숯불 장어덮밥 · 카모강 · 쿠시카츠",
    summary: "게이한 전철을 타고 천년 고도 교토로 떠납니다. 붉은 청수사와 전통 거리 산책, 나고야식 숯불 장어덮밥을 맛보고 난바로 복귀합니다.",
    highlights: ["기요미즈데라(청수사)", "산넨자카·니넨자카", "키쿠카와 장어덮밥", "카모강 산책", "쿠시카츠 다루마"],
    tips: [
      "기요미즈데라는 10시 이후 관광객이 급증하므로 09:30경 일찍 입장하여 여유롭게 관람하세요.",
      "오사카 요도야바시 ➔ 교토 기온시조 이동 시 '게이한 본선 특급(쾌속특급)'을 타면 환승 없이 48분 소요됩니다."
    ],
    timeline: [
      {
        time: "08:00 ~ 09:15",
        title: "난바 ➔ 요도야바시 ➔ 교토 기온시조역 이동",
        category: "transit",
        desc: "난바역(미도스지선) ➔ 요도야바시역 환승 ➔ 게이한 본선 특급 탑승 ➔ 기온시조역 도착",
        badge: "전철 이동",
        cost: "게이한 편도 430엔 + 지하철 190엔"
      },
      {
        time: "09:30 ~ 12:00",
        title: "기요미즈데라(청수사) & 산넨자카·니넨자카",
        category: "sightseeing",
        desc: "절벽 위에 지어진 웅장한 목조 본당과 오토와 폭포 관람 후, 아기자기한 전통 상점가 골목길 산책",
        badge: "유네스코 세계유산",
        cost: "입장료 400엔",
        mapUrl: "https://maps.google.com/?cid=11142562492576359146"
      },
      {
        time: "12:15 ~ 13:30",
        title: "[점심] 우나기시로 키쿠카와 교토기온점",
        category: "food",
        desc: "90년 전통 나고야식 숯불 장어덮밥(히츠마부시 & 이치본주). 겉은 바삭하고 속은 부드러운 극상의 풍미",
        badge: "미식 ★★★",
        cost: "1인 약 4,500 ~ 6,500엔",
        mapUrl: "https://maps.google.com/?cid=6205271270969705416",
        restaurantId: "kikukawa-gion"
      },
      {
        time: "14:00 ~ 16:30",
        title: "카모강변 산책 & 하나미코지 & 말차 디저트",
        category: "sightseeing",
        desc: "교토의 정취가 살아있는 게이샤 거리 하나미코지와 평화로운 카모강 산책, 프리미엄 우지 말차 파르페 즐기기",
        badge: "힐링/카페"
      },
      {
        time: "17:00 ~ 18:15",
        title: "교토 기온시조 ➔ 오사카 난바 복귀",
        category: "transit",
        desc: "게이한 특급 타고 요도야바시 경유 난바 귀환",
        badge: "전철 이동"
      },
      {
        time: "18:30 ~ 20:30",
        title: "[저녁] 쿠시카츠 다루마 도톤보리점",
        category: "food",
        desc: "오사카의 소울푸드 바삭한 꼬치튀김과 시원한 나마비루(생맥주)! 소스 듬뿍 찍어 하루를 유쾌하게 마무리",
        badge: "미식 ★★",
        cost: "1인 약 2,500 ~ 4,000엔",
        mapUrl: "https://maps.google.com/?cid=13204320496193831615",
        restaurantId: "kushikatsu-daruma"
      }
    ]
  },
  {
    day: 3,
    date: "11월 02일 (월)",
    title: "유니버셜 스튜디오 재팬 (USJ) & 와규 스키야키",
    theme: "USJ 오픈런 · 닌텐도 월드 · 해리포터 · 17시 스마트 퇴장 · 스키야키",
    summary: "월요일 오픈런으로 USJ를 스마트하게 공략! 인기 테마파크를 집중 즐긴 후 호러나이트 전 17시에 퇴장해 난바에서 따뜻한 스키야키로 힐링합니다.",
    highlights: ["슈퍼 닌텐도 월드", "위저딩 월드 오브 해리포터", "미니언즈/마리오 카트", "17시 조기퇴장으로 피로 최소화", "치카라야마 와규 스키야키"],
    tips: [
      "입장 즉시 USJ 공식 앱에서 '슈퍼 닌텐도 월드 e정리권(Area Timed Entry Ticket)'을 발권하세요.",
      "저녁 18시부터 공원에 좀비가 출몰하는 호러나이트 시즌입니다. 인파와 공포를 피해 17시에 퇴장하는 전략이 매우 쾌적합니다."
    ],
    timeline: [
      {
        time: "07:30 ~ 08:30",
        title: "난바역 ➔ USJ 이동 (오픈런)",
        category: "transit",
        desc: "난바(한신난바선) ➔ 니시쿠조 환승 ➔ 유니버설시티역 도착 (약 35분 소요)",
        badge: "이동",
        cost: "교통비 약 370엔"
      },
      {
        time: "09:00 ~ 17:00",
        title: "유니버셜 스튜디오 재팬 (USJ) 종일 탐방",
        category: "theme-park",
        desc: "마리오 카트 쿠파의 도전장, 요시 어드벤처, 해리포터 포비든 저니, 플라잉 다이노소어 등 하이라이트 공략",
        badge: "테마파크",
        cost: "1일 스튜디오 패스 (약 8,600~10,400엔)",
        mapUrl: "https://maps.google.com/?cid=13926527581177696425"
      },
      {
        time: "17:00 ~ 17:30",
        title: "[스마트 조기 퇴장] 인파 분산 & 시내 복귀",
        category: "transit",
        desc: "호러나이트 좀비 이벤트(18시~) 인파 혼잡 전에 쾌적하게 퇴장하여 난바로 귀환",
        badge: "꿀팁 전략"
      },
      {
        time: "18:30 ~ 20:30",
        title: "[저녁] 와규 스키야키 치카라야마 오사카 난바 1호점",
        category: "food",
        desc: "구글 평점 4.9점의 인생 스키야키. 특제 타레 소스에 자작하게 졸인 최상급 와규를 신선한 계란에 찍어먹는 최고의 힐링 디너",
        badge: "미식 ★★★",
        cost: "1인 약 6,000 ~ 10,000엔",
        mapUrl: "https://maps.google.com/?cid=15976576736448166063",
        restaurantId: "sukiyaki-chikarayama"
      }
    ]
  },
  {
    day: 4,
    date: "11월 03일 (화·일본 문화의 날)",
    title: "구로몬 시장 & 쇼핑 & 프리미엄 테판야키",
    theme: "구로몬 해산물 · 신사이바시/도톤보리 쇼핑 · 고베규 철판 스테이크",
    summary: "오사카의 부엌 구로몬 시장에서 싱싱한 해산물 브런치를 즐기고, 쇼핑가 탐방 후 여행의 마지막 밤을 화려한 고베규 테판야키로 장식합니다.",
    highlights: ["구로몬 시장 우니/가리비/타코야키", "신사이바시스지 & 다이마루 백화점", "돈키호테/드럭스토어", "진 고베규 테판야키 퍼포먼스"],
    tips: [
      "11월 3일은 일본 공휴일(문화의 날)입니다. 외곽 이동을 피하고 난바 중심 도보 동선을 구성하여 편안하게 즐깁니다.",
      "면세(Tax-Free)를 위해 쇼핑 시 항상 여권 실물을 지참하세요."
    ],
    timeline: [
      {
        time: "10:00 ~ 12:30",
        title: "[오전] 구로몬 시장 미식 탐방",
        category: "food",
        desc: "신선한 참치 회, 성게알(우니), 버터 가리비 구이, 갓 구운 타코야키 등 길거리 해산물 브런치",
        badge: "오사카의 부엌",
        cost: "1인 약 2,500 ~ 4,500엔",
        mapUrl: "https://maps.google.com/?cid=12402117845945925953",
        restaurantId: "kuromon-market"
      },
      {
        time: "13:00 ~ 17:30",
        title: "신사이바시 & 난바 미나미 쇼핑 타임",
        category: "shopping",
        desc: "다이마루 백화점(포켓몬센터, 닌텐도 오사카), 신사이바시 아케이드, 파르코, 드럭스토어, 돈키호테 기념품 쇼핑",
        badge: "쇼핑 & 면세",
        tip: "5,000엔 이상 구매 시 여권 제시하고 면세 10% 혜택"
      },
      {
        time: "18:00 ~ 20:30",
        title: "[저녁] 고베규 스테이크 진 난바점 (철판 테판야키)",
        category: "food",
        desc: "A5 등급 최고급 고베규 스테이크와 바닷가재/전복을 눈앞에서 구워내는 화려한 불쇼 퍼포먼스! 여행의 피날레 디너",
        badge: "미식 ★★★",
        cost: "1인 약 12,000 ~ 22,000엔",
        mapUrl: "https://maps.google.com/?cid=648729416635796210",
        restaurantId: "teppanyaki-zin"
      },
      {
        time: "21:00 ~ 22:30",
        title: "도톤보리 심야 산책 & 마지막 기념품 정리",
        category: "sightseeing",
        desc: "이자카야에서 하이볼 한잔 또는 편의점 야식(푸딩, 롤케이크)과 함께 여행 짐 꾸리기",
        badge: "야경/마무리"
      }
    ]
  },
  {
    day: 5,
    date: "11월 04일 (수)",
    title: "여유로운 체크아웃 & 간사이 공항 귀국",
    theme: "호텔 체크아웃 · 라피트 특급(08:30) · 면세점 쇼핑 · 귀국(11:45)",
    summary: "아침 일찍 라피트 특급을 타고 간사이 공항으로 이동하여 여유롭게 출국 수속 및 면세점 쇼핑 후 안전하게 귀국합니다.",
    highlights: ["라피트 특급 쾌속 이동", "간사이 공항 면세점(로이스/도쿄바나나)", "11:45 안전 귀국"],
    tips: [
      "비행기 출발 2시간 30분 전(09:15) 공항 도착 기준으로 일정이 설계되어 있어 면세점 쇼핑까지 여유롭습니다.",
      "기내 반입 액체류 규정(100ml 초과 화장품/젤류는 반드시 위탁수하물로)을 재확인하세요."
    ],
    timeline: [
      {
        time: "08:00 ~ 08:30",
        title: "호텔 체크아웃 및 난카이 난바역 이동",
        category: "hotel",
        desc: "호텔 체크아웃 후 도보로 난카이 난바역 라피트 탑승장으로 이동",
        badge: "체크아웃"
      },
      {
        time: "08:30 ~ 09:15",
        title: "난카이 라피트 특급 탑승 ➔ 간사이 공항 도착",
        category: "transit",
        desc: "지정석에서 편안하게 공항까지 논스톱 직행 이동",
        badge: "특급열차",
        cost: "약 1,450엔 (편도)"
      },
      {
        time: "09:30 ~ 11:15",
        title: "탑승 수속, 보안검색 및 면세점 쇼핑",
        category: "shopping",
        desc: "항공사 카운터 체크인, 수하물 위탁 후 면세 구역에서 로이스 초콜릿, 시로이코이비토 등 기념품 구매",
        badge: "면세점"
      },
      {
        time: "11:45",
        title: "간사이 공항(KIX) 이륙 ➔ 인천/한국 도착",
        category: "transit",
        desc: "안전하고 행복했던 4박 5일 오사카·교토 미식 여행 마무리!",
        badge: "귀국 ✈️"
      }
    ]
  }
];

export const GOURMET_RESTAURANTS = [
  {
    id: "matsuzakagyu-m",
    name: "마츠자카규 야끼니꾸 M 호젠지요코초점",
    japaneseName: "松阪牛焼肉 M 法善寺横丁店",
    day: 1,
    mealType: "1일차 저녁 (디너)",
    category: "와규 / 야키니쿠 (숯불구이)",
    rating: 4.8,
    reviewsCount: "3,200+",
    priceRange: "8,000 ~ 15,000 JPY (인당)",
    address: "오사카부 오사카시 주오구 난바 1-1-19 (호젠지요코초 골목 안)",
    googleMapUrl: "https://maps.google.com/?cid=12107619520962549084",
    reservationUrl: "https://www.matsusaka-projects.com/",
    reservationRequired: "필수 권장 (특히 할로윈 주말)",
    specialties: ["마츠사카 소고기 특선 부위 6종 모둠", "프리미엄 살치살/안심", "냉면/가마솥밥"],
    description: "일본 3대 최고급 와규인 마츠사카규 전문점으로, 호젠지 요코초의 고즈넉한 전통 골목에 위치해 있습니다. 프라이빗 룸에서 마블링이 예술인 소고기를 부위별로 즐길 수 있습니다.",
    proTip: "다양한 부위를 맛볼 수 있는 '스페셜 코스(Special Course)'를 추천하며, 한국어 메뉴판이 잘 구비되어 있습니다."
  },
  {
    id: "kikukawa-gion",
    name: "우나기시로 키쿠카와 교토기온점",
    japaneseName: "うなぎ 四代目 菊川 京都祇園店",
    day: 2,
    mealType: "2일차 점심 (런치)",
    category: "나고야식 숯불 장어덮밥 (우나기동 & 히츠마부시)",
    rating: 4.7,
    reviewsCount: "1,100+",
    priceRange: "4,500 ~ 6,500 JPY (인당)",
    address: "교토부 교토시 히가시야마구 기온마치 미나미가와 570-120",
    googleMapUrl: "https://maps.google.com/?cid=6205271270969705416",
    reservationUrl: "https://yoyaku.toreta.in/kikukawa-gion/",
    reservationRequired: "권장 (점심 피크타임)",
    specialties: ["이치본주(장어 한 마리 통구이 덮밥)", "히츠마부시(3가지 방식으로 먹는 장어덮밥)", "우자쿠(장어 오이초무침)"],
    description: "90년 넘게 이어온 장어 도매상의 비법으로 살아있는 최고급 장어를 즉석에서 숯불에 구워냅니다. 바삭한 껍질과 촉촉한 속살의 조화가 일품입니다.",
    proTip: "기요미즈데라 관람 후 내려오는 길(기온 방면)에 도보로 방문하기 최적의 위치입니다. 히츠마부시를 시켜 오차즈케(녹차 육수)와 함께 즐겨보세요."
  },
  {
    id: "kushikatsu-daruma",
    name: "쿠시카츠 다루마 도톤보리점",
    japaneseName: "串かつだるま 道頓堀店",
    day: 2,
    mealType: "2일차 저녁 (디너)",
    category: "오사카 정통 꼬치튀김 (쿠시카츠)",
    rating: 4.4,
    reviewsCount: "4,500+",
    priceRange: "2,500 ~ 4,000 JPY (인당)",
    address: "오사카부 오사카시 주오구 도톤보리 1-6-4",
    googleMapUrl: "https://maps.google.com/?cid=13204320496193831615",
    reservationUrl: "",
    reservationRequired: "현장 대기 (회전율 빠름)",
    specialties: ["도톤보리 세트 (쇠고기, 새우, 치즈, 연근 등)", "도테야키 (소힘줄 된장조림)", "양배추 & 생맥주"],
    description: "1929년 창업한 오사카 쿠시카츠의 원조! 특제 튀김옷으로 겉은 극도로 바삭하고 속은 부드럽습니다. 회전초밥처럼 레일로 배달되는 재미있는 시스템도 갖추고 있습니다.",
    proTip: "도톤보리점은 거대한 아저씨 얼굴 간판으로 유명합니다. '도테야키'를 사이드로 꼭 추가해서 시원한 생맥주와 곁들이세요."
  },
  {
    id: "sukiyaki-chikarayama",
    name: "와규 스키야키 치카라야마 오사카 난바 1호점",
    japaneseName: "和牛すき焼き 京都ちから山 大阪難波1号店",
    day: 3,
    mealType: "3일차 저녁 (디너)",
    category: "프리미엄 와규 스키야키 & 샤브샤브",
    rating: 4.9,
    reviewsCount: "1,500+",
    priceRange: "6,000 ~ 10,000 JPY (인당)",
    address: "오사카부 오사카시 주오구 난바 3-7-19",
    googleMapUrl: "https://maps.google.com/?cid=15976576736448166063",
    reservationUrl: "https://www.hotpepper.jp/",
    reservationRequired: "사전 예약 필수 (만석 잦음)",
    specialties: ["A5 흑우 와규 스키야키 코스", "신선한 무항생제 유정란 소스", "마무리 우동사리 / 덮밥"],
    description: "구글 평점 4.9점을 자랑하는 스키야키 맛집. 달콤짭조름한 특제 타레 소스에 최상급 와규를 살짝 익혀 계란 노른자에 찍어 먹으면 USJ에서 쌓인 하루 피로가 사르르 녹아내립니다.",
    proTip: "USJ 조기 퇴장(17:00) 후 난바로 돌아와 18:30~19:00 타임으로 예약해두면 완벽한 동선이 완성됩니다."
  },
  {
    id: "kuromon-market",
    name: "구로몬 시장 (오사카의 부엌)",
    japaneseName: "黒門市場",
    day: 4,
    mealType: "4일차 아침/점심 (브런치)",
    category: "길거리 해산물 시장 & 로컬 간식",
    rating: 4.3,
    reviewsCount: "18,000+",
    priceRange: "2,000 ~ 4,500 JPY (인당)",
    address: "오사카부 오사카시 주오구 니혼바시 2-4-1",
    googleMapUrl: "https://maps.google.com/?cid=12402117845945925953",
    reservationUrl: "",
    reservationRequired: "자유 방문 (10시~14시 추천)",
    specialties: ["통 성게알(우니)", "대왕 가리비 버터구이", "생참치(오도로) 초밥", "킹크랩 다리 구이"],
    description: "약 200년 역사를 지닌 오사카 대표 재래시장. 즉석에서 구워주는 신선한 해산물과 꼬치구이, 과일 주스를 맛보며 활기찬 시장 분위기를 느낄 수 있습니다.",
    proTip: "현금 결제만 가능한 점포가 많으므로 약간의 엔화 현금을 준비하세요. 시장 내 이트인(Eat-in) 공간이 마련된 매장을 이용하면 편리합니다."
  },
  {
    id: "teppanyaki-zin",
    name: "고베규 스테이크 진 난바점",
    japaneseName: "神戸牛ステーキ 鉄板焼 仁 難波店",
    day: 4,
    mealType: "4일차 저녁 (디너 피날레)",
    category: "프리미엄 고베규 철판 테판야키",
    rating: 4.8,
    reviewsCount: "1,800+",
    priceRange: "12,000 ~ 22,000 JPY (인당)",
    address: "오사카부 오사카시 주오구 난바 1-4-6",
    googleMapUrl: "https://maps.google.com/?cid=648729416635796210",
    reservationUrl: "https://www.tablecheck.com/",
    reservationRequired: "사전 예약 필수",
    specialties: ["A5 고베규 서로인 & 안심 스테이크", "활 랍스터/전복 철판구이", "특제 마늘 볶음밥"],
    description: "화려한 셰프의 철판 퍼포먼스와 함께 일본 최상위 브랜드 '고베규'의 극상 풍미를 즐길 수 있는 프리미엄 테판야키 레스토랑입니다. 여행 마지막 밤의 특별한 기념 디너로 최고입니다.",
    proTip: "카운터석을 지정 예약하여 눈앞에서 펼쳐지는 불쇼와 조리 과정을 감상하세요. 코스 마지막의 '마늘 볶음밥'은 필수 별미입니다."
  }
];

export const TRANSIT_GUIDE = [
  {
    title: "난카이 특급 라피트 (간사이 공항 ↔ 난바역)",
    type: "공항 이동",
    icon: "train",
    duration: "약 38~44분 (편도)",
    price: "성인 편도 1,450엔 (왕복 약 2,900엔)",
    route: "간사이공항역 ➔ 린쿠타운 ➔ 이즈미사노 ➔ 텐가차야 ➔ 신이마미야 ➔ 난카이 난바역",
    tips: [
      "전 좌석 지정석으로 넓고 쾌적하며 대형 캐리어 보관함이 완비되어 있습니다.",
      "클룩(Klook) / KKday 등에서 모바일 티켓을 사전 구매하면 QR 코드로 창구 대기 없이 바로 발권 가능합니다.",
      "1일차(공항 ➔ 난바 17:30 출발편), 5일차(난바 ➔ 공항 08:30 출발편) 이용 권장."
    ]
  },
  {
    title: "게이한 본선 특급 (오사카 ↔ 교토 기온)",
    type: "교토 당일치기",
    icon: "map-pin",
    duration: "약 48분",
    price: "편도 430엔 (게이한 1일 패스 약 1,100엔)",
    route: "난바(지하철 미도스지선 190엔) ➔ 요도야바시역 ➔ [게이한 본선 특급] ➔ 기온시조역",
    tips: [
      "추가 특급요금 없이 일반 운임만으로 특급(2층 열차 포함) 탑승이 가능합니다.",
      "기온시조역에서 내리면 기요미즈데라, 하나미코지, 야사카 신사까지 도보 이동이 매우 편리합니다.",
      "교토 내 후시미이나리나 우지까지 둘러볼 계획이라면 '게이한 패스 1일권'이 가성비가 좋습니다."
    ]
  },
  {
    title: "USJ 이동 루트 (난바역 ↔ 유니버설시티역)",
    type: "테마파크 이동",
    icon: "compass",
    duration: "약 30~35분",
    price: "편도 약 370엔 (한신 220엔 + JR 190엔)",
    route: "오사카난바역 (한신난바선 쾌속급행) ➔ 니시쿠조역 환승 ➔ JR 유메사키선 ➔ 유니버설시티역",
    tips: [
      "니시쿠조역 환승은 계단 하나만 건너면 되는 초간단 평면 환승입니다.",
      "이코카(ICOCA) 또는 스이카(Suica) 교통카드를 태그하면 티켓 발권 없이 바로 통과할 수 있습니다."
    ]
  },
  {
    title: "오사카 시내 교통카드 & 지하철 팁",
    type: "시내 교통",
    icon: "credit-card",
    duration: "수시 운행",
    price: "기본 운임 190엔 ~ 240엔",
    route: "오사카 메트로 미도스지선, 센니치마에선 등",
    tips: [
      "아이폰 유저는 애플월렛에 파스모(PASMO)나 스이카(Suica)를 등록해 바로 현대카드 등으로 충전하여 쓸 수 있습니다.",
      "이번 일정은 난바 중심 도보 이동이 많으므로 비싼 1일 승차권보다 IC 카드 충전 방식이 훨씬 경제적입니다."
    ]
  }
];

export const DEFAULT_BUDGET_ITEMS = [
  { id: "flight", name: "왕복 항공권 (인천 ↔ 간사이)", category: "항공", costJpy: 35000, costKrw: 320000, isPerPerson: true },
  { id: "hotel", name: "난바 호텔 숙박비 (4박)", category: "숙박", costJpy: 80000, costKrw: 730000, isPerPerson: false },
  { id: "rapit", name: "난카이 라피트 왕복 티켓", category: "교통", costJpy: 2900, costKrw: 26500, isPerPerson: true },
  { id: "transit-local", name: "교토/USJ/시내 교통비", category: "교통", costJpy: 3500, costKrw: 32000, isPerPerson: true },
  { id: "usj-pass", name: "USJ 1일 스튜디오 패스", category: "관광", costJpy: 9500, costKrw: 87000, isPerPerson: true },
  { id: "kiyomizu", name: "기요미즈데라 입장료", category: "관광", costJpy: 400, costKrw: 3600, isPerPerson: true },
  { id: "food-d1-dinner", name: "1일차 디너 (마츠자카규 M 와규)", category: "식비", costJpy: 11000, costKrw: 100000, isPerPerson: true },
  { id: "food-d2-lunch", name: "2일차 런치 (키쿠카와 장어덮밥)", category: "식비", costJpy: 5500, costKrw: 50000, isPerPerson: true },
  { id: "food-d2-dinner", name: "2일차 디너 (쿠시카츠 다루마 & 맥주)", category: "식비", costJpy: 3500, costKrw: 32000, isPerPerson: true },
  { id: "food-d3-usj", name: "3일차 USJ 내 점심 & 간식", category: "식비", costJpy: 2500, costKrw: 23000, isPerPerson: true },
  { id: "food-d3-dinner", name: "3일차 디너 (치카라야마 와규 스키야키)", category: "식비", costJpy: 8000, costKrw: 73000, isPerPerson: true },
  { id: "food-d4-lunch", name: "4일차 런치 (구로몬 시장 해산물)", category: "식비", costJpy: 3500, costKrw: 32000, isPerPerson: true },
  { id: "food-d4-dinner", name: "4일차 디너 (고베규 진 테판야키)", category: "식비", costJpy: 16000, costKrw: 146000, isPerPerson: true },
  { id: "food-cafe-snack", name: "카페 디저트 & 편의점 야식", category: "식비", costJpy: 6000, costKrw: 55000, isPerPerson: true },
  { id: "shopping-budget", name: "면세점 & 기념품 쇼핑 예산", category: "쇼핑", costJpy: 20000, costKrw: 183000, isPerPerson: true },
  { id: "esim-insurance", name: "eSIM 데이터 & 여행자보험", category: "기타", costJpy: 2000, costKrw: 18000, isPerPerson: true }
];

export const CHECKLIST_ITEMS = [
  { id: "chk-1", category: "필수 서류", text: "여권 유효기간 확인 (출국일 기준 6개월 이상 권장)", checked: false },
  { id: "chk-2", category: "필수 서류", text: "Visit Japan Web 사전 등록 및 세관/입국 QR 캡처", checked: false },
  { id: "chk-3", category: "필수 서류", text: "항공권 E-티켓 및 호텔 예약 확인서 스마트폰 저장", checked: false },
  { id: "chk-4", category: "금융/환전", text: "해외 결제 카드 준비 (트래블로그, 트래블월렛 등)", checked: false },
  { id: "chk-5", category: "금융/환전", text: "엔화 현금 환전 (시장 및 소규모 점포용 1~2만엔)", checked: false },
  { id: "chk-6", category: "전자기기", text: "일본 110V 11자 돼지코 어댑터 & 고속 보조배터리", checked: false },
  { id: "chk-7", category: "전자기기", text: "일본 여행용 eSIM/유심 설치 및 개통 확인", checked: false },
  { id: "chk-8", category: "사전 예약", text: "USJ 1일 입장권 구매 및 USJ 공식 앱 다운로드", checked: false },
  { id: "chk-9", category: "사전 예약", text: "난카이 라피트 왕복 티켓 모바일 사전 예매", checked: false },
  { id: "chk-10", category: "사전 예약", text: "1일차 와규(마츠자카규 M) / 4일차 테판야키(고베규 진) 식당 예약", checked: false },
  { id: "chk-11", category: "의류/용품", text: "편안한 쿠션 운동화 (USJ 및 교토 2만 보 대비)", checked: false },
  { id: "chk-12", category: "의류/용품", text: "가벼운 외투 및 겉옷 (10월 말~11월 초 일교차 대비)", checked: false },
  { id: "chk-13", category: "안전/비상", text: "해외 여행자 보험 가입", checked: false },
  { id: "chk-14", category: "안전/비상", text: "비상 상비약 (소화제, 진통제, 밴드, 휴족시간 등)", checked: false }
];
