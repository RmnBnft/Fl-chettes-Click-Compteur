// sélection de tout les éléments svg de la cible
const double20 = document.querySelector("#use21");
const outer20 = document.querySelector("#use23");
const triple20 = document.querySelector("#use25");
const inner20 = document.querySelector("#use27");

const double5 = document.querySelector("#use31");
const outer5 = document.querySelector("#use33");
const triple5 = document.querySelector("#use35");
const inner5 = document.querySelector("#use37");

const double12 = document.querySelector("#use41");
const outer12 = document.querySelector("#use43");
const triple12 = document.querySelector("#use45");
const inner12 = document.querySelector("#use47");

const double9 = document.querySelector("#use51");
const outer9 = document.querySelector("#use53");
const triple9 = document.querySelector("#use55");
const inner9 = document.querySelector("#use57");

const double14 = document.querySelector("#use61");
const outer14 = document.querySelector("#use63");
const triple14 = document.querySelector("#use65");
const inner14 = document.querySelector("#use67");

const double11 = document.querySelector("#use71");
const outer11 = document.querySelector("#use73");
const triple11 = document.querySelector("#use75");
const inner11 = document.querySelector("#use77");

const double8 = document.querySelector("#use81");
const outer8 = document.querySelector("#use83");
const triple8 = document.querySelector("#use85");
const inner8 = document.querySelector("#use87");

const double16 = document.querySelector("#use91");
const outer16 = document.querySelector("#use93");
const triple16 = document.querySelector("#use95");
const inner16 = document.querySelector("#use97");

const double7 = document.querySelector("#use101");
const outer7 = document.querySelector("#use103");
const triple7 = document.querySelector("#use105");
const inner7 = document.querySelector("#use107");

const double19 = document.querySelector("#use111");
const outer19 = document.querySelector("#use113");
const triple19 = document.querySelector("#use115");
const inner19 = document.querySelector("#use117");

const double3 = document.querySelector("#use121");
const outer3 = document.querySelector("#use123");
const triple3 = document.querySelector("#use125");
const inner3 = document.querySelector("#use127");

const double17 = document.querySelector("#use131");
const outer17 = document.querySelector("#use133");
const triple17 = document.querySelector("#use135");
const inner17 = document.querySelector("#use137");

const double2 = document.querySelector("#use141");
const outer2 = document.querySelector("#use143");
const triple2 = document.querySelector("#use145");
const inner2 = document.querySelector("#use147");

const double15 = document.querySelector("#use151");
const outer15 = document.querySelector("#use153");
const triple15 = document.querySelector("#use155");
const inner15 = document.querySelector("#use157");

const double10 = document.querySelector("#use161");
const outer10 = document.querySelector("#use163");
const triple10 = document.querySelector("#use165");
const inner10 = document.querySelector("#use167");

const double6 = document.querySelector("#use171");
const outer6 = document.querySelector("#use173");
const triple6 = document.querySelector("#use175");
const inner6 = document.querySelector("#use177");

const double13 = document.querySelector("#use181");
const outer13 = document.querySelector("#use183");
const triple13 = document.querySelector("#use185");
const inner13 = document.querySelector("#use187");

const double4 = document.querySelector("#use191");
const outer4 = document.querySelector("#use193");
const triple4 = document.querySelector("#use195");
const inner4 = document.querySelector("#use197");

const double18 = document.querySelector("#use201");
const outer18 = document.querySelector("#use203");
const triple18 = document.querySelector("#use205");
const inner18 = document.querySelector("#use207");

const double1 = document.querySelector("#use211");
const outer1 = document.querySelector("#use213");
const triple1 = document.querySelector("#use215");
const inner1 = document.querySelector("#use217");

const center = document.querySelector("#circle219");
const centerDouble = document.querySelector("#circle221");

