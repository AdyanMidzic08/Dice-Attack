function goToPage() {
	window.location.href = "page/gamePrep.html";
}

function goToPage2() {
	window.location.href = "./gamePrep.html";
}

function indexPage() {
	window.location.href = "../index.html";
}


let boxOne = document.getElementById('box1Show');
let boxTwo = document.getElementById('box2Show');
let input1 = document.getElementById('input-name-1');
let input2 = document.getElementById('input-name-2');
let background = document.getElementById('background-Picture');
let player1 = document.getElementById('displayPlayer1')
let player2 = document.getElementById('displayPlayer2')
let firstMap = document.getElementById('firstMap');
let index = document.getElementById('index');
let diceButton = document.getElementById('DiceButton');
let outputFinalGame = document.getElementById('output-final-game');

let hasPlayer1Selected = false;
let hasPlayer2Selected = false;
let hasPlayer1Name = false;
let hasPlayer2Name = false;
let player1Img;
let player2Img;

function showGlumanda1() {
	boxOne.innerHTML = '<img src="../Images/pokemons/Glumanda-transparent.png" alt="Glumanda">';
	hasPlayer1Selected = true;
	player1Img = '<img src="../Images/pokemons/Glumanda-transparent.png" alt="Glumanda">';
}

function showGlumanda2() {
	boxTwo.innerHTML = '<img src="../Images/pokemons/Glumanda-transparent.png" alt="Glumanda">';
	hasPlayer2Selected = true;
	player2Img = '<img src="../Images/pokemons/Glumanda-transparent.png" alt="Glumanda">';
}

function showBisasam1() {
	boxOne.innerHTML = '<img src="../Images/pokemons/Bisasam-transparent.png" alt="Glumanda">';
	hasPlayer1Selected = true;
	player1Img = '<img src="../Images/pokemons/Bisasam-transparent.png" alt="Glumanda">';
}

function showBisasam2() {
	boxTwo.innerHTML = '<img src="../Images/pokemons/Bisasam-transparent.png" alt="Glumanda">';
	hasPlayer2Selected = true;
	player2Img = '<img src="../Images/pokemons/Bisasam-transparent.png" alt="Glumanda">';
}

function showSchiggy1() {
	boxOne.innerHTML = '<img src="../Images/pokemons/Schiggy-transparent.png" alt="Glumanda">';
	hasPlayer1Selected = true;
	player1Img = '<img src="../Images/pokemons/Schiggy-transparent.png" alt="Glumanda">';
}

function showSchiggy2() {
	boxTwo.innerHTML = '<img src="../Images/pokemons/Schiggy-transparent.png" alt="Glumanda">';
	hasPlayer2Selected = true;
	player2Img = '<img src="../Images/pokemons/Schiggy-transparent.png" alt="Glumanda">';
}

function submitPlayer1() {
	player1.innerHTML = input1.value;
	hasPlayer1Name = true;
	if (input1.value = '') {
		hasPlayer1Name = false
	}
}

function submitPlayer2() {
	player2.innerHTML = input2.value;
	hasPlayer2Name = true;
	if (input2.value = '') {
		hasPlayer2Name = false
	}
}


function startGame() {
	if (hasPlayer1Selected && hasPlayer2Selected) {
		if (hasPlayer1Name && hasPlayer2Name) {
			// Daten speichern bevor du weiterleitest
			localStorage.setItem("player1Name", player1.innerHTML);
			localStorage.setItem("player2Name", player2.innerHTML);

			// Hier z. B. auch die ausgewählten Bilder speichern:
			// (angenommen du hast irgendwo die Bild-URLs in Variablen wie player1Img, player2Img)
			localStorage.setItem("player1Img", player1Img);
			localStorage.setItem("player2Img", player2Img);

			// Weiterleiten auf game.html
			window.location.href = "./game.html";
		}
	}
}

