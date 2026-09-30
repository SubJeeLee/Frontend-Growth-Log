const sourceURL = 'https://app.notion.com/p/3eada4f697828068b8a8f803d065037e';
const imageRoot = 'assets/notion-0930/';
const imageSrc = file => imageRoot + (file.includes('.') && !/^\d{2}\.\d{2}\.\d{2}$/.test(file) ? file : file + '.webp') + '?v=8';
const slides = [
  {
    "file": "cover-hd.png",
    "title": "같은 말에서 같은 방향으로",
    "chapter": "도입",
    "time": "0:00",
    "note": "오늘은 기획과 협업을 이야기합니다. AI를 활용해 구현을 빠르게 시도할 수 있어도 어떤 문제를 풀고 무엇을 확인할지는 팀이 결정해야 합니다. 문제 정의부터 화면과 기능의 기준을 만드는 과정, 그리고 팀이 그 기준을 함께 사용하는 방법을 살펴보겠습니다."
  },
  {
    "file": "results-hd.png",
    "title": "왜 결과가 다를까?",
    "chapter": "문제 정의",
    "time": "1:00",
    "note": "같은 요청을 받은 두 팀이 다른 결과를 만드는 장면입니다. 정의하지 않은 빈칸은 각자의 경험으로 채워집니다. 오늘의 출발점은 더 자세한 기능 목록보다 어떤 문제를 함께 풀고 있는지 합의하는 것입니다. 게임을 진행하지 않고 그림을 비교하며 이야기합니다."
  },
  {
    "file": "problem-hd.png",
    "title": "관찰과 해결책의 차이",
    "chapter": "문제 정의",
    "time": "2:00",
    "note": "상황, 행동, 손실을 관찰하고 핵심 문제를 한 문장으로 정리합니다. 처음 떠올린 기능은 해결 가설입니다. 불편이 언제 생기는지, 사용자가 지금 어떻게 해결하는지를 먼저 확인해 봅시다."
  },
  {
    "title": "내 경험을 <em>검증할 문제</em>로",
    "chapter": "문제 정의",
    "time": "3:20",
    "lead": "불편을 모으고, 같은 상황을 겪는 사람에게 확인합니다.",
    "body": "<div class=\"split\"><div><p class=\"sample-label\">설명용 사례</p><p class=\"big-copy\">“중고 물건 거래가<br>불편해요”</p><p class=\"lead\">언제, 누구에게, 어떤 손실이 생길까요?</p></div><div class=\"sketch\"><h3>문제 정의 초안</h3><p>처음 자취하는 학생이 가구를 구할 때,<br>운반 방법과 실제 상태를 확인하기 어려워<br>구매를 미루거나 탐색을 반복한다.</p></div></div><div class=\"paper-note\">팀 투표는 조사할 주제를 고르는 방법입니다. <strong>문제의 근거는 사용자의 실제 경험과 행동에서 찾습니다.</strong></div>",
    "note": "팀원이 직접 경험한 불편을 모아 조사할 문제를 고릅니다. 다수결 자체로 문제의 타당성이 증명되지는 않습니다. 소수의 사용자에게 매우 큰 불편이 있을 수도 있습니다. 예시는 검증 전 가설이며, 해당 상황의 사용자를 인터뷰하고 지금 쓰는 대안과 손실을 확인해 구체화합니다.",
    "foot": ""
  },
  {
    "title": "인터뷰에서 확인할 것",
    "chapter": "문제 정의",
    "time": "4:40",
    "lead": "사용자가 겪은 최근 상황을 묻습니다.",
    "body": "<div class=\"split\"><div><p class=\"question bad\">“이 앱이 있으면 쓰실 건가요?”</p><p class=\"question good\">“최근 가구를 구했던 때를<br>처음부터 알려주세요.”</p><p class=\"lead\">미래의 호감보다 과거의 행동을 확인합니다.</p></div><ul class=\"plain-list\"><li><b>상황</b> 언제, 어떤 계기로 필요했나요?</li><li><b>행동</b> 어디에서 찾고 누구에게 물었나요?</li><li><b>손실</b> 시간이 들거나 포기했던 지점은요?</li><li><b>대안</b> 결국 어떻게 해결했나요?</li></ul></div><div class=\"paper-note\">반복되는 패턴과 반대 사례를 함께 기록하고, 설문으로 확인할 질문을 좁힙니다.</div>",
    "note": "답을 유도하지 않고 실제 사건을 묻습니다. 한 사람이 불편하다고 말했다는 이유로 기능을 확정하지 않습니다. 같은 상황에서 반복되는 행동과 반례를 찾고, 얼마나 자주 발생하며 얼마나 큰 손실인지 확인합니다. 인터뷰 결과와 설문 결과는 조사 대상과 조건을 함께 기록합니다.",
    "foot": ""
  },
  {
    "title": "서비스 기획 순서",
    "chapter": "상위 기획",
    "time": "6:00",
    "note": "서비스 기획은 방향을 정하는 상위 기획과 실행 기준을 구체화하는 하위 기획으로 나뉩니다. 문제와 타깃이 바뀌면 뒤의 화면과 기능도 함께 바뀌므로, 앞 단계의 합의를 확인하며 진행합니다.",
    "layout": "reference",
    "subtitle": "신규 서비스 기획의 전체 흐름",
    "body": "<div class=\"planning-roadmap\"><section><h3>상위 기획</h3><div class=\"roadmap-items\"><span>문제 정의</span><span>사업 분석</span><span>타깃 설정</span></div></section><div class=\"roadmap-down\" aria-hidden=\"true\">↓</div><section><h3>하위 기획</h3><div class=\"roadmap-items four\"><span>IA 구조도</span><span>플로우 차트</span><span>와이어프레임</span><span>기능 명세서</span></div></section></div>",
    "caption": "방향을 합의한 뒤, 구현할 구조와 동작을 구체화합니다."
  },
  {
    "title": "상위 기획",
    "chapter": "상위 기획",
    "time": "7:00",
    "note": "상위 기획은 무엇을 만들지 결정하는 전략 단계입니다. 목표와 가치가 불명확한 채 기능부터 정하면 팀원마다 성공의 기준이 달라집니다. 사실로 확인한 내용과 아직 검증하지 않은 가정을 문서에서 구분합니다.",
    "layout": "reference",
    "subtitle": "서비스의 핵심 가치, 목적, 배경, 고객과 범위",
    "body": "<div class=\"definition\"><h3>어떤 목표와 비전을 가지고 만들 것인가?</h3><h3>이 서비스를 통해 어떤 가치를 창출할 수 있는가?</h3><p>논리적으로 설명할 수 있는 문제와 목표를 세웁니다.<br>사용자에게 왜 필요한지, 왜 이런 방향으로 기획했는지 정리합니다.</p></div>",
    "caption": "상위 기획이 명확해야 하위 기획에서도 같은 기준으로 결정할 수 있습니다."
  },
  {
    "title": "사업 분석",
    "chapter": "상위 기획",
    "time": "8:00",
    "note": "첨부해주신 자료의 3단계 조사 흐름을 반영했습니다. 포털에서 검색어와 시장 맥락을 파악하고, 통계청·KOSIS 등 전문기관 자료를 확인한 뒤, RISS와 논문 등 학술자료로 근거를 보강합니다. 검색 결과만으로 사실을 단정하지 않고 자료의 시점과 조사 대상을 확인합니다.",
    "layout": "reference",
    "subtitle": "시장 동향 조사 · 시장 규모 조사 · 경쟁사 분석",
    "intro": "시장 동향 조사 | 3P 리서치",
    "description": "포털에서 큰 흐름을 찾고, 전문기관 통계와 학술자료로 근거를 확인합니다.",
    "image": "market-research-original.png",
    "caption": "출처·작성 시점·조사 대상을 함께 기록합니다.",
    "variant": "research"
  },
  {
    "title": "사업 분석",
    "chapter": "상위 기획",
    "time": "9:20",
    "note": "첨부 자료의 SWOT 예시 내용을 반영했습니다. 이 항목들은 현재 시장 상황을 검증한 최신 분석이 아니라 수업에서 SWOT의 구조를 설명하기 위한 예시입니다. 실제 프로젝트에서는 각 판단의 출처와 시점을 확인합니다.",
    "layout": "reference",
    "subtitle": "시장 동향 조사 · 시장 규모 조사 · 경쟁사 분석",
    "intro": "경쟁사 분석 | SWOT",
    "description": "내부의 강점·약점과 외부의 기회·위협을 구분해 전략을 정리합니다.",
    "image": "swot-original.png",
    "caption": "당근마켓 교육용 예시입니다. 실제 기획에는 최신 근거를 확인합니다."
  },
  {
    "title": "분석을 <em>팀의 결정</em>으로",
    "chapter": "상위 기획",
    "time": "10:40",
    "lead": "시장조사는 환경을 파악하고, SWOT은 그 안에서 전략을 정리합니다.",
    "body": "<table class=\"metric-table\"><thead><tr><th>구분</th><th>확인할 질문</th><th>결과물</th></tr></thead><tbody><tr><td>시장 조사</td><td>누가 얼마나 자주 이 문제를 겪는가?</td><td>대상 규모, 행동, 기존 대안의 근거</td></tr><tr><td>경쟁·대안 분석</td><td>이미 어떤 방식으로 해결하고 있는가?</td><td>대안의 장점과 남는 불편</td></tr><tr><td>SWOT</td><td>우리의 조건에서 어디에 집중할까?</td><td>강점·제약과 외부 요인을 연결한 전략</td></tr></tbody></table><div class=\"paper-note\"><strong>예시 결정</strong> 운반 문제 전체를 해결하기보다, 캠퍼스 근처 직거래와 물품 상태 확인부터 검증합니다.</div>",
    "note": "SWOT 자체는 시장 규모를 계산하는 방법이 아닙니다. 시장과 대안을 조사한 뒤 우리 서비스의 내부 조건과 외부 환경을 연결해 전략을 정리합니다. 학생 프로젝트에서는 모든 분석 도구를 채우기보다 어떤 결정을 위해 조사하는지 먼저 정합니다. 하단의 결정은 설명을 위한 가설입니다.",
    "foot": ""
  },
  {
    "title": "타깃은 <em>상황과 행동</em>까지",
    "chapter": "상위 기획",
    "time": "12:00",
    "lead": "같은 대학생도 겪는 문제와 선택 기준이 다릅니다.",
    "body": "<div class=\"split\"><div><p class=\"sample-label\">너무 넓은 타깃</p><p class=\"big-copy\">“서울에 사는<br>대학생”</p><p class=\"lead\">무엇을 설계해야 할지 아직 알기 어렵습니다.</p></div><div class=\"sketch\"><h3>상황을 좁힌 타깃 · 가설</h3><p>첫 자취를 시작했고 차가 없는 학생.<br>가구 예산이 적고 입주일이 가까워<br>걸어서 가져올 수 있는 물건을 찾는다.</p></div></div><div class=\"paper-note\">이 타깃이라면 <strong>거리·크기·거래 가능 시간</strong>이 중요한 정보가 됩니다.</div>",
    "note": "나이와 지역만으로 타깃을 정하기보다 목표와 제약, 실제 행동을 넣습니다. 오른쪽은 설명용 페르소나이며 조사로 검증해야 합니다. 타깃을 좁히면 화면에서 먼저 보여줄 정보와 우선 개발할 기능이 구체화됩니다.",
    "foot": ""
  },
  {
    "title": "타깃 설정",
    "chapter": "상위 기획",
    "time": "13:20",
    "note": "첨부해주신 사용자 여정 지도에 나온 거래 동기, 물품 탐색, 구매 시도, 거래 성사, 거래 종료의 단계와 감정 변화를 반영했습니다. 감정선은 예시이므로 실제 사용자를 관찰하거나 인터뷰한 자료로 검증해야 합니다.",
    "layout": "reference",
    "subtitle": "페르소나 설정 · User Journey Map 작성",
    "image": "journey-original.png",
    "caption": "사용자의 행동과 감정 변화를 따라가며 불편이 생기는 순간을 찾습니다."
  },
  {
    "title": "하위 기획",
    "chapter": "하위 기획",
    "time": "14:40",
    "note": "하위 기획은 상위 기획에서 정한 문제와 목표를 서비스의 구체적 구조로 옮기는 단계입니다. 사용자의 행동 흐름과 기능 우선순위, 화면 구성 요소를 정리해 역할이 다른 팀원이 같은 동작을 상상할 수 있게 합니다.",
    "layout": "reference",
    "subtitle": "상위 기획의 방향성과 비전을 실제 서비스 구조에 녹여내는 작업",
    "body": "<div class=\"definition\"><h3>‘무엇을 만들 것인가?’에 대한 생각이<br>‘어떻게 만들 것인가?’로 전환됩니다.</h3><p>사용자의 구체적인 행동 흐름, 기능의 우선순위,<br>화면 구성 요소를 정의하고 기능·동작·예외를 정리합니다.</p></div>",
    "caption": "기획자·디자이너·개발자가 같은 화면과 동작을 이해하기 위한 기준입니다."
  },
  {
    "title": "정보구조도 (IA)",
    "chapter": "하위 기획",
    "time": "15:30",
    "note": "정보구조도는 화면과 정보의 소속 관계를 보여주는 서비스의 목차입니다. 상위 메뉴와 하위 기능을 구분하고, 사용자 관점에서 자연스러운 위치인지 확인합니다. 다음 장의 원본 IA로 구조를 읽습니다.",
    "layout": "reference",
    "subtitle": "화면에 노출되는 정보와 기능을 계층적으로 표현한 문서",
    "body": "<div class=\"definition\"><h3>정보구조도 (Information Architecture, IA)란?</h3><p>서비스 내 정보의 배치와 구조를 시각화한 설계도이며,<br>서비스의 목차 역할을 하는 문서입니다.</p><p>화면들의 연관성을 분류하고 배치하여 서비스의 큰 틀을 파악합니다.</p><small>확인할 것: 상위 메뉴 · 하위 기능 · 화면 간 관계</small></div>"
  },
  {
    "title": "정보구조도 (IA)",
    "chapter": "하위 기획",
    "time": "16:20",
    "note": "첨부된 실제 당근마켓 IA를 사용합니다. 위쪽 카테고리 및 상위 메뉴와 아래쪽 하위 기능·연계 페이지를 따라갑니다. 도식과 주석은 원본 그대로입니다.",
    "layout": "reference",
    "subtitle": "상위 메뉴와 하위 기능의 관계를 따라 읽어봅니다.",
    "image": "ia-original.png",
    "caption": "사용자가 기대하는 위치에서 기능을 찾을 수 있는지 확인합니다."
  },
  {
    "title": "IA와 User Flow의 차이",
    "chapter": "하위 기획",
    "time": "17:20",
    "lead": "정보가 있는 위치와 목표를 이루는 행동 순서는 다릅니다.",
    "body": "<p class=\"sample-label\">후드티 구매 예시</p><div class=\"path\"><div>상품 탐색<small>원하는 상품 찾기</small></div><span aria-hidden=\"true\">→</span><div>상세 확인<small>가격·옵션·배송</small></div><span aria-hidden=\"true\">→</span><div>장바구니<small>구매 목록 확인</small></div><span aria-hidden=\"true\">→</span><div>결제<small>주문 완료</small></div></div><div class=\"split\"><p class=\"big-copy\">IA는 <em>정보의 자리</em><br>User Flow는 <em>행동의 순서</em></p><div class=\"sketch\"><p>“사용자가 후드티를 구매한다”<br>하나의 목표를 정하고<br>시작부터 완료까지 따라갑니다.</p></div></div>",
    "note": "앞의 IA가 화면과 정보의 소속 관계를 보여줬다면 User Flow는 한 목표를 달성하는 대표 경로를 보여줍니다. 로그인 여부나 품절처럼 갈림길이 있는 경우는 다음 플로우차트에서 더 자세히 정리합니다. 이 예시는 설명용이며 실제 서비스의 비회원 구매 정책 등에 따라 달라집니다.",
    "foot": ""
  },
  {
    "title": "플로우 차트",
    "chapter": "하위 기획",
    "time": "18:30",
    "note": "플로우차트는 사용자 행동과 시스템 반응, 조건에 따른 경로를 정리하는 문서입니다. 시작과 종료, 처리, 판단 조건을 명확하게 합의합니다.",
    "layout": "reference",
    "subtitle": "서비스의 화면 및 기능 단위에 맞춰 사용 흐름을 나타내는 문서",
    "body": "<div class=\"definition\"><h3>플로우 차트 (Flowchart)란?</h3><p>프로세스를 수행하는 데 필요한 단계와 결정을 시각적으로 표현한 자료입니다.</p><p>도형으로 단계를 나타내고, 화살표로 진행 순서를 연결합니다.<br>조건에 따라 달라지는 경로와 결과를 함께 확인합니다.</p><small>시작과 끝 · 처리 단계 · 판단 조건 · 분기 결과</small></div>"
  },
  {
    "title": "플로우 차트",
    "chapter": "하위 기획",
    "time": "19:20",
    "note": "첨부된 당근마켓 판매글 등록과 거래 약속 흐름도입니다. 큰 사용자 흐름과 세부 조건, 예외 처리의 연결을 보여줍니다. 세부 글씨는 이미지를 눌러 확대해 확인할 수 있습니다.",
    "layout": "reference",
    "subtitle": "서비스의 화면 및 기능 단위에 맞춰 사용 흐름을 나타내는 문서",
    "image": "seller-flow-original.png",
    "variant": "split-reference",
    "aside": "<p>플로우 차트를 따라가면 사용자의 서비스 이용 과정을 파악할 수 있어 UX/UI 기획에 도움이 됩니다.</p><p>예를 들어 하나의 행동을 마치기 위해 너무 많은 화면을 거쳐야 한다면, 과정이 길어 사용자가 이탈할 수 있습니다.</p>",
    "caption": "원본 이미지를 누르면 세부 조건과 분기를 확대해서 볼 수 있습니다."
  },
  {
    "title": "플로우 차트",
    "chapter": "하위 기획",
    "time": "20:20",
    "note": "표준 기호의 의미를 팀 안에서 일관되게 씁니다. 판단 노드에는 조건을 질문형으로 적고 연결선에는 예·아니요처럼 결과를 표시합니다. 되돌아가는 선은 재시도나 수정 행동일 때만 분명하게 표현해 경로가 서로 얽히지 않게 합니다.",
    "layout": "reference",
    "subtitle": "읽는 사람이 단계와 분기를 빠르게 이해할 수 있도록",
    "intro": "플로우차트 작성 TIP",
    "description": "도형·선·텍스트·간격을 일관되게 사용하고, 분기선에는 조건을 표시합니다.",
    "image": "flowchart-original.png",
    "caption": "왼쪽 → 오른쪽 또는 위 → 아래, 한 방향으로 흐름을 일관되게 배치합니다.",
    "variant": "flow-tip"
  },
  {
    "title": "와이어프레임",
    "chapter": "하위 기획",
    "time": "21:20",
    "note": "첨부된 모바일·웹 와이어프레임 원본을 그대로 보여줍니다. 정보와 기능이 어디에 배치되는지, 화면 간 흐름과 사용자의 다음 행동이 명확한지 확인합니다.",
    "layout": "reference",
    "subtitle": "서비스의 화면 레이아웃, 콘텐츠 및 기능의 기본적인 윤곽",
    "image": "wireframe-original.png",
    "caption": "색과 장식보다 정보의 위치, 우선순위, 다음 행동이 보이는지 확인합니다."
  },
  {
    "title": "기능 명세서",
    "chapter": "하위 기획",
    "time": "22:40",
    "note": "기능 명세서는 기능을 구체적으로 정의해 역할이 다른 팀 사이의 오해를 줄입니다. 요구사항을 작은 단위로 쪼개 일정과 의존 관계를 볼 수 있고, 정상·예외 상태의 검수 기준도 만들 수 있습니다. 기능이나 합의가 바뀌면 문서도 함께 갱신해야 합니다.",
    "layout": "reference",
    "subtitle": "다뤄야 할 기능을 구체적으로 세분화하고 동작을 정의하는 문서",
    "body": "<div class=\"definition spec-definition\"><h3>기능 명세서가 왜 필요할까?</h3><ul><li>수행해야 할 기능을 명확히 정의해 개발자·디자이너·기획자의 오해를 줄입니다.</li><li>요구사항을 구체화해 개발 범위와 일정 판단에 도움을 줍니다.</li><li>누락과 오류를 줄이고, 테스트 및 검수 기준을 명확하게 합니다.</li><li>유지보수할 때 기능 구조와 의도를 쉽게 이해할 수 있게 돕습니다.</li></ul></div>"
  },
  {
    "title": "기능 명세서",
    "chapter": "하위 기획",
    "time": "23:30",
    "note": "첨부해주신 실제 기능명세서 예시입니다. 주 기능·상세 기능·설명·가능 여부·비고의 열을 어떤 식으로 읽는지 설명합니다.",
    "layout": "reference",
    "subtitle": "주 기능 → 상세 기능 → 동작 설명과 확인 기준",
    "image": "feature-spec-original.png",
    "caption": "주 기능·상세 기능·설명·가능 여부·비고를 함께 읽습니다."
  },
  {
    "title": "한 기능의 <em>완료 기준</em>",
    "chapter": "하위 기획",
    "time": "24:30",
    "lead": "입력·조건·결과·예외가 있으면 함께 검토할 수 있습니다.",
    "body": "<table class=\"metric-table\"><tbody><tr><td>기능</td><td>FR-01 · 장바구니 담기</td></tr><tr><td>입력·조건</td><td>상품, 색상, 사이즈, 수량 · 선택 옵션의 재고가 있음</td></tr><tr><td>성공 결과</td><td>장바구니에 저장되고 선택한 옵션과 수량이 표시됨</td></tr><tr><td>예외</td><td>옵션 누락은 입력 안내 · 품절은 대안 안내 · 저장 실패는 재시도 안내</td></tr><tr><td>검증</td><td>정상 담기, 옵션 누락, 품절, 저장 실패를 화면과 동작에서 확인</td></tr></tbody></table><div class=\"paper-note\">“구현했습니다”를 <strong>“이 조건에서 이 결과를 확인했습니다”</strong>로 바꿉니다.</div>",
    "note": "앞의 표를 실제로 어떻게 채울지 보여주는 설명용 명세입니다. 성공만 적으면 오류 화면이 빠지기 쉽습니다. 상태와 다음 행동을 함께 정하고, 디자이너와 개발자가 같은 조건으로 확인합니다. 저장 실패의 테스트 방법도 구현 전에 정하면 좋습니다.",
    "foot": ""
  },
  {
    "title": "기능 명세를 Issue로 나누기",
    "chapter": "협업",
    "time": "26:00",
    "lead": "작업 단위마다 책임자, 연결 문서와 확인 방법을 남깁니다.",
    "body": "<div class=\"split\"><div class=\"sketch\"><h3>Issue #12 · 장바구니 담기</h3><p>목표: 선택한 옵션을 저장하고 결과를 보여준다.<br>담당: 구현 담당자 / 검토 담당자<br>참고: FR-01, 화면 WF-03<br>완료: 정상·누락·품절·실패 검증</p></div><ul class=\"plain-list\"><li><b>디자인</b> 네 가지 상태와 안내 문구</li><li><b>프론트엔드</b> 옵션 입력과 결과 표시</li><li><b>백엔드</b> 재고 검증과 저장 응답</li><li><b>함께 확인</b> 인터페이스와 완료 조건</li></ul></div><div class=\"paper-note\">관련 계획은 <strong>docs/plans/issue-12.md</strong>에 남기고 Issue에서 연결합니다.</div>",
    "note": "기획 산출물을 역할별 작업으로 나누되 각자 완료의 의미가 달라지지 않도록 기능 단위로 연결합니다. Issue는 목표와 담당, 완료 기준을 보여주는 입구입니다. 긴 계획과 결정 이유는 docs에 두고 링크를 걸면 팀원과 AI가 같은 자료를 확인할 수 있습니다.",
    "foot": ""
  },
  {
    "file": "collaboration-kyungpook.svg",
    "title": "협업이 어려운 이유",
    "chapter": "협업",
    "time": "27:20",
    "note": "실력, 시간, 속도의 차이가 공개되지 않으면 일이 한쪽에 몰리고, 불공정하다는 감정과 갈등으로 이어질 수 있습니다. 차이 자체를 없애기보다 현재 가능한 범위와 필요한 도움을 빨리 드러내는 것이 중요합니다."
  },
  {
    "file": "together-kyungpook.svg",
    "title": "어떻게 함께할까",
    "chapter": "협업",
    "time": "28:30",
    "note": "해본 것, 처음인 것, 도움이 필요한 것을 솔직히 공유합니다. 작은 화면 한 장이나 동작 하나를 함께 보며 설명하고 수정할 수 있는지 확인합니다. 진행 공유에서는 완료한 것, 막힌 것, 필요한 도움과 다음 행동을 이야기하고 작업량을 조정합니다. 회고에서는 사람을 평가하기보다 반복되는 문제와 다음에 바꿀 행동을 정합니다."
  },
  {
    "file": "ai-kyungpook.svg",
    "title": "AI와 함께 일하기",
    "chapter": "AI 협업",
    "time": "30:00",
    "note": "AI를 쓰는 팀일수록 팀의 공통 맥락과 변경 범위를 문서로 남길 필요가 있습니다. 규칙이 없으면 컨벤션, 다른 사람의 파일, 인터페이스까지 예상보다 넓게 바뀔 수 있습니다. 규칙 파일은 의도를 전달하며 실제 변경 결과는 사람이 확인합니다."
  },
  {
    "file": "rule-kyungpook.svg",
    "title": "RULE 프레임워크",
    "chapter": "AI 협업",
    "time": "31:10",
    "note": "이 세션에서는 Range, Unified context, Look before coding, Evidence를 팀 규칙을 기억하기 위한 틀로 사용합니다. 범위, 맥락, 계획, 검증을 작업 전에 합의하고 마지막에 확인합니다. 보편적 표준의 이름으로 소개하기보다 이번 세션의 정리 방식이라고 설명합니다."
  },
  {
    "title": "우리 팀의 RULE 예시",
    "chapter": "AI 협업",
    "time": "32:10",
    "lead": "규칙을 파일로 남기고, 변경 결과에서 확인합니다.",
    "body": "<div class=\"rule-lines\"><b>R</b><p>이번 Issue에 필요한 파일과 동작만 수정한다.<small>공통 컴포넌트·API 계약 변경은 먼저 팀과 합의한다.</small></p><b>U</b><p>같은 docs와 디자인 기준을 먼저 읽는다.<small>용어, 폴더 구조, API 응답 형식의 기준 문서를 연결한다.</small></p><b>L</b><p>수정 전 계획과 영향 범위를 공유한다.<small>이미 바뀐 코드를 확인하고, 예상 밖 변경은 멈춰서 알린다.</small></p><b>E</b><p>diff와 화면, 테스트 결과를 사람이 검토한다.<small>성공 경로와 오류 상태를 확인하고 남은 문제를 기록한다.</small></p></div>",
    "note": "추상적인 규칙을 작업 중 판단할 수 있는 문장으로 바꿨습니다. AI에게 아무 파일도 수정하지 말라는 뜻이 아니라, 이번 작업에서 필요한 범위를 합의하고 공통 계약의 변경을 공유하자는 뜻입니다. 규칙 파일만으로 변경을 막을 수는 없습니다. 코드 리뷰와 테스트, 담당자의 최종 확인이 함께 필요합니다.",
    "foot": ""
  },
  {
    "title": "규칙과 계획을 두는 곳",
    "chapter": "AI 협업",
    "time": "33:40",
    "lead": "공통 기준을 연결하면 팀원과 AI가 같은 맥락을 확인할 수 있습니다.",
    "body": "<div class=\"doc-map\"><div class=\"sketch\"><pre>프로젝트/\n  AGENTS.md\n  CLAUDE.md\n  docs/\n    team-rules.md\n    product.md\n    plans/\n      issue-12.md\n  [도구별 Skill 경로]/\n    review/SKILL.md</pre></div><dl><dt>docs/</dt><dd>사람과 AI가 함께 읽는 목표, 결정 이유, 작업 계획</dd><dt>AGENTS.md · CLAUDE.md</dt><dd>사용 도구의 지침에 맞춰 공통 기준 문서를 연결</dd><dt>SKILL.md</dt><dd>반복하는 리뷰·검증 절차를 재사용 가능한 단계로 정리</dd><dt>Issue · PR</dt><dd>담당과 범위, 계획 링크, 검증 결과를 공유</dd></dl></div>",
    "note": "이것은 문서 구조의 개념 예시입니다. 각 도구가 인식하는 파일 경로와 범위는 서로 다르므로 사용하는 도구의 설정을 확인해야 합니다. 팀 기준을 여러 파일에 복사하면 서로 달라지기 쉬우니 docs를 공통 기준으로 두고 지침 파일에서 연결합니다. Skill에는 반복 절차를 넣고 이번 작업에만 해당하는 계획은 Issue별 문서에 남깁니다.",
    "foot": ""
  },
  {
    "file": "project-canvas-kyungpook.svg",
    "title": "프로젝트 시작 캔버스",
    "chapter": "정리",
    "time": "35:00",
    "note": "문제, 사용자, 성공, 범위, 역량, 역할, 완료 기준, 기록, AI 범위와 검증 근거를 한 장에 모읍니다. 오늘 현장에서 작성하는 활동은 진행하지 않고, 첫 팀 회의에서 사용할 문서로 소개합니다. 빈칸이 보이면 팀이 아직 합의하지 않은 질문입니다."
  },
  {
    "title": "캔버스를 채운 예시",
    "chapter": "정리",
    "time": "36:30",
    "lead": "캠퍼스 중고거래 서비스 · 검증 전 가상 사례",
    "body": "<div class=\"canvas-grid\"><div><b>문제</b><p>물품 상태와 운반 가능 여부를 확인하기 어렵다.</p></div><div><b>사용자</b><p>차 없이 첫 자취를 준비하는 학생</p></div><div><b>성공</b><p>필요한 정보를 보고 거래 가능성을 판단한다.</p></div><div><b>범위</b><p>물품 탐색·상태 정보<br>배송 연동은 제외</p></div><div><b>역량</b><p>화면 구현 경험 있음<br>이미지 저장은 도움 필요</p></div><div><b>역할</b><p>각 Issue에 담당·검토자를 지정한다.</p></div><div><b>완료 기준</b><p>정상·빈 상태·오류 화면과 동작을 확인한다.</p></div><div><b>기록</b><p>Issue에 링크<br>docs에 결정 이유</p></div><div><b>AI 범위</b><p>Issue 범위 안에서 구현<br>공통 계약 변경은 합의</p></div><div><b>검증 근거</b><p>사용자 관찰 기록<br>화면·테스트 결과</p></div></div><div class=\"paper-note\">명확하게 답하기 어려운 칸이 <strong>다음 회의에서 먼저 이야기할 주제</strong>입니다.</div>",
    "note": "캔버스를 실제로 채우는 예시입니다. 성공은 아직 정량 검증 전의 목표이며 테스트 후 관찰 결과로 구체화합니다. 계획을 멋지게 보이게 채우기보다 아직 모르는 것과 필요한 도움을 드러내는 데 사용합니다.",
    "foot": ""
  },
  {
    "file": "closing-kyungpook.svg",
    "title": "함께 이해하는 첫 질문",
    "chapter": "마무리",
    "time": "38:00",
    "note": "무엇을 만들까 전에 무엇을 함께 이해해야 할까를 질문합시다. 사용자의 문제, 화면과 기능의 기준, 각자의 가능 범위, AI의 수정 범위를 합의하고 근거를 남기면 다시 같은 방향을 확인하기 쉬워집니다. 남은 시간에는 질문을 받겠습니다."
  }
];

