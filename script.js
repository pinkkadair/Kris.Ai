document.addEventListener('DOMContentLoaded', () => {
  const growthPopup = document.getElementById('growthPopup');
  const guidePopup = document.getElementById('guidePopup');
  const continueButton = document.getElementById('continueButton');
  const closeGuideButton = document.getElementById('closeGuide');

  // Show the initial growth popup
  if (growthPopup) {
    growthPopup.style.display = 'flex';
  }

  // Continue button to close growth popup and show the guide popup
  if (continueButton) {
    continueButton.addEventListener('click', () => {
      if (growthPopup) {
        growthPopup.style.display = 'none';
      }
      if (guidePopup) {
        guidePopup.style.display = 'flex';
      }
    });
  }

  // Close guide popup
  if (closeGuideButton) {
    closeGuideButton.addEventListener('click', () => {
      if (guidePopup) {
        guidePopup.style.display = 'none';
      }
    });
  }
});

// Show the guide popup
function showGuide() {
  const guidePopup = document.getElementById('guidePopup');
  if (guidePopup) {
    guidePopup.style.display = 'flex';
  }
}
// Function to animate the progress bars
document.addEventListener('DOMContentLoaded', () => {
  const progressBars = document.querySelectorAll('.progress-bar-fill');
  progressBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.width = width;
    }, 200);
  });
});

// Close the guide popup
function closeGuide() {
  const guidePopup = document.getElementById('guidePopup');
  if (guidePopup) {
    guidePopup.style.display = 'none';
  }
}

