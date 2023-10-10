function getElement() {
    chrome.storage.local.get(['HOOKS_URL', 'IN_WORK_MESSAGE', 'OUT_WORK_MESSAGE'], function (result) {
        if (result.HOOKS_URL) {
        document.getElementById('hooksURL').value = result.HOOKS_URL;
        }
        if (result.IN_WORK_MESSAGE) {
            document.getElementById('inWorkMessage').value = result.IN_WORK_MESSAGE;
        }
        if (result.OUT_WORK_MESSAGE) {
            document.getElementById('outWorkMessage').value = result.OUT_WORK_MESSAGE;
        }
    });

    document.getElementById('save').addEventListener('click', function () {
        const hooksURLValue = document.getElementById('hooksURL').value;
        const inWorkMessageValue = document.getElementById('inWorkMessage').value;
        const outWorkMessageValue = document.getElementById('outWorkMessage').value;

        // Save to chrome.storage.local
        chrome.storage.local.set({
            'HOOKS_URL': hooksURLValue,
            'IN_WORK_MESSAGE': inWorkMessageValue,
            'OUT_WORK_MESSAGE': outWorkMessageValue
        }, function () {
            console.log('saved!')
            alert('Settings saved!');
        });
    });

    document.getElementById('test').addEventListener('click', function () {
        postToSlackTest();
    });
}

function setKintaiListener() {
    let inw = document.getElementsByClassName('record-btn-inner record-clock-in');
    inw[0].addEventListener('click', function () {
        postToSlackInWork();
    }, false);

    let out = document.getElementsByClassName('record-btn-inner record-clock-out');
    out[0].addEventListener('click', function () { 
        postToSlackOutWork();
    }, false); 
}


function postToSlackTest() {
    chrome.storage.local.get("HOOKS_URL", function (value) {
        const url = value.HOOKS_URL;
        const testMessage = "テスト成功！";

        myFetch(url, testMessage);
    });
};


function postToSlackInWork() {
    chrome.storage.local.get(["HOOKS_URL", "IN_WORK_MESSAGE"], function (value) {
        const url = value.HOOKS_URL;
        const inMessage = value.IN_WORK_MESSAGE;

        myFetch(url, inMessage);
    });
};


function postToSlackOutWork() {
    chrome.storage.local.get(["HOOKS_URL", "OUT_WORK_MESSAGE"], function (value) {
        const url = value.HOOKS_URL;
        const outMessage = value.OUT_WORK_MESSAGE;

        myFetch(url, outMessage);
    });
};


async function myFetch(url, message) {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({text: message})
    })
        .catch(error => {
            console.error('Slackへのリクエストがエラーになりました。:', error);
        });
}

document.addEventListener('DOMContentLoaded', function(){
    getElement();
});

setTimeout(() => setKintaiListener(), 1000);
