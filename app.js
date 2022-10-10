//getting the score values
let homePoints = document.getElementById("home-points");
let guestPoints = document.getElementById("guest-points");
let count = 0;
let count2 = 0;

//getting the buttons
//home
let homePlus1 = document.getElementById("home-plus-1");
let homePlus2 = document.getElementById("home-plus-2");
let homePlus3 = document.getElementById("home-plus-3");
//guest
let guestPlus1 = document.getElementById("guest-plus-1");
let guestPlus2 = document.getElementById("guest-plus-2");
let guestPlus3 = document.getElementById("guest-plus-3");

// add event listeners
homePlus1.addEventListener("click", addPoint);
homePlus2.addEventListener("click", addPoint);
homePlus3.addEventListener("click", addPoint);
//guest
guestPlus1.addEventListener("click", addPoint);
guestPlus2.addEventListener("click", addPoint);
guestPlus3.addEventListener("click", addPoint);

function addPoint(event) {
  let currentpoint = event.target;
  if (currentpoint.id === "home-plus-1") {
    count += 1;
    homePoints.textContent = count;
    leadingTeam();
  } else if (currentpoint.id === "home-plus-2") {
    count += 2;
    homePoints.textContent = count;
    leadingTeam();
  } else if (currentpoint.id === "home-plus-3") {
    count += 3;
    homePoints.textContent = count;
    leadingTeam();
  } else if (currentpoint.id === "guest-plus-1") {
    count2 += 1;
    guestPoints.textContent = count2;
    leadingTeam();
  } else if (currentpoint.id === "guest-plus-2") {
    count2 += 2;
    guestPoints.textContent = count2;
    leadingTeam();
  } else if (currentpoint.id === "guest-plus-3") {
    count2 += 3;
    guestPoints.textContent = count2;
    leadingTeam();
  }
}

function leadingTeam() {
  if (homePoints.textContent > guestPoints.textContent) {
    guestPoints.style.color = "var(--pink)";
    homePoints.style.color = "var(--limegreen)";
  } else if (guestPoints.textContent > homePoints.textContent) {
    homePoints.style.color = "var(--pink)";
    guestPoints.style.color = "var(--limegreen)";
  } else {
    homePoints.style.color = "var(--orange)";
    guestPoints.style.color = "var(--orange)";
  }
}
