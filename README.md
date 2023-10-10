# KINTAI_slack_from_KING_OF_TIME

KING OF TIMEの出退勤をSlackにポストするchrome拡張機能

## 使い方

まずは Slack Botが必要。[Slack Applications](https://api.slack.com/apps)からBotと便利なHOOKS_URLを用意しておきたい。

多分こーゆー記事の通りで作れる。日本語をBot名に入れたら作成できないので注意

- [SlackでOAuthを使用したAppを作成してTokenを取得 | Qiita](https://qiita.com/hiren/items/c8ffa3f9de58b80ba5da)

作ったら、Slack ApplicationsにはBotがいるはず

![yourapps](https://user-images.githubusercontent.com/141133794/271910312-f0d83ef4-a559-4abd-804c-48a36c8bd33a.png)


あんまメンテするモチベはないので拡張機能を公開しません。コードをローカルに入れてください。お願いします。なんでもしますから。

```
git clone git@github.com:okmtdev/KINTAI_slack_from_KING_OF_TIME.git
```

「chrome://extensions/」をChromeのアドレスバーに打ち込む

右上にあるデベロッパーモードを…

![off](https://user-images.githubusercontent.com/141133794/271910387-2e26c17c-eba2-47fb-9734-3622f5ee44d3.png)

ON!

![on](https://user-images.githubusercontent.com/141133794/271910409-0593aed8-8bf3-4eb5-83bb-0773c3d0589c.png)

「パッケージ化されていない拡張機能を読み込む」で、さっきcloneしたレポジトリにあるextensionを指定

![folder](https://user-images.githubusercontent.com/141133794/271910486-2a57bc97-010b-425d-9c9c-a614c7a64f3a.png)

読み込めたらこんなのが出てくる。右下のトグルがオンになっていることを確認する

![extension](https://user-images.githubusercontent.com/141133794/271910456-f7b0ea6f-feba-4703-a70e-6b8c276922c3.png)

KING OF TIME を開き、Slackのアイコンマークの「KINTAI_SLACK_FROM_KING_OF_TIME」をクリックする

![application](https://user-images.githubusercontent.com/141133794/273924780-e8bc82c5-0e38-404a-924e-6a3731cc89ca.png)

|変数|集め方|
|-|-|
|Hooks URL|Slack Application > OAuth & Permissions > Bot User OAuth Token|
|出勤時メッセージ|お好きに。|
|退勤時メッセージ|お好きに。|

「テスト投稿」ボタンで「テスト成功！」というメッセージをボットが呟いてくれます。

![slacktest](https://user-images.githubusercontent.com/141133794/273924810-4eaeeb6d-3aa9-4412-9290-abb40c05bf94.png)

ここまでできたら、KING OF TIME から打刻を行ってください。

URLは「`https://s2.ta.kingoftime.jp/independent/recorder2/personal/`」からのみ動作するようになっているので、
それ以外のURLからKING OF TIMEを利用する場合は、manifest.jsonを修正してください。
