document.getElementById("loginBtn").addEventListener("click", function () {
  const diaryName = document.getElementById("customName").value;
  const password = document.getElementById("password").value;

  const savedPassword = localStorage.getItem("password");

  if (!password || !diaryName) {
    alert("Please enter both Diary Name and Password.");
    return;
  }

  if (savedPassword === null || savedPassword === password) {
    localStorage.setItem("diaryName", diaryName);
    localStorage.setItem("password", password); // Save password if first time
    window.location.href = "diary.html";
  } else {
    alert("Incorrect password.");
  }
});

// Forgot password modal
document.getElementById("forgotBtn").addEventListener("click", function () {
  document.getElementById("forgotModal").style.display = "block";
});

document.getElementById("resetBtn").addEventListener("click", function () {
  const newPassword = document.getElementById("newPassword").value;
  if (newPassword.trim() === "") {
    alert("Please enter a new password.");
    return;
  }
  localStorage.setItem("password", newPassword);
  alert("Password changed successfully!");
  document.getElementById("forgotModal").style.display = "none";
});
