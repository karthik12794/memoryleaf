let currentPage = 1;
let brightnessOn = true;
let musicPlaying = false;

window.onload = () => {
  const savedName = localStorage.getItem("diaryName");
  if (savedName) document.getElementById("diaryNameInput").value = savedName;

  updateDate();
  loadPage(currentPage);
  playMusic();
};

document.getElementById("diaryNameInput").addEventListener("input", () => {
  localStorage.setItem("diaryName", document.getElementById("diaryNameInput").value);
});

function updateDate() {
  const now = new Date();
  const options = { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'long' };
  document.getElementById("dateBox").textContent = now.toLocaleDateString('en-GB', options);
}

function loadPage(page) {
  const data = localStorage.getItem("page_" + page);
  document.getElementById("diaryEntry").value = data || "";
  document.getElementById("pageNum").textContent = "Page " + page;
}

function savePage(page) {
  const data = document.getElementById("diaryEntry").value;
  localStorage.setItem("page_" + page, data);
}

function nextPage() {
  savePage(currentPage);
  currentPage++;
  loadPage(currentPage);
}

function prevPage() {
  if (currentPage > 1) {
    savePage(currentPage);
    currentPage--;
    loadPage(currentPage);
  }
}

function toggleBrightness() {
  brightnessOn = !brightnessOn;
  document.body.style.filter = brightnessOn ? "brightness(100%)" : "brightness(50%)";
}

function toggleSound() {
  const music = document.getElementById("bgMusic");
  musicPlaying = !musicPlaying;
  if (musicPlaying) music.play();
  else music.pause();
}

function showHelp() {
  const box = document.getElementById("helpBox");
  box.style.display = box.style.display === "none" ? "block" : "none";
}

function showFeedback() {
  const box = document.getElementById("feedbackBox");
  box.style.display = box.style.display === "none" ? "block" : "none";
}

function playMusic() {
  const music = document.getElementById("bgMusic");
  music.volume = 0.4;
  music.play().catch(() => {
    // Autoplay may be blocked
    console.log("Autoplay prevented. Click Sound button to play.");
  });
}