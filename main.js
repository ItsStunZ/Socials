// Imports
import Config from './config.json' with {type: 'json'};

// Elements
const socialsContainer = document.querySelector('.socials-container');

// function that runs on start and adds all socials to socialsContianer
function setupSocials() {
    // loop over socials array in config
    // add a new <i> element
    // add click event listener

    Config.socials.forEach(social => {
        // Create new social element
        const newSocial = document.createElement('span');
        const socialIconElement = document.createElement('i');
        socialIconElement.classList.add('fa-brands', social.icon);

        // Listen for click
        newSocial.addEventListener('click', () => window.open(social.link));

        newSocial.appendChild(socialIconElement);
        socialsContainer.appendChild(newSocial);
    });
};

setupSocials();