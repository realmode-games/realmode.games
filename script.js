const games = [
    {
        title: "Bomber och Bumlingar",
        screenshot: "bomber/bomber.png",
        bin: "bomber/bomber.img",
        description: "Bomber and Bumblingar is a swedish game about trying to avoid dangerous creatures and obstacles like falling rocks, also being crushed or trapped by an avalanche, or killed by an explosion from the bombs."
    },
    {
        title: "Chopper Commando",
        screenshot: "chopper/chopper.png",
        bin: "chopper/chopper.img",
        description: "Chopper Commando is an arcade chopper game. You fly missions to destroy specific enemies or safely land at a base on the opposite side of enemy territory."
    },
    {
        title: "Commander Keen 4",
        screenshot: "keen/keen_cga.png",
        bin: "keen/keen4c_hd.img",
        description: "Commander Keen 4: Secret of the Oracle is a platform game, the fourth in the Commander Keen series as a whole, and the first in the second series Goodbye, Galaxy."
    }
];

const appLocation = "https://app.virtualxt.org";

var currentGameIndex = Math.floor(Math.random() * games.length);
var currentGame = games[currentGameIndex];

window.onload = () => {
    updateGame();
};

function updateGame() {
    const description = document.getElementById("game-description");
    const screenshot = document.getElementById("game-screenshot");
    const header = document.getElementById("game-name");

    const maxWidth = 18;
    header.innerText = (currentGame.title.length <= maxWidth) ? currentGame.title : currentGame.title.substring(0, maxWidth - 3) + "_";
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