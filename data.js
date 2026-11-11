// 表現データ。新しいものを配列の先頭に追加する。
window.EXPRESSIONS = [
  {
    ja: "やったことがあるのでフォローできます",
    en: "I've done it before, so I can help you set it up.",
    alt: ["I've set it up before, so I'm happy to help.", "I've done this before, so I can walk you through it.", "I have some experience with it, so feel free to reach out if you need help."],
    nuance: "フォロー は help / support。英語の follow は「ついていく・従う」の意味で、手助けの意味にならない。経験は現在完了 I've done / set it up before。walk you through は「手順を一緒に追って説明する」。I'm happy to help で押しつけ感がなくなる。",
    examples: ["I've set it up before, so I'm happy to help.", "How about using Power Automate as a temporary workaround? I've done it before, so I can walk you through it."],
    tags: ["business", "chat"],
    date: "2026-11-11"
  },
  {
    ja: "毎回キャプチャを貼るのは大変ですよね",
    en: "It must be a hassle to paste screenshots every time.",
    alt: ["I know it's a pain to paste screenshots every time.", "Pasting screenshots every time must be tedious.", "Pasting screenshots manually every time isn't ideal."],
    nuance: "キャプチャは screenshot（capture 単体は通じにくい）。大変 を hard / difficult にすると「難しい」になるので、手間なら hassle / pain / tedious。It must be ~ で相手の苦労を思いやる。いたわりの一言 → 提案 の順にすると押しつけ感がない。",
    examples: ["It must be a hassle to paste screenshots every time. How about using Power Automate as a temporary workaround?", "I know it's a pain to paste screenshots manually. Would it make sense to automate it for now?"],
    tags: ["business", "chat"],
    date: "2026-11-11"
  },
  {
    ja: "暫定対応として Power Automate を使いますか（提案）",
    en: "How about using Power Automate as a temporary workaround?",
    alt: ["Should we use Power Automate as a temporary workaround?", "Would it make sense to use Power Automate for now?", "As an interim solution, we could use Power Automate."],
    nuance: "「使いますか」を Do you use ~? と直訳すると「普段使っていますか」という習慣の質問になる。提案は How about ~ing? / Should we ~?。暫定対応は temporary workaround（回避策）、interim solution（つなぎの解決策・やや硬い）、stopgap（その場しのぎ・口語でややネガティブ）。",
    examples: ["How about using Power Automate as a temporary workaround until the model is ready?", "Would it make sense to use Power Automate for now? We can switch to a proper solution later."],
    tags: ["business", "chat"],
    date: "2026-11-11"
  },
  {
    ja: "（図を作ってもらい）担当者にトスして費用を算出してもらう",
    en: "I'd like to hand it off to them so they can estimate the costs.",
    alt: ["I'll pass it on to them to estimate the costs.", "Could you create a diagram using this as a pilot case?"],
    nuance: "トスする は hand it off to ~ / pass it on to ~。費用を算出する は calculate より estimate が自然。「モデルケース」は英語では pilot case / reference case（model case はあまり使わず、ML の model とも紛らわしい）。",
    examples: ["Could you create an architecture diagram using this system as a pilot case?", "I'd like to hand it off to the finance team so they can estimate the costs."],
    tags: ["business", "chat"],
    date: "2026-11-09"
  },
  {
    ja: "まずは〜できるようにしてください（理由も添えて依頼する）",
    en: "Could you set up ~ as a first step?",
    alt: ["For now, could you set up ~?", "I understand that ~ is also important."],
    nuance: "まずは は as a first step（第一段階として）か for now。「〜を試したい」は try out ~、「今のモデルでも捉えられる」は can already catch。相手の考えを受け止めるなら I understand that ~ を添えると角が立たない。",
    examples: ["Could you set up notifications to this group chat as a first step?", "I understand that improving the model's accuracy is also important."],
    tags: ["business", "chat"],
    date: "2026-11-09"
  },
  {
    ja: "このパラメータのウィンドウはローリングです（判定区間は固定ではない）",
    en: "This parameter uses a rolling window.",
    alt: ["The detection window isn't fixed — it's a rolling window.", "It's a rolling window, not a fixed one.", "The window rolls forward over time, rather than being fixed.", "It uses a sliding window to count knocks."],
    nuance: "ローリングは rolling window（sliding / moving window も同じ意味）。固定区間は fixed window。判定区間は detection window、評価区間なら evaluation window。not a fixed one と対比させると違いがはっきり伝わる。",
    examples: ["The detection window isn't fixed — it's a rolling window.", "The knock count is calculated over a rolling window, not a fixed one."],
    tags: ["business", "data"],
    date: "2026-11-05"
  },
  {
    ja: "ノック回数はこのパラメータでみているようです",
    en: "It looks like the knock count is tracked by this parameter.",
    alt: ["It looks like this parameter shows the knock count.", "The knock count seems to be monitored with this parameter.", "I think this is the parameter for the knock count."],
    nuance: "ノック回数は knock count。「みている」は see ではなく track / monitor（記録・監視している）。「～のようです」は It looks like ~ / seems to ~ で確信がないことを柔らかく伝える。",
    examples: ["It looks like the knock count is tracked by this parameter. Could you check if that's correct?", "I think this is the parameter for the knock count, but let me double-check with the team."],
    tags: ["business", "data"],
    date: "2026-11-03"
  },
  {
    ja: "連絡がきました。これです",
    en: "I heard back from the single-cylinder team. Here's the setup data.",
    alt: ["They got back to me — here it is.", "Sorry for the wait! Here's the setup data from the single-cylinder team.", "Just got it from the single-cylinder team. Please take a look."],
    nuance: "「連絡がきた」は hear back from ~ / get back to me。A contact came は通じない。前に送った I'll let you know once I hear back と対になる。待たせたときは Sorry for the wait! を添える。",
    examples: ["Sorry for the wait! I heard back from the single-cylinder team. Here's the setup data.", "They got back to me — here it is. Let me know if you need anything else."],
    tags: ["business", "chat"],
    date: "2026-11-03"
  },
  {
    ja: "単気筒メンバーに問い合わせているから待ってね",
    en: "I'm checking with the single-cylinder team. I'll get back to you soon.",
    alt: ["I've reached out to the single-cylinder team about the setup data. I'll let you know once I hear back.", "Let me check with the single-cylinder team and get back to you.", "Thanks for your patience — I'm still waiting on the single-cylinder team."],
    nuance: "単気筒は single-cylinder、「メンバー」は team が自然。問い合わせるは inquire より check with ~。「待ってね」は Please wait だと命令っぽいので、I'll get back to you / I'll let you know で伝える。待たせているときは Thanks for your patience でフォロー。",
    examples: ["I'm checking with the single-cylinder team about the setup data. I'll get back to you soon.", "Thanks for your patience — I'll send the setup data as soon as I hear back from them."],
    tags: ["business", "chat"],
    date: "2026-11-03"
  },
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
