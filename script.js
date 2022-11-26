const appLocation = "https://app.virtualxt.org";
const jsonPromis = fetch("games/games.json").then((response) => response.json());

var games = null;
var currentGame = null;
var currentGameIndex = 0;

window.onload = () => {
    jsonPromis.then((json) => {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has("game"))
            currentGameIndex = Math.min(Math.abs(parseInt(urlParams.get("game"))), json.length - 1);
        else
            currentGameIndex = Math.floor(Math.random() * json.length);

        currentGame = json[currentGameIndex];
        games = json;
        updateGame();
    });
};

function buildURL() {
    var url = appLocation + "?img=https%3A//realmode.games/games/" + currentGame.bin + "&ret=https%253A//realmode.games%3Fgame%3D" + currentGameIndex;
    if (currentGame.options)
        url += "&" + currentGame.options;
    return url;
}

function updateGame() {
    const description = document.getElementById("game-description");
    const screenshot = document.getElementById("game-screenshot");
    const header = document.getElementById("game-title");
    const title = document.getElementById("game-title2");

    const maxWidth = 18;
    header.innerText = (currentGame.title.length <= maxWidth) ? currentGame.title : currentGame.title.substring(0, maxWidth - 3) + "_";
    description.innerText = currentGame.description;

    title.innerText = currentGame.title;
    screenshot.src = "games/" + currentGame.screenshot;
    screenshot.parentNode.href = buildURL();
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
    window.open(buildURL(), "_blank");
}