"use strict";
const replaceDiv = document.getElementById("replace");
function getData() {
    const getName = document.getElementById("get-name").value;
    replaceDiv.innerHTML = `
    <h2 style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: aliceblue;">Snake Game</h2>
        <p style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: aliceblue;">¡Hola <b>${getName}</b>, un gusto saludarte!</p>
        <p style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: aliceblue;">Para jugar, da click a cualquier flecha.</p>
    `;
}
//Press Any Arrow to start the game
document.addEventListener("keydown", keyPush);
//FPS
setInterval(game, 1000 / 10);
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var px = 10;
var py = px;
var gs = 20;
var tc = gs;
var ax = 15;
var ay = ax;
var xv = 0;
var yv = xv;
var trail = [];
var tail = 5;
function keyPush(e) {
    switch (e.keyCode) {
        case 37:
            xv = -1;
            yv = 0;
            break;
        case 38:
            xv = 0;
            yv = -1;
            break;
        case 39:
            xv = 1;
            yv = 0;
            break;
        case 40:
            xv = 0;
            yv = 1;
            break;
    }
}
function counterFunct(count) {
    var counter = count;
    counter++;
    const div_counter = document.getElementById("div-counter");
    div_counter.innerHTML = '';
    div_counter.innerHTML += `<p style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: aliceblue;">Points: <b>${counter}</b> </p>`;
}
function game() {
    px += xv;
    py += yv;
    if (px < 0) {
        px = tc - 1;
    }
    if (px > tc - 1) {
        px = 0;
    }
    if (py < 0) {
        py = tc - 1;
    }
    if (py > tc - 1) {
        py = 0;
    }
    //background
    ctx.fillStyle = "#35324A";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //Snake
    ctx.fillStyle = "#00D489";
    for (var i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
        if (trail[i].x == px && trail[i].y == py) {
            //Initial Lenght
            tail = 1;
        }
    }
    trail.push({ x: px, y: py });
    while (trail.length > tail) {
        trail.shift();
    }
    if (ax == px && ay == py) {
        counterFunct(tail);
        tail++;
        ax = Math.floor(Math.random() * tc);
        ay = Math.floor(Math.random() * tc);
    }
    //Food
    ctx.fillStyle = "#FE001E";
    ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
}
