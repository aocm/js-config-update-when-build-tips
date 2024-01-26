# 想定する利用シーン
ビルドツールをつかわず生のJavaScriptファイルを開発しているとき、環境ごとにJSファイルのパラメータ書き換えて出力したい。

## 動作確認環境の立ち上げ方
`docker-compose up -d`
でコンテナを立ち上げ、

`docker exec -it test-node-app /bin/sh`
でコンテナの中で作業ができる
マウントしているためVSCodeでも対応が可能

## 実行例 

条件1 更新するテキストが下記の時
```js
const text = `
const hoge1 = ${process.env.HOGE_1};
const hoge2 = ${process.env.HOGE_2};
const hoge3 = ${process.env.HOGE_3};
const hoge4 = ${process.env.HOGE_4};
const hoge5 = ${process.env.HOGE_5};
const hoge6 = ${process.env.HOGE_6};
`
```

条件2 環境変数が下記のとき
1,2だけ正常に環境変数になっている

```
/app # HOGE_1=hoge1
/app # HOGE_2=hoge2
/app # HOGE_3=hoge3
/app # export HOGE_1
/app # export HOGE_2

```
実行結果
```
/app # node config-output-tool.js 
write end
```
```js
const hoge1 = hoge1;
const hoge2 = hoge2;
const hoge3 = undefined;
const hoge4 = undefined;
const hoge5 = undefined;
const hoge6 = undefined;
```
