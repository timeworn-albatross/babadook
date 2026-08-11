const noneText = "None"
const crucifixWeaknessText = "As a religious entity, it is affected by crucifixes. A well-placed or hand-held crucifix can stop its active hunt and force it to retreat for a short time."

const ghosts = [
    {
        name: "Apparition",
        evidence: ["Abnormal Temperatures", "Communication", "Ultraviolet"],
        weakness: "Almost harmless at a distance. Incense keeps it suppressed for a long time.",
        uniqueAbility: "Grows terrifyingly fast the closer it gets to its victim, and never disturbs salt. Piles stay untouched no matter how often it passes.",
        behavior: "Very quiet and rarely acts. Average pace at range, but overwhelming up close. Its hunts are short, which is the only mercy it offers."
    },
    {
        name: "Babadook",
        evidence: ["Communication", "Ghost Orbs", "Ultraviolet"],
        weakness: "Incense gives far less relief against the Babadook than against most spirits.",
        uniqueAbility: "Gains speed for every second a hunt continues. The longer it chases, the faster it becomes.",
        behavior: "Extremely aggressive, with one of the longest hunts on record. Starts fast and only gets faster, until by the end nothing outruns it."
    },
    {
        name: "Bakhtak",
        evidence: ["Communication", "Ghost Orbs", "Ghost Writing"],
        weakness: "Cannot keep pace with a sprinting victim.",
        uniqueAbility: "Feeds on stillness. A frozen victim is the fastest prey. Standing still is a death sentence.",
        behavior: "One of the longest hunts on record. Merely quick against a running victim, but horrifyingly fast against a still one. Raises fear unnaturally fast, and hunts again sooner than most."
    },
    {
        name: "Banshee",
        evidence: ["Communication", "Laser Grid", "Ultraviolet"],
        weakness: "Obsessed with a single victim. Everyone else is ignored during a hunt.",
        uniqueAbility: "Marks one target and stalks only them. Screams through the spirit box when used nearby.",
        behavior: "Average speed with long hunts. Wails as each hunt begins. Its chosen victim endures far more than anyone else."
    },
    {
        name: "Boggart",
        evidence: ["Communication", "Ghost Orbs", "Laser Grid"],
        weakness: "Never throws objects. A room full of flying items rules it out.",
        uniqueAbility: "A thief. Steals items and equipment and hides them in other rooms, leaving faint traces at the scene.",
        behavior: "Slow-moving with average hunts. More active in darkness. Prefers mischief over violence."
    },
    {
        name: "Churel",
        evidence: ["Ghost Orbs", "Laser Grid", "Ultraviolet"],
        weakness: "Its unnatural backwards walk exposes it during sightings.",
        uniqueAbility: "Periodically walks backwards, and unmistakable sign.",
        behavior: "Slower than most, with long hunts. More active in darkness. Its backwards walk is the giveaway, not its pace."
    },
    {
        name: "Demon",
        evidence: ["Abnormal Temperatures", "Communication", "EMF 5"],
        weakness: "Its hunts are short. Survive the burst and it retreats. Incense barely slows it, but a crucifix repels it.",
        uniqueAbility: "Always knows exactly where every victim is, and can hunt whenever it pleases, no matter how calm the team feels.",
        behavior: "The most violent entity ever known, and among the fastest, but its hunts are mercifully short. Survive the bursts and it retreats, only to return sooner than anything else."
    },
    {
        name: "Djinn",
        evidence: ["Ghost Orbs", "Ghost Writing", "Ultraviolet"],
        weakness: "Some hunts it is barely a threat at all.",
        uniqueAbility: "Its speed changes completely with every hunt: crawling one moment, sprinting the next.",
        behavior: "Average temper, average hunt length. Speed is a coin flip, crawling one hunt and sprinting the next. Never judge it by a single chase."
    },
    {
        name: "Dullahan",
        evidence: ["EMF 5", "Ghost Orbs", "Ghost Writing"],
        weakness: "Its chosen victim always hears it coming.",
        uniqueAbility: "Marks one victim with distant hoofbeats only they can hear, and hunts them far earlier than it should.",
        behavior: "Average speed and average hunt length, but utterly decisive once it commits. It does not need long. If you hear hooves, you are already marked."
    },
    {
        name: "Duppy",
        evidence: ["Abnormal Temperatures", "EMF 5", "Ghost Writing"],
        weakness: "Its rage at swearing exposes it instantly. A crucifix repels it.",
        uniqueAbility: "Cursing sends it into a screaming frenzy, terrifying everyone nearby.",
        behavior: "Extremely aggressive and fast, with short hunts. What it lacks in stamina it makes up for by hunting again almost immediately."
    },
    {
        name: "Dybbuk",
        evidence: ["Communication", "Ghost Writing", "Ultraviolet"],
        weakness: "Touches everything except doors. A haunted house with clean door handles betrays it. A crucifix repels it.",
        uniqueAbility: "Never leaves fingerprints on doors, no matter how often it uses them.",
        behavior: "Fast, with long hunts and an ordinary temper. Identified by what it does not leave behind, not by how it moves."
    },
    {
        name: "Eidolon",
        evidence: ["Communication", "Ghost Writing", "Laser Grid"],
        weakness: "Hunts rarely. Patience is its nature.",
        uniqueAbility: "Always shuts the front door during its manifestations, sealing the house.",
        behavior: "Very quiet and slow to anger, but fast on its feet once it hunts. Its hunts are the longest on record."
    },
    {
        name: "Fetch",
        evidence: ["Abnormal Temperatures", "Ghost Writing", "Ultraviolet"],
        weakness: "Its true form can never be trusted.",
        uniqueAbility: "Takes a completely new form for every hunt. No two sightings ever show the same figure.",
        behavior: "Slow, with short hunts. Its appearance changes; its pace never does. Rely on speed to know it, never looks."
    },
    {
        name: "Genius Loci",
        evidence: ["Laser Grid", "Ghost Orbs", "Ghost Writing"],
        weakness: "The spirit itself is unremarkable. It is the house you should fear.",
        uniqueAbility: "Its very presence drains the mind. Fear grows far faster here than anywhere else, from the moment you step inside.",
        behavior: "Average speed and average hunts, so the ghost itself is unremarkable. It is the crushing fear of the house that kills teams, not the chase."
    },
    {
        name: "Jiangshi",
        evidence: ["EMF 5", "Laser Grid", "Ultraviolet"],
        weakness: "Freezes when you freeze. Incense suppresses it for a very long time.",
        uniqueAbility: "Mirrors its victim's movement: sprint and it sprints, stand dead still and it barely crawls.",
        behavior: "Average hunts, but its speed is yours: sprint and it sprints, freeze and it barely crawls. Survival means standing still while it approaches."
    },
    {
        name: "Jumbee",
        evidence: ["Communication", "EMF 5", "Laser Grid"],
        weakness: "Slow on its feet, and repelled by a crucifix.",
        uniqueAbility: "Fills the house with the sound of doors that never actually move.",
        behavior: "Slow, with long hunts. Restless and noisy, sometimes walking backwards. Easy to escape, hard to pin down."
    },
    {
        name: "Kikimora",
        evidence: ["Abnormal Temperatures", "EMF 5", "Ultraviolet"],
        weakness: "Its fake cold room reads mildly cold. The real one is far colder. A crucifix repels it.",
        uniqueAbility: "Creates a decoy cold room to mislead investigators, and grows furious when the house is left in disorder.",
        behavior: "Fast, with average hunts. Calm unless the house is disturbed, and every topped object feeds its rage. Incense drives it home rather than calming it."
    },
    {
        name: "La Llorona",
        evidence: ["Abnormal Temperatures", "Communication", "Ghost Orbs"],
        weakness: "Slows to a crawl beside its victim. When she hunts, run toward her, not away. A crucifix repels her.",
        uniqueAbility: "Weeps on a schedule, a wail that chills the whole house and shakes everyone who hears it.",
        behavior: "One of the longest hunts on record, with a cruel twist: very fast toward those who flee, crawling beside those who stand close. Run toward her, never away."
    },
    {
        name: "Landvaettir",
        evidence: ["Abnormal Temperatures", "Communication", "Ghost Writing"],
        weakness: "Weak and slow outside its own room. Never touches lights or electronics.",
        uniqueAbility: "Bound to its lair. Every hunt begins there, and within it the Landvaettir is a monster; outside it, a shadow of itself.",
        behavior: "Very quiet, with long hunts. Very fast inside its lair, crippled and slow outside it, but its lair wanders the house. Stay out of its room and it can barely touch you."
    },
    {
        name: "Mare",
        evidence: ["Abnormal Temperatures", "Laser Grid", "Ultraviolet"],
        weakness: "Cannot hunt in the light. Lit rooms slow it; a lit house tames it.",
        uniqueAbility: "A creature of darkness that snuffs out lights and strikes only when they're gone.",
        behavior: "Long hunts. Very fast in the dark, sluggish in the light. Keep the house bright and it stays both harmless and slow."
    },
    {
        name: "Phantome",
        evidence: ["EMF 5", "Ghost Orbs", "Ultraviolet"],
        weakness: "Never settles. Its lair can always be found again.",
        uniqueAbility: "Abandons its room after every hunt and claims a new one elsewhere in the house.",
        behavior: "Slightly faster than it looks, with average hunts. A restless wanderer, and every hunt resets the investigation."
    },
    {
        name: "Poltergeist",
        evidence: ["EMF 5", "Ghost Writing", "Ultraviolet"],
        weakness: "An empty room leaves it powerless.",
        uniqueAbility: "Begins every hunt by hurling everything around it into the air at once, a violent eruption of the entire room.",
        behavior: "Fast and extremely loud, with short hunts. Constant thrown objects, constant chaos. You will always know when it hunts."
    },
    {
        name: "Pontianak",
        evidence: ["Communication", "EMF 5", "Ultraviolet"],
        weakness: "Cannot hunt a group. Staying together renders it harmless.",
        uniqueAbility: "Strikes only when someone wanders alone.",
        behavior: "Average speed, with long hunts, and more active in darkness. Patient, waiting for someone to wander alone before it strikes."
    },
    {
        name: "Revenant",
        evidence: ["Ghost Writing", "Laser Grid", "Ultraviolet"],
        weakness: "Nearly blind and sluggish when no one is in sight. Break its gaze and it loses you. A crucifix repels it.",
        uniqueAbility: "The instant it sees its prey it becomes the fastest entity known. No ramp-up, no warning.",
        behavior: "Average hunts, but two speeds: nearly blind and sluggish with no prey in sight, the fastest entity known the instant it sees you. Craves another hunt soon after each one."
    },
    {
        name: "Shade",
        evidence: ["Abnormal Temperatures", "Ghost Orbs", "Ultraviolet"],
        weakness: "Too shy to act while being watched. Incense banishes it longer than any other spirit.",
        uniqueAbility: "Refuses to interact while anyone stands in its room, and groups keep it almost completely dormant.",
        behavior: "The quietest entity known, but among the very fastest once it finally hunts. Average hunt length. Silence is not safety."
    },
    {
        name: "Strigoi",
        evidence: ["Communication", "EMF 5", "Ghost Writing"],
        weakness: "Calm victims can outrun it with ease, and a crucifix repels it.",
        uniqueAbility: "Feeds on fear itself. The more terrified its prey, the faster it moves.",
        behavior: "Long hunts. Slow against calm victims, unstoppable against terrified ones. Its speed is a measure of your fear."
    },
    {
        name: "Vetala",
        evidence: ["Abnormal Temperatures", "EMF 5", "Ghost Orbs"],
        weakness: "Slower when it can be seen.",
        uniqueAbility: "Can rise from the corpses of the fallen to begin a hunt, and moves fastest in the moments it vanishes from sight.",
        behavior: "Long hunts. Slow when visible, and far faster in the moments it flickers out of sight. Never trust your eyes, or a teammate's body."
    },
    {
        name: "Wisp",
        evidence: ["EMF 5", "Ghost Orbs", "Laser Grid"],
        weakness: "Unhurried and easy to outpace. Never touches the lights.",
        uniqueAbility: "Manifests as several unusually bright, lingering orbs.",
        behavior: "Unhurried, yet with one of the longest hunts on record. Gentle, quiet, almost passive, the least dangerous entity on file but never harmless."
    },
    {
        name: "Wraith",
        evidence: ["Abnormal Temperatures", "Ghost Orbs", "Laser Grid"],
        weakness: "Rarely shows itself during hunts, but its room grows impossibly cold, colder than any natural haunting.",
        uniqueAbility: "Drives its room down toward -15C, far past any natural chill. Incense holds it back for noticeably less time than most ghosts, and once a hunt begins it presses on a little longer than most.",
        behavior: "Average hunts. Slow while unseen, but more than doubles its speed the moment it spots prey. A silent, freezing house means Wraith."
    },
    {
        name: "Yuki-onna",
        evidence: ["Abnormal Temperatures", "Ghost Orbs", "Ghost Writing"],
        weakness: "Warmth cripples her. Keep the breaker on and the heat running.",
        uniqueAbility: "Draws speed from the cold. In a freezing house she is relentless, and her room sinks far below natural cold.",
        behavior: "Long hunts. Slow in a warm house, relentless in a frozen one. Every degree the house loses makes her faster, and the cold itself is the countdown."
    }
]