//Mit Hilfe von Ki & Daniel
document.addEventListener('DOMContentLoaded', function () {
	const backgrounds = [
		'../Images/Maps/PokeMap-1.jpg',
		'../Images/Maps/PokeMap-2.jpg',
		'../Images/Maps/PokeMap-3.webp',
		'../Images/Maps/PokeMap-4.gif',
		'../Images/Maps/PokeMap-5.gif',
		'../Images/Maps/PokeMap-6.gif',
		'../Images/Maps/PokeMap-7.png',
	];

	const choice = backgrounds[Math.floor(Math.random() * backgrounds.length)];
	document.body.style.backgroundImage = "url('" + choice + "')";
	document.body.style.backgroundSize = "cover";
	document.body.style.backgroundPosition = "center";
	document.body.style.backgroundRepeat = "no-repeat";
});

// CD-Player: klicken startet/pausiert Musik und startet/stoppt die Dreh-Animation
document.addEventListener('DOMContentLoaded', () => {
    const cd = document.getElementById('cd-button');
    const audio = document.getElementById('cd-audio');
    if (!cd || !audio) return;

    cd.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().catch(() => {
                // play kann fehlschlagen (Autoplay-Restriktionen) - bleibt still
            });
            cd.classList.add('spin');
        } else {
            audio.pause();
            cd.classList.remove('spin');
        }
    });

    // optional: wenn Musik zu Ende, Animation stoppen
    audio.addEventListener('ended', () => cd.classList.remove('spin'));
});

function gambleDice() {
	let num = Math.random();
	num *= 6;
	num = Math.ceil(num);

	return num;
}

let p1HealthScore = 6;
let p2HealthScore = 6;
const player1Name = localStorage.getItem("player1Name") || "Player 1";
const player2Name = localStorage.getItem("player2Name") || "Player 2";


function rollDice() {
	return Math.ceil(Math.random() * 6);
}

