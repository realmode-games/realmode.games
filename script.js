const games = [
    {
        title: "Bomber och Bumlingar",
        screenshot: "bomber/bomber.png",
        bin: "bomber/bomber.img",
        description: "Game description missing. :("
    },
    {
        title: "Chopper Commando",
        screenshot: "chopper/chopper.png",
        bin: "chopper/chopper.img",
        description: "Game description missing. :("
    }
];

const appLocation = "https://andreasjonsson.se/virtualxt";

var currentGameIndex = Math.floor(Math.random() * games.length);
var currentGame = games[currentGameIndex];

window.onload = () => {
    updateGame();
};

function updateGame() {
    const description = document.getElementById("game-description");
    const screenshot = document.getElementById("game-screenshot");
    const header = document.getElementById("game-name");

    header.innerText = currentGame.title;
    description.innerText = currentGame.description;

    screenshot.src = "games/" + currentGame.screenshot;
    screenshot.parentNode.href = appLocation + "?img=https%3A//realmode.games/games/" + currentGame.bin;
}

function prevGame() {
    currentGameIndex--;
    if (currentGameIndex < 0) {
        currentGameIndex = games.length - 1;
    }
    currentGame = games[currentGameIndex];
    updateGame();
}

function nextGame() {
    currentGameIndex++;
    if (currentGameIndex >= games.length) {
        currentGameIndex = 0;
    }
    currentGame = games[currentGameIndex];
    updateGame();
}

function playGame() {
    window.open(appLocation + "?img=https%3A//realmode.games/games/" + currentGame.bin, "_blank");
}