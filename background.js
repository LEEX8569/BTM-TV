const userId = 84021070;
const clientId = 'j7yteirysp8cqb2fqnrelzztk2tnft';
const token = '9oavu5egoh81h85820ftyq8zv4v9rd';

const url = `https://api.twitch.tv/helix/streams?user_id=${userId}`;
const twitchUrl = "https://www.twitch.tv/wipr";
const headers = {
    'Authorization': `Bearer ${token}`,
    'Client-ID': clientId
}

let isLiveOn = false;

const cb = function (json) {
    if (json.data.length && !isLiveOn) {
        setIcon('images/live_on.png');
        chrome.notifications.create('LiveOn', {
            title: 'WIPR EST EN LIVE !',
            iconUrl: 'images/live_on.png',
            message: 'Rejoins le live dès maintenant !',
            type: 'basic'
        });
        isLiveOn = true;
    } else {
        setIcon('images/BTM-32.png');
        isLiveOn = false;
    }
}

function fetchTwitchAPI(url, headers, cb) {
    fetch(url, {
        headers: headers
    }).then((response) => {
        return response.json();
    }).then((json) => cb(json));
}

function setIcon(path) {
    chrome.action.setIcon({ path: path });
}

fetchTwitchAPI(url, headers, cb);

chrome.notifications.onClicked.addListener(() => {
    chrome.tabs.create({
        url: twitchUrl
    })
});

chrome.alarms.create({ periodInMinutes: 1 });

chrome.alarms.onAlarm.addListener(() => {
    fetchTwitchAPI(url, headers, cb);
});