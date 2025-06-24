let petName = "CatByte";
let hunger = 100;
let happiness = 100;

const hungerBar = document.getElementById("hunger-bar");
const happinessBar = document.getElementById("happiness-bar");
const moodText = document.getElementById("mood");
const statusText = document.getElementById("status");
const petImg = document.getElementById("pet-img");
const petNameDisplay = document.getElementById("pet-name");

function updateStats() {
  hungerBar.value = hunger;
  happinessBar.value = happiness;

  if (hunger < 30) {
    moodText.textContent = "Mood: Hungry 😿";
  } else if (happiness < 30) {
    moodText.textContent = "Mood: Bored 😐";
  } else {
    moodText.textContent = "Mood: Happy 😺";
  }
}

function feedPet() {
  hunger = Math.min(hunger + 30, 100);
  petImg.classList.add("animate");
  statusText.textContent = `${petName} is munching happily 🍖`;
  setTimeout(() => petImg.classList.remove("animate"), 300);
  updateStats();
}

function playWithPet() {
  happiness = Math.min(happiness + 30, 100);
  hunger = Math.max(hunger - 10, 0);
  petImg.classList.add("animate");
  statusText.textContent = `${petName} is playing joyfully 🎮`;
  setTimeout(() => petImg.classList.remove("animate"), 300);
  updateStats();
}

function renamePet() {
  const newName = prompt("What would you like to name your pet?");
  if (newName) {
    petName = newName;
    petNameDisplay.textContent = `🐱 ${petName}`;
    statusText.textContent = `${petName} feels proud with a new name! ✨`;
  }
}

setInterval(() => {
  hunger = Math.max(hunger - 1, 0);
  happiness = Math.max(happiness - 1, 0);
  updateStats();
}, 3000);

updateStats();
