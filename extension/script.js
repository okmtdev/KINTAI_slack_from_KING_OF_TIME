const HOOKS_URL = ''; // Bot作成後、Slack Application > OAuth & Permissions > Bot User OAuth Token
const CHANNEL = ''; // チャンネル名。正しくなくても動作はする。
const CHANNEL_ID = '';  // チャンネルのID。チャンネルで右クリックでリンクをコピーすれば分かる
const IN_WORK_MESSAGE = '今日も一日頑張るぞい！:ok_neko:';
const OUT_WORK_MESSAGE = 'お疲れ様です！:nekochan:';


async function postToSlack(message) {
	const data = {
        text: message
    };

    fetch(HOOKS_URL, {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // 下のメッセージはお好みでコメントアウトしてください。
        window.alert(`"${CHANNEL}"にメッセージ "${message}" が投稿されました。`);
    })
    .catch(error => {
        console.error('Slackへのリクエストがエラーになりました。:', error);
    });
};

function set_event_listener() {
    const inw = document.getElementsByClassName('record-btn-inner record-clock-in');
    inw[0].addEventListener('click', function() { postToSlack(IN_WORK_MESSAGE) }, false);

    var out = document.getElementsByClassName('record-btn-inner record-clock-out');
    out[0].addEventListener('click', function(){postToSlack(OUT_WORK_MESSAGE)}, false);

    // 下のメッセージはお好みでコメントアウトしてください。
    window.alert(`打刻時に${CHANNEL}チャンネルに出動ログが表示されます。`);
};

setTimeout(() => set_event_listener(), 1000);