const games = [{
    title: "Bomber och Bumlingar",
    screenshot: "bomber/bomber.png",
    bin: "bomber/bomber.img",
    description: "Game description missing. :("
}];

const appLocation = "https://andreasjonsson.se/virtualxt";

var currentGameIndex = 0;
var currentGame = games[currentGameIndex];

window.onload = () => {
    updateGame();
};

function updateGame() {
    const description = document.getElementById("game-description");
    const screenshot = document.getElementById("game-screenshot");
    const header = document.getElementById("game-name");

    header.innerText = currentGame.title;
    screenshot.src = "games/" + currentGame.screenshot;
    description.innerText = currentGame.description;
}

function prevGame() {
    currentGameIndex--;
    if (currentGameIndex < 0) {
        currentGameIndex = games.length() - 1;
    }
    currentGame = games[currentGameIndex];
    updateGame();
}

function nextGame() {
    currentGameIndex++;
    if (currentGameIndex >= games.length()) {
        currentGameIndex = 0;
    }
    currentGame = games[currentGameIndex];
    updateGame();
}

function playGame() {
    window.open(appLocation + "?img=https%3A//realmode.games/games/" + currentGame.bin, "_blank");
}