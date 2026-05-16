const questions = [
    // E vs I (외향/내향)
    { q: "주말에 꿀 같은 자유시간! 나는 어떻게 보낼까?", a: { text: "친구들과 만나서 신나게 놀고 에너지를 얻는다.", type: "E" }, b: { text: "집에서 혼자 좋아하는 취미를 즐기며 푹 쉰다.", type: "I" } },
    { q: "새로운 학기, 모둠 활동을 할 때 나는?", a: { text: "먼저 의견을 내고 모둠의 분위기를 활기차게 이끈다.", type: "E" }, b: { text: "친구들의 의견을 주의 깊게 듣고 내 생각을 정리한다.", type: "I" } },
    { q: "새로운 반에 배정되어 아는 친구가 없을 때 나는?", a: { text: "주변 친구들에게 먼저 다가가서 인사를 건넨다.", type: "E" }, b: { text: "누군가 다가와 주기를 기다리며 반 분위기를 관찰한다.", type: "I" } },
    
    // S vs N (감각/직관)
    { q: "친구들과 소풍 계획을 세울 때 나는?", a: { text: "어디서 뭘 먹고 몇 시에 만날지 꼼꼼하고 현실적으로 짠다.", type: "S" }, b: { text: "일단 재밌을 것 같은 큰 그림과 아이디어부터 마구 던진다.", type: "N" } },
    { q: "수업을 들을 때 나는 주로 어떤 생각에 빠질까?", a: { text: "선생님이 설명해주시는 사실과 개념 그 자체에 집중한다.", type: "S" }, b: { text: "설명을 듣다가 꼬리에 꼬리를 무는 새로운 상상에 빠진다.", type: "N" } },
    { q: "새로운 물건을 조립하거나 요리를 할 때 나는?", a: { text: "설명서에 적힌 순서대로 정확하게 따라 하는 편이다.", type: "S" }, b: { text: "내 감을 믿고 나만의 창의적인 방법으로 시도해 본다.", type: "N" } },
    
    // T vs F (사고/감정)
    { q: "친구가 '나 시험 망쳐서 너무 우울해...'라고 할 때 나의 반응은?", a: { text: "'몇 점 맞았어? 다음엔 어떤 과목을 더 열심히 해볼까?' (해결책 제시)", type: "T" }, b: { text: "'진짜 속상하겠다. 노력 많이 했는데 어떡해 ㅠㅠ' (폭풍 공감)", type: "F" } },
    { q: "친구들 사이에서 의견이 갈릴 때, 나에게 더 중요한 기준은?", a: { text: "무엇이 더 논리적이고 공정하고 맞는 말인가?", type: "T" }, b: { text: "누구 하나 마음 다치거나 기분 상하는 친구는 없는가?", type: "F" } },
    { q: "슬픈 영화를 보고 나서 친구와 이야기할 때 나는?", a: { text: "'주인공이 저기서 저렇게 행동하는 건 앞뒤가 안 맞지 않아?'", type: "T" }, b: { text: "'주인공의 슬픈 마음이 너무 이해돼서 나도 모르게 눈물이 났어.'", type: "F" } },
    
    // J vs P (판단/인식)
    { q: "시험 기간이 다가왔다! 공부를 시작할 때 나는?", a: { text: "과목별로 언제 무엇을 할지 날짜와 시간을 정해 계획표부터 만든다.", type: "J" }, b: { text: "그날그날 끌리는 과목을 골라서 융통성 있게 공부한다.", type: "P" } },
    { q: "현재 내 방(또는 책상)의 상태는 어떤가요?", a: { text: "물건들이 항상 정해진 자리에 깔끔하게 정리되어 있다.", type: "J" }, b: { text: "조금 어수선해 보여도 나는 어디에 뭐가 있는지 다 알고 있다.", type: "P" } },
    { q: "친구와 만나기로 한 약속 시간이 다가올 때 나는?", a: { text: "지각하는 것이 싫어서 미리미리 준비하고 일찍 나선다.", type: "J" }, b: { text: "여유를 부리다가 시간에 딱 맞춰서 혹은 아슬아슬하게 나선다.", type: "P" } }
];

