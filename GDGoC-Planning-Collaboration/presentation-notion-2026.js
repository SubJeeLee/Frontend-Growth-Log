const imageRoot = 'assets/notion-0930/';
const imageSrc = file => imageRoot + (file.includes('.') && !/^\d{2}\.\d{2}\.\d{2}$/.test(file) ? file : file + '.webp') + '?v=8';
const slides = [
  {
    "file": "cover-hd.png",
    "title": "같은 말에서 같은 방향으로",
    "chapter": "도입",
    "time": "0:00",
  },
  {
    "file": "results-hd.png",
    "title": "왜 결과가 다를까?",
    "chapter": "문제 정의",
    "time": "1:00",
  },
  {
    "file": "problem-hd.png",
    "title": "관찰과 해결책의 차이",
    "chapter": "문제 정의",
    "time": "2:00",
  },
  {
    "title": "내 경험을 <em>검증할 문제</em>로",
    "chapter": "문제 정의",
    "time": "3:20",
    "lead": "불편을 모으고, 같은 상황을 겪는 사람에게 확인합니다.",
    "body": "<div class=\"split\"><div><p class=\"sample-label\">설명용 사례</p><p class=\"big-copy\">“중고 물건 거래가<br>불편해요”</p><p class=\"lead\">언제, 누구에게, 어떤 손실이 생길까요?</p></div><div class=\"sketch\"><h3>문제 정의 초안</h3><p>처음 자취하는 학생이 가구를 구할 때,<br>운반 방법과 실제 상태를 확인하기 어려워<br>구매를 미루거나 탐색을 반복한다.</p></div></div><div class=\"paper-note\">팀 투표는 조사할 주제를 고르는 방법입니다. <strong>문제의 근거는 사용자의 실제 경험과 행동에서 찾습니다.</strong></div>",
    "foot": ""
  },
  {
    "title": "인터뷰에서 확인할 것",
    "chapter": "문제 정의",
    "time": "4:40",
    "lead": "사용자가 겪은 최근 상황을 묻습니다.",
    "body": "<div class=\"split\"><div><p class=\"question bad\">“이 앱이 있으면 쓰실 건가요?”</p><p class=\"question good\">“최근 가구를 구했던 때를<br>처음부터 알려주세요.”</p><p class=\"lead\">미래의 호감보다 과거의 행동을 확인합니다.</p></div><ul class=\"plain-list\"><li><b>상황</b> 언제, 어떤 계기로 필요했나요?</li><li><b>행동</b> 어디에서 찾고 누구에게 물었나요?</li><li><b>손실</b> 시간이 들거나 포기했던 지점은요?</li><li><b>대안</b> 결국 어떻게 해결했나요?</li></ul></div><div class=\"paper-note\">반복되는 패턴과 반대 사례를 함께 기록하고, 설문으로 확인할 질문을 좁힙니다.</div>",
    "foot": ""
  },
  {
    "title": "서비스 기획 순서",
    "chapter": "상위 기획",
    "time": "6:00",
    "layout": "reference",
    "subtitle": "신규 서비스 기획의 전체 흐름",
    "body": "<div class=\"planning-roadmap\"><section><h3>상위 기획</h3><div class=\"roadmap-items\"><span>문제 정의</span><span>사업 분석</span><span>타깃 설정</span></div></section><div class=\"roadmap-down\" aria-hidden=\"true\">↓</div><section><h3>하위 기획</h3><div class=\"roadmap-items four\"><span>IA 구조도</span><span>플로우 차트</span><span>와이어프레임</span><span>기능 명세서</span></div></section></div>",
    "caption": "방향을 합의한 뒤, 구현할 구조와 동작을 구체화합니다."
  },
  {
    "title": "상위 기획",
    "chapter": "상위 기획",
    "time": "7:00",
    "layout": "reference",
    "subtitle": "서비스의 핵심 가치, 목적, 배경, 고객과 범위",
    "body": "<div class=\"definition\"><h3>어떤 목표와 비전을 가지고 만들 것인가?</h3><h3>이 서비스를 통해 어떤 가치를 창출할 수 있는가?</h3><p>논리적으로 설명할 수 있는 문제와 목표를 세웁니다.<br>사용자에게 왜 필요한지, 왜 이런 방향으로 기획했는지 정리합니다.</p></div>",
    "caption": "상위 기획이 명확해야 하위 기획에서도 같은 기준으로 결정할 수 있습니다."
  },
  {
    "title": "사업 분석",
    "chapter": "상위 기획",
    "time": "8:00",
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
    "foot": ""
  },
  {
    "title": "타깃은 <em>상황과 행동</em>까지",
    "chapter": "상위 기획",
    "time": "12:00",
    "lead": "같은 대학생도 겪는 문제와 선택 기준이 다릅니다.",
    "body": "<div class=\"split\"><div><p class=\"sample-label\">너무 넓은 타깃</p><p class=\"big-copy\">“서울에 사는<br>대학생”</p><p class=\"lead\">무엇을 설계해야 할지 아직 알기 어렵습니다.</p></div><div class=\"sketch\"><h3>상황을 좁힌 타깃 · 가설</h3><p>첫 자취를 시작했고 차가 없는 학생.<br>가구 예산이 적고 입주일이 가까워<br>걸어서 가져올 수 있는 물건을 찾는다.</p></div></div><div class=\"paper-note\">이 타깃이라면 <strong>거리·크기·거래 가능 시간</strong>이 중요한 정보가 됩니다.</div>",
    "foot": ""
  },
  {
    "title": "타깃 설정",
    "chapter": "상위 기획",
    "time": "13:20",
    "layout": "reference",
    "subtitle": "페르소나 설정 · User Journey Map 작성",
    "image": "journey-original.png",
    "caption": "사용자의 행동과 감정 변화를 따라가며 불편이 생기는 순간을 찾습니다."
  },
  {
    "title": "하위 기획",
    "chapter": "하위 기획",
    "time": "14:40",
    "layout": "reference",
    "subtitle": "상위 기획의 방향성과 비전을 실제 서비스 구조에 녹여내는 작업",
    "body": "<div class=\"definition\"><h3>‘무엇을 만들 것인가?’에 대한 생각이<br>‘어떻게 만들 것인가?’로 전환됩니다.</h3><p>사용자의 구체적인 행동 흐름, 기능의 우선순위,<br>화면 구성 요소를 정의하고 기능·동작·예외를 정리합니다.</p></div>",
    "caption": "기획자·디자이너·개발자가 같은 화면과 동작을 이해하기 위한 기준입니다."
  },
  {
    "title": "정보구조도 (IA)",
    "chapter": "하위 기획",
    "time": "15:30",
    "layout": "reference",
    "subtitle": "화면에 노출되는 정보와 기능을 계층적으로 표현한 문서",
    "body": "<div class=\"definition\"><h3>정보구조도 (Information Architecture, IA)란?</h3><p>서비스 내 정보의 배치와 구조를 시각화한 설계도이며,<br>서비스의 목차 역할을 하는 문서입니다.</p><p>화면들의 연관성을 분류하고 배치하여 서비스의 큰 틀을 파악합니다.</p><small>확인할 것: 상위 메뉴 · 하위 기능 · 화면 간 관계</small></div>"
  },
  {
    "title": "정보구조도 (IA)",
    "chapter": "하위 기획",
    "time": "16:20",
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
    "foot": ""
  },
  {
    "title": "플로우 차트",
    "chapter": "하위 기획",
    "time": "18:30",
    "layout": "reference",
    "subtitle": "서비스의 화면 및 기능 단위에 맞춰 사용 흐름을 나타내는 문서",
    "body": "<div class=\"definition\"><h3>플로우 차트 (Flowchart)란?</h3><p>프로세스를 수행하는 데 필요한 단계와 결정을 시각적으로 표현한 자료입니다.</p><p>도형으로 단계를 나타내고, 화살표로 진행 순서를 연결합니다.<br>조건에 따라 달라지는 경로와 결과를 함께 확인합니다.</p><small>시작과 끝 · 처리 단계 · 판단 조건 · 분기 결과</small></div>"
  },
  {
    "title": "플로우 차트",
    "chapter": "하위 기획",
    "time": "19:20",
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
    "layout": "reference",
    "subtitle": "서비스의 화면 레이아웃, 콘텐츠 및 기능의 기본적인 윤곽",
    "image": "wireframe-original.png",
    "caption": "색과 장식보다 정보의 위치, 우선순위, 다음 행동이 보이는지 확인합니다."
  },
  {
    "title": "기능 명세서",
    "chapter": "하위 기획",
    "time": "22:40",
    "layout": "reference",
    "subtitle": "다뤄야 할 기능을 구체적으로 세분화하고 동작을 정의하는 문서",
    "body": "<div class=\"definition spec-definition\"><h3>기능 명세서가 왜 필요할까?</h3><ul><li>수행해야 할 기능을 명확히 정의해 개발자·디자이너·기획자의 오해를 줄입니다.</li><li>요구사항을 구체화해 개발 범위와 일정 판단에 도움을 줍니다.</li><li>누락과 오류를 줄이고, 테스트 및 검수 기준을 명확하게 합니다.</li><li>유지보수할 때 기능 구조와 의도를 쉽게 이해할 수 있게 돕습니다.</li></ul></div>"
  },
  {
    "title": "기능 명세서",
    "chapter": "하위 기획",
    "time": "23:30",
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
    "foot": ""
  },
  {
    "title": "기능 명세를 Issue로 나누기",
    "chapter": "협업",
    "time": "26:00",
    "lead": "작업 단위마다 책임자, 연결 문서와 확인 방법을 남깁니다.",
    "body": "<div class=\"split\"><div class=\"sketch\"><h3>Issue #12 · 장바구니 담기</h3><p>목표: 선택한 옵션을 저장하고 결과를 보여준다.<br>담당: 구현 담당자 / 검토 담당자<br>참고: FR-01, 화면 WF-03<br>완료: 정상·누락·품절·실패 검증</p></div><ul class=\"plain-list\"><li><b>디자인</b> 네 가지 상태와 안내 문구</li><li><b>프론트엔드</b> 옵션 입력과 결과 표시</li><li><b>백엔드</b> 재고 검증과 저장 응답</li><li><b>함께 확인</b> 인터페이스와 완료 조건</li></ul></div><div class=\"paper-note\">관련 계획은 <strong>docs/plans/issue-12.md</strong>에 남기고 Issue에서 연결합니다.</div>",
    "foot": ""
  },
  {
    "file": "collaboration-kyungpook.svg",
    "title": "협업이 어려운 이유",
    "chapter": "협업",
    "time": "27:20",
  },
  {
    "file": "together-kyungpook.svg",
    "title": "어떻게 함께할까",
    "chapter": "협업",
    "time": "28:30",
  },
  {
    "file": "ai-kyungpook.svg",
    "title": "AI와 함께 일하기",
    "chapter": "AI 협업",
    "time": "30:00",
  },
  {
    "file": "rule-kyungpook.svg",
    "title": "RULE 프레임워크",
    "chapter": "AI 협업",
    "time": "31:10",
  },
  {
    "title": "우리 팀의 RULE 예시",
    "chapter": "AI 협업",
    "time": "32:10",
    "lead": "규칙을 파일로 남기고, 변경 결과에서 확인합니다.",
    "body": "<div class=\"rule-lines\"><b>R</b><p>이번 Issue에 필요한 파일과 동작만 수정한다.<small>공통 컴포넌트·API 계약 변경은 먼저 팀과 합의한다.</small></p><b>U</b><p>같은 docs와 디자인 기준을 먼저 읽는다.<small>용어, 폴더 구조, API 응답 형식의 기준 문서를 연결한다.</small></p><b>L</b><p>수정 전 계획과 영향 범위를 공유한다.<small>이미 바뀐 코드를 확인하고, 예상 밖 변경은 멈춰서 알린다.</small></p><b>E</b><p>diff와 화면, 테스트 결과를 사람이 검토한다.<small>성공 경로와 오류 상태를 확인하고 남은 문제를 기록한다.</small></p></div>",
    "foot": ""
  },
  {
    "title": "규칙과 계획을 두는 곳",
    "chapter": "AI 협업",
    "time": "33:40",
    "lead": "공통 기준을 연결하면 팀원과 AI가 같은 맥락을 확인할 수 있습니다.",
    "body": "<div class=\"doc-map\"><div class=\"sketch\"><pre>프로젝트/\n  AGENTS.md\n  CLAUDE.md\n  docs/\n    team-rules.md\n    product.md\n    plans/\n      issue-12.md\n  [도구별 Skill 경로]/\n    review/SKILL.md</pre></div><dl><dt>docs/</dt><dd>사람과 AI가 함께 읽는 목표, 결정 이유, 작업 계획</dd><dt>AGENTS.md · CLAUDE.md</dt><dd>사용 도구의 지침에 맞춰 공통 기준 문서를 연결</dd><dt>SKILL.md</dt><dd>반복하는 리뷰·검증 절차를 재사용 가능한 단계로 정리</dd><dt>Issue · PR</dt><dd>담당과 범위, 계획 링크, 검증 결과를 공유</dd></dl></div>",
    "foot": ""
  },
  {
    "file": "project-canvas-kyungpook.svg",
    "title": "프로젝트 시작 캔버스",
    "chapter": "정리",
    "time": "35:00",
  },
  {
    "title": "캔버스를 채운 예시",
    "chapter": "정리",
    "time": "36:30",
    "lead": "캠퍼스 중고거래 서비스 · 검증 전 가상 사례",
    "body": "<div class=\"canvas-grid\"><div><b>문제</b><p>물품 상태와 운반 가능 여부를 확인하기 어렵다.</p></div><div><b>사용자</b><p>차 없이 첫 자취를 준비하는 학생</p></div><div><b>성공</b><p>필요한 정보를 보고 거래 가능성을 판단한다.</p></div><div><b>범위</b><p>물품 탐색·상태 정보<br>배송 연동은 제외</p></div><div><b>역량</b><p>화면 구현 경험 있음<br>이미지 저장은 도움 필요</p></div><div><b>역할</b><p>각 Issue에 담당·검토자를 지정한다.</p></div><div><b>완료 기준</b><p>정상·빈 상태·오류 화면과 동작을 확인한다.</p></div><div><b>기록</b><p>Issue에 링크<br>docs에 결정 이유</p></div><div><b>AI 범위</b><p>Issue 범위 안에서 구현<br>공통 계약 변경은 합의</p></div><div><b>검증 근거</b><p>사용자 관찰 기록<br>화면·테스트 결과</p></div></div><div class=\"paper-note\">명확하게 답하기 어려운 칸이 <strong>다음 회의에서 먼저 이야기할 주제</strong>입니다.</div>",
    "foot": ""
  },
  {
    "file": "closing-kyungpook.svg",
    "title": "함께 이해하는 첫 질문",
    "chapter": "마무리",
    "time": "38:00",
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
  if(key==='o')document.getElementById('overviewDialog').showModal();if(key==='f')fullscreen();
});
setCurrent(current);requestAnimationFrame(()=>go(current,true));
