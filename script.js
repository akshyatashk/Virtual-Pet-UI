const feedBtn = document.getElementById('feedBtn');
const playBtn = document.getElementById('playBtn');
const renameBtn = document.getElementById('renameBtn');
const statusMessage = document.getElementById('statusMessage');
const hungerValue = document.getElementById('hungerValue');
const happinessValue = document.getElementById('happinessValue');

let petName = "Pet";
let hunger = 50;    // 0 = full, 100 = starving
let happiness = 50; // 0 = sad, 100 = happy

function updateStats() {
  hungerValue.textContent = hunger;
  happinessValue.textContent = happiness;

  if (hunger > 80) {
    statusMessage.textContent = `${petName} is very hungry! Feed it soon!`;
  } else if (happiness < 30) {
    statusMessage.textContent = `${petName} is feeling sad. Play with it!`;
  } else {
    statusMessage.textContent = `${petName} is feeling good!`;
  }
}

feedBtn.addEventListener('click', () => {
  hunger -= 20;
  if (hunger < 0) hunger = 0;
  statusMessage.textContent = `${petName} is happily eating!`;
  updateStats();
});

playBtn.addEventListener('click', () => {
  happiness += 20;
  if (happiness > 100) happiness = 100;
  statusMessage.textContent = `${petName} is playing joyfully!`;
  updateStats();
});

renameBtn.addEventListener('click', () => {
  const newName = prompt("Enter a new name for your pet:");
  if (newName && newName.trim() !== "") {
    petName = newName.trim();
    statusMessage.textContent = `Your pet's new name is ${petName}!`;
  }
  updateStats();
});

// Gradual decay over time
setInterval(() => {
  hunger += 5;
  if (hunger > 100) hunger = 100;

  happiness -= 5;
  if (happiness < 0) happiness = 0;

  updateStats();
}, 10000); // every 10 seconds

updateStats();
