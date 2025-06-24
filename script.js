let petName = "Nyabyte";
let hunger = 100;
let happiness = 100;

const hungerBar = document.getElementById("hunger-bar");
const happinessBar = document.getElementById("happiness-bar");
const petImg = document.getElementById("pet-img");
const petNameDisplay = document.getElementById("pet-name");
const moodText = document.getElementById("mood");
const statusMessage = document.getElementById("statusMessage");

function updateStats() {
  hungerBar.value = hunger;
  happinessBar.value = happiness;

  let mood = "Balanced 🧘‍♀️";
  if (hunger < 25) mood = "Starving 😿";
  else if (happiness < 25) mood = "Lonely 😾";
  else if (hunger > 90 && happiness > 90) mood = "Ecstatic 😻";

  moodText.textContent = `Mood: ${mood}`;
}

function animatePet(text) {
  petImg.classList.add("animate");
  statusMessage.textContent = text;
  setTimeout(() => petImg.classList.remove("animate"), 300);
}

document.getElementById("feedBtn").addEventListener("click", () => {
  hunger = Math.min(hunger + 20, 100);
  animatePet(`${petName} devoured a sushi roll 🍣`);
  updateStats();
});

document.getElementById("playBtn").addEventListener("click", () => {
  happiness = Math.min(happiness + 20, 100);
  hunger = Math.max(hunger - 5, 0);
  animatePet(`${petName} pounced on the yarn ball 🧶`);
  updateStats();
});

document.getElementById("renameBtn").addEventListener("click", () => {
  const newName = prompt("Enter your pet's new name:");
  if (newName && newName.trim()) {
    petName = newName.trim();
    petNameDisplay.textContent = `🐱 ${petName}`;
    statusMessage.textContent = `${petName} nods approvingly ✨`;
  }
});

setInterval(() => {
  hunger = Math.max(hunger - 1, 0);
  happiness = Math.max(happiness - 1, 0);
  updateStats();
}, 4000);

updateStats();