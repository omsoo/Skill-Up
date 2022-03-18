const speakOne = document.getElementById("speaker-1");
const speakTwo = document.getElementById("speaker-2");
const speakThree = document.getElementById("speaker-3");
const speaker = document.querySelector(".courses");

const arrayData = [
  {
    name: "Yochai Benkler",
    description: `Berkman Professor of Enterpreneurial Legal Studies at Havard Law School `,
    speakerImage: "./images/speaker_01.png",
    biography: `Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.`,
  },
  {
    name: "Yochai Benkler",
    description: `Berkman Professor of Enterpreneurial Legal Studies at Havard Law School `,
    speakerImage: "./images/speaker_01.png",
    biography: `Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.`,
  },
  {
    name: "Yochai Benkler",
    description: `Berkman Professor of Enterpreneurial Legal Studies at Havard Law School `,
    speakerImage: "./images/speaker_01.png",
    biography: `Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.`,
  },
];

const openModal =
  ({ name, description, speakerImage, biography }) =>
  () => {
    speaker.classList.add("showModal");
    let display = "";
    display += `
  <div class="modalHead">
  <h2 class="modalTitle">${name}</h2>
</div>
<div class="gridModal">
  <div class="gridOne">
    <img class="modal-img" src= ${
      width > 1024 ? desktopIMG : mobileImage
    } alt=${name} />
  </div>
  <div class="modalMain gridTwo">
    <p class="modalDescription">${description}</p>
    <div class="modal-btn-container">
      <a class="modal-live-link liveLink-one" href=""> ${
        goLiveLinks[0]
      } <i class="modIcon fab fa-github hero-fab"></i></a>
      <a class="modal-live-link liveLink-two" href=""> ${
        goLiveLinks[1]
      } <i class="modIcon fab fa-pinterest-p hero-fab"></i></a>
    </div>
  </div>
</div>`;
    modalDisplay.innerHTML = display;
  };
