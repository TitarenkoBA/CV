let elems = document.getElementsByClassName("myBar");
for (elem of elems) {
  let width = parseInt(elem.textContent);
  elem.style.width = width + "%";
}

let spans = document.querySelectorAll(".myBar span");
for (span of spans) {
  span.style.opacity = 1;
}

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "radar",
  data: {
    labels: [
      "English / HTML",
      "Russian / CSS",
      "Responsibility, perseverance, independence, organization / Javascript",
      "Organizational skills, leadership skills / jQuery",
      "Politeness, competent writing, correct speech / Vue.js",
      "Striving to acquire new knowledge and practical skills / Git",
      "Creativity, originality / PHP",
    ],
    datasets: [
      {
        label: "Soft skills",
        fill: true,
        backgroundColor: "rgba(97, 97, 97, 0.3)",
        borderColor: "rgba(97, 97, 97, 1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(97, 97, 97, 1)",
        data: [60, 99, 90, 80, 85, 95, 70],
      },
      {
        label: "Hard skills",
        fill: true,
        backgroundColor: "rgba(255, 87, 34, 0.3)",
        borderColor: "rgba(255, 87, 34, 1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(255, 87, 34, 1)",
        data: [90, 90, 80, 60, 40, 40, 15],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Skills diagram",
    },
  },
});

function themeToggle() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  const toggleClasses = (selector, classA, classB) => {
    document.querySelectorAll(selector).forEach((elem) => {
      elem.classList.toggle(classA);
      elem.classList.toggle(classB);
    });
  };

  btn.addEventListener("click", function () {
    const isDeepOrange = document.querySelector(".w3-deep-orange");

    if (isDeepOrange) {
      toggleClasses(".w3-deep-orange", "w3-deep-orange", "w3-teal");
      toggleClasses(
        ".w3-text-deep-orange",
        "w3-text-deep-orange",
        "w3-text-teal"
      );
    } else {
      toggleClasses(".w3-teal", "w3-deep-orange", "w3-teal");
      toggleClasses(".w3-text-teal", "w3-text-deep-orange", "w3-text-teal");
    }

    btn.classList.toggle("fa-toggle-off");
    btn.classList.toggle("fa-toggle-on");
  });
}
