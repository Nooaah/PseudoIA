var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var width_carre = 50;
var height_carre = 50;

var x = 50;
var y = 50;

var cases = 0;

var ligne = new Array();
ligne[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ligne[1] = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0];
ligne[2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ligne[3] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ligne[4] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ligne[5] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ligne[6] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ligne[7] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ligne[8] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ligne[9] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function draw_parcours() {
    for (i = 0; i < 10; i++) {
        for (j = 0; j < 10; j++) {
            if (ligne[i][j] == 1) {
                ctx.beginPath();
                ctx.rect(j * 50, i * 50, 50, 50);
                ctx.fillStyle = "rgba(180, 180, 180, 10)";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
    for (i = 1; i < 9; i++) {
        for (j = 1; j < 9; j++) {
            if (ligne[i][j] == 1) {
                ctx.beginPath();
                ctx.rect(j * 50, i * 50, 50, 50);
                ctx.fillStyle = "rgba(180, 180, 180, 10)";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function draw_perso() {
    ctx.beginPath();
    ctx.rect(x, y, width_carre, height_carre);
    ctx.fillStyle = "rgba(255, 0, 0, 10)";
    ctx.fill();
    ctx.closePath();
}

arrive = 'gauche';

essai = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    draw_parcours()
    draw_perso()

    numColonne = Math.floor((x / 50));
    numLigne = Math.floor((y / 50));

    bouger = 0;

    while (bouger != 1 && essai < 50) {
        var choix = Math.floor(Math.random() * 4);
        console.log(choix)
        if (ligne[numLigne][numColonne + 1] != 0 && arrive != 'droite' && choix == 1) //essaie a droite
        {
            x = x + 50;
            cases = cases + 50;
            arrive = 'gauche';
            bouger = 1;
            essai = 0;

        }
        else if (ligne[numLigne][numColonne - 1] != 0 && arrive != 'gauche' && choix == 2) //essaie a gauche
        {
            x = x - 50;
            arrive = 'droite';
            bouger = 1;
            essai = 0;
            cases = cases + 50;
        }
        else if (ligne[numLigne + 1][numColonne] != 0 && arrive != 'bas' && choix == 3) //essaie en bas
        {
            y = y + 50;
            arrive = 'haut';
            bouger = 1;
            essai = 0;
            cases = cases + 50;
        }
        else if (ligne[numLigne - 1][numColonne] != 0 && arrive != 'haut' && choix == 0) //essaie en haut
        {
            y = y - 50;
            arrive = 'bas';
            bouger = 1;
            essai = 0;
            cases = cases + 50;
        }
        document.getElementById('cases').textContent = cases / 50;
        essai++;
    }
}


draw_parcours()
draw_perso()

var lancerJeu = 0;

function lancer() {
    if (lancerJeu == 0) {
        document.getElementById('lancer_jeu').textContent = "Relancer !";
        setInterval(draw, 80);
        x = 50;
        y = 50;
        lancerJeu = 1;
    }
    essai = 0;
}