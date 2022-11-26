const appLocation = "https://app.virtualxt.org";
const jsonPromis = fetch("games/games.json").then((response) => response.json());

var games = null;
var currentGame = null;
var currentGameIndex = 0;

window.onload = () => {
    jsonPromis.then((json) => {
        currentGameIndex = Math.floor(Math.random() * json.length);
        currentGame = json[currentGameIndex];
        games = json;
        updateGame();
    });
};

function updateGame() {
    const description = document.getElementById("game-description");
    const screenshot = document.getElementById("game-screenshot");
    const header = document.getElementById("game-name");

    const maxWidth = 18;
    header.innerText = (currentGame.title.length <= maxWidth) ? currentGame.title : currentGame.title.substring(0, maxWidth - 3) + "_";
    description.innerText = currentGame.description;

    screenshot.src = "games/" + currentGame.screenshot;

    var url = appLocation + "?img=https%3A//realmode.games/games/" + currentGame.bin;
    if (currentGame.options)
        url += "&" + currentGame.options;
    screenshot.parentNode.href = url;
}

function prevGame() {
    if (!currentGame)
        return;
    currentGameIndex--;
    if (currentGameIndex < 0) {
        currentGameIndex = games.length - 1;
    }
    currentGame = games[currentGameIndex];
    updateGame();
}

function nextGame() {
    if (!currentGame)
        return;
    currentGameIndex++;
    if (currentGameIndex >= games.length) {
        currentGameIndex = 0;
    }
    currentGame = games[currentGameIndex];
    updateGame();
}

function playGame() {
    if (!currentGame)
        return;
    var url = appLocation + "?img=https%3A//realmode.games/games/" + currentGame.bin;
    if (currentGame.options)
        url += "&" + currentGame.options;
    window.open(url, "_blank");
}