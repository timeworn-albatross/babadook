const evidenceOptions = document.querySelectorAll(".evidence-option");
const resetButton = document.querySelector(".reset-button");

function getConfirmedCount() {
  let count = 0;

  evidenceOptions.forEach(function (evidenceOption) {
    if (evidenceOption.dataset.state === "confirmed") {
      count = count + 1;
    }
  });

  return count;
}

function updateEvidenceAvailability() {
  const confirmedCount = getConfirmedCount();

  evidenceOptions.forEach(function (evidenceOption) {
    const currentState = evidenceOption.dataset.state;

    if (confirmedCount >= 3 && currentState === "unknown") {
      evidenceOption.disabled = true;
    } else {
      evidenceOption.disabled = false;
    }
  });
}

function getNextState(currentState) {
  if (currentState === "unknown") {
    return "confirmed";
  }

  if (currentState === "confirmed") {
    return "ruled-out";
  }

  return "unknown";
}

evidenceOptions.forEach(function (evidenceOption) {
  evidenceOption.addEventListener("click", function () {
    const currentState = evidenceOption.dataset.state;
    const nextState = getNextState(currentState);

    evidenceOption.dataset.state = nextState;

    updateEvidenceAvailability();
  });
});

resetButton.addEventListener("click", function () {
  evidenceOptions.forEach(function (evidenceOption) {
    evidenceOption.dataset.state = "unknown";
  });

  updateEvidenceAvailability();
});

updateEvidenceAvailability();