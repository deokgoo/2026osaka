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
    title: "붉은 도리이와 교토 미식 탐방 & 와규 스키야키",
    theme: "후시미 이나리 · 청수사 · 규카츠 가츠규 · 은각사 · 쿄센도 말차 · 와규 스키야키",
    summary: "게이한 전철로 여우신사의 붉은 도리이를 감상하고 청수사와 전통 거리, 규카츠와 은각사를 둘러본 뒤 난바로 돌아와 따뜻한 와규 스키야키로 피로를 풉니다.",
    highlights: ["후시미 이나리(여우신사)", "기요미즈데라(청수사)", "교토가츠규 규카츠", "지쇼지(은각사) & 철학의 길", "쿄센도 말차 파르페", "치카라야마 와규 스키야키"],
    tips: [
      "게이한 전철 이용 시 요도야바시에서 탑승 후 후시미이나리역에 먼저 하차하여 센본도리이 초입을 여유롭게 감상하세요.",
      "교토에서 하루 2만 보 가까이 걸은 후 난바로 돌아와 따뜻한 스키야키를 드시면 피로 해소에 최고입니다. 일요일 저녁이므로 18:30경으로 사전 예약해 두세요."
    ],
    timeline: [
      {
        time: "08:00 ~ 09:15",
        title: "난바 ➔ 요도야바시 ➔ 후시미 이나리역 이동",
        category: "transit",
        desc: "난바역(미도스지선) ➔ 요도야바시역 환승 ➔ 게이한 전철 탑승 ➔ 후시미이나리역 하차",
        badge: "전철 이동",
        cost: "게이한 편도 410엔 + 지하철 190엔"
      },
      {
        time: "09:15 ~ 10:15",
        title: "후시미 이나리 신사 (여우신사) 관람",
        category: "sightseeing",
        desc: "끝없이 이어지는 붉은색 '센본도리이'에서 인생샷 남기기 (등산하지 말고 초입만 둘러보기)",
        badge: "신사/포토존",
        mapUrl: "https://maps.google.com/?cid=8870624639634301673",
        tip: "아침 시간대에 방문해 인파가 덜 붐비는 붉은 도리이 길에서 사진 촬영"
      },
      {
        time: "10:15 ~ 10:30",
        title: "후시미이나리역 ➔ 기온시조역 이동",
        category: "transit",
        desc: "게이한 전철 탑승 후 5정거장 이동하여 기온시조역 도착 (약 10~15분 소요)",
        badge: "전철 이동",
        cost: "게이한 편도 220엔"
      },
      {
        time: "10:30 ~ 12:00",
        title: "기요미즈데라(청수사) & 산넨자카·니넨자카",
        category: "sightseeing",
        desc: "절벽 위에 세워진 웅장한 본당 무대 관람 후, 아기자기한 전통 상점가 골목길 산책",
        badge: "유네스코 세계유산",
        cost: "입장료 400엔",
        mapUrl: "https://maps.google.com/?cid=11142562492576359146",
        tip: "후지나미(Fujinami)에서 쫀득한 와라비모찌와 갓 구운 당고 간식 맛보기"
      },
      {
        time: "12:00 ~ 12:45",
        title: "야사카 신사 & 마루야마 공원 산책 ➔ 산조 이동",
        category: "sightseeing",
        desc: "기온의 상징 야사카 신사와 녹음 짙은 마루야마 공원을 가로질러 점심 식당인 산조가와라마치 방면으로 도보 이동",
        badge: "전통 산책",
        tip: "교토 특유의 고즈넉한 골목 정취를 감상하며 산책"
      },
      {
        time: "12:45 ~ 14:00",
        title: "[점심] 규카츠 교토가츠규 산조가와라마치점",
        category: "food",
        desc: "겉은 바삭하고 속은 촉촉한 소고기 카츠의 정수! 부드러운 소고기 카츠를 1인 미니 화로에 살짝 구워 특제 소스 및 다시계란과 함께 즐기는 맛집",
        badge: "미식 ★★★",
        cost: "1인 약 2,500 ~ 3,500엔",
        mapUrl: "https://www.google.com/maps/search/Gyukatsu+Kyoto+Katsugyu+Sanjo/",
        restaurantId: "gyukatsu-katsugyu"
      },
      {
        time: "14:00 ~ 14:30",
        title: "산조 ➔ 지쇼지(은각사) 이동",
        category: "transit",
        desc: "산조가와라마치 정류장에서 시내버스(5번, 17번 등) 탑승 또는 택시로 은각사 이동",
        badge: "버스/택시",
        cost: "시내버스 230엔 / 택시 약 1,500엔"
      },
      {
        time: "14:30 ~ 16:00",
        title: "지쇼지(은각사) 및 철학의 길 산책",
        category: "sightseeing",
        desc: "고즈넉한 매력의 목조 누각과 은빛 모래 정원(향월대) 감상 후, 수로를 따라 아름다운 철학의 길 여유롭게 걷기",
        badge: "명소/정원",
        cost: "입장료 500엔",
        mapUrl: "https://maps.google.com/?cid=2705196751698570185"
      },
      {
        time: "16:00 ~ 17:00",
        title: "[오후 디저트] 쿄센도(Kyosendo) 말차 카페",
        category: "food",
        desc: "교토역 방면으로 이동하며 고즈넉한 분위기의 전통 찻집에서 진한 말차 파르페와 고급스러운 녹차 디저트 휴식",
        badge: "말차 디저트",
        cost: "1인 약 1,200 ~ 1,800엔",
        mapUrl: "https://maps.google.com/?cid=12526390419652057544"
      },
      {
        time: "17:00 ~ 18:15",
        title: "교토역 주변 ➔ 오사카 난바 복귀",
        category: "transit",
        desc: "JR 교토역 또는 게이한/지하철을 이용하여 난바로 쾌속 복귀",
        badge: "전철 이동",
        cost: "편도 약 600~800엔"
      },
      {
        time: "18:30 ~ 20:30",
        title: "[저녁] 와규 스키야키 치카라야마 오사카 난바 1호점",
        category: "food",
        desc: "교토 도보 여행의 피로를 사르르 녹여주는 최고의 힐링 디너! 구글 평점 4.9점의 인생 스키야키에서 특제 타레 소스에 자작하게 익힌 최상급 와규를 신선한 계란에 찍어 즐깁니다.",
        badge: "미식 ★★★",
        cost: "1인 약 6,000 ~ 10,000엔",
        mapUrl: "https://maps.google.com/?cid=15976576736448166063",
        restaurantId: "sukiyaki-chikarayama"
      }
    ]
  },
  {
    day: 3,
    date: "11월 02일 (월)",
    title: "유니버셜 스튜디오 재팬 (USJ) 초특급 오픈런 & 쿠시카츠",
    theme: "06:15 출발 · 06:50 게이트 대기 · 07:15 조기개장 입장 · 닌텐도 월드 싱글라이더 · 생일 스티커 · 루이즈 피자 · 17시 퇴장 · 쿠시카츠",
    summary: "11/3 일본 문화의 날 샌드위치 연휴 초극성수기 대응! 06:15 난바를 출발하여 07:15 조기 개장 게이트를 뚫고 닌텐도 월드 무확약권 직행, 싱글라이더와 생일 스티커로 하루를 완벽하게 공략합니다.",
    highlights: [
      "06:15 난바 출발 & 06:50 게이트 대기",
      "07:15 조기 개장 즉시 입장",
      "닌텐도 월드 무확약권 & 싱글라이더",
      "생일 스티커 수령 & 크루 환호",
      "11:00 루이즈 피자 조기 점심",
      "17:00 호러나이트 전 스마트 퇴장",
      "쿠시카츠 다루마 & 생맥주"
    ],
    tips: [
      "11/2(월)은 다음 날 공휴일(문화의 날)로 인한 초극성수기입니다. USJ는 공식 오픈(08:30)보다 1시간~1시간 30분 빠른 07:15~07:30경 문을 열므로 06:50까지 게이트에 줄을 서야 합니다.",
      "생일 패스(버스데이 1데이 패스)는 반드시 공홈에서 '다이렉트 인'으로 구매하고, 전날까지 USJ 공식 앱에 동행인 QR까지 사전 등록해 두세요.",
      "마리오 카트는 '싱글 라이더'로 탑승 시 대기 시간을 1/3로 단축할 수 있습니다. 탑승 후 크루에게 생일 스티커를 받아 가슴에 부착하세요!"
    ],
    timeline: [
      {
        time: "06:15 ~ 06:45",
        title: "난바역 ➔ USJ 이동 (초특급 오픈런 출발)",
        category: "transit",
        desc: "난바(한신난바선) ➔ 니시쿠조 환승 ➔ JR 유메사키선 ➔ 유니버설시티역 도착 (약 25~30분 소요)",
        badge: "초특급 이동",
        cost: "교통비 약 370엔"
      },
      {
        time: "06:50 ~ 07:15",
        title: "USJ 정문 게이트 앞 최전방 줄서기",
        category: "theme-park",
        desc: "06:50경 게이트 앞 도착하여 최전방 그룹에 합류. 짐 검사 가방 지퍼를 미리 열어두어 통과 시간 대폭 단축",
        badge: "게이트 대기",
        tip: "가방 지퍼 미리 열어두기 & 스마트폰 QR 화면 준비"
      },
      {
        time: "07:15 ~ 07:30",
        title: "[실제 조기 개장] QR 입장 ➔ 닌텐도 월드 경보 직행",
        category: "theme-park",
        desc: "공식 오픈(08:30)보다 1시간 빠른 실제 개장! QR 찍고 통과하자마자 가장 안쪽 '슈퍼 닌텐도 월드'로 빠른 걸음 직행 (초반 30~45분 무확약권 프리패스)",
        badge: "조기 개장",
        tip: "초반 30~45분 동안 확약권 없이 자유 입장 가능"
      },
      {
        time: "07:45 ~ 10:30",
        title: "[닌텐도 월드 집중 공략] 마리오 카트 & 생일 스티커",
        category: "theme-park",
        desc: "마리오 카트 쿠파의 도전장 직행 (싱글 라이더로 대기 1/3 단축!). 탑승 후 닌텐도 월드 내 크루에게 '생일 스티커(バースデーシール)' 받아 옷에 부착. USJ 앱으로 오후 3~4시 e정리권 추가 발권",
        badge: "닌텐도 월드",
        cost: "버스데이 1데이 패스 (약 9,000엔)",
        mapUrl: "https://maps.google.com/?cid=13926527581177696425"
      },
      {
        time: "11:00 ~ 12:00",
        title: "[이른 점심] 루이즈 N.Y. 피자 팔러",
        category: "food",
        desc: "뉴욕 에어리어 위치. 11시 30분부터 시작되는 파크 내 식당 대기 대란(1시간 이상)을 피하기 위해 11시 정각에 여유롭게 피자 식사",
        badge: "테마파크 미식",
        cost: "1인 약 1,500 ~ 2,500엔",
        tip: "11시 정각 직행으로 대기 없이 식사"
      },
      {
        time: "12:00 ~ 17:00",
        title: "[오후 탐방] 해리포터 & 하이라이트 어트랙션",
        category: "theme-park",
        desc: "위저딩 월드 오브 해리포터(포비든 저니, 버터 맥주), 죠스, 쥬라기 공원 등 하이라이트 관람. 가슴에 붙인 생일 스티커로 이동 내내 크루들과 캐릭터들에게 특별 축하 환호 받기",
        badge: "어트랙션/퍼레이드"
      },
      {
        time: "17:00 ~ 17:30",
        title: "[스마트 조기 퇴장] 호러나이트 전 시내 복귀",
        category: "transit",
        desc: "저녁 18시부터 시작되는 할로윈 호러 나이트(좀비 출몰 및 극심한 인파 혼잡) 직전 쾌적하게 퇴장하여 난바로 귀환",
        badge: "꿀팁 전략"
      },
      {
        time: "18:30 ~ 20:30",
        title: "[저녁] 쿠시카츠 다루마 도톤보리점",
        category: "food",
        desc: "USJ 종일 탐방 후 바삭한 오사카 명물 꼬치튀김(쿠시카츠)과 시원한 생맥주로 활기차고 유쾌하게 하루 마무리!",
        badge: "미식 ★★",
        cost: "1인 약 2,500 ~ 4,000엔",
        mapUrl: "https://maps.google.com/?cid=13204320496193831615",
        restaurantId: "kushikatsu-daruma"
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
    id: "gyukatsu-katsugyu",
    name: "규카츠 교토가츠규 산조가와라마치점",
    japaneseName: "牛カツ京都勝牛 三条河原町店",
    day: 2,
    mealType: "2일차 점심 (런치)",
    category: "소고기 규카츠 전문점 (겉바속촉 규카츠 정식)",
    rating: 4.6,
    reviewsCount: "2,100+",
    priceRange: "2,500 ~ 3,800 JPY (인당)",
    address: "교토부 교토시 나카교구 산조도리 가와라마치 히가시이루 나카지마초 73-2",
    googleMapUrl: "https://www.google.com/maps/search/Gyukatsu+Kyoto+Katsugyu+Sanjo/",
    reservationUrl: "https://gyukatsu-kyotokatsugyu.com/",
    reservationRequired: "현장 방문 (회전율 양호)",
    specialties: ["살치살(채끝) 규카츠 정식", "다시계란 & 카레 소스 세트", "1인 미니 화로 셀프 구이"],
    description: "교토에서 시작된 일본 규카츠의 대표 브랜드. 고품질 소고기에 얇은 튀김옷을 입혀 겉은 바삭하고 속은 촉촉한 육즙이 살아있습니다. 개인 화로에 원하는 굽기로 살짝 구워 먹는 맛이 일품입니다.",
    proTip: "기요미즈데라와 야사카 신사를 둘러보고 산조 방향으로 걸어와 점심 식사하기에 완벽한 동선입니다. 특제 다시계란에 듬뿍 찍어 드셔보세요."
  },
  {
    id: "sukiyaki-chikarayama",
    name: "와규 스키야키 치카라야마 오사카 난바 1호점",
    japaneseName: "和牛すき焼き 京都ちから山 大阪難波1号店",
    day: 2,
    mealType: "2일차 저녁 (디너 교차)",
    category: "프리미엄 와규 스키야키 & 샤브샤브",
    rating: 4.9,
    reviewsCount: "1,500+",
    priceRange: "6,000 ~ 10,000 JPY (인당)",
    address: "오사카부 오사카시 주오구 난바 3-7-19",
    googleMapUrl: "https://maps.google.com/?cid=15976576736448166063",
    reservationUrl: "https://www.hotpepper.jp/",
    reservationRequired: "사전 예약 필수 (만석 잦음)",
    specialties: ["A5 흑우 와규 스키야키 코스", "신선한 무항생제 유정란 소스", "마무리 우동사리 / 덮밥"],
    description: "구글 평점 4.9점을 자랑하는 인생 스키야키 맛집. 달콤짭조름한 특제 타레 소스에 최상급 와규를 살짝 익혀 계란 노른자에 찍어 먹으면 교토에서 2만 보 걸은 하루 피로가 사르르 녹아내립니다.",
    proTip: "교토 일정을 마치고 난바로 복귀하는 시점에 맞춰 18:30~19:00 타임으로 사전 예약해두면 기다림 없이 쾌적하게 힐링 디너를 즐길 수 있습니다."
  },
  {
    id: "kushikatsu-daruma",
    name: "쿠시카츠 다루마 도톤보리점",
    japaneseName: "串かつだるま 道頓堀店",
    day: 3,
    mealType: "3일차 저녁 (디너 교차)",
    category: "오사카 정통 꼬치튀김 (쿠시카츠)",
    rating: 4.4,
    reviewsCount: "4,500+",
    priceRange: "2,500 ~ 4,000 JPY (인당)",
    address: "오사카부 오사카시 주오구 도톤보리 1-6-4",
    googleMapUrl: "https://maps.google.com/?cid=13204320496193831615",
    reservationUrl: "",
    reservationRequired: "현장 대기 (회전율 빠름)",
    specialties: ["도톤보리 세트 (쇠고기, 새우, 치즈, 연근 등)", "도테야키 (소힘줄 된장조림)", "양배추 & 생맥주"],
    description: "1929년 창업한 오사카 쿠시카츠의 원조! 특제 튀김옷으로 겉은 극도로 바삭하고 속은 부드럽습니다. USJ에서 신나게 에너지를 쏟은 후 시원한 생맥주와 함께 즐기는 오사카의 소울푸드입니다.",
    proTip: "USJ 17시 스마트 조기 퇴장 후 난바로 돌아와 방문하기 좋습니다. 거대한 아저씨 얼굴 간판 앞에서 인증샷을 남기고 '도테야키'를 사이드로 꼭 추가하세요."
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
    title: "게이한 본선 (오사카 ↔ 교토 후시미·기온)",
    type: "교토 당일치기",
    icon: "map-pin",
    duration: "약 45~55분",
    price: "편도 410~430엔 (게이한 1일 패스 약 1,100엔)",
    route: "난바(미도스지선 190엔) ➔ 요도야바시역 ➔ [게이한 본선] ➔ 후시미이나리역 ➔ 기온시조역",
    tips: [
      "요도야바시에서 게이한 급행/준급 또는 단바바시에서 보통 환승으로 후시미이나리역(여우신사)에 먼저 하차하세요.",
      "후시미이나리역에서 기온시조역(청수사 방면)은 게이한 전철로 5정거장(약 10분, 220엔)입니다.",
      "산조에서 은각사 이동 시에는 교토 시내버스(5번, 17번, 203번 등 / 약 20분 소요, 230엔)나 택시(약 1,500엔)를 이용하면 편리합니다."
    ]
  },
  {
    title: "USJ 초특급 오픈런 루트 (난바역 ↔ 유니버설시티역)",
    type: "테마파크 이동",
    icon: "compass",
    duration: "약 25~30분",
    price: "편도 약 370엔 (한신 220엔 + JR 190엔)",
    route: "오사카난바역 (06:15 출발 / 한신난바선 쾌속급행) ➔ 니시쿠조역 환승 ➔ JR 유메사키선 ➔ 유니버설시티역 (06:45 도착)",
    tips: [
      "06:15 난바역 출발편을 타면 06:45경 도착하여 06:50 정문 게이트 최전방 줄서기가 가능합니다.",
      "니시쿠조역 환승은 계단 하나만 건너는 초간단 평면 환승입니다.",
      "이코카(ICOCA) 또는 애플월렛 스이카/파스모를 태그하면 매표기 대기 없이 1초 만에 개찰구를 통과합니다."
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
  { id: "transit-local", name: "교토/USJ/시내 교통비", category: "교통", costJpy: 3800, costKrw: 34800, isPerPerson: true },
  { id: "usj-pass", name: "USJ 버스데이 1데이 패스 (공홈 다이렉트 인)", category: "관광", costJpy: 9000, costKrw: 82000, isPerPerson: true },
  { id: "kiyomizu", name: "기요미즈데라(청수사) 입장료", category: "관광", costJpy: 400, costKrw: 3600, isPerPerson: true },
  { id: "ginkakuji", name: "지쇼지(은각사) 입장료", category: "관광", costJpy: 500, costKrw: 4600, isPerPerson: true },
  { id: "food-d1-dinner", name: "1일차 디너 (마츠자카규 M 와규)", category: "식비", costJpy: 11000, costKrw: 100000, isPerPerson: true },
  { id: "food-d2-lunch", name: "2일차 런치 (교토가츠규 규카츠)", category: "식비", costJpy: 2800, costKrw: 25600, isPerPerson: true },
  { id: "food-d2-dinner", name: "2일차 디너 (치카라야마 와규 스키야키)", category: "식비", costJpy: 8000, costKrw: 73000, isPerPerson: true },
  { id: "food-d3-usj", name: "3일차 USJ 점심 (루이즈 N.Y. 피자) & 간식", category: "식비", costJpy: 2500, costKrw: 23000, isPerPerson: true },
  { id: "food-d3-dinner", name: "3일차 디너 (쿠시카츠 다루마 & 생맥주)", category: "식비", costJpy: 3500, costKrw: 32000, isPerPerson: true },
  { id: "food-d4-lunch", name: "4일차 런치 (구로몬 시장 해산물)", category: "식비", costJpy: 3500, costKrw: 32000, isPerPerson: true },
  { id: "food-d4-dinner", name: "4일차 디너 (고베규 진 테판야키)", category: "식비", costJpy: 16000, costKrw: 146000, isPerPerson: true },
  { id: "food-cafe-snack", name: "카페 디저트(쿄센도 말차 등) & 야식", category: "식비", costJpy: 6000, costKrw: 55000, isPerPerson: true },
  { id: "shopping-budget", name: "면세점 & 기념품 쇼핑 예산", category: "쇼핑", costJpy: 20000, costKrw: 183000, isPerPerson: true },
  { id: "esim-insurance", name: "eSIM 데이터 & 여행자보험", category: "기타", costJpy: 2000, costKrw: 18000, isPerPerson: true }
];

export const CHECKLIST_ITEMS = [
  { id: "chk-1", category: "필수 서류", text: "여권 유효기간 확인 (출국일 기준 6개월 이상 권장)", checked: false },
  { id: "chk-2", category: "필수 서류", text: "Visit Japan Web 사전 등록 및 세관/입국 QR 캡처", checked: false },
  { id: "chk-3", category: "필수 서류", text: "항공권 E-티켓 및 호텔 예약 확인서 스마트폰 저장", checked: false },
  { id: "chk-4", category: "금융/환전", text: "해외 결제 카드 준비 (트래블로그, 트래블월렛 등)", checked: false },
  { id: "chk-5", category: "금융/환전", text: "엔화 현금 환전 (시장 및 소규모 점포용 1~2만엔)", checked: false },
  { id: "chk-6", category: "전자기기", text: "일본 110V 11자 돼지코 & 10,000mAh 이상 고속 보조배터리 (USJ 앱 대기시간/정리권용)", checked: false },
  { id: "chk-7", category: "전자기기", text: "일본 여행용 eSIM/유심 설치 및 개통 확인", checked: false },
  { id: "chk-8", category: "사전 예약", text: "USJ 버스데이 1데이 패스 공홈 예매 (다이렉트 인 필수 & 공식 앱 QR 사전 등록)", checked: false },
  { id: "chk-9", category: "사전 예약", text: "난카이 라피트 왕복 티켓 모바일 사전 예매", checked: false },
  { id: "chk-10", category: "사전 예약", text: "1일차 와규(마츠자카규 M) / 2일차 스키야키(치카라야마) / 4일차 테판야키(고베규 진) 식당 사전 예약", checked: false },
  { id: "chk-11", category: "의류/용품", text: "편안한 쿠션 운동화 (교토 2만 보 & USJ 06:15 오픈런 대비)", checked: false },
  { id: "chk-12", category: "의류/용품", text: "가벼운 외투 및 겉옷 (10월 말~11월 초 일교차 및 새벽 오픈런 대비)", checked: false },
  { id: "chk-13", category: "안전/비상", text: "해외 여행자 보험 가입", checked: false },
  { id: "chk-14", category: "안전/비상", text: "비상 상비약 (소화제, 진통제, 밴드, 휴족시간 등)", checked: false }
];
