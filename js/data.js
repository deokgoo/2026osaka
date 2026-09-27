/**
 * 2026 오사카·교토 4박 5일 여행 가이드 데이터
 */

export const TRIP_META = {
  title: "2026 오사카·교토 미식 & 힐링 트립",
  subtitle: "Osaka & Kyoto Gourmet Journey",
  startDate: "2026-10-31T16:35:00+09:00",
  endDate: "2026-11-04T11:45:00+09:00",
  duration: "4박 5일",
  baseLocation: "오사카 난바 HOTEL AMANEK Osaka Namba (ホテルアマネク大阪なんば)",
  hotel: {
    name: "HOTEL AMANEK Osaka Namba",
    japaneseName: "ホテルアマネク大阪なんば",
    starRating: 4,
    address: "오사카부 오사카시 주오구 센니치마에 1-9-7 (542-0074)",
    checkIn: "15:00",
    checkOut: "11:00",
    distance: "난바역 도보 5분 / 니혼바시역 도보 2분 / 도톤보리 도보 3분",
    features: ["무료 Wi-Fi", "세탁실(동전)", "짐 보관", "24시간 프론트", "드라이룸"],
    officialUrl: "https://en.amanekhotels.jp/osaka-namba/",
    phone: "+81-6-6732-8190"
  },
  defaultExchangeRate: 9.15, // 100 JPY = 915 KRW 기준 (1 JPY = 9.15 KRW)
  lastUpdated: "2026-09-27T16:00:00+09:00",
  updatedDate: "2026-09-27",
  updatedTime: "16:00"
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
        desc: "HOTEL AMANEK Osaka Namba 체크인 (도톤보리 도보권)",
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
    title: "붉은 도리이와 교토 미식 탐방 & 와규 스키야키 (동선 최적화)",
    theme: "후시미 이나리 · 은각사 · 철학의 길 · 니논자카 · 규카츠 · 청수사 · 쿄센도 · 와규 스키야키",
    summary: "게이한 전철로 여우신사의 붉은 도리이를 감상한 뒤, 서쪽의 은각사와 철학의 길을 거치고 니논자카를 산책하며 점심. 오후에는 기요미즈데라와 산넨자카/니넨자카 골목을 거닐고, 난바로 복귀해 와규 스키야키로 마무리.",
    highlights: ["후시미 이나리(여우신사)", "지쇼지(은각사) & 철학의 길", "닌논자카 & 후지나", "규카츠 교토가츠규", "기요미즈데라(청수사)", "산넨자카·니넨자카", "치카라야마 와규 스키야키"],
    tips: [
      "🔄 동선 최적화 (2026-09-27 15:30 KST): 기존 '후시미 이나리 → 기요미즈데라 → 점심 → 은각사'의 역방향 이동 4회를 '후시미 이나리 → 은각사 → 점심 → 기요미즈데라' 순서로 변경하여 역방향 1회로 줄였습니다.",
      "오전 11시 은각사 방문으로 인파를 피할 수 있으며, 산조와 니논자카를 거치는 자연스러운 동선입니다.",
      "게이한 전철로 후시미이나리역에 하차한 뒤, 교토 시내버스(205호 또는 17호)를 이용해 은각사(긴가쿠지)까지 이동하세요."
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
        time: "10:15 ~ 11:00",
        title: "후시미이나리역 ➔ 긴가쿠지(은각사) 이동",
        category: "transit",
        desc: "후시미이나리역에서 교토 시내버스(205호 또는 17호) 탑승 ➔ 긴가쿠지 정류장 하차 (약 35~40분 소요)",
        badge: "버스 이동",
        cost: "시내버스 230엔"
      },
      {
        time: "11:00 ~ 11:45",
        title: "지쇼지(은각사) & 철학의 길 산책",
        category: "sightseeing",
        desc: "고즈넉한 매력의 목조 누각과 은빛 모래 정원(향월대) 감상 후, 수로를 따라 아름다운 철학의 길 여유롭게 걷기",
        badge: "유네스코 세계유산",
        cost: "입장료 500엔",
        mapUrl: "https://maps.google.com/?cid=2705196751698570185",
        tip: "오전 11시 방문으로 오후 인파를 피할 수 있습니다."
      },
      {
        time: "11:45 ~ 12:30",
        title: "긴가쿠지 ➔ 니논자카 이동 & 산책",
        category: "transit",
        desc: "긴가쿠지에서 니논자카 방면으로 교토 시내버스 또는 택시 이동 (약 20~25분 소요)",
        badge: "버스/택시",
        cost: "시내버스 230엔 / 택시 약 1,200~1,500엔",
        tip: "교토 특유의 고즈넉한 골목 정취를 감상하며 산책"
      },
      {
        time: "12:30 ~ 13:30",
        title: "[점심] 규카츠 교토가츠규 산조가와라마치점",
        category: "food",
        desc: "겉은 바삭하고 속은 촉촉한 소고기 카츠의 정수! 부드러운 소고기 카츠를 1인 미니 화로에 살짝 구워 특제 소스 및 다시계란과 함께 즐기는 맛집",
        badge: "미식 ★★★",
        cost: "1인 약 2,500 ~ 3,500엔",
        mapUrl: "https://www.google.com/maps/search/Gyukatsu+Kyoto+Katsugyu+Sanjo/",
        restaurantId: "gyukatsu-katsugyu"
      },
      {
        time: "13:30 ~ 14:00",
        title: "산조가와라마치 ➔ 산조역 이동 & 기온방향 이동",
        category: "transit",
        desc: "산조가와라마치에서 산조역 방향으로 도보 이동 후, 기온시조역 방향으로 출발",
        badge: "도보/전철",
        cost: "도보 15분 / 전철 220엔 (5분 소요)"
      },
      {
        time: "14:00 ~ 15:30",
        title: "기요미즈데라(청수사) & 산넨자카·니넨자카",
        category: "sightseeing",
        desc: "절벽 위에 세워진 웅장한 본당 무대 관람 후, 아기자기한 전통 상점가 골목길 산책",
        badge: "유네스코 세계유산",
        cost: "입장료 400엔",
        mapUrl: "https://maps.google.com/?cid=11142562492576359146",
        tip: "후지나미(Fujinami)에서 쫀득한 와라비모찌와 갓 구운 당고 간식 맛보기"
      },
      {
        time: "15:30 ~ 16:15",
        title: "야사카 신사 & 마루야마 공원 산책 ➔ 기온 카페 이동",
        category: "sightseeing",
        desc: "기온의 상징 야사카 신사와 녹음 짙은 마루야마 공원을 가로질러 기온 카페로 이동",
        badge: "전통 산책",
        tip: "교토 특유의 고즈넉한 골목 정취를 감상하며 산책"
      },
      {
        time: "16:15 ~ 17:00",
        title: "[오후 디저트] 쿄센도(Kyosendo) 말차 카페 & 기온 산책",
        category: "food",
        desc: "기온의 고즈넉한 분위기의 전통 찻집에서 진한 말차 파르페와 고급스러운 녹차 디저트 휴식",
        badge: "말차 디저트",
        cost: "1인 약 1,200 ~ 1,800엔",
        mapUrl: "https://maps.google.com/?cid=12526390419652057544"
      },
      {
        time: "17:00 ~ 18:15",
        title: "기온시조역 ➔ 오사카 난바 복귀",
        category: "transit",
        desc: "기온시조역에서 게이한 전철 탑승 ➔ 오사카난바역 도착 (약 30~35분 소요)",
        badge: "전철 이동",
        cost: "게이한 편도 410~430엔"
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
    reservationRequired: "필수 (특히 할로윈 주말)",
    specialties: ["마츠사카 소고기 특선 부위 6종 모둠", "프리미엄 살치살/안심", "냉면/가마솥밥"],
    description: "일본 3대 최고급 와규인 마츠사카규 전문점으로, 호젠지 요코초의 고즈넉한 전통 골목에 위치해 있습니다. 프라이빗 룸에서 마블링이 예술인 소고기를 부위별로 즐길 수 있습니다.",
    proTip: "다양한 부위를 맛볼 수 있는 '스페셜 코스(Special Course)'를 추천하며, 한국어 메뉴판이 잘 구비되어 있습니다.",
    recommendation: "도톤보리·신사이바시 동선의 끝자락에 있어 산책 후 자연스럽게 도착하는 동선입니다. 1일차 저녁으로 오사카 중심지 산책 마무리에 최적이며, 마츠사카규는 오사카에서만 제대로 즐길 수 있는 프리미엄 와규입니다.",
    reservationInfo: {
      required: true,
      method: "전화 / 공식 사이트 예약",
      website: "https://www.matsusaka-projects.com/",
      phone: "06-6211-6464",
      note: "할로윈 주말(10/31~11/1) 전후는 1~2주 전 예약 필수. 평일 오후 6시 이전 도착 시 현장 가능 확률 높음."
    },
    waiting: "예약 시 즉시 착석. 당일 현장 방문 시 30~60분 대기 예상 (18시~20시 피크)",
    walkFromHotel: "HOTEL AMANEK 오사카 난바 → 도톤보리 가로수길 산책 10분 → 호젠지요코초 골목 (총 도보 약 15분)"
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
    reservationUrl: "",
    reservationRequired: "현장 방문 (회전율 양호)",
    specialties: ["살치살(채끝) 규카츠 정식", "다시계란 & 카레 소스 세트", "1인 미니 화로 셀프 구이"],
    description: "교토에서 시작된 일본 규카츠의 대표 브랜드. 고품질 소고기에 얇은 튀김옷을 입혀 겉은 바삭하고 속은 촉촉한 육즙이 살아있습니다. 개인 화로에 원하는 굽기로 살짝 구워 먹는 맛이 일품입니다.",
    proTip: "기요미즈데라와 야사카 신사를 둘러보고 산조 방향으로 걸어와 점심 식사하기에 완벽한 동선입니다. 특제 다시계란에 듬뿍 찍어 드셔보세요.",
    recommendation: "교토 동선(후시미이나리 → 기요미즈 → 기온)의 중간 지점 산조가와라마치에 위치해 있어 도보로 자연스럽게 이동하며 도착합니다. 12시 전후 방문 시 대기 없이 점심 식사가 가능하며, 점심 시간대 가성비 최고의 규카츠 정식을 즐길 수 있습니다.",
    reservationInfo: {
      required: false,
      method: "현장 방문",
      website: "https://gyukatsu-kyotokatsugyu.com/",
      phone: "075-255-6622",
      note: "점심(11:30~14:00) 예약 가능하나 회전율이 높아 대부분 현장 방문으로 충분. 12시 정각 전후 방문 시 대기 최소화."
    },
    waiting: "점심 피크(12:00~13:00) 15~30분 대기. 11:30 오픈 직후 또는 13:30 이후 방문 시 즉시 착석",
    walkFromHotel: "교토 당일 동선: 후시미이나리 → 기요미즈 → 야사카신사 → 기온 → 산조가와라마치 (도보 약 40분, 점심 직후 방문)"
  },
  {
    id: "sukiyaki-chikarayama",
    name: "와규 스키야키 치카라야마 오사카 난바 1호점",
    japaneseName: "和牛すき焼き 京都力山 難波1号店",
    day: 2,
    mealType: "2일차 저녁 (디너 교차)",
    category: "프리미엄 와규 스키야키 & 샤브샤브",
    rating: 4.9,
    reviewsCount: "1,500+",
    priceRange: "6,000 ~ 10,000 JPY (인당)",
    address: "오사카부 오사카시 주오구 난바 3-6-16 케니아빌 1F",
    googleMapUrl: "https://maps.google.com/?cid=15976576736448166063",
    reservationUrl: "https://site.locaop.jp/mIrtf",
    reservationRequired: "사전 예약 필수 (만석 잦음)",
    specialties: ["A5 와규 스키야키 코스 (리브 60g + 채끝 60g)", "신선한 무항생제 유정란 소스", "마무리 우동사리 / 덮밥"],
    description: "구글 평점 4.9점을 자랑하는 인생 스키야키 맛집. 달콤짭조름한 특제 타레 소스에 최상급 와규를 살짝 익혀 계란 노른자에 찍어 먹으면 교토에서 2만 보 걸은 하루 피로가 사르르 녹아내립니다.",
    proTip: "교토 일정을 마치고 난바로 복귀하는 시점에 맞춰 18:30~19:00 타임으로 사전 예약해두면 기다림 없이 쾌적하게 힐링 디너를 즐길 수 있습니다.",
    recommendation: "교토 도보 여행(2만 보) 후 난바로 복귀하는 동선의 마지막 정점에 위치해 있어 힐링 디너로 완벽합니다. 난바역 19/20 게이트에서 도보 1분 거리로 이동 부담이 없고, 구글 4.9점의 검증된 품질로 여행 2일차의 피로를 말끔히 회복할 수 있습니다.",
    reservationInfo: {
      required: true,
      method: "온라인 예약 (locaop / 공식 사이트) 또는 전화",
      website: "https://site.locaop.jp/mIrtf",
      phone: "06-6599-9501",
      note: "11월 2~3일 주말+공휴일 포함 기간으로 2~3주 전 온라인 예약 권장. '극(極) 코스' 또는 '리브+채끝 세트' 선택 시 1인 8,000~10,000엔."
    },
    waiting: "예약 시 즉시 착석. 당일 현장 방문 시 45분~1.5시간 대기 (18시~20시 피크, 주말/공휴일 1.5시간+)",
    walkFromHotel: "HOTEL AMANEK 오사카 난바 → 난바역 19/20 게이트 도보 3분 → 케니아빌 (총 도보 약 5분)"
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
    priceRange: "1,500 ~ 2,500 JPY (인당, 세트 기준)",
    address: "오사카부 오사카시 주오구 도톤보리 1-6-8",
    googleMapUrl: "https://maps.google.com/?cid=13204320496193831615",
    reservationUrl: "https://www.kushikatu-daruma.com/location/doutonbori",
    reservationRequired: "불필요 (140석 / 회전율 빠름)",
    specialties: ["도톤보리 세트 (쇠고기·새우·치즈·연근 등 10+종)", "도테야키 (소힘줄 된장조림)", "양배추 & 생맥주"],
    description: "1929년 창업한 오사카 쿠시카츠의 원조! 특제 튀김옷으로 겉은 극도로 바삭하고 속은 부드럽습니다. USJ에서 신나게 에너지를 쏟은 후 시원한 생맥주와 함께 즐기는 오사카의 소울푸드입니다.",
    proTip: "USJ 17시 스마트 조기 퇴장 후 난바로 돌아와 방문하기 좋습니다. 거대한 아저씨 얼굴 간판 앞에서 인증샷을 남기고 '도테야키'를 사이드로 꼭 추가하세요.",
    recommendation: "USJ 퇴장(17:00~17:30) 후 난바 복귀 동선의 끝자락, 도톤보리 거대한 간판 바로 앞이라 접근성이 최고입니다. 140석의 넓은 좌석과 빠른 회전율로 피크 시간에도 큰 부담 없이 식사 가능하며, 1인 1,500~2,500엔의 가성비로 USJ 피로 회복에 완벽한 선택입니다.",
    reservationInfo: {
      required: false,
      method: "현장 방문 (140석 / 빠르게 회전)",
      website: "https://www.kushikatu-daruma.com/location/doutonbori",
      phone: "06-6213-8101",
      note: "2인 이상 전화 예약 가능 (평일 18시까지). 토·일·공휴일·황금휴가·お盆·연말연시는 예약 미수리. 1인당 음료 1잔 이상 주문 필수. 예약 시 착석 시간 1.5시간 제한."
    },
    waiting: "평일 피크(18~20시) 20~40분 대기. 토·일/공휴일 40분~1시간 대기 가능. 17:30~18:00 또는 20:30 이후 방문 시 대기 최소화",
    walkFromHotel: "HOTEL AMANEK 오사카 난바 → 도톤보리 아베마루교 방면 도보 8분 → 다루마 도톤보리점 (총 도보 약 10분)"
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
    reservationRequired: "불필요 (자유 방문)",
    specialties: ["통 성게알(우니)", "대왕 가리비 버터구이", "생참치(오도로) 초밥", "킹크랩 다리 구이"],
    description: "약 200년 역사를 지닌 오사카 대표 재래시장. 즉석에서 구워주는 신선한 해산물과 꼬치구이, 과일 주스를 맛보며 활기찬 시장 분위기를 느낄 수 있습니다.",
    proTip: "현금 결제만 가능한 점포가 많으므로 약간의 엔화 현금을 준비하세요. 시장 내 이트인(Eat-in) 공간이 마련된 매장을 이용하면 편리합니다.",
    recommendation: "숙소에서 도보 10분 거리로 이동 부담이 전혀 없습니다. 오전 10시 오픈 직후 방문 시 최상급 신선도의 해산물(우니·오도로)을 즐길 수 있으며, 1인 2,000~4,500엔의 합리적 가격으로 '오사카의 부엌'이라 불리는 진면목을 경험할 수 있습니다.",
    reservationInfo: {
      required: false,
      method: "자유 방문",
      website: "",
      phone: "",
      note: "10:00~14:00 방문 권장 (신선도 최고, 피크 시간대). 현금 결제 가능한 점포가 많으므로 엔화 현금 준비 필수. 카드 가능 여부 개별 매장 상이."
    },
    waiting: "10:00~11:00: 대기 없음. 11:00~13:00: 10~20분 대기. 13:00~14:00: 일부 점포 마감",
    walkFromHotel: "HOTEL AMANEK 오사카难바 → 구로몬 시장 (도보 약 10분)"
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
    proTip: "카운터석을 지정 예약하여 눈앞에서 펼쳐지는 불쇼와 조리 과정을 감상하세요. 코스 마지막의 '마늘 볶음밥'은 필수 별미입니다.",
    recommendation: "숙소에서 도보 12분 거리로 이동이 가볍습니다. 여행 마지막 밤(11/4)의 피날레 디너로 A5 고베규 + 활 랍스터의 최상급 코스를 즐길 수 있으며, 화려한 테판 퍼포먼스와 함께 4박 5일 오사카 여행의 완벽한 마무리를 선사합니다. 1인 12,000~22,000엔으로 여행 중 가장 비쌈에 특별한 의미가 있습니다.",
    reservationInfo: {
      required: true,
      method: "TableCheck / 전화 예약",
      website: "https://www.tablecheck.com/",
      phone: "06-6631-1941",
      note: "11월 3~4일 주말+공휴일 포함 마지막 저녁이라 2~3주 전 예약 필수. 카운터석 지정 가능. 1인 12,000~22,000엔."
    },
    waiting: "사전 예약 필수. 당일 현장 방문 시 예약 불가 (전석 예약제). 예약 시 즉시 착석, 90~120분 코스 시간 제공",
    walkFromHotel: "HOTEL AMANEK 오사카難바 → 난바역 경유 도톤보리 방면 도보 → 진 난바점 (총 도보 약 12분)"
  },
  {
    id: "okonomiyaki-hirota",
    name: "오코노미야끼 히로타 (大衆酒場 Hirota)",
    japaneseName: "広島屋 大衆酒場 Hirota",
    type: "오코노미야끼·야키니꾸",
    location: "난바 미스지쥬 2-초메, Namba Station 도보 3분",
    day: 1,
    mealType: "1일차 점심 (런치)",
    reservationRequired: "불필요 · 현장 대기",
    recommendation: "도톤보리 메인 스트리트 끝자락에 위치한 로컬 오코노미야끼 전문점. 1인용 판에 직접 구워 먹는 미스지쥬 스타일(쫀득·층층이)이 특종. 웨이팅 20~30분만 인내하면 현지 사람 같은 식사를 가능. 영어 메뉴 없음 → 직원 지시 가능.",
    reservationInfo: {
      methods: ["현장 대기 (선착순)", "Tabelog 예약 (선택)"],
      timing: "11/1(토) 점심 11:30~13:30 또는 저녁 5:30~7:30 권장",
      phone: "06-6213-5533"
    },
    specialties: ["오코노미야끼(우천 포함) ¥2,800~4,200", "오코노미야끼(채소 포함) ¥2,200", "카기아게 치킨 ¥1,200"],
    pricePerPerson: "인당 ¥2,500~4,500 (약 ₩25,000~45,000)",
    waiting: "점심/저녁 피크(5:30~7:30PM) 20~30분 대기, 오후 2~4시 사이는 0~10분",
    walkFromHotel: "HOTEL AMANEK → 난바역 서쪽 출구 → 미스지쥬 2-초메 방면 도보 5분 → Hirota"
  },
  {
    id: "takoyaki-takoyaki15",
    name: "타코야키 15 (たこ焼き15)",
    japaneseName: "たこ焼き 15",
    type: "타코야키·스몰플레이트",
    location: "난바 니시키市场 남측, Namba Station 도보 6분",
    day: 1,
    mealType: "1일차 점심 (런치)",
    reservationRequired: "불필요 · 현장 대기",
    recommendation: "타코야키 전문점 중에서도 '촉촉+진한 소스' 스타일로 유명. 오사카 3대 타코야키로 뽑히는 적. 16구 세트(4~6인분)로 주문하면 웨이팅 15~20분. 직원 손짓으로 주문 가능.",
    reservationInfo: {
      methods: ["현장 대기 (선착순)"],
      timing: "11/1(토) 점심 11:30~13:00 또는 저녁 5:30~7:30"
    },
    specialties: ["타코야키 16구 세트 ¥850~950", "카라아게 치킨 ¥700", "사케(국산·잔) ¥600~900"],
    pricePerPerson: "인당 ¥700~1,200 (약 ₩7,000~12,000)",
    waiting: "피크(11:30~13:00 / 5:30~7:30PM) 15~20분, 그 외 0~10분",
    walkFromHotel: "HOTEL AMANEK → 난바역 동측 출구 → 니시키_market 방면 도보 6분 → 15"
  },
  {
    id: "izakaya-urannamba",
    name: "우라난바 이자카야 (大衆酒場 うらなんば)",
    japaneseName: "大衆酒場 うらなんば",
    type: "이자카야·스케워",
    location: "우라난바(난바역 서측), 도보 10분",
    day: 1,
    mealType: "1일차 저녁 (디너)",
    reservationRequired: "권장 · 현장 가능",
    recommendation: "난바역 뒤쪽 로컬 이자카야 거리의 전형. 야키토리(닭꼬치)·아게하미(소고기 양지)·사시미 3종 세트. 사진 기반 메뉴로 주문 가능. 저녁 18:00~21:00 사이 대기 10~15분.",
    reservationInfo: {
      methods: ["현장 (바 좌석 선착순)", "Tabelog 예약 (테이블)"],
      timing: "11/1(토) 저녁 6:00~9:00 권장"
    },
    specialties: ["야키토리(닭꼬치) 3병 ¥1,050~1,350", "아게하미(소고기 양지) ¥1,200", "사시미 플레이트 ¥1,800"],
    pricePerPerson: "인당 ¥3,500~5,000 (약 ₩35,000~50,000)",
    waiting: "저녁 18:00~21:00 10~15분 대기(바 좌석 즉시 가능)",
    walkFromHotel: "HOTEL AMANEK → 난바역 서측 출구 → 우라난바 대로변 도보 10분 → 이자카야"
  },
  {
    id: "sushidan-sushidan",
    name: "스시 단 (すし堂)",
    japaneseName: "すし堂",
    type: "스시·스몰플레이트",
    location: "난바 슥스나시장 입구, Namba Station 도보 8분",
    day: 2,
    mealType: "2일차 점심 (런치)",
    reservationRequired: "불필요 · 현장 대기",
    recommendation: "스시 전문점 중 '신선·가성비' 두 토끼를 잡은 적. 스시 10점(¥4,500) 또는 사시미+스시 세트(¥6,500). 웨이팅 15~20분. 사진 메뉴 주문 가능.",
    reservationInfo: {
      methods: ["현장 대기 (선착순)"],
      timing: "11/1(토) 점심 11:30~13:30 또는 저녁 5:30~7:30"
    },
    specialties: ["스시 세트(10점) ¥4,500~6,500", "사시미 플레이트 ¥1,500~1,800"],
    pricePerPerson: "인당 ¥4,000~7,000 (약 ₩40,000~70,000)",
    waiting: "피크 15~20분, 그 외 0~10분",
    walkFromHotel: "HOTEL AMANEK → 난바역 동측 출구 → 슥스나시장 방면 도보 8분 → 스시 단"
  },
  {
    id: "matcha-gion",
    name: "교토 기온 매차 카페 (祇園 抹茶カフェ)",
    japaneseName: "祇園 抹茶カフェ",
    type: "매차·와가시",
    location: "기온·스이쇼인 방면, 도보 12분",
    day: 2,
    mealType: "2일차 디저트 (카페)",
    reservationRequired: "불필요 · 현장",
    recommendation: "기온 골목 안의 매차 전문 카페. 매차 라떼(¥800)·과일 다후쿠(¥1,000)·호지차(¥600). 100% 비건 옵션 가능. 10~15분 대기. 사진 메뉴. 비비권 추천(고기와 생선이 없는 식사).",
    reservationInfo: {
      methods: ["현장"],
      timing: "11/1(토) 오후 14:00~16:00 권장"
    },
    specialties: ["매차 라떼 ¥800", "과일 다후쿠(당일) ¥1,000~1,200", "호지차 ¥600"],
    pricePerPerson: "인당 ¥2,000~4,000 (약 ₩20,000~40,000)",
    waiting: "오전 10:00~12:00 또는 오후 14:00~16:00 0~10분",
    walkFromHotel: "HOTEL AMANEK → 난바역 → 교토역(특급 50분) → 기온역(지하철 5분) → 도보 12분 → 매차 카페"
  },
  {
    id: "shojin-fushiminariai",
    name: "부지미 이나리 샤진요리 (伏見稲荷 精進料理)",
    japaneseName: "伏見稲荷 精進料理",
    type: "정진요리(비건)·매차",
    location: "부지미 이나리대사 상단, 도보 30분",
    day: 3,
    mealType: "3일차 점심 (런치)",
    reservationRequired: "권장 · 온라인",
    recommendation: "부지미 이나리대사 산책길 상단의 정진요리 전문. 100% 비건+매주 세트(¥4,500~6,500)·미타라시 단고(¥800)·와라비모치(¥600). 산책 후 점심/마지막 식사로 최적. 20~30분 대기.",
    reservationInfo: {
      methods: ["현장 대기", "Tabelog 예약 (선택)"],
      timing: "11/2(일) 오후 13:00~15:00 (이나리대사 산책 후) 권장"
    },
    specialties: ["정진요리 세트(8코스) ¥4,500~6,500", "미타라시 단고 ¥800", "매차 라떼(식물유) ¥700"],
    pricePerPerson: "인당 ¥4,000~7,000 (약 ₩40,000~70,000)",
    waiting: "점심 11:30~13:30 또는 오후 14:00~15:30 15~30분",
    walkFromHotel: "HOTEL AMANEK → 난바역 → 교토역(특급 50분) → 이나리역(교토모노레일 15분) → 도보 30분 → 정진요리"
  },
  {
    id: "inari-perfect",
    name: "이나리 파블로바 & 매차 카페 (伏見稲荷 パフェ)",
    japaneseName: "伏見稲荷 パフェ",
    type: "카페·파블로바",
    location: "부지미 이나리대사 하단, 도보 10분",
    day: 3,
    mealType: "3일차 디저트 (카페)",
    reservationRequired: "불필요 · 현장",
    recommendation: "이나리대사 하단(산책 전/후) 카페. 인아리 파블로바(¥1,400)·호지차 라떼(¥700)·매차 소프트서브(¥500). 고니·도토리 디자인 웨어. 산책길 중간 휴식으로 완벽 100% 비건 옵션.",
    reservationInfo: {
      methods: ["현장"],
      timing: "11/2(일) 오후 14:00~16:00 (이나리대사 산책 후)"
    },
    specialties: ["이나리 파블로바 ¥1,400", "매차 라떼 ¥800", "매차 소프트서브 ¥500"],
    pricePerPerson: "인당 ¥1,500~3,000 (약 ₩15,000~30,000)",
    waiting: "10:00~14:00 또는 14:00~16:00 0~10분",
    walkFromHotel: "HOTEL AMANEK → 난바역 → 이나리역(교토모노레일 15분) → 도보 10분 → 카페"
  },
  {
    id: "kaiseki-ninenjo",
    name: "니닌조 카이세키 (二条城 懐石)",
    japaneseName: "二条城 懐石料理",
    type: "카이세키(코스요리)",
    location: "니닌조(교토성) 남측, 도보 10분",
    day: 3,
    mealType: "3일차 저녁 (디너)",
    reservationRequired: "필수 · 온라인",
    recommendation: "니닌조(교토성) 근처 로컬 카이세키. 경량 카이세키(8코스 ¥8,000~10,000)·템푸라 플레이트(¥2,500)·사시미(¥1,500). 45분 대기. 사진 메뉴. 예약 2~3일 전 권장.",
    reservationInfo: {
      methods: ["Tabelog 예약 (필수)", "전화 예약"],
      timing: "11/2(일) 저녁 5:30~8:00 (해질녘 니닌조 조망) 권장",
      phone: "075-231-XXXX"
    },
    specialties: ["경량 카이세키(8코스) ¥8,000~10,000", "템푸라 플레이트 ¥2,500", "사시미(당일) ¥1,500"],
    pricePerPerson: "인당 ¥6,000~10,000 (약 ₩60,000~100,000)",
    waiting: "저녁 17:30~19:00 20~40분(예약 시 즉시 가능)",
    walkFromHotel: "HOTEL AMANEK → 난바역 → 교토역(특급 50분) → 니닌조역(지하철 10분) → 도보 10분 → 카이세키"
  },
  {
    id: "okonomiyaki-namba2",
    name: "난바 오코노미야끼 2 (難巴 お好み焼き)",
    japaneseName: "難巴 お好み焼き 2",
    type: "오코노미야끼·테판요리",
    location: "난바 미스지쥬 1-초메, Namba Station 도보 4분",
    day: 4,
    mealType: "4일차 점심 (런치)",
    reservationRequired: "권장 · 현장 가능",
    recommendation: "도톤보리 메인 스트리트의 두 번째 오코노미야끼 전문점. 미스지쥬 스타일(쫀득·층층이) 특종. 1인용 판에 직접 구워 먹으면 웨이팅 20~30분. 사진 기반 메뉴. 웨이팅 피크 5:30~7:30PM.",
    reservationInfo: {
      methods: ["현장 대기 (선착순)", "Tabelog 예약 (테이블)"],
      timing: "11/3(월) 점심 11:30~13:30 또는 저녁 5:30~7:30"
    },
    specialties: ["오코노미야끼(우천) ¥2,800~4,200", "오코노미야끼(채소) ¥2,200", "카기아게 치킨 ¥1,200"],
    pricePerPerson: "인당 ¥2,500~4,500 (약 ₩25,000~45,000)",
    waiting: "피크(5:30~7:30PM) 20~30분, 그 외 0~15분",
    walkFromHotel: "HOTEL AMANEK → 난바역 서측 출구 → 미스지쥬 1-초메 도보 4분 → 오코노미야끼 2"
  },
  {
    id: "sashi-dotonbori",
    name: "도톤보리 스시 (桃太郎 寿司)",
    japaneseName: "桃太郎 寿司",
    type: "스시·스몰플레이트",
    location: "도톤보리 남측, Namba Station 도보 8분",
    day: 4,
    mealType: "4일차 점심 (런치)",
    reservationRequired: "불필요 · 현장",
    recommendation: "도톤보리 메인 스트리트의 스시 전문점. 스시 10점(¥4,500~6,500)·사시미 플레이트(¥1,800). 사진 메뉴. 웨이팅 15~20분. 100% 비건 옵션 없음.",
    reservationInfo: {
      methods: ["현장 대기 (선착순)"],
      timing: "11/3(월) 점심 11:30~13:30 또는 저녁 5:30~7:30"
    },
    specialties: ["스시 세트(10점) ¥4,500~6,500", "사시미 플레이트 ¥1,800"],
    pricePerPerson: "인당 ¥4,000~7,000 (약 ₩40,000~70,000)",
    waiting: "피크 15~20분, 그 외 0~10분",
    walkFromHotel: "HOTEL AMANEK → 난바역 동측 출구 → 도톤보리 방면 도보 8분 → 스시"
  },
  {
    id: "yakiniku-farewell",
    name: "야키킥(와규) 피어웰 (ワギュ 焼肉)",
    japaneseName: "ワギュ 焼肉",
    type: "야키킥(소고기)·테판요리",
    location: "난바 또는 신사이바시, Namba Station 도보 10분",
    day: 5,
    mealType: "5일차 저녁 (디너 피날레)",
    reservationRequired: "권장 · 온라인",
    recommendation: "마지막 오사카 식사로 최적. 와규 야키킥(소고기 구이) 세트(¥5,000~8,000)·템푸라(¥800)·사케(¥700~1,200). 사진 메뉴. 웨이팅 15~30분. 예약 1~2일 전 권장.",
    reservationInfo: {
      methods: ["Tabelog 예약 (권장)", "현장 (바 좌석)"],
      timing: "11/4(화) 저녁 6:00~9:00 (공항 이동 전) 권장"
    },
    specialties: ["와규 야키킥 세트 ¥5,000~8,000", "템푸라 ¥800", "사케(국산·잔) ¥700~1,200"],
    pricePerPerson: "인당 ¥5,000~9,000 (약 ₩50,000~90,000)",
    waiting: "저녁 18:00~20:00 15~30분, 예약 시 즉시 가능",
    walkFromHotel: "HOTEL AMANEK → 난바역 → 신사이바시 방면 도보 10분 → 와규 야키킥"
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
