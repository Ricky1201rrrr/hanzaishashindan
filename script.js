const questions = [
  {
    id: 1,
    text: "退屈で静かな空気が続くと、あなたはどうなりやすい？",
    options: [
      { label: "何かを始めて、とにかく空気を動かしたくなる", scoring: { impulse: 3, chaos: 1 } },
      { label: "目立つ一言や行動で場を変えたくなる", scoring: { performance: 2, chaos: 2 } },
      { label: "裏で流れを変える方法を考え始める", scoring: { control: 2, obsession: 1 } },
      { label: "表面上は静かでも、内心ずっと観察している", scoring: { obsession: 2, control: 1 } }
    ]
  },
  {
    id: 2,
    text: "誰かに注目される場面で、一番近い感覚は？",
    options: [
      { label: "見られているほど、むしろ燃える", scoring: { performance: 3 } },
      { label: "少し緊張するが、印象は残したい", scoring: { performance: 2, control: 1 } },
      { label: "前に出るより、流れを操る側にいたい", scoring: { control: 3 } },
      { label: "目立つより、相手の反応を観察したい", scoring: { obsession: 2, chaos: 1 } }
    ]
  },
  {
    id: 3,
    text: "気になる相手や物事ができたとき、あなたは？",
    options: [
      { label: "納得するまでずっと追い続ける", scoring: { obsession: 3 } },
      { label: "細かい変化や違和感を自然に拾ってしまう", scoring: { obsession: 2, control: 1 } },
      { label: "手に入るチャンスがあれば即動く", scoring: { impulse: 2, obsession: 1 } },
      { label: "あえて揺さぶって相手の反応を見る", scoring: { chaos: 2, performance: 1 } }
    ]
  },
  {
    id: 4,
    text: "グループで何かを進めるとき、理想の立ち位置は？",
    options: [
      { label: "全体の流れを決める人", scoring: { control: 3 } },
      { label: "前に立って場の空気を作る人", scoring: { performance: 3 } },
      { label: "必要なときに一気に動く切り込み役", scoring: { impulse: 3 } },
      { label: "水面下で仕込みを整える人", scoring: { control: 2, obsession: 1 } }
    ]
  },
  {
    id: 5,
    text: "誰かの発言に少し隙や矛盾を感じたとき、あなたは？",
    options: [
      { label: "つい一言入れて反応を見たくなる", scoring: { chaos: 3 } },
      { label: "その場では黙って覚えておく", scoring: { obsession: 2, control: 1 } },
      { label: "どう使えば流れを握れるか考える", scoring: { control: 3 } },
      { label: "面白くなるなら少し大げさに広げたくなる", scoring: { performance: 2, chaos: 2 } }
    ]
  },
  {
    id: 6,
    text: "思い通りにいかない状況で、最も出やすい反応は？",
    options: [
      { label: "考える前にまず動く", scoring: { impulse: 3 } },
      { label: "状況を立て直す筋書きを考える", scoring: { control: 3 } },
      { label: "空気をひっくり返す一手を入れたくなる", scoring: { chaos: 3 } },
      { label: "何がズレたのか細かく追いたくなる", scoring: { obsession: 3 } }
    ]
  },
  {
    id: 7,
    text: "人間関係で、あなたが無意識に気にしがちなものは？",
    options: [
      { label: "自分がどう見られているか", scoring: { performance: 3 } },
      { label: "誰が主導権を握っているか", scoring: { control: 3 } },
      { label: "相手の温度差や執着の深さ", scoring: { obsession: 3 } },
      { label: "崩せそうな均衡や張りつめた空気", scoring: { chaos: 3 } }
    ]
  },
  {
    id: 8,
    text: "勝負どころが来たとき、あなたに近いのは？",
    options: [
      { label: "迷う前に飛び込む", scoring: { impulse: 3 } },
      { label: "一番映える見せ場を取りにいく", scoring: { performance: 3 } },
      { label: "相手の動きを読んで有利を作る", scoring: { control: 2, obsession: 1 } },
      { label: "混乱した瞬間を狙って動く", scoring: { chaos: 2, impulse: 1 } }
    ]
  },
  {
    id: 9,
    text: "誰かの心を動かすなら、どの方法が一番しっくりくる？",
    options: [
      { label: "計算した言葉でじわじわ誘導する", scoring: { control: 3 } },
      { label: "強い印象を残して惹きつける", scoring: { performance: 3 } },
      { label: "忘れられないほど深く関わる", scoring: { obsession: 3 } },
      { label: "あえて揺さぶって感情を引き出す", scoring: { chaos: 3 } }
    ]
  },
  {
    id: 10,
    text: "あなたにとって『面白い展開』とは？",
    options: [
      { label: "予定外のことが起きて空気が変わること", scoring: { chaos: 3 } },
      { label: "自分の仕掛け通りに物事が進むこと", scoring: { control: 3 } },
      { label: "誰も無視できないほど目立てること", scoring: { performance: 3 } },
      { label: "一つの対象を深く追って核心に近づくこと", scoring: { obsession: 3 } }
    ]
  },
  {
    id: 11,
    text: "誰かに『危うい魅力がある』と言われたら、どう感じる？",
    options: [
      { label: "少しうれしい。印象に残るのは悪くない", scoring: { performance: 2, chaos: 1 } },
      { label: "自覚はある。勢いで振り切れる時がある", scoring: { impulse: 3 } },
      { label: "魅力というより、距離を取って見ているだけだと思う", scoring: { obsession: 2, control: 1 } },
      { label: "危うさも含めて計算のうちかもしれない", scoring: { control: 2, performance: 1 } }
    ]
  },
  {
    id: 12,
    text: "秘密を持つとしたら、どんな形になりやすい？",
    options: [
      { label: "誰にも言わず、長く抱え続ける", scoring: { obsession: 3 } },
      { label: "必要な場面で切り札に変える", scoring: { control: 3 } },
      { label: "少しだけ匂わせて反応を見る", scoring: { performance: 2, chaos: 1 } },
      { label: "衝動のまま抱えきれず動いてしまう", scoring: { impulse: 3 } }
    ]
  },
  {
    id: 13,
    text: "あなたが一番退屈に感じるのはどれ？",
    options: [
      { label: "何も起きず、空気がずっと平坦なまま", scoring: { chaos: 3 } },
      { label: "誰にも注目されず埋もれている状態", scoring: { performance: 3 } },
      { label: "主導権を持てず、流されるだけの状況", scoring: { control: 3 } },
      { label: "気になることを最後まで追えないこと", scoring: { obsession: 3 } }
    ]
  },
  {
    id: 14,
    text: "何かを手に入れたいと思ったとき、あなたは？",
    options: [
      { label: "今いけるならすぐ動く", scoring: { impulse: 3 } },
      { label: "最短で取れるタイミングを見極める", scoring: { control: 2, impulse: 1 } },
      { label: "手に入れた後にどう見えるかも考える", scoring: { performance: 3 } },
      { label: "簡単に諦めず、粘って追い続ける", scoring: { obsession: 3 } }
    ]
  },
  {
    id: 15,
    text: "あなたの裏側に一番近いキャッチコピーを選ぶなら？",
    options: [
      { label: "『まず動く。止まるのはその後だ』", scoring: { impulse: 3 } },
      { label: "『見られてこそ、存在は完成する』", scoring: { performance: 3 } },
      { label: "『気になったものは、終わるまで追う』", scoring: { obsession: 3 } },
      { label: "『静かな盤面ほど、動かしがいがある』", scoring: { control: 2, chaos: 1 } }
    ]
  }
];