const deck = document.getElementById('deck');
const textOnly = html => { const t=document.createElement('template'); t.innerHTML=html; return t.content.textContent; };
const escapeHTML = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const footer = (s,i) => '<footer class="footer"><span>'+escapeHTML(s.chapter)+' · '+String(i+1).padStart(2,'0')+'</span><span>GDGoC KNU 기획·협업 세션</span></footer>';
const figure = (file,title) => '<button class="reference-image" data-image="'+escapeHTML(file)+'" aria-label="'+escapeHTML(textOnly(title))+' 원본 이미지 확대"><img src="'+imageSrc(file)+'" alt="'+escapeHTML(textOnly(title))+' 참고 자료" decoding="async"><span class="zoom-hint">원본 확대 ↗</span></button>';
slides.forEach((s,i) => {
  const section=document.createElement('section');
  section.className='slide'; section.id='slide-'+(i+1);
  section.setAttribute('aria-label',(i+1)+'. '+textOnly(s.title));
  if(s.file) {
    section.innerHTML='<div class="sheet source-sheet"><h2 class="sr-only">'+escapeHTML(s.title)+'</h2>'+figure(s.file,s.title)+'</div>';
  } else if(s.layout==='reference') {
    const intro=s.intro?'<div class="reference-intro"><h3>'+s.intro+'</h3><p>'+s.description+'</p></div>':'';
    const visual=s.image?'<div class="reference-visual '+(s.aside?'with-aside':'')+'">'+figure(s.image,s.title)+(s.aside?'<aside>'+s.aside+'</aside>':'')+'</div>':'';
    section.innerHTML='<div class="sheet"><div class="reference-content '+(s.variant||'')+'"><header class="reference-header"><h2>'+s.title+'</h2><p>'+s.subtitle+'</p></header><div class="reference-body">'+intro+(s.body||'')+visual+'</div><div class="reference-caption">'+(s.caption||'')+'</div>'+footer(s,i)+'</div></div>';
  } else {
    section.innerHTML='<div class="sheet"><div class="content"><header><p class="kicker">GDGoC KNU 기획·협업 세션 · '+s.chapter+'</p><h2>'+s.title+'</h2><p class="lead">'+s.lead+'</p></header><div class="body">'+s.body+'</div>'+footer(s,i)+'</div></div>';
  }
  deck.append(section);
});
const imageDialog=document.getElementById('imageDialog');
const zoomImage=document.getElementById('zoomImage');
const zoomSize=document.getElementById('zoomSize');
function openImage(file,title) {
  document.getElementById('imageTitle').textContent=title;
  zoomImage.src=imageSrc(file); zoomImage.alt=title;
  zoomImage.classList.remove('actual-size');
  zoomSize.textContent='원본 크기';
  zoomSize.setAttribute('aria-pressed','false');
  document.getElementById('imageOriginal').href=imageSrc(file);
  imageDialog.showModal();
  document.getElementById('imageViewport').scrollTo(0,0);
}
document.querySelectorAll('[data-image]').forEach(button => {
  const img=button.querySelector('img');
  const limitSourceSize=()=>{
    const sheet=button.closest('.source-sheet');
    if(sheet && img.naturalWidth) sheet.style.setProperty('--source-width',img.naturalWidth+'px');
  };
  img.addEventListener('load',limitSourceSize);
  if(img.complete) limitSourceSize();
  button.addEventListener('click',()=>openImage(button.dataset.image,button.querySelector('img').alt));
  button.querySelector('img').addEventListener('error',()=>{
    button.classList.add('image-error');
    button.querySelector('.zoom-hint').textContent='이미지를 불러오지 못했습니다 · 원본 확인';
  });
});
zoomSize.onclick=()=>{
  const actual=zoomImage.classList.toggle('actual-size');
  zoomImage.style.setProperty('--native-width',zoomImage.naturalWidth+'px');
  zoomSize.textContent=actual?'화면에 맞추기':'원본 크기';
  zoomSize.setAttribute('aria-pressed',String(actual));
};
const sections=[...deck.children];
const counter=document.getElementById('counter');
const reduce=matchMedia('(prefers-reduced-motion: reduce)');
const hashIndex=()=>Math.max(0,Math.min(slides.length-1,(Number(location.hash.replace('#slide-',''))||1)-1));
let current=hashIndex(), navigating=false, scrollFrame=0, settleTimer;
function setCurrent(i) {
  current=i;
  counter.textContent=String(i+1).padStart(2,'0')+' / '+slides.length;
  document.getElementById('prev').disabled=i===0;
  document.getElementById('next').disabled=i===slides.length-1;
  history.replaceState(null,'','#slide-'+(i+1));
  document.querySelectorAll('#overviewGrid button').forEach((b,n)=>b.setAttribute('aria-current',String(n===i)));
}
function go(i,instant=false) {
  i=Math.max(0,Math.min(slides.length-1,i));
  navigating=true;setCurrent(i);
  sections[i].scrollIntoView({block:'start',behavior:instant||reduce.matches?'instant':'smooth'});
  clearTimeout(settleTimer);settleTimer=setTimeout(()=>{navigating=false;},500);
}
addEventListener('scroll',()=>{
  if(navigating||scrollFrame)return;
  scrollFrame=requestAnimationFrame(()=>{
    scrollFrame=0;
    const middle=innerHeight/2;
    const index=sections.findIndex(s=>{const r=s.getBoundingClientRect();return r.top<=middle&&r.bottom>middle;});
    if(index>=0&&index!==current)setCurrent(index);
  });
},{passive:true});
addEventListener('hashchange',()=>go(hashIndex(),true));
let resizeTimer;
addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>go(current,true),120);});
document.getElementById('prev').onclick=()=>go(current-1);
document.getElementById('next').onclick=()=>go(current+1);
function notes() {
  const s=slides[current];
  document.getElementById('notesTitle').textContent=(current+1)+'. '+textOnly(s.title)+' · '+s.time;
  const body=document.getElementById('notesBody');body.textContent=s.note+'\n\n';
  const a=document.createElement('a');a.href=sourceURL;a.target='_blank';a.rel='noopener';a.textContent='노션 발표 구성 및 참고 자료';body.append(a);
  document.getElementById('notesDialog').showModal();
}
document.getElementById('notes').onclick=notes;
document.getElementById('overview').onclick=()=>document.getElementById('overviewDialog').showModal();
async function fullscreen(){try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{document.getElementById('fullscreen').textContent='브라우저 전체화면 사용';}}
document.getElementById('fullscreen').onclick=fullscreen;
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>b.closest('dialog').close());
slides.forEach((s,i)=>{
  const b=document.createElement('button');
  b.innerHTML='<small>'+String(i+1).padStart(2,'0')+' · '+s.time+' · '+s.chapter+'</small><b>'+escapeHTML(textOnly(s.title))+'</b>'+(s.intro?'<span>'+escapeHTML(s.intro)+'</span>':s.image?'<span>'+escapeHTML(s.subtitle)+'</span>':'');
  b.onclick=()=>{document.getElementById('overviewDialog').close();go(i);};
  document.getElementById('overviewGrid').append(b);
});
document.addEventListener('keydown',e=>{
  if(document.querySelector('dialog[open]')||e.altKey||e.ctrlKey||e.metaKey||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;
  const key=e.key.toLowerCase();
  if(['arrowright','arrowdown','pagedown',' '].includes(key)){e.preventDefault();go(current+1);}
  if(['arrowleft','arrowup','pageup'].includes(key)){e.preventDefault();go(current-1);}
  if(key==='home'){e.preventDefault();go(0);}
  if(key==='end'){e.preventDefault();go(slides.length-1);}
  if(key==='n')notes();if(key==='o')document.getElementById('overviewDialog').showModal();if(key==='f')fullscreen();
});
setCurrent(current);requestAnimationFrame(()=>go(current,true));
