const evidenceOptions = document.querySelectorAll(".evidence-option");

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
  });
});