const resultTypes = {
  "通り魔タイプ": {
    catch: "思いついた瞬間、もう心は走り出している。",
    description: "退屈や停滞を嫌い、空気が止まるほど自分から揺らしたくなるタイプ。理屈より反応が先に出やすく、勢いで場面を切り開く力があります。",
    strengths: "行動が速い / 空気を変える力がある / 迷いが少ない",
    weaknesses: "先走りやすい / 熱しやすく冷めやすい / 後先の詰めが甘くなりやすい",
    behavior: "迷うくらいなら動いてから考える。静かな場面ほど、何か起こしたくなる傾向。",
    role: "起爆剤 / トリックスター / 最初に動く者"
  },
  "喝采飢餓体": {
    catch: "見られない舞台では、本気になれない。",
    description: "人の反応や注目がエネルギーになるタイプ。存在感を示せる場で強く、印象に残るふるまいを自然に選びやすい傾向があります。",
    strengths: "華がある / 自己演出が上手い / 空気をつかむのが得意",
    weaknesses: "反応がないと不安定になりやすい / 評価に左右されやすい",
    behavior: "どう見えるかを無意識に考え、視線が集まる場ほどギアが上がる。",
    role: "カリスマ / 表舞台の悪役 / 劇場型ライバル"
  },
  "執着の追跡者": {
    catch: "気になったものを、簡単には手放さない。",
    description: "一度意識した対象を深く長く追い続ける集中型タイプ。広く浅くより、狭く深くに強く、変化や違和感にも敏感です。",
    strengths: "集中力が高い / 継続力がある / 細部に強い",
    weaknesses: "切り替えが苦手 / 視野が狭くなりやすい / 引きずりやすい",
    behavior: "納得できるまで調べる、追う、考える。人や物事の細部をよく拾う。",
    role: "追跡者 / 執念深いライバル / 忠実な執行者"
  },
  "支配の脚本家": {
    catch: "舞台の上より、舞台そのものを動かしたい。",
    description: "主導権や展開設計に強く惹かれるタイプ。人の動きや場の構造を読み、全体の流れを組み立てることに満足感を覚えやすいです。",
    strengths: "戦略性が高い / 先読みが得意 / 全体を見渡せる",
    weaknesses: "想定外に弱い / コントロール欲が強くなりやすい",
    behavior: "会話や流れを設計し、自分の予測通りに展開が進むと快感を覚える。",
    role: "黒幕 / 参謀 / 盤面の管理者"
  },
  "冷笑の観測者": {
    catch: "熱狂の輪に入るより、一歩引いて見ていたい。",
    description: "感情に飲まれず、距離を取って全体を見るタイプ。矛盾やズレ、人の演技や本音の揺れに気づきやすく、静かな鋭さを持っています。",
    strengths: "客観的 / 観察眼がある / 異変に気づきやすい",
    weaknesses: "冷たく見られやすい / 傍観者になりやすい",
    behavior: "盛り上がる場ほど一歩引き、心の中では静かにツッコミを入れている。",
    role: "観察者 / 毒舌参謀 / 真相を知る傍観者"
  },
  "破滅の希求者": {
    catch: "安全すぎる正解より、危うい魅力に惹かれる。",
    description: "安定より刺激、予定調和より振れ幅に魅力を感じやすいタイプ。少し危うい展開に、強い美しさやドラマを見出す傾向があります。",
    strengths: "熱量が高い / 印象に残る / 感情表現が強い",
    weaknesses: "極端に走りやすい / 平穏を退屈に感じやすい",
    behavior: "無難な正解では満足できず、どこかで“揺れる展開”を欲しがる。",
    role: "悲劇の中心 / 破滅型ライバル / 危険な魅力担当"
  },
  "掠奪の反射神経": {
    catch: "“今しかない”を見つけると、最速で手が伸びる。",
    description: "チャンスや抜け道への反応が非常に速い瞬発型。善悪より先に『取れるか』『勝てるか』に意識が向きやすく、勝負の勘に優れています。",
    strengths: "判断が速い / 機転が利く / 勝負所に強い",
    weaknesses: "せっかち / 譲るのが苦手 / 目先に寄りやすい",
    behavior: "迷っている間に先に押さえる。競争の空気になると急に強くなる。",
    role: "奪取役 / 現場のエース / 瞬発型ライバル"
  },
  "虚飾の拡声器": {
    catch: "本音そのものより、“映える物語”を増幅させる。",
    description: "事実そのものより、伝わり方や印象の設計が得意なタイプ。少し盛る、魅せる、空気を作ることにセンスがあり、話題性を生みやすいです。",
    strengths: "発信力が高い / 言葉に勢いがある / 印象操作が上手い",
    weaknesses: "大げさになりやすい / 見せ方を優先しすぎやすい",
    behavior: "静かな事実よりも、誰かの記憶に残る見せ方を選びがち。",
    role: "広報役 / 扇動者 / 語り部"
  },
  "挑発の点火役": {
    catch: "静かな空気を見ると、つい火花を散らしたくなる。",
    description: "平穏を少し揺らし、人の感情や場の均衡を動かすことに妙なセンスを持つタイプ。悪意というより、反応を見たい好奇心が先に立つこともあります。",
    strengths: "場を動かせる / 反応を引き出すのが上手い / 刺激を作れる",
    weaknesses: "余計な一言が増えやすい / 波風を立てすぎやすい",
    behavior: "少し攻めた一言や揺さぶりを入れて、空気の変化を楽しみやすい。",
    role: "煽り役 / 攪乱者 / 会話のトリックスター"
  },
  "暗躍の細工師": {
    catch: "正面突破より、水面下で仕込む方が得意。",
    description: "表立って主張するより、裏で準備し、見えない場所から流れを変えることを好むタイプ。細かな仕込みや工夫で有利を作る知性派です。",
    strengths: "準備が上手い / 器用 / 目立たず成果を出せる",
    weaknesses: "意図が見えにくい / 回りくどくなりやすい / 正面勝負が苦手",
    behavior: "先に裏で整えてから動く。周囲が見落とすポイントをいじるのが得意。",
    role: "細工役 / 潜伏参謀 / 静かな策士"
  }
};

