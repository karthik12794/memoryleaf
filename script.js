// Login function
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Save diary name to localStorage
  const diaryName = document.getElementById("customName").value;
  localStorage.setItem("diaryName", diaryName);

  if (username && password) {
    alert("Login successful! (This is a temporary demo. Backend will be added soon.)");

    // Redirect to diary page
    window.location.href = "diary.html";
  } else {
    alert("Please enter both name and password.");
  }
}

// Show or hide forgot password box
function showForgot() {
  const forgotBox = document.getElementById("forgotBox");
  if (forgotBox.style.display === "none" || forgotBox.style.display === "") {
    forgotBox.style.display = "block";
  } else {
    forgotBox.style.display = "none";
  }
}

// Reset password (demo only)
function resetPassword() {
  const newPassword = document.getElementById("newPass").value;

  if (newPassword.trim().length < 4) {
    alert("Password too short. Please enter at least 4 characters.");
  } else {
    alert("Password changed successfully! (This is a demo. Will be saved in backend later.)");
    document.getElementById("forgotBox").style.display = "none";
    document.getElementById("newPass").value = "";
  }
}