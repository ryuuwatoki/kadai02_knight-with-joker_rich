var button = document.getElementById("click1");
var buttonSound = document.getElementById("buttonSound");

button.addEventListener("click", function(event) {
    event.preventDefault(); // 阻止链接的默认行为

    buttonSound.play();

    buttonSound.addEventListener("ended", function() {
        // 音频播放结束后，执行页面导航
        window.location.href = "poker_game_cn.html";
    });
});
