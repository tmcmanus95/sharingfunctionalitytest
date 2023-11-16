const greenButton = document.querySelector("#green-emoji");
const redButton = document.querySelector("#red-emoji");
const shareButton = document.querySelector("#share-button");
let emojiArray = [];

function redButtonClicked() {
  emojiArray.push("🟥");
  console.log(emojiArray);
  return emojiArray;
}

function greenButtonClicked() {
  emojiArray.push("🟩");
  console.log(emojiArray);
  return emojiArray;
}

redButton.addEventListener("click", redButtonClicked);
greenButton.addEventListener("click", greenButtonClicked);

shareButton.addEventListener("click", async () => {
  console.log("I've been clicked");

  emojiString = emojiArray.join("");

  console.log("I am in the share button:", emojiString);

  try {
    if (navigator.share) {
      await navigator.share({
        text: `Woohoo! Click here: ${compoundleLink}! I beat today's Compoundle and I can share it! ${emojiString}`,
      });
    } else {
      alert("Coming soon!");
    }
  } catch (error) {
    console.error("Error sharing:", error);
  }
});