//tableau des éléments svg de la cible pour boucler dessus
const targetElement = [
  double20,
  outer20,
  triple20,
  inner20,
  double5,
  outer5,
  triple5,
  inner5,
  double12,
  outer12,
  triple12,
  inner12,
  double9,
  outer9,
  triple9,
  inner9,
  double14,
  outer14,
  triple14,
  inner14,
  double11,
  outer11,
  triple11,
  inner11,
  double8,
  outer8,
  triple8,
  inner8,
  double16,
  outer16,
  triple16,
  inner16,
  double7,
  outer7,
  triple7,
  inner7,
  double19,
  outer19,
  triple19,
  inner19,
  double3,
  outer3,
  triple3,
  inner3,
  double17,
  outer17,
  triple17,
  inner17,
  double2,
  outer2,
  triple2,
  inner2,
  double15,
  outer15,
  triple15,
  inner15,
  double10,
  outer10,
  triple10,
  inner10,
  double6,
  outer6,
  triple6,
  inner6,
  double13,
  outer13,
  triple13,
  inner13,
  double4,
  outer4,
  triple4,
  inner4,
  double18,
  outer18,
  triple18,
  inner18,
  double1,
  outer1,
  triple1,
  inner1,
  center,
  centerDouble,
];

// tableau des points de la cible pour boucler dessus
const targetElementPoint = [
  40, 20, 60, 20, 10, 5, 15, 5, 24, 12, 36, 12, 18, 9, 27, 9, 28, 14, 42, 14,
  22, 11, 33, 11, 16, 8, 24, 8, 32, 16, 48, 16, 14, 7, 21, 7, 38, 19, 57, 19, 6,
  3, 9, 3, 34, 17, 51, 17, 4, 2, 6, 2, 30, 15, 45, 15, 20, 10, 30, 10, 12, 6,
  18, 6, 26, 13, 39, 13, 8, 4, 12, 4, 36, 18, 54, 18, 2, 1, 3, 1, 25, 50,
];

// Sélection des éléments DOM
const formAddPlayer = document.querySelector("#formAddPlayer");
const inputPlayerName = document.querySelector("#playerName");
const startButton = document.querySelector("#startButton");
const playersTable = document.querySelector("#playersTable");
const infoGame = document.querySelector(".infoGame");

// Tableau des joueurs
const players = [];

// Index du joueur en cours
let currentPlayerIndex = 0;

// Compteur de fléchettes
let dartCount = 0;
let dartLength = 3;
let ruleScore = 301;
let initialScore;

// Fonction pour ajouter un joueur
function addPlayer(name, score) {
  const player = { name, score, last_scores: [] };
  players.push(player);
  infoGame.innerHTML = "Ajoutez + de joueurs ou commencez la partie"
}


