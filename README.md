# Testting Tutorial with Jest!!
JavaScript Testting Framework
[OFFICIAL](https://jestjs.io/ja/)

- testRegex
どのファイルをテストするかを指定可能

```/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$```
デフォルト設定されており、__tests__フォルダの配下にある拡張子がjsのファイルもしくは、プロジェクトルート配下の.test.js もしくは .spec.js等で終わるファイルがテスト対象として認識されます。

# How to write
```
test("TestCaseTitle テストケース名", () => {
  処理
  expect(対象の処理・変数).Matcher();
});
```

## Methods
- expect()


## Matcher
- not
否定
- toBe()
primitive型に利用

- toBeFalsy()

- toBeNull()

- toEqual()

- toBeLessThanOrEqual()

- toBeGreaterThanOrEqual()

- toMatch()
正規表現などで一致するかチェック

- toContain()

- assertions()
非同期処理の場合必要
