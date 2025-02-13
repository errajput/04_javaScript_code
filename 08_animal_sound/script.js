document.getElementById("soundButton").addEventListener("click", function () {
  const animal = document.getElementById("animalInput").value.toLowerCase();
  //   console.log(animal);

  const output = document.getElementById("soundOutput");

  switch (animal) {
    case "dog":
      output.textContent = "woof! woof!";
      break;
    case "cat":
      output.textContent = "meow ! meow!";
      break;
    case "sheep":
      output.textContent = "baa ! baa!";
      break;
    case "duck":
      output.textContent = "Quake Quake";
      break;
    default:
      output.textContent = "sorry I don't know the sound";
  }
});
