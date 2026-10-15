# 2026-10-15: GOURMET_RESTAURANTS googleMapUrl 누락 수정

## 문제
selection 페이지에서 14개 식당이 지도 링크 누락으로 렌더링되지 않음

## 원인
GOURMET_RESTAURANTS 배열 내 14개 항목에 googleMapUrl 필드 누락

## 해결
- 파일: `js/data.js` (Lines 575~836)
- 14개 항목에 valid googleMapUrl 추가:
  - hirota, takoyaki-15, urannamba, sushidan
  - matcha-gion, shojin-fushiminariai, inari-perfect, kaiseki-ninenjo
  - okonomiyaki-namba2, sashi-dotonbori, yakiniku-farewell
  - okonomiyaki-ajinoya, takoyaki-ootako, okonomiyaki-dohtonbori
- 전체 46개 식당 googleMapUrl 보유 확인 (node 검증 스크립트)

## 교훈
- data.js 수정 시 `grep -n 'googleMapUrl.*""' js/data.js`로 누락 확인
- GOURMET_RESTAURANTS, _EXTRA, _BONUS, _FINAL 모두 체크
- selection.js는 googleMapUrl이 없어도 카드 렌더링 가능 (UI 숨김 아님)

## 관련 파일
- `js/data.js` (수정)
- `js/selection.js` (렌더링 로직)
- `selection.html` (UI)
