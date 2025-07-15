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
  type: "bar",
  data: {
    labels: [
      "English / HTML",
      "Russian / CSS",
      "Responsibility, perseverance, independence, organization / Javascript",
      "Organizational skills, leadership skills / Vue.js",
      "Politeness, competent writing, correct speech / React.js",
      "Striving to acquire new knowledge and practical skills / Git",
      "Creativity, originality / PHP, Python, Go",
    ],
    datasets: [
      {
        label: "Soft skills",
        fill: true,
        backgroundColor: "rgba(97, 97, 97)",
        borderColor: "rgba(97, 97, 97, 1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(97, 97, 97, 1)",
        data: [60, 99, 90, 80, 85, 95, 70],
      },
      {
        label: "Hard skills",
        fill: true,
        backgroundColor: "rgba(255, 87, 34)",
        borderColor: "rgba(255, 87, 34, 1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(255, 87, 34, 1)",
        data: [90, 90, 90, 55, 80, 50, 15],
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

// Language switching logic
const LANGUAGES = {
  en: "en",
  ru: "ru"
}

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (window.translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = window.translations[lang][key];
      } else {
        el.childNodes[0].nodeValue = window.translations[lang][key] + ' ';
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  // ... existing code ...
  // Language switcher
  const langSwitcher = document.getElementById('lang-switcher');
  if (langSwitcher) {
    // Set initial icon and data-lang
    const savedLang = localStorage.getItem('lang') || 'en';
    langSwitcher.dataset.lang = savedLang;
    if (savedLang === 'ru') {
      langSwitcher.classList.remove('fa-toggle-on');
      langSwitcher.classList.add('fa-toggle-off');
    } else {
      langSwitcher.classList.remove('fa-toggle-off');
      langSwitcher.classList.add('fa-toggle-on');
    }
    langSwitcher.addEventListener('click', function () {
      const currentLang = langSwitcher.dataset.lang || 'en';
      const newLang = currentLang === 'en' ? 'ru' : 'en';
      setLanguage(newLang);
      langSwitcher.dataset.lang = newLang;
      langSwitcher.classList.toggle('fa-toggle-on');
      langSwitcher.classList.toggle('fa-toggle-off');
    });
  }
  // Initialize language
  const savedLang = localStorage.getItem('lang') || 'en';
  setLanguage(savedLang);
});
