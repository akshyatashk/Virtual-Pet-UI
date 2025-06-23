let petName = "My Virtual Pet";
let mood = "happy";

const petImage = document.getElementById("pet-img");
const sound = new Audio("https://www.fesliyanstudios.com/play-mp3/387");

function updateStatus(message) {
  document.getElementById("status").textContent = message;
}

function feedPet() {
  mood = "full";
  petImage.src = "https://i.imgur.com/qY8hG2g.png"; // full/happy pet
  updateStatus("You fed your pet. It's feeling full!");
  sound.play();
}

function playWithPet() {
  mood = "excited";
  petImage.src = "https://i.imgur.com/fvKxozS.png"; // excited pet
  updateStatus("You played with your pet. It's excited!");
  sound.play();
}

function renamePet() {
  const newName = prompt("What would you like to name your pet?");
  if (newName) {
    petName = newName;
    document.getElementById("pet-name").textContent = petName;
    updateStatus(`${petName} is happy to have a new name!`);
  }
}
