# Sentinel Persona Design Review Personas

기준 빌드
- 브랜치: `codex/dashboard-report-mvp`
- 커밋: `3c45206`
- 작성일: `2026-04-02`
- 대상: 최신 로컬/프리뷰 빌드 기준 Sentinel 공개 사이트

## 공통 운영 원칙
- 모든 페르소나는 미학 자체보다 구매 위험, 신뢰 형성, 내부 공유 용이성, CTA 마찰을 우선해서 본다.
- 평가는 `디자인 + 전환` 기준으로 고정한다.
- 점수는 1~5점이며 3점은 “이해는 되지만 확신이 부족한 상태”, 5점은 “바로 내부 공유 가능한 상태”로 본다.
- 페이지 이동은 각 페르소나의 기본 여정을 따른 뒤, 필요 시 `/dashboard`와 `/reports`를 제품 실재감 검증 페이지로 추가 확인한다.

## 1. 경제적 의사결정자
- 역할: 미국 농화학 수입사 GM 또는 사업부 리드
- 배경: 직접 화면을 오래 보지 않지만 짧은 시간 안에 서비스 수준과 팀 신뢰도를 판단해야 한다.
- 목표: “이 팀이 우리 의사결정에 실제로 도움이 되는가”를 빠르게 가늠한다.
- 구매 리스크: 고급스럽지 않거나 범용 SaaS처럼 보이면 바로 이탈한다. 가격 구조가 너무 추상적이어도 의사결정이 지연된다.
- 성공 기준:
  - 첫 화면에서 프리미엄 B2B 서비스처럼 보인다.
  - 제품, 서비스 방식, 관여 수준이 짧게 정리된다.
  - 대시보드와 리포트가 “실제로 이미 있는 산출물”처럼 느껴진다.
- 민감한 디자인 포인트:
  - 헤더와 히어로에서의 신뢰감
  - CTA 문구 일관성
  - 가격/범위 설명의 모호함
  - 문의 페이지의 격식과 안심감
- 기본 여정: `/` -> `/product` -> `/pricing` -> `/reports` -> `/contact`

## 2. 조달 책임자
- 역할: Procurement Director
- 배경: 공급사, 회사 활동, 분자 수준 데이터가 실제 협상과 공급 위험 판단에 도움 되는지를 본다.
- 목표: Sentinel이 협상 전에 어떤 정보를 더 빠르게 주는지 확인한다.
- 구매 리스크: 카피는 그럴듯하지만 실제 supplier/company drill-down이 약해 보이면 검토를 멈춘다.
- 성공 기준:
  - 홈과 제품 페이지에서 company/supplier visibility가 반복적으로 강조된다.
  - 솔루션 페이지가 procurement 관점에서 읽히고 있다.
  - 데모 요청으로 넘어가는 흐름이 자연스럽다.
- 민감한 디자인 포인트:
  - 제품 증거의 구체성
  - supplier/consignee/company 언어의 반복 노출
  - 솔루션 페이지의 역할별 설계
  - 데모 페이지의 유도 방식
- 기본 여정: `/` -> `/product` -> `/solutions` -> `/demo` -> `/contact`

## 3. 시장/전략 분석가
- 역할: Research Lead 또는 Strategy Lead
- 배경: 정보 밀도, 비교 가능성, 스캔 편의성, 대시보드/리포트의 구조를 유심히 본다.
- 목표: 팀이 raw trade movement를 어떻게 decision-ready intelligence로 바꾸는지 확인한다.
- 구매 리스크: 화면이 너무 마케팅 중심이면 “실제 분석 도구가 아니다”라고 판단한다.
- 성공 기준:
  - 방법론, 제품, 대시보드, 리포트의 연결이 자연스럽다.
  - 표, 카드, 차트가 실제 업무 흐름처럼 보인다.
  - 복잡한 내용을 짧게 스캔해도 구조가 잡힌다.
- 민감한 디자인 포인트:
  - 카드 반복이 많은 구간의 스캔 피로
  - 데이터 표현의 구체성
  - 요약과 세부의 균형
  - `/dashboard`와 `/reports`의 실재감
- 기본 여정: `/` -> `/product` -> `/dashboard` -> `/reports` -> `/demo`

## 4. 컴플라이언스/트레이드 옵스
- 역할: Compliance Manager 또는 Trade Operations Lead
- 배경: 과장된 마케팅보다는 출처, 프로세스, 지원 루트, escalation 구조를 본다.
- 목표: Sentinel이 모호한 컨설팅이 아니라 검증 가능한 운영 파트너인지 확인한다.
- 구매 리스크: source, method, support, request routing이 느슨하면 실무 도입을 반대한다.
- 성공 기준:
  - 방법론 페이지가 source-to-output 흐름을 설득력 있게 설명한다.
  - 지원 페이지가 실제 client service desk처럼 보인다.
  - 문의/지원 요청 경로가 분리되어 있고 표현이 정확하다.
- 민감한 디자인 포인트:
  - 데이터 출처 명시
  - AI 메시지의 톤과 위치
  - support escalation 설명
  - trust copy와 form 주변의 안심감
- 기본 여정: `/` -> `/methodology` -> `/product` -> `/support` -> `/support-request`

## 5. 데이터/BI 연계 담당
- 역할: BI Lead 또는 Analytics Manager
- 배경: 데이터를 팀 툴에 붙일 수 있는지, export와 workflow fit이 실제인지 본다.
- 목표: Excel, Tableau, reporting workflow가 진짜 도입 가능한 수준인지 판단한다.
- 구매 리스크: artifact preview와 dashboard/report가 보여주기용 이미지처럼만 보이면 실무 연계 담당이 반대한다.
- 성공 기준:
  - 제품 페이지의 artifact preview가 실제 파일 구조처럼 보인다.
  - `/dashboard`와 `/reports`가 서로 다른 산출물로 구분된다.
  - consultation 흐름이 integration discussion으로 이어질 것처럼 보인다.
- 민감한 디자인 포인트:
  - table, summary, workflow card의 구체성
  - export/delivery 언어의 반복
  - CTA가 기술 상담으로 이어질 여지
  - mobile에서 표 구조가 무너지지 않는지
- 기본 여정: `/` -> `/product` -> `/dashboard` -> `/reports` -> `/consultation`

## 6. 회의적인 확장 구매자
- 역할: pharma 또는 fertilizer 인접 분야의 신규 buyer
- 배경: Sentinel이 agrochemical 중심 브랜드처럼 보이기 때문에 “우리 카테고리도 제대로 다루는가”를 의심한다.
- 목표: 전문성은 유지하면서도 category 확장성이 있는지 확인한다.
- 구매 리스크: agrochemical 색이 너무 강하면 자기 산업용 제품이 아니라고 느낀다.
- 성공 기준:
  - 홈과 제품 페이지에서 pharma/fertilizer가 보조 사례가 아니라 진짜 coverage처럼 보인다.
  - about/solutions/pricing이 범용적인 decision workflow로 읽힌다.
  - contact 페이지에서 산업별 맥락을 설명할 수 있는 여지가 충분하다.
- 민감한 디자인 포인트:
  - category 표현 비중
  - imagery와 카피의 산업 편향
  - vertical integration 설명의 범용성
  - pricing의 서비스 확장 가능성
- 기본 여정: `/` -> `/about` -> `/solutions` -> `/pricing` -> `/contact`
