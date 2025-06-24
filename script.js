let petName = "CatByte";
let hunger = 100;
let happiness = 100;

const hungerBar = document.getElementById("hunger-bar");
const happinessBar = document.getElementById("happiness-bar");
const moodText = document.getElementById("mood");
const statusText = document.getElementById("statusMessage");
const petImg = document.getElementById("pet-img");
const petNameDisplay = document.getElementById("pet-name");

document.getElementById("feedBtn").addEventListener("click", feedPet);
document.getElementById("playBtn").addEventListener("click", playWithPet);
document.getElementById("renameBtn").addEventListener("click", renamePet);

function updateStats() {
  hungerBar.value = hunger;
  happinessBar.value = happiness;

  let mood = "🧘‍♂️ Centered";