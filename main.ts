const replaceDiv = <HTMLDivElement>document.getElementById("replace");

function getData(): void {
    const getName = (<HTMLInputElement>document.getElementById("get-name")).value;
    replaceDiv.innerHTML = `
        <h1>Snake Game</h1>
        <p>¡Hola <b>${getName}</b>, un gusto saludarte!</p>
        <p>Para jugar, da click a cualquier flecha.</p>
    `;
}