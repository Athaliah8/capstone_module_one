const data = [
  {
    id: 1,
    name: 'Athaliah Tauro',
    images: {
      img: './images/pexels-cottonbro-studio-7805041.jpg',
      alt: 'Speaker',
    },
    about: 'Host',
    work: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum dictum malesuada. Phasellus non mollis libero.',
  },
  {
    id: 2,
    name: 'Yonela Shula',
    images: {
      img: './images/pexels-antoni-shkraba-production-8374345.jpg',
      alt: 'Speaker',
    },
    about: 'Data & Analytics Officer',
    work: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum dictum malesuada. Phasellus non mollis libero.',
  },
  {
    id: 3,
    name: 'Lila Kamo',
    images: {
      img: './images/pexels-muhammadtaha-ibrahim-3848184.jpg',
      alt: 'Speaker',
    },
    about: 'Chief Information Officer Gap',
    work: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum dictum malesuada. Phasellus non mollis libero.',
  },
  {
    id: 4,
    name: 'Tammy Kido',
    images: {
      img: './images/pexels-christina-morillo-1181686.jpg',
      alt: 'Speaker',
    },
    about: 'Director of Fire for Code',
    work: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum dictum malesuada. Phasellus non mollis libero.',
  },
  {
    id: 5,
    name: 'Rebecca Van De Wyk',
    images: {
      img: './images/pexels-nina-14487140.jpg',
      alt: 'Speaker',
    },
    about: 'Managing Director,  Business Operations',
    work: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum dictum malesuada. Phasellus non mollis libero.',
  },
  {
    id: 6,
    name: 'Amaya Snyman',
    images: {
      img: './images/pexels-andrea-piacquadio-774909.jpg',
      alt: 'Speaker',
    },
    about: 'Product Officer',
    work: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum dictum malesuada. Phasellus non mollis libero.',
  },
];

const teamContainer = document.querySelector('#Team .teams');

// Implementing the Flex card dynamically

function createCard(dataInfo) {
  const li = document.createElement('li');
  li.className = 'card d-flex';
  li.innerHTML = `<div class="card-img">
    <img src="${dataInfo.images.img}" alt="${dataInfo.images.alt}">
  </div>
  <div class="card-body">
    <h3>${dataInfo.name}</h3>
    <h4>${dataInfo.about}</h4>
    <p>${dataInfo.work}</p>
  </div>`;
  return li;
}

data.forEach((info) => {
  const card = createCard(info);
  teamContainer.appendChild(card);
});

// Implementing the Flex card dynamically

const teamList = document.querySelectorAll('#Team .teams li');
const moreBtn = document.querySelector('#Team button');
const btnSpan = document.querySelector('#Team button span');
const btnIcon = document.querySelector('#Team button i');

let state = false;

function displayMore() {
  if (!state) {
    teamList.forEach((team) => {
      team.style.display = 'flex';
    });
    btnSpan.textContent = 'LESS';
    btnIcon.classList.remove('fa', 'fa-chevron-down');
    btnIcon.classList.add('fa', 'fa-chevron-up');

    state = true;
  } else {
    teamList.forEach((team) => {
      team.style.display = 'none';
    });
    teamList[0].style.display = 'flex';
    teamList[1].style.display = 'flex';

    btnSpan.textContent = 'MORE';
    btnIcon.classList.remove('fa', 'fa-chevron-up');
    btnIcon.classList.add('fa', 'fa-chevron-down');

    state = false;
  }
}

moreBtn.addEventListener('click', displayMore);