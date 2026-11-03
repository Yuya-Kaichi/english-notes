# English Notes

「これって英語でなんて言う？」の回答を貯めるリポジトリ。
`index.html` が閲覧ページ（GitHub Pages で公開）、`data.js` がデータ。

## 質問されたときの手順

ユーザーが「〇〇って英語でなんて言う？」と聞いたら：

1. 日本語で回答する（自然な英語表現・言い換え・ニュアンスの違い・例文）
2. `data.js` の `window.EXPRESSIONS` 配列の**先頭**に1件追加する
3. `git add data.js && git commit -m "Add: <日本語>"` でコミットし、`git push` する

既に同じ日本語の表現がある場合は、新規追加せず既存エントリに言い換えや例文を足す。

## エントリの書式

```js
{
  ja: "根回しする",                     // 日本語（質問された言葉）
  en: "get buy-in beforehand",          // 一番おすすめの英語
  alt: ["lay the groundwork"],          // 言い換え（0件以上）
  nuance: "使い分けやニュアンスの説明（日本語）",
  examples: ["英語の例文（1〜2文）"],
  tags: ["business"],                   // 既存タグを優先して使う
  date: "YYYY-MM-DD"                    // 追加した日
}
```

- タグの例: `business` `daily` `parenting` `greeting` `email` `meeting` `idiom` `slang`
- 例文は読み上げられるので、自然で短い文にする
- 公開リポジトリなので、社名・社内プロジェクト名・人名などの固有情報を例文に入れない
