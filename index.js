class Project {
    constructor(imageSrc, title, description, link) {
      this.imageSrc = imageSrc;
      this.title = title;
      this.description = description;
      this.link = link;
    }
  
    createProjectCard() {
      const card = document.createElement('div');
      card.className = 'card bg-white p-5 rounded-lg shadow-md w-80';
  
      const img = document.createElement('img');
      img.src = this.imageSrc;
      img.alt = this.title;
      img.className = 'rounded-t-lg';
  
      const title = document.createElement('h3');
      title.className = 'font-bold text-xl mt-5';
      title.textContent = this.title;
  
      const desc = document.createElement('p');
      desc.className = 'mt-2 text-gray-600';
      desc.innerHTML = `${this.description} <a href="${this.link}" class="text-blue-500">view</a>`;
  
      const button = document.createElement('button');
      button.className = 'mt-5 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition';
      button.textContent = 'View More';
      button.addEventListener('click', () => {
        details.classList.toggle('open');
      });
  
      const details = document.createElement('div');
      details.className = 'details mt-3 text-gray-600';
      details.textContent = this.description;
  
      card.append(img, title, desc, button, details);
      return card;
    }
  }
  
  const projectsData = [
    {
      imageSrc: './images/Rentice cover.png',
      title: 'Rentice',
      description: 'Real Estate website',
      link: 'https://rentice.com.ng/',
    },
    {
      imageSrc: './images//PhishSence.png',
      title: 'Phishsense',
      description: 'Verified Links for a Safety',
      link: 'https://phish-sense-43ei.vercel.app/',
    },
    {
      imageSrc: './images//Gyft.png',
      title: 'Gyft',
      description: 'Special gift for friends & family',
      link: 'https://www.gyft.ng/',
    },
    {
      imageSrc: './images/NexaScale LMS.png',
      title: 'NexaScale',
      description: 'Learning management system',
      link: '#',
    },
    {
      imageSrc: './images/Health.png',
      title: 'Healthcare',
      description: 'Healthcare Data management',
      link: '#',
    },
    {
      imageSrc: './images/SpaceTech.png',
      title: 'SpaceTech',
      description: 'Stay up to date with Tech',
      link: '#',
    },
  ];
  
  const projectsContainer = document.querySelector('#projects .flex-wrap');
  projectsData.forEach(projectData => {
    const project = new Project(
      projectData.imageSrc,
      projectData.title,
      projectData.description,
      projectData.link
    );
    projectsContainer.appendChild(project.createProjectCard());
  });
  
  class TitleChanger {
    constructor(elementId, titles) {
      this.element = document.getElementById(elementId);
      this.titles = titles;
      this.index = 0;
      this.charIndex = 0;
      this.typeTitle();
    }
  
    typeTitle() {
      if (this.charIndex < this.titles[this.index].length) {
        this.element.textContent += this.titles[this.index].charAt(this.charIndex);
        this.charIndex++;
        setTimeout(() => this.typeTitle(), 100);
      } else {
        setTimeout(() => this.clearTitle(), 1000);
      }
    }
  
    clearTitle() {
      this.element.textContent = '';
      this.charIndex = 0;
      this.index = (this.index + 1) % this.titles.length;
      setTimeout(() => this.typeTitle(), 100);
    }
  }
  
  new TitleChanger('change', ["Designer", "Mobile Developer", "Web developer"]);
  
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    const namePattern = /^[a-zA-Z ]{2,30}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (!namePattern.test(name)) {
      alert('Please enter a valid name (2-30 characters, letters and spaces only).');
      return;
    }
  
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    if (message.length < 10) {
      alert('Please enter a message with at least 10 characters.');
      return;
    }
  
    alert('Message sent successfully!');
    document.getElementById('contact-form').reset();
  });
  