function diceAttackStart() {
	let output = document.getElementById('attackOutput');
	let p1 = document.getElementById('p1');
	let p2 = document.getElementById('p2');
	let Health1 = document.getElementById('Health1');
	let Health2 = document.getElementById('Health2');
	let gambleP1 = gambleDice();
	let gambleP2 = gambleDice();

	if (!output) return;

	// Vorherige Ausgabe löschen
	output.innerHTML = '';

	// Würfelanimation starten
	if (p1) p1.innerHTML = '<img class="Dice-Pic roll-animation" src="../Images/Dices/questionMark.jpg">';
	if (p2) p2.innerHTML = '<img class="Dice-Pic roll-animation" src="../Images/Dices/questionMark.jpg">';

	setTimeout(() => {
		let p1DicePic = rollDice();
		let p2DicePic = rollDice();

		// Würfelbilder aktualisieren
		if (p1) p1.innerHTML = '<img class="Dice-Pic" src="../Images/Dices/dice_' + p1DicePic + '.png">';
		if (p2) p2.innerHTML = '<img class="Dice-Pic" src="../Images/Dices/dice_' + p2DicePic + '.png">';

		// Angriff-Animation für Pokémon
		function p1AttackAnimation() {
			const p1Box = document.querySelector('.player-box.player:first-child');
			if (p1Box) {
				p1Box.classList.add('attack-animation');
				setTimeout(() => p1Box.classList.remove('attack-animation'), 400);
			}
		}
		function p2AttackAnimation() {
			const p2Box = document.querySelector('.player-box.player:last-child');
			if (p2Box) {
				p2Box.classList.add('attack-animation');
				setTimeout(() => p2Box.classList.remove('attack-animation'), 400);
			}
		}

		// Schaden verteilen
		if (p1DicePic > p2DicePic) {
			if (gambleP1 == p1DicePic) {
				p2HealthScore -= 2;
				if (p2HealthScore <= 0) p2HealthScore = 0;
				if (Health2) Health2.innerHTML = '<img src="../Images/HealthBar/Health-' + p2HealthScore + '.png">';
				p2AttackAnimation();
				output.innerHTML = player1Name + " hat eine <br> effektive Attacke ausgeübt!!!";
			} else {
				p2HealthScore--;
				if (p2HealthScore <= 0) p2HealthScore = 0;
				if (Health2) Health2.innerHTML = '<img src="../Images/HealthBar/Health-' + p2HealthScore + '.png">';
				p2AttackAnimation();
				output.innerHTML = player1Name + " trifft!";
			}
			console.log('p2HealthScore', p2HealthScore);
		} else if (p2DicePic > p1DicePic) {
			if (gambleP2 == p2DicePic) {
				p1HealthScore -= 2;
				if (p1HealthScore <= 0) p1HealthScore = 0;
				if (Health1) Health1.innerHTML = '<img src="../Images/HealthBar/Health-' + p1HealthScore + '.png">';
				p1AttackAnimation();
				output.innerHTML = player2Name + " hat eine <br> effektive Attacke ausgeübt!!!";
			} else {
				p1HealthScore--;
				if (p1HealthScore <= 0) p1HealthScore = 0;
				if (Health1) Health1.innerHTML = '<img src="../Images/HealthBar/Health-' + p1HealthScore + '.png">';
				p1AttackAnimation();
				output.innerHTML = player2Name + " trifft!";
			}
			console.log('p1HealthScore', p1HealthScore);
		} else {
			output.innerHTML = "Unentschieden!";
			p1AttackAnimation();
			p2AttackAnimation();
		}

		// Wenn jetzt jemand auf 0 (oder <=0) ist, dann erst Meldung zeigen,
		// nach 2 Sekunden die Winning-Animation / Siegbildschirm anzeigen.
		if (p1HealthScore <= 1 || p2HealthScore <= 1) {
			// Gewinner bestimmen (noch keine Änderung am DOM außer der Ausgabe oben)
			let winner = "";
			let winnerImg = "";

			let winnerImgArray = [
				"../Images/pokemons/Pokemon-Trainer.gif",
				"../Images/pokemons/Pikachu.gif",
				"../Images/pokemons/Latias.gif",
				"../Images/pokemons/Mew.gif",
				"../Images/pokemons/Gengar.gif",
				"../Images/pokemons/Glurak.gif",
			];

			let randomIndex = Math.floor(Math.random() * winnerImgArray.length);
			let randomPokemon1 = Math.floor(Math.random() * winnerImgArray.length);
			let randomPokemon2 = Math.floor(Math.random() * winnerImgArray.length);

			let pokemonImage1 = winnerImgArray[randomPokemon1];
			let pokemonImage2 = winnerImgArray[randomPokemon2];


			if (p1HealthScore <= 1) {
				winner = player2Name || "Player 2";
				winnerImg = winnerImgArray[randomIndex];
			} else if (p2HealthScore <= 1) {
				winner = player1Name || "Player 1";
				winnerImg = winnerImgArray[randomIndex];
			}

			// Nach 2 Sekunden Siegbildschirm anzeigen (die Attack-Ausgabe bleibt sichtbar)
			setTimeout(() => {
				document.body.innerHTML = `
                    <style>
                        body {
                            background: radial-gradient(circle at center, #ffcc00, #ff8800);
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            height: 100vh;
                            overflow: hidden;
                            margin: 0;
                            font-family: 'Press Start 2P', sans-serif;
                            color: white;
                            text-align: center;
                        }
                        .img-Winner { max-width: 40vmin; height: auto; }
                        .restart-btn { margin-top: 1rem; cursor: pointer; padding: .6rem 1rem; background:#222; color:#fff; border-radius:8px; }
                    </style>

                    <h1> ${winner} hat gewonnen! </h1>
                    <img class="img-Winner" src="${winnerImg}" alt="Winner Pokémon">	
                    <div class="restart-btn" onclick="goToPage2()">Neues Spiel</div>
                    <div class="restart-btn" onclick="indexPage()">Startseite</div>
                `;
			}, 700);
		}
	}, 600);
}