const axisLabels = {
  impulse: "衝動性",
  performance: "演出性",
  obsession: "執着性",
  control: "支配性",
  chaos: "攪乱性"
};

const topScreen = document.getElementById("top-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const backBtn = document.getElementById("back-btn");
const retryBtn = document.getElementById("retry-btn");
const copyBtn = document.getElementById("copy-btn");

const progressText = document.getElementById("progress-text");
const progressPercent = document.getElementById("progress-percent");
const progressFill = document.getElementById("progress-fill");
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

const resultTypeName = document.getElementById("result-type-name");
const resultCatch = document.getElementById("result-catch");
const resultDescription = document.getElementById("result-description");
const resultStrengths = document.getElementById("result-strengths");
const resultWeaknesses = document.getElementById("result-weaknesses");
const resultBehavior = document.getElementById("result-behavior");
const resultRole = document.getElementById("result-role");
const axisBars = document.getElementById("axis-bars");
const shareText = document.getElementById("share-text");

let currentQuestionIndex = 0;
let answers = [];
let scores = createEmptyScores();

function createEmptyScores() {
  return {
    impulse: 0,
    performance: 0,
    obsession: 0,
    control: 0,
    chaos: 0
  };
}

function showScreen(screen) {
  [topScreen, quizScreen, resultScreen].forEach((el) => {
    el.classList.remove("active");
  });
  screen.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz() {
  currentQuestionIndex = 0;
  answers = [];
  scores = createEmptyScores();
  showScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  const question = questions[currentQuestionIndex];
  const total = questions.length;
  const current = currentQuestionIndex + 1;
  const percent = Math.round((currentQuestionIndex / total) * 100);

  progressText.textContent = `Q${current} / ${total}`;
  progressPercent.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;

  questionNumber.textContent = `QUESTION ${current}`;
  questionText.textContent = question.text;

  optionsContainer.innerHTML = "";

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.type = "button";
    button.textContent = option.label;
    button.addEventListener("click", () => selectAnswer(optionIndex));
    optionsContainer.appendChild(button);
  });

  backBtn.style.visibility = currentQuestionIndex === 0 ? "hidden" : "visible";
}

