const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");
const mainMenu = document.querySelector(".nav-links");

const speaker = document.querySelector(".courses");
const showMoreButton = document.querySelector(".show-more");

// see more
let showMore = false;
const width = window.innerWidth;

const arrayData = [
  {
    name: "Yochai Benkler",
    biography:
      "Berkman Professor of Enterpreneurial Legal Studies at Havard Law School ",
    speakerImage: "./images/speaker_01.png",
    description:
      "Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.",
  },
  {
    name: "Kilnam Chon",
    biography:
      "Berkman Professor of Enterpreneurial Legal Studies at Havard Law School ",
    speakerImage: "./images/speaker_02.png",
    description:
      "Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.",
  },
  {
    name: "SohYeong Noh",
    biography:
      "Berkman Professor of Enterpreneurial Legal Studies at Havard Law School ",
    speakerImage: "./images/speaker_03.png",
    description:
      "Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.",
  },
  {
    name: "Julia Leda",
    biography:
      "Berkman Professor of Enterpreneurial Legal Studies at Havard Law School ",
    speakerImage: "./images/speaker_04.png",
    description:
      "Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.",
  },
  {
    name: "Lila  Tretikov",
    biography:
      "Berkman Professor of Enterpreneurial Legal Studies at Havard Law School ",
    speakerImage: "./images/speaker_05.png",
    description:
      "Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.",
  },
  {
    name: "Ryan Merkley",
    biography:
      "Berkman Professor of Enterpreneurial Legal Studies at Havard Law School ",
    speakerImage: "./images/speaker_06.png",
    description:
      "Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.",
  },
];

if (width > 768) {
  showMoreButton.style.display = "none";
}

const displaySpeaker = (Arr) => {
  let display = "";
  //   show more
  const data = showMore ? Arr.slice(0, 3) : Arr;
  data.forEach((element) => {
    display += `
    <div class="course" id="speaker-1">
              <img class="speaker-img" src=${element.speakerImage} alt="">
              
              <div class="speaker-bios">
                <p class="speaker-txt-1"> ${element.name}</p>
                <p class="speaker-txt-2"> ${element.biography}</p>
                <hr class="line-checker" />
                <p class="speaker-txt-3"> ${element.description}</p>
              </div>
            </div> `;
  });
  speaker.innerHTML = display;
};
window.addEventListener("DOMContentLoaded", displaySpeaker(arrayData));
// toggle show more
showMoreButton.addEventListener("click", () => {
  if (width < 768) {
    showMore = !showMore;
    showMoreButton.innerHTML = showMore ? "show less" : "show more";
  }
});

openMenu.addEventListener("click", show);

closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
}
