document.addEventListener('DOMContentLoaded', function() {
  const text = "Hello, I'm a web developers.";
  let index = 0;
  const typewriterTextElement = document.getElementById("typewriter");

  function typeWriter() {
    if (index < text.length) {
      typewriterTextElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100); // Adjust typing speed (milliseconds)
    } else {
      // After typing is complete, fade in the content
      document.querySelector('.content').classList.add('show');
      // Hide the overlay
      document.querySelector('.overlay').style.display = 'none';
    }
  }

  function showContent() {
    // Triggered by the "Continue" button
    document.querySelector('.content').classList.add('show');
    // Hide the overlay
    document.querySelector('.overlay').style.display = 'none';
  }

  // Call typeWriter function when the page loads
  typeWriter();
});
// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  dropdownToggle.addEventListener('click', () => {
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', (event) => {
      if (!event.target.closest('.dropdown')) {
          dropdownMenu.style.display = 'none';
      }
  });
});

function selectOption(option) {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  dropdownToggle.textContent = option;
  const dropdownMenu = document.querySelector('.dropdown-menu');
  dropdownMenu.style.display = 'none';
}

 // script.js

document.addEventListener('DOMContentLoaded', () => {
  const skillLevels = document.querySelectorAll('.skill-level');

  skillLevels.forEach(skill => {
      const level = parseInt(skill.getAttribute('data-level'), 10);
      const percentageDisplay = skill.querySelector('.skill-percentage');

      // Function to animate the skill level bar
      const animateSkillLevel = () => {
          let currentLevel = 0;
          const duration = 2000; // Animation duration in milliseconds
          const interval = duration / level; // Interval to increase the level
          const increment = level / (duration / 16); // Approximate frames per second

          const updatePercentage = () => {
              if (currentLevel <= level) {
                  skill.style.width = `${currentLevel}%`;
                  percentageDisplay.textContent = `${Math.round(currentLevel)}%`;
                  currentLevel += increment;
                  setTimeout(updatePercentage, interval);
              } else {
                  skill.style.width = `${level}%`;
                  percentageDisplay.textContent = `${level}%`;
              }
          };

          updatePercentage();
      };

      animateSkillLevel();
  });
});
