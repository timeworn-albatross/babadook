const evidenceOptions = document.querySelectorAll(".evidence-option");
const resetButton = document.querySelector(".reset-button");
const ghostList = document.querySelector("#ghost-list");

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
  const possibleGhosts = getPossibleGhosts();

  const usefulRemainingEvidence = [];

  possibleGhosts.forEach(function (ghost) {
    const missingEvidence = getMissingEvidence(ghost);

    missingEvidence.forEach(function (evidence) {
      if (!usefulRemainingEvidence.includes(evidence)) {
        usefulRemainingEvidence.push(evidence);
      }
    });
  });

  evidenceOptions.forEach(function (evidenceOption) {
    const currentState = evidenceOption.dataset.state;
    const evidenceName = evidenceOption.dataset.evidence;

    const shouldDisableBecauseThreeConfirmed =
      confirmedCount >= 3 && currentState === "unknown";

    const shouldDisableBecauseNotUseful =
      currentState === "unknown" &&
      !usefulRemainingEvidence.includes(evidenceName);

    if (shouldDisableBecauseThreeConfirmed || shouldDisableBecauseNotUseful) {
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

function getEvidenceByState(state) {
  const matchingEvidence = [];

  evidenceOptions.forEach(function (evidenceOption) {
    if (evidenceOption.dataset.state === state) {
      matchingEvidence.push(evidenceOption.dataset.evidence);
    }
  });

  return matchingEvidence;
}

function getPossibleGhosts() {
  const confirmedEvidence = getEvidenceByState("confirmed");
  const ruledOutEvidence = getEvidenceByState("ruled-out");

  return ghosts.filter(function (ghost) {
    const hasAllConfirmedEvidence = confirmedEvidence.every(function (evidence) {
      return ghost.evidence.includes(evidence);
    });

    const hasAnyRuledOutEvidence = ruledOutEvidence.some(function (evidence) {
      return ghost.evidence.includes(evidence);
    });

    return hasAllConfirmedEvidence && !hasAnyRuledOutEvidence;
  });
}

function getMissingEvidence(ghost) {
  const confirmedEvidence = getEvidenceByState("confirmed");

  return ghost.evidence.filter(function (evidence) {
    return !confirmedEvidence.includes(evidence);
  });
}

function renderGhostList() {
  const possibleGhosts = getPossibleGhosts();

  ghostList.innerHTML = "";

  possibleGhosts.forEach(function (ghost) {
    const missingEvidence = getMissingEvidence(ghost);

    const ghostCard = document.createElement("li");
    ghostCard.classList.add("ghost-card");

    ghostCard.innerHTML = `
      <h3>${ghost.name}</h3>

      ${
        missingEvidence.length > 0
          ? `<p class="ghost-evidence">
              <strong>Still needed:</strong> ${missingEvidence.join(", ")}
              </p>`
          : ""
      }

      <p>
        <strong>Ability:</strong> ${ghost.uniqueAbility}
      </p>

      <p>
        <strong>Weakness:</strong> ${ghost.weakness}
      </p>

      <p>
        <strong>Behavior:</strong> ${ghost.behavior}
      </p>
    `;

    ghostList.appendChild(ghostCard);
  });
}

evidenceOptions.forEach(function (evidenceOption) {
  evidenceOption.addEventListener("click", function () {
    const currentState = evidenceOption.dataset.state;
    const nextState = getNextState(currentState);

    evidenceOption.dataset.state = nextState;

    updateEvidenceAvailability();
    renderGhostList();
  });
});

resetButton.addEventListener("click", function () {
  evidenceOptions.forEach(function (evidenceOption) {
    evidenceOption.dataset.state = "unknown";
  });

  updateEvidenceAvailability();
  renderGhostList();
});

updateEvidenceAvailability();
renderGhostList();