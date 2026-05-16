const evidenceOptions = document.querySelectorAll(".evidence-option");
const resetButton = document.querySelector(".reset-button");
const noneText = "None"
const crucifixWeaknessText = "As a religious entity, it is affected by crucifixes. A well-placed or hand-held crucifix can stop its active hunt and force it to retreat for a short time."

const ghosts = [
  {
    name: "Apparition",
    evidence: ["Freezing Temperatures", "Spirit Box", "UV Light"],
    uniqueAbility: "Never steps in salt, leaving no footprints even after moving directly over it.",
    weakness: noneText,
    behavior: "A fairly balanced ghost with no obvious extremes in how it behaves. It seems manageable at first, but its hunts carry more speed than its otherwise plain behavior would suggest, making it easier to underestimate.",
    ourNotes: ""
  },
  {
    name: "Babadook",
    evidence: ["Ghost Orbs", "Spirit Box", "UV Light"],
    uniqueAbility: "Handprints left on the door are distinctly distorted, unlike the clean impressions left by any other ghost.",
    weakness: noneText,
    behavior: "Relentless from the beginning, with constant activity, frequent manifestations, and heavy pressure on the entire team. It is one of the most overwhelming ghosts to face, combining strong speed with long hunts and almost nonstop presence.",
    ourNotes: "SUPER BITCH from the instant we get inside"
  },
  {
    name: "Banshee",
    evidence: ["Laser Grid", "Spirit Box", "UV Light"],
    uniqueAbility: "May emit a horrifying scream when responding through the Spirit Box, increasing player fear (anxiety).",
    weakness: noneText,
    behavior: "Quiet for much of the investigation, but unusually willing to reveal itself. It rarely feels rushed or overly aggressive, though once a hunt begins it moves faster than you'd expect and tends to stay committed longer than most.",
    ourNotes: ""
  },
  {
    name: "Boggart",
    evidence: ["Ghost Orbs", "Laser Grid", "Spirit Box"],
    uniqueAbility: "Provides false ghost room directions on the dowsing rod, intentionally leading investigators away from the correct location.",
    weakness: noneText,
    behavior: "Fairly average on the surface, which makes it difficult to identify early. Its real advantage comes from misleading investigators, while its slightly elevated speed makes those wrong calls more costly once a hunt begins.",
    ourNotes: ""
  },
  {
    name: "Demon",
    evidence: ["EMF 5", "Freezing Temperatures", "Spirit Box"],
    uniqueAbility: "Always knows the position of every player and can immediately pursue them when a hunt starts.",
    weakness: crucifixWeaknessText,
    behavior: "Highly aggressive from the outset and quick to turn pressure into a hunt. It wastes very little time once active, locking onto players immediately and bearing down on them with brutal speed if a crucifix is not ready.",
    ourNotes: ""
  },
  {
    name: "Djinn",
    evidence: ["Ghost Orbs", "Ghost Writing", "UV Light"],
    uniqueAbility: "After each hunt, its movement speed changes unpredictably, making it harder to judge with each subsequent encounter.",
    weakness: noneText,
    behavior: "Unpredictable and difficult to read, with no reliable rhythm to its hunts. Its speed cannot be judged the way other ghosts can, which makes every encounter feel uncertain no matter how safe the last one seemed.",
    ourNotes: ""
  },
  {
    name: "Duppy",
    evidence: ["EMF 5", "Freezing Temperatures", "Ghost Writing"],
    uniqueAbility: "If players curse near it, the Duppy may scream loudly and grow more aggressive, sometimes initiating a hunt in retaliation.",
    weakness: noneText,
    behavior: "A sharp, reactive ghost that can turn hostile with very little buildup. It stays active, moves quickly, and tends to punish careless behavior hard, especially when investigators get too comfortable around it.",
    ourNotes: ""
  },
  {
    name: "Dybbuk",
    evidence: ["Ghost Writing", "Spirit Box", "UV Light"],
    uniqueAbility: "Never leaves handprints, no matter how many times it touches doors or interacts physically with the world.",
    weakness: crucifixWeaknessText,
    behavior: "Its presence is oppressive even when it is not actively hunting. Teams tend to lose their compusure quickly around it, and by the time it does commit to a chase, its pace is fast enough to capitalize on already broken nerves.",
    ourNotes: ""
  },
  {
    name: "Eidolon",
    evidence: ["Ghost Writing", "Laser Grid", "Spirit Box"],
    uniqueAbility: "Can close the main entrance door during ghost events, preventing escape and creating panic while it performs manifestations.",
    weakness: noneText,
    behavior: "Often feels patient at first, but becomes much more dangerous once a hunt begins. It reveals itself often enough to keep everyone uneasy, and its combination of strong speed and long hunts gives it plenty of time to punish mistakes.",
    ourNotes: ""
  },
  {
    name: "Genius Loci",
    evidence: ["Ghost Orbs", "Ghost Writing", "Laser Grid"],
    uniqueAbility: "Ghost events cause a large spike in anxiety, rapidly weakening mental stability.",
    weakness: noneText,
    behavior: "Exceptionally prone to manifesting, often appearing again and again throughout an investigation. It is not the most relentless presence overall, but once it does hunt it moves with enough speed to make all that pressure feel far more dangerous.",
    ourNotes: "popped up in laser grid for 39480230483290 seconds"
  },
  {
    name: "Jumbee",
    evidence: ["EMF 5", "Laser Grid", "Spirit Box"],
    uniqueAbility: "Can produce door opening and closing sounds without interacting with the door, causing misdirection and splitting groups.",
    weakness: crucifixWeaknessText,
    behavior: "Slower than most and often manageable in open spaces, but still capable of keeping a team under pressure through constant disturbances. It is not built to overwhelm through speed alone, which makes its religious weakness all the more important once identified.",
    ourNotes: "flapped a door open/closed for like 8 seconds"
  },
  {
    name: "Kikimora",
    evidence: ["EMF 5", "Freezing Temperatures", "UV Light"],
    uniqueAbility: "Capable of faking temperature drops, making thermometer readings unreliable and leading players away from the true ghost room.",
    weakness: crucifixWeaknessText,
    behavior: "Active and aggressive, yet frustratingly difficult to pin down visually. It prefers misdirection over direct presence, and when it finally commits to a hunt it has the speed to turn that confusion into real danger very quickly.",
    ourNotes: ""
  },
  {
    name: "Landvaettir",
    evidence: ["Freezing Temperatures", "Ghost Writing", "Spirit Box"],
    uniqueAbility: "Always initiates a hunt directly from its ghost room, catching players off guard if they linger there.",
    weakness: noneText,
    behavior: "Not especially fast compared to the worst of them, but dangerous in how suddenly it turns from passive to hostile. Hunts seem to begin with very little warning, especially for anyone lingering too long in or near its room.",
    ourNotes: ""
  },
  {
    name: "Mare",
    evidence: ["Freezing Temperatures", "Laser Grid", "UV Light"],
    uniqueAbility: "Instinctively avoids all light sources and will never extinguish a lit lantern under any circumstances.",
    weakness: noneText,
    behavior: "Rarely chooses to reveal itself directly, despite maintaining a heavy and oppressive presence. It can stay hidden for a long time, but when it finally hunts it moves with terrifying speed, making that quiet buildup far more dangerous than it first appears.",
    ourNotes: ""
  },
  {
    name: "Phantome",
    evidence: ["EMF 5", "Ghost Orbs", "UV Light"],
    uniqueAbility: "After a hunt ends, the Phantome may change its ghost room to a new location, disrupting progress and keeping players on the move.",
    weakness: noneText,
    behavior: "Consistent in most areas, with steady activity, regular appearances, and short hunts. What makes it troublesome is that it moves with more urgency than its calm behavior suggests, then relocates just as the team starts settling into a plan.",
    ourNotes: ""
  },
  {
    name: "Poltergeist",
    evidence: ["EMF 5", "Ghost Writing", "UV Light"],
    uniqueAbility: "Has a significantly higher chance to throw nearby objects with force, using the environment as a weapon.",
    weakness: noneText,
    behavior: "Restless and disruptive, with constant activity that makes its presence hard to ignore. It may not stay in a hunt for long, but it moves with enough pace to make the chaos around it feel much more threatening.",
    ourNotes: "active as fuck...\n33 ghost events in our first polty match\nnot sure if it's unique, but did the crying child sound effect frequently"
  },
  {
    name: "Revenant",
    evidence: ["Ghost Writing", "Laser Grid", "UV Light"],
    uniqueAbility: "Accelerates dramatically the instant it spots a player, shifting from one of the slowest ghosts to a dangerous pursuer in moments.",
    weakness: crucifixWeaknessText,
    behavior: "Often appears passive and almost sluggish until it gains sight of someone. On paper it is not especially fast, but the moment it spots a player that changes, turning hesitation into a deadly mistake.",
    ourNotes: "possibly unique: wrote a fuckton all over the house"
  },
  {
    name: "Shade",
    evidence: ["Freezing Temperatures", "Ghost Orbs", "UV Light"],
    uniqueAbility: noneText,
    weakness: "Its weakness is social presence. The Shade becomes far less likely to appear or hunt when players remain together.",
    behavior: "Unusually quiet, withdrawn, and difficult to provoke when investigators stay close together. That calm may be dangerously misleading, because when it finally hunts it becomes one of the fastest threats you can face.",
    ourNotes: ""
  },
  {
    name: "Wisp",
    evidence: ["EMF 5", "Ghost Orbs", "Laser Grid"],
    uniqueAbility: "Produces much stronger and more visible ghost orbs, allowing teams to identify it more easily if they check cameras.",
    weakness: noneText,
    behavior: "Moderately active and fairly willing to engage, though not especially frightening at first glance. Its danger comes from persistence, with lengthy hunts and enough speed to punish anyone who is slow getting out of position.",
    ourNotes: ""
  },
  {
    name: "Wraith",
    evidence: ["Freezing Temperatures", "Ghost Orbs", "Laser Grid"],
    uniqueAbility: "Can drop temperatures to minus fifteen degrees, dramatically lower than any other ghost and a clear sign of its presence.",
    weakness: noneText,
    behavior: "Deceptively slow, but far more dangerous than its pace suggests. It creates an oppressive atmosphere, pushes temperatures to extreme lows, and tends to break a team's confidence long before a chase ever starts.",
    ourNotes: ""
  }
];

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

      <p>
        <strong>Our notes:</strong> ${ghost.ourNotes}
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