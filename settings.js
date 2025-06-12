// Background music toggle
const bgMusic = document.getElementById("bgMusic");
const soundToggle = document.getElementById("soundToggle");

soundToggle.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    soundToggle.textContent = "🔊 Sound On";
  } else {
    bgMusic.pause();
    soundToggle.textContent = "🔈 Sound Off";
  }
});

// Help popup
function showHelp() {
  document.getElementById("helpBox").style.display = "block";
}
function hideHelp() {
  document.getElementById("helpBox").style.display = "none";
}

// Feedback popup
function showFeedback() {
  document.getElementById("feedbackBox").style.display = "block";
}
function hideFeedback() {
  document.getElementById("feedbackBox").style.display = "none";
}

function submitFeedback() {
  const feedback = document.getElementById("feedbackInput").value;
  alert("Thank you for your feedback!\n\n" + feedback);
  document.getElementById("feedbackInput").value = "";
  hideFeedback();
}