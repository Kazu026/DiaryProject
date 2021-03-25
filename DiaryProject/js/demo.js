var events = [
  {'Date': new Date(2021, 2, 18), 'Title': '資格取得セミナー午後2時からセンタービル'},
  {'Date': new Date(2021, 2, 28), 'Title': '●●イベント開催', 'Link': 'https://yahoo.co.jp/'},
  {'Date': new Date(2021, 2, 30), 'Title': '〇〇企画創業20周年記念', 'Link': 'https://www.google.com/'},
];

var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);
