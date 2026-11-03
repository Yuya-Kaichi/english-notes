// 表現データ。新しいものを配列の先頭に追加する。
window.EXPRESSIONS = [
  {
    ja: "これです、確認してね",
    en: "Here it is. Please take a look.",
    alt: ["Here you go — please take a look.", "Please see the image and link below.", "Here's the link and a screenshot. Let me know what you think.", "Could you check this when you get a chance?"],
    nuance: "「確認して」を confirm にするのは間違いやすい（confirm は承認・確定の意味）。見てほしいなら take a look か check。チャットで貼ったものは attached より above / below で指す。when you get a chance で急がせない。",
    examples: ["Here it is. Please take a look and let me know if anything's unclear.", "Please see the screenshot and link above. Could you check it when you get a chance?"],
    tags: ["business", "chat"],
    date: "2026-11-03"
  },
  {
    ja: "どのセッションファイル（を見ている）？",
    en: "Which session file are you looking at?",
    alt: ["Which session are you looking at?", "Could you tell me which session file you're using?", "Could you share the file name or path?", "Are we looking at the same session?"],
    nuance: "「見ている」は see ではなく look at。候補の中から1つを聞くので what より which。ファイル名やパスを正確に知りたいときは share the file name or path、話が噛み合わないときは Are we looking at the same session? で確認する。",
    examples: ["Which session file are you looking at? I'm seeing different values on my end.", "Could you share the file name or path, so I can check the same data?"],
    tags: ["business", "data"],
    date: "2026-11-03"
  },
  {
    ja: "知りたいパラメータの名称を教えてください",
    en: "Could you tell me the names of the parameters you need?",
    alt: ["Which parameters are you looking for?", "Could you let me know the exact parameter names?", "Could you send me a list of the parameters you need?"],
    nuance: "直訳の the parameters you want to know は不自然。need / are looking for を使う。名前を正確に知りたいときは exact を付け、複数ありそうならリストで頼む。",
    examples: ["Could you tell me the names of the parameters you need? I'll pull the data for you.", "Could you let me know the exact parameter names, so I can find them in the database?"],
    tags: ["business", "data"],
    date: "2026-11-03"
  },
  {
    ja: "英語でいいよ",
    en: "English is fine.",
    alt: ["Feel free to write it in English.", "No need to do it in Japanese.", "English is totally fine."],
    nuance: "資料作成などを頼むときは Feel free to ~ が柔らかく自然。No need to do it in Japanese は「日本語にする手間はいらない」と負担を減らす気遣いが伝わる。totally を付けると「本当に大丈夫」の安心感が出る。",
    examples: ["Could you put together the slides? Feel free to write them in English.", "English is totally fine — no need to translate it into Japanese."],
    tags: ["business"],
    date: "2026-11-03"
  },
  {
    ja: "根回しする",
    en: "get buy-in beforehand",
    alt: ["lay the groundwork", "build consensus in advance"],
    nuance: "nemawashi はそのままだと通じにくい。会議前に関係者の合意を取っておく、なら get buy-in が自然。",
    examples: ["I'll talk to the managers first to get their buy-in."],
    tags: ["business"],
    date: "2026-11-03"
  },
  {
    ja: "お疲れさまです",
    en: "Hi / Thanks for your hard work",
    alt: ["Good work today", "Thanks, everyone"],
    nuance: "万能の決まり文句は英語にない。挨拶なら Hi、労いなら Thanks for your hard work、帰り際なら Have a good evening など場面で使い分ける。",
    examples: ["Thanks for your hard work on the report.", "Good work today, see you tomorrow."],
    tags: ["business", "greeting"],
    date: "2026-11-03"
  },
  {
    ja: "寝かしつける",
    en: "put (someone) to bed",
    alt: ["get the kids down", "put the baby down"],
    nuance: "put the baby down は「寝かせる（ベッドに置く）」の口語。get the kids down for a nap で昼寝させる。",
    examples: ["I'm putting the kids to bed now.", "It took an hour to get her down for a nap."],
    tags: ["daily", "parenting"],
    date: "2026-11-03"
  }
];