function selectAnswer(optionIndex) {
  answers[currentQuestionIndex] = optionIndex;

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
  } else {
    calculateResult();
  }
}

function calculateResult() {
  scores = createEmptyScores();

  questions.forEach((question, index) => {
    const selectedIndex = answers[index];
    const selectedOption = question.options[selectedIndex];
    Object.entries(selectedOption.scoring).forEach(([key, value]) => {
      scores[key] += value;
    });
  });

  const resultName = getResultType(scores);
  renderResult(resultName, scores);
  showScreen(resultScreen);
}

function getSortedAxes(scoreMap) {
  return Object.entries(scoreMap).sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    return a[0].localeCompare(b[0], "ja");
  });
}

function getResultType(scoreMap) {
  const sorted = getSortedAxes(scoreMap);
  const primary = sorted[0][0];
  const secondary = sorted[1][0];

  if (primary === "impulse" && secondary === "chaos") return "通り魔タイプ";
  if (primary === "impulse" && secondary === "control") return "掠奪の反射神経";
  if (primary === "impulse" && secondary === "performance") return "通り魔タイプ";
  if (primary === "impulse" && secondary === "obsession") return "掠奪の反射神経";

  if (primary === "performance" && secondary === "control") return "喝采飢餓体";
  if (primary === "performance" && secondary === "chaos") return "虚飾の拡声器";
  if (primary === "performance" && secondary === "impulse") return "喝采飢餓体";
  if (primary === "performance" && secondary === "obsession") return "虚飾の拡声器";

  if (primary === "obsession" && secondary === "control") return "冷笑の観測者";
  if (primary === "obsession" && secondary === "chaos") return "執着の追跡者";
  if (primary === "obsession" && secondary === "performance") return "執着の追跡者";
  if (primary === "obsession" && secondary === "impulse") return "執着の追跡者";

  if (primary === "control" && secondary === "performance") return "支配の脚本家";
  if (primary === "control" && secondary === "obsession") return "暗躍の細工師";
  if (primary === "control" && secondary === "impulse") return "支配の脚本家";
  if (primary === "control" && secondary === "chaos") return "暗躍の細工師";

  if (primary === "chaos" && secondary === "performance") return "挑発の点火役";
  if (primary === "chaos" && secondary === "impulse") return "破滅の希求者";
  if (primary === "chaos" && secondary === "control") return "挑発の点火役";
  if (primary === "chaos" && secondary === "obsession") return "破滅の希求者";

  return "冷笑の観測者";
}