const results = {
    "ISTJ": { sage: "율곡 이이", quote: "지극한 정성은 쉼이 없다. (지성무식)", desc: "강한 책임감과 원칙을 지키는 당신! 꾸준하고 성실한 노력이 결국 큰 뜻을 이룬다는 율곡 선생님의 말씀이 딱 어울려요." },
    "ISFJ": { sage: "백범 김구", quote: "남을 대할 때는 봄바람처럼, 나를 대할 때는 가을 서리처럼 하라.", desc: "따뜻한 배려심을 가진 당신! 타인에게는 관대하고 자신에게는 엄격했던 선비들의 올곧은 마음가짐을 닮았네요." },
    "INFJ": { sage: "세종대왕", quote: "뿌리 깊은 나무는 바람에 흔들리지 아니하므로...", desc: "깊은 통찰력과 확고한 신념을 가진 당신! 용비어천가의 구절처럼, 어떤 시련에도 흔들리지 않는 내면의 힘이 있어요." },
    "INTJ": { sage: "퇴계 이황", quote: "학문은 물을 거슬러 배를 젓는 것과 같아서, 나아가지 않으면 퇴보한다.", desc: "늘 발전을 꿈꾸는 지적이고 전략적인 당신! 끊임없이 탐구하고 나아가려 했던 퇴계 선생님의 학구열을 가졌습니다." },
    "ISTP": { sage: "다산 정약용", quote: "실용적이지 않으면 진짜 학문이 아니다.", desc: "현실적이고 적응력이 뛰어난 당신! 삶에 진짜 도움이 되는 것을 추구했던 다산 선생님의 실학 정신과 통하네요." },
    "ISFP": { sage: "나태주 시인", quote: "자세히 보아야 예쁘다. 오래 보아야 사랑스럽다. 너도 그렇다.", desc: "부드럽고 따뜻한 감성을 지닌 당신! 주변의 작고 소중한 것들을 사랑할 줄 아는 아름다운 마음을 가졌어요." },
    "INFP": { sage: "윤동주 시인", quote: "별을 노래하는 마음으로 모든 죽어가는 것을 사랑해야지.", desc: "순수한 이상과 아름다운 가치를 좇는 당신! 윤동주 시인처럼 맑고 따뜻하게 세상을 바라보는 눈을 가졌습니다." },
    "INTP": { sage: "율곡 이이", quote: "널리 배우고, 깊이 묻고, 신중하게 생각하라.", desc: "호기심이 많고 논리적인 분석가인 당신! 사물의 이치를 깊이 탐구하고 진리를 찾으려는 모습이 율곡 선생님을 닮았어요." },
    "ESTP": { sage: "율곡 이이", quote: "뜻을 세우는 것보다 더 중요한 것은 없다.", desc: "에너지가 넘치고 행동력이 뛰어난 당신! 일단 목표가 생기면 거침없이 실행에 옮기는 멋진 추진력을 가졌군요." },
    "ESFP": { sage: "최제우 (동학)", quote: "사람이 곧 하늘이다. (인내천)", desc: "사람을 좋아하고 언제나 주변을 즐겁게 해주는 당신! 모든 사람을 귀하게 여겼던 동학의 평등하고 따뜻한 마음과 어울려요." },
    "ENFP": { sage: "소파 방정환", quote: "어린이는 어른보다 한 시대 더 새로운 사람입니다.", desc: "창의적이고 열정 넘치는 당신! 늘 새로운 가능성을 믿고 아이들의 밝은 미래를 그렸던 방정환 선생님처럼 통통 튀는 매력이 있어요." },
    "ENTP": { sage: "다산 정약용", quote: "배우는 사람은 모름지기 마음속에 의심을 품어야 한다.", desc: "기발한 아이디어로 똘똘 뭉친 당신! '왜 그럴까?' 질문을 던지며 기존의 틀을 깨고 발전했던 다산 선생님의 창의력을 닮았네요." },
    "ESTJ": { sage: "안중근 의사", quote: "하루라도 책을 읽지 않으면 입안에 가시가 돋는다.", desc: "규칙을 잘 지키고 성실하게 실천하는 당신! 스스로와의 약속을 철저히 지켰던 안중근 의사의 굳센 의지와 어울려요." },
    "ESFJ": { sage: "세종대왕", quote: "백성이 나를 비판한 내용이 옳다면, 그것은 나의 관대함을 보여주는 것이다.", desc: "친절하고 친구들과의 화합을 중요시하는 당신! 다른 사람의 의견에 귀 기울이고 배려했던 세종대왕의 따뜻한 리더십을 가졌어요." },
    "ENFJ": { sage: "세종대왕", quote: "백성이 화락하면 나도 화락하다.", desc: "친구들을 이끌어주고 마음을 잘 알아주는 당신! 모두가 함께 행복해지기를 바랐던 세종대왕의 진정한 이타심과 리더십이 보입니다." },
    "ENTJ": { sage: "이순신 장군", quote: "신에게는 아직 열두 척의 배가 남아있사옵니다.", desc: "단단한 결단력과 카리스마 넘치는 지도자! 어려운 상황에서도 포기하지 않고 승리를 이끄는 이순신 장군님의 불굴의 의지를 닮았어요." }
};

let currentQuestionIndex = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

function startTest() {
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('question-screen').classList.add('active');
    currentQuestionIndex = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestionIndex];
    document.getElementById('question-text').innerText = `Q${currentQuestionIndex + 1}. ${q.q}`;
    
    const btnA = document.getElementById('option-a');
    const btnB = document.getElementById('option-b');
    
    btnA.innerText = q.a.text;
    btnB.innerText = q.b.text;
    
    // 버튼에 현재 선택지의 타입(E, I 등)을 숨겨둠
    btnA.dataset.type = q.a.type;
    btnB.dataset.type = q.b.type;

    // 진행률 표시
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
}

function selectOption(choice) {
    const selectedType = document.getElementById(`option-${choice.toLowerCase()}`).dataset.type;
    scores[selectedType]++;
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('question-screen').classList.remove('active');
    document.getElementById('result-screen').classList.add('active');
    
    // MBTI 계산
    let mbti = "";
    mbti += (scores.E >= scores.I) ? "E" : "I";
    mbti += (scores.S >= scores.N) ? "S" : "N";
    mbti += (scores.T >= scores.F) ? "T" : "F";
    mbti += (scores.J >= scores.P) ? "J" : "P";
    
    const resultData = results[mbti];
    
    document.getElementById('mbti-result').innerText = mbti;
    document.getElementById('sage-name').innerText = resultData.sage;
    document.getElementById('sage-quote').innerText = `"${resultData.quote}"`;
    document.getElementById('quote-desc').innerText = resultData.desc;
}

function restartTest() {
    document.getElementById('result-screen').classList.remove('active');
    document.getElementById('start-screen').classList.add('active');
}
