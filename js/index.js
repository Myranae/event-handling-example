const state = {
    chocoCount: 0,
    totalEaten: 0,
};

const addChoco = () => {
    const chocoContainer = document.getElementById("chocoContainer");
    // chocoContainer.innerHTML += '<img src='../images/big_choco.png'>';
    chocoContainer.textContent += "🍫";

    state.chocoCount += 1;
    const chocoCounter = document.getElementById("chocoCounter");
    chocoCounter.textContent = `Chocolate Count: ${state.chocoCount}`;
};

const resetChoco = () => {
    state.totalEaten += state.chocoCount;

    state.chocoCount = 0;

    const chocoCounter = document.getElementById("chocoCounter");
    chocoCounter.textContent = `Chocolate Count: ${state.chocoCount}`;

    const chocoContainer = document.getElementById("chocoContainer");
    chocoContainer.textContent = "";

    const totalEatenCounter = document.getElementById("eatenCounter");
    totalEatenCounter.textContent = `Total Eaten: ${state.totalEaten}`;
};

const changeToDarkTheme = () => {
    const bodyElement = document.querySelector("body");
    bodyElement.className = "darkTheme";
};

const changeToLightTheme = () => {
    const bodyElement = document.querySelector("body");
    bodyElement.className = "lightTheme";
};

const registerEventHandlers = () => {
    const addChocoBtn = document.querySelector("#addChoco");
    addChocoBtn.addEventListener("click", addChoco);

    const resetChocoBtn = document.querySelector("#resetChoco");
    resetChocoBtn.addEventListener("click", resetChoco);

    const darkThemeBtn = document.querySelector("#darkChocoThemeBtn");
    darkThemeBtn.addEventListener("click", changeToDarkTheme);

    const lightThemeBtn = document.querySelector("#lightChocoThemeBtn");
    lightThemeBtn.addEventListener("click", changeToLightTheme);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