function renderResult(resultName, scoreMap) {
  const result = resultTypes[resultName];
  resultTypeName.textContent = resultName;
  resultCatch.textContent = result.catch;
  resultDescription.textContent = result.description;
  resultStrengths.textContent = result.strengths;
  resultWeaknesses.textContent = result.weaknesses;
  resultBehavior.textContent = result.behavior;
  resultRole.textContent = result.role;

  renderAxisBars(scoreMap);
  shareText.value = createShareText(resultName, result.catch);
}

function renderAxisBars(scoreMap) {
  axisBars.innerHTML = "";
  const maxScore = Math.max(...Object.values(scoreMap), 1);

  Object.entries(axisLabels).forEach(([key, label]) => {
    const row = document.createElement("div");
    row.className = "axis-row";

    const axisLabel = document.createElement("div");
    axisLabel.className = "axis-label";
    axisLabel.textContent = label;

    const track = document.createElement("div");
    track.className = "axis-track";

    const value = document.createElement("div");
    value.className = "axis-value";
    value.style.width = `${(scoreMap[key] / maxScore) * 100}%`;

    const score = document.createElement("div");
    score.className = "axis-score";
    score.textContent = scoreMap[key];

    track.appendChild(value);
    row.appendChild(axisLabel);
    row.appendChild(track);
    row.appendChild(score);
    axisBars.appendChild(row);
  });
}

function createShareText(resultName, catchText) {
  return `裏人格診断の結果は「${resultName}」でした。
${catchText}

15問でわかる、ダークファンタジー風のフィクション診断。
#裏人格診断 #性格診断 #診断サイト`;
}

function goBack() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex -= 1;
    renderQuestion();
  }
}

async function copyResultText() {
  try {
    await navigator.clipboard.writeText(shareText.value);
    copyBtn.textContent = "コピーしました";
    setTimeout(() => {
      copyBtn.textContent = "結果をコピー";
    }, 1600);
  } catch (error) {
    shareText.select();
    document.execCommand("copy");
    copyBtn.textContent = "コピーしました";
    setTimeout(() => {
      copyBtn.textContent = "結果をコピー";
    }, 1600);
  }
}

startBtn.addEventListener("click", startQuiz);
backBtn.addEventListener("click", goBack);
retryBtn.addEventListener("click", startQuiz);
copyBtn.addEventListener("click", copyResultText);