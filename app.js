const speakersContainer = document.getElementById('speakers');
const data = [
  {
    id: 1,
    pic: './images/kilnam.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Johan Tauro',
    designation: ' Host',
    history: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum dictum malesuada. Phasellus non mollis libero.',
  },
  {
    id: 2,
    pic: './images/yochai.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Kilnam Chor',
    designation: 'Product Officer',
    history: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum dictum malesuada. Phasellus non mollis libero.',
  },
  {
    id: 3,
    pic: './images/sohyeong.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Jayeong Hu',
    designation: 'Managing Director,  Business Operations',
    history: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum dictum malesuada. Phasellus non mollis libero.',
  },
  {
    id: 4,
    pic: './images/julia.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Tammy Rodrigo',
    designation: 'Director of Fire for Code',
    history: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum dictum malesuada. Phasellus non mollis libero.',
  },
  {
    id: 5,
    pic: './images/lila.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Rebbecca Van Der Wyk',
    designation: 'Chief Information Officer Gap',
    history: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum dictum malesuada. Phasellus non mollis libero.',
  },
  {
    id: 6,
    pic: './images/reagan.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Josh Van Kaap',
    designation: 'Data & Analytics Officer',
    history: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum dictum malesuada. Phasellus non mollis libero.',
  },
];

const speakerContainer = document.createElement('section');
speakerContainer.setAttribute('class', 'featured-speakers');
speakerContainer.setAttribute('id', 'speakers');

data.forEach((speakerPara) => {
  const speakerSection = document.createElement('div');
  speakerSection.setAttribute('class', 'speaker-section');
  speakerSection.setAttribute('id', 'each-speaker');

  const imageSection = document.createElement('div');
  imageSection.setAttribute('class', 'speaker-image-section');
  const image = document.createElement('img');
  image.setAttribute('class', 'speaker-image');
  image.setAttribute('src', speakerPara.pic);
  image.setAttribute('alt', speakerPara.altText);

  imageSection.appendChild(image);
  speakerSection.appendChild(imageSection);

  const contentSection = document.createElement('div');
  contentSection.setAttribute('class', 'speaker-details');
  contentSection.setAttribute('id', 'about-speaker');

  const speakerName = document.createElement('h2');
  speakerName.setAttribute('class', 'speaker-name');
  speakerName.textContent = speakerPara.nameOfSpeaker;
  contentSection.appendChild(speakerName);

  const speakerDesignation = document.createElement('p');
  speakerDesignation.setAttribute('class', 'speaker-designation');
  speakerDesignation.textContent = speakerPara.designation;
  contentSection.appendChild(speakerDesignation);

  const dotText = document.createElement('p');
  dotText.setAttribute('id', 'dots');
  dotText.textContent = '.........';
  contentSection.appendChild(dotText);

  const speakerHistory = document.createElement('p');
  speakerHistory.setAttribute('class', 'speaker-history');
  speakerHistory.textContent = speakerPara.history;
  contentSection.appendChild(speakerHistory);

  speakerSection.appendChild(contentSection);
  speakerContainer.appendChild(speakerSection);
});

const loadSpeakers = () => speakersContainer.appendChild(speakerContainer);

window.onload(loadSpeakers());
