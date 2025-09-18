// Elements
const stages = document.querySelectorAll(".learning_goal_identification");
let currentStage = 0;

const nextBtn = document.querySelector(".button-next button");
const prevBtn = document.querySelector(".button-prev button");

const mentorYesBtn = document.querySelector(".mentor-yes");
const mentorNoBtn = document.querySelector(".mentor-no");
const mentorGrid = document.querySelector(".mentor-grid");
const connectBtns = document.querySelectorAll(".connect-mentor");

const stage1Cards = document.querySelectorAll("#stage_1 .card");
const roleCards = document.querySelectorAll("#stage_2 .role-card");
const skillsCards = document.querySelectorAll("#stage_3 .skills-card");
const skillSelects = document.querySelectorAll("#stage_4 .skill-level-select");

// Store selections
const userSelections = {
  stage1Goal: null,
  stage2Roles: [],
  stage3Skills: [],
  stage4Levels: {},
  stage5Mentor: null,
  stage5MentorConnections: [],
};

// ----------------- Stage Navigation -----------------
function updateStages() {
  stages.forEach((stage, index) => {
    stage.style.display = index === currentStage ? "block" : "none";
  });
  restoreSelections();
  updateButtons();
}

function updateButtons() {
  prevBtn.style.display = currentStage === 0 ? "none" : "inline-block";
  if (currentStage === stages.length - 1) {
    nextBtn.textContent = "Check Your Plan";
    nextBtn.style.width = "200px";
  } else {
    nextBtn.textContent = "Next";
  }
}

nextBtn.addEventListener("click", async () => {
  if (currentStage < stages.length - 1) {
    currentStage++;
    updateStages();
  } else {
    try {
      // Freeze UI
      nextBtn.disabled = true;
      nextBtn.classList.add("opacity-50", "cursor-not-allowed");

      // Show loader overlay
      document.getElementById("loadingOverlay").style.display = "flex";

      const res = await fetch("/api/career-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userSelections),
      });

      const data = await res.json();
      if (res.ok) {
        console.log("Career Plan:", data.plan);
        localStorage.setItem("careerPlan", data.plan);

        // Redirect
        window.location.href = "/career-roadmap";
      } else {
        throw new Error(data.error || "Unknown error");
      }
    } catch (err) {
      console.error(err);
      alert("Error generating career plan. Please try again.");

      // Re-enable UI
      nextBtn.disabled = false;
      nextBtn.classList.remove("opacity-50", "cursor-not-allowed");

      // Hide overlay if error occurs
      document.getElementById("loadingOverlay").style.display = "none";
    }
  }
});

prevBtn.addEventListener("click", () => {
  if (currentStage > 0) currentStage--;
  updateStages();
});

updateStages();

// ----------------- Stage 1: Goal -----------------
stage1Cards.forEach((card) => {
  card.addEventListener("click", () => {
    stage1Cards.forEach((c) => c.classList.remove("selected"));
    card.classList.add("selected");
    userSelections.stage1Goal = card.querySelector(".card-title").innerText;
  });
});

// Stage 2: Roles
roleCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    // Ignore if the card title "Search More"
    if (card.querySelector(".role-card-title").innerText === "Search More")
      return;

    const role = card.querySelector(".role-card-title").innerText;

    if (!userSelections.stage2Roles.includes(role)) {
      userSelections.stage2Roles.push(role);
      card.classList.add("selected");
    } else {
      userSelections.stage2Roles = userSelections.stage2Roles.filter(
        (r) => r !== role
      );
      card.classList.remove("selected");
    }
  });
});

// Stage 3: Skills
skillsCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    if (card.querySelector(".role-card-title").innerText === "Search More")
      return;

    const skill = card.querySelector(".role-card-title").innerText;

    if (!userSelections.stage3Skills.includes(skill)) {
      userSelections.stage3Skills.push(skill);
      card.classList.add("selected");
    } else {
      userSelections.stage3Skills = userSelections.stage3Skills.filter(
        (s) => s !== skill
      );
      card.classList.remove("selected");
    }
  });
});

// ----------------- Stage 4: Skill Levels -----------------
skillSelects.forEach((select) => {
  select.addEventListener("change", () => {
    const skillName =
      select.parentElement.querySelector(".skills-card-title").innerText;
    userSelections.stage4Levels[skillName] = select.value;
  });
});

// ----------------- Stage 5: Mentor -----------------
mentorYesBtn.addEventListener("click", () => {
  mentorGrid.style.display = "grid";
  userSelections.stage5Mentor = "yes";
});

mentorNoBtn.addEventListener("click", () => {
  mentorGrid.style.display = "none";
  userSelections.stage5Mentor = "no";
  alert("You can always connect later!");
});

connectBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const mentorCard = btn.parentElement;
    const mentorName = mentorCard.querySelector(".mentor-name").innerText;
    if (!userSelections.stage5MentorConnections.includes(mentorName)) {
      userSelections.stage5MentorConnections.push(mentorName);
    }
    alert(`A message has been sent to ${mentorName}!`);
  });
});

// ----------------- Restore selections when navigating -----------------
function restoreSelections() {
  // Stage 1
  stage1Cards.forEach((card) => {
    card.classList.toggle(
      "selected",
      card.querySelector(".card-title").innerText === userSelections.stage1Goal
    );
  });

  // Stage 2
  roleCards.forEach((card) => {
    const role = card.querySelector(".role-card-title").innerText;
    card.classList.toggle(
      "selected",
      userSelections.stage2Roles.includes(role)
    );
  });

  // Stage 3
  skillsCards.forEach((card) => {
    const skill = card.querySelector(".role-card-title").innerText;
    card.classList.toggle(
      "selected",
      userSelections.stage3Skills.includes(skill)
    );
  });

  // Stage 4
  skillSelects.forEach((select) => {
    const skillName =
      select.parentElement.querySelector(".skills-card-title").innerText;
    if (userSelections.stage4Levels[skillName]) {
      select.value = userSelections.stage4Levels[skillName];
    }
  });

  // Stage 5
  if (userSelections.stage5Mentor === "yes") mentorGrid.style.display = "grid";
  else if (userSelections.stage5Mentor === "no")
    mentorGrid.style.display = "none";
}
