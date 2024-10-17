const communityStats = {
  totalUsers: 50,
  activeToday: 124,
  knowledgeBase: 248,
  successStories: 25,
  nextMilestone: 500,
  lastMilestone: 100
};

// Set initial stats on page load
document.getElementById("totalUsers").textContent = communityStats.totalUsers.toLocaleString();
document.getElementById("activeToday").textContent = communityStats.activeToday.toLocaleString();
document.getElementById("knowledgeBase").textContent = communityStats.knowledgeBase.toLocaleString();
document.getElementById("successStories").textContent = communityStats.successStories.toLocaleString();
document.getElementById("popupTotalUsers").textContent = communityStats.totalUsers.toLocaleString();
document.getElementById("lastMilestone").textContent = communityStats.lastMilestone.toLocaleString();

// Progress bar animation starting from 1
let progress = 1;
const progressBar = document.getElementById("progressBar");
const progressPercentage = document.getElementById("progressPercentage");
const updateProgress = () => {
  progress += 1;
  if (progress <= 85) {
    progressBar.style.width = progress + "%";
    progressPercentage.textContent = progress + "%";
  }
};
setInterval(updateProgress, 50);

// Show the growth popup
function showPopup() {
  document.getElementById("growthPopup").style.display = "flex";
}

// Close the popup
function closePopup() {
  document.getElementById("growthPopup").style.display = "none";
}

// Show the milestone popup
function showMilestone() {
  document.getElementById("milestonePopup").style.display = "flex";
}

// Close the milestone popup
function closeMilestone() {
  document.getElementById("milestonePopup").style.display = "none";
}

// Trigger the milestone popup when progress reaches 85%
setTimeout(() => {
  if (progress >= 85) {
    showMilestone();
  }
}, 5000);