// Fonction pour afficher les joueurs
function renderPlayers() {
  playersTable.innerHTML = `
    <tr>
      <th>Joueur</th>
      <th>Score</th>
      <th>Derniers coups</th>
    </tr>
  `;
  players.forEach((player, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${player.name}</td>
      <td>${player.score}</td>
      <td>${displayThreeLastScores(player.last_scores)}</td>
    `;
    if (index === currentPlayerIndex) {
      tr.innerHTML = `
      <td>${player.name}</td>
      <td>${player.score}</td>
      <td>${displayThreeLastScores(player.last_scores)}</td>
    `;
    }

    playersTable.appendChild(tr);
  });
}

// Fonction pour retirer des points au score d'un joueur
function subtractPoints(points) {
  dartCount++;
  dartLength--;
  displayInfoGame();
  const currentPlayer = players[currentPlayerIndex];
  currentPlayer.score -= points;
  currentPlayer.last_scores.push(points);
}


// fonction qui retourne un tableau des 3 derniers scores rentrés dans le tableau last_scores
function displayThreeLastScores(last_scores) {
  let threeLastScores = last_scores.slice(-3).reverse();
  let threeLastScoresString = threeLastScores.join(" ");
  return threeLastScoresString;
}

// Fonction pour passer au joueur suivant
function nextPlayer() {
  dartCount = 0; // Réinitialiser le compteur de fléchettes
  dartLength = 3;
  currentPlayerIndex = (currentPlayerIndex + 1) % players.length; // Passer au joueur suivant
  initialScore = players[currentPlayerIndex].score
  displayInfoGame();
}

// Fonction pour gérer le clic sur un élément cible
function handleTargetClick(event) {
  playSound();
  const target = event.target;
  const points = targetElementPoint[targetElement.indexOf(target)];
  subtractPoints(points);

  if (players[currentPlayerIndex].score < 0) {
    players[currentPlayerIndex].score = initialScore;
    alert(`${players[currentPlayerIndex].name} a dépassé zéro !`);
    nextPlayer();
  }
  if (players[currentPlayerIndex].score === 0) {
    renderPlayers();
    alert(`${players[currentPlayerIndex].name} a gagné !`);
    for (var i = 0; i < players.length; i++) {
      players[i].score = ruleScore;
      players[i].last_scores = [];
    }
    nextPlayer();
  }
  if (dartCount === 3) {
    nextPlayer();
  }

  renderPlayers();
}

// fonction pour gérer une fléchette ratée
function handleMissClick() {
  dartCount++;
  dartLength--;
  playSound();
  displayInfoGame();

  players[currentPlayerIndex].last_scores.push(0);
  if (dartCount === 3) {
    nextPlayer();
  }
  if (players[currentPlayerIndex].score < 0) {
    alert(`${players[currentPlayerIndex].name} a dépassé zéro !`);
    players[currentPlayerIndex].score += points;
    nextPlayer();
  }
  renderPlayers();
}
// Ajout de l'écouteur d'événement sur les éléments ratés
const missedBtn = document.querySelector("#missedBtn");
missedBtn.addEventListener("click", handleMissClick);
missedBtn.style.display = "none";

function startCounter() {
  // Ajout de l'écouteur d'événement sur les éléments cibles
  targetElement.forEach((element) => {
    element.addEventListener("click", handleTargetClick);
  });
  initialScore = players[currentPlayerIndex].score;
}

// Ajout de l'écouteur d'événement sur le formulaire d'ajout de joueur
formAddPlayer.addEventListener("submit", (event) => {
  event.preventDefault();
  const playerName = inputPlayerName.value;
  addPlayer(playerName, ruleScore);
  renderPlayers();
  inputPlayerName.value = "";
});

// Ajout de l'écouteur d'événement sur le bouton de démarrage de la partie
startButton.addEventListener("click", (event) => {
  displayInfoGame();
  if (players.length > 0) {
    event.preventDefault();
    currentPlayerIndex = 0;
    renderPlayers();
    hiddenElement();
    startCounter();
    missedBtn.style.display = "block";
  }
});

// Fonction pour cacher les éléments du formulaire
function hiddenElement() {
  document.getElementById("formAddPlayer").style.display = "none";
  document.getElementById("startButton").style.display = "none";
}
function displayInfoGame() {
  if (players.length > 0) {
    infoGame.textContent = `Au tour de ${players[currentPlayerIndex].name}. Fléchettes restantes : ${dartLength}`
  }
}

if (players.length > 0) {
  renderPlayers();
}

// fonction qui joue un son au hasard parmis une liste de sons
function playSound() {
  let sounds = [
    "son_fleche1",
    "son_fleche2",
    "son_fleche3",
    "son_fleche4",
    "son_fleche5",
    "son_fleche6",
  ];
  let randomSound = sounds[Math.floor(Math.random() * sounds.length)];
  let audio = new Audio("sons/" + randomSound + ".mp3");
  if (soundOn.classList.contains('on')) {
    audio.play();
  }
}

const soundContainer = document.querySelector('.toggleSound')
const soundOn = document.querySelector('.fa-volume-high')
const soundOff = document.querySelector('.fa-volume-xmark')

soundContainer.addEventListener('click', () => {
  soundOn.classList.toggle('on')
  soundOff.classList.toggle('on')
})

// fonction pour annuler le dernier coup lors d'un clic sur le bouton undo
function handleUndoClick() {

  if (players[currentPlayerIndex].last_scores.length > 0) {
    let lastScore = players[currentPlayerIndex].last_scores.pop();
    players[currentPlayerIndex].score += lastScore;
    dartCount++;
    dartLength--;
  } else if (players[currentPlayerIndex].last_scores.length === 0) {
    currentPlayerIndex--
    let lastScore = players[currentPlayerIndex].last_scores.pop();
    players[currentPlayerIndex].score += lastScore;
    dartLength--;
  }

  renderPlayers();
  displayInfoGame();
}

// Ajout de l'écouteur d'événement sur le bouton undo
const undoBtn = document.querySelector("#undoBtn");
undoBtn.addEventListener("click", handleUndoClick);




