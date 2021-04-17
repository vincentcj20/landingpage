
var url = 'assets/js/shopifyWidget.js';
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
var options = {
    "enabled": true,
    "chatButtonSetting": {
        "backgroundColor": "#0bda12",
        "ctaText": "Kontak kami!",
        "borderRadius": "25",
        "marginLeft": "0",
        "marginBottom": "50",
        "marginRight": "50",
        "position": "left"
    },
    "brandSetting": {
        "brandName": "Vincent CJ",
        "brandSubTitle": "Never replies fast",
        "brandImg": "assets/img/logo.png",
        "welcomeText": "Ada yang bisa dibantu?",
        "messageText": "Halo, saya punya pertanyaan tentang ......",
        "backgroundColor": "#0a5f54",
        "ctaText": "Kirim chat",
        "borderRadius": "25",
        "autoShow": false,
        "phoneNumber": "628127487007"
    }
};
s.onload = function () {
    CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);