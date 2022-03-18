// const speakOne = document.getElementById("speaker-1");
// const speakTwo = document.getElementById("speaker-2");
// const speakThree = document.getElementById("speaker-3");
const speaker = document.querySelector(".courses");
const showMoreButton = document.querySelector(".show-more");

// see more
let showMore = false;
let width = window.innerWidth;

const arrayData = [
  {
    name: "Yochai Benkler",
    description: `Berkman Professor of Enterpreneurial Legal Studies at Havard Law School `,
    speakerImage: "./images/speaker_01.png",
    biography: `Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.`,
  },
  {
    name: "Kilnam Chon",
    description: `Berkman Professor of Enterpreneurial Legal Studies at Havard Law School `,
    speakerImage: "./images/speaker_02.png",
    biography: `Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.`,
  },
  {
    name: "SohYeong Noh",
    description: `Berkman Professor of Enterpreneurial Legal Studies at Havard Law School `,
    speakerImage: "./images/speaker_03.png",
    biography: `Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.`,
  },
  {
    name: "Julia Leda",
    description: `Berkman Professor of Enterpreneurial Legal Studies at Havard Law School `,
    speakerImage: "./images/speaker_04.png",
    biography: `Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.`,
  },
  {
    name: "Lila  Tretikov",
    description: `Berkman Professor of Enterpreneurial Legal Studies at Havard Law School `,
    speakerImage: "./images/speaker_05.png",
    biography: `Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.`,
  },
  {
    name: "Ryan Merkley",
    description: `Berkman Professor of Enterpreneurial Legal Studies at Havard Law School `,
    speakerImage: "./images/speaker_06.png",
    biography: `Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.`,
  },
];

if (width > 768) {
  showMoreButton.style.display = "none";
}

const displaySpeaker = (Arr) => {
  let display = "";
  //   show more
  let data = showMore ? Arr.slice(0, 3) : Arr;
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
