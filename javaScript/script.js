const loadingOverlay = document.getElementById('loading-overlay');
const header = document.getElementById('header');
const nav = document.getElementById('main-nav');
const menuToggle = document.getElementById('menu-toggle');
const backdrop = document.getElementById('backdrop');
const navLinks = document.querySelectorAll('nav li a');
const backToTop = document.getElementById('back-to-top');
const sections = document.querySelectorAll('.section');
const revealEls = document.querySelectorAll('.reveal');

window.addEventListener('load', () => {
  setTimeout(() => {
    loadingOverlay.classList.add('hidden');
    setTimeout(() => {
      loadingOverlay.style.display = 'none';
      onScroll();
    }, 500);
  }, 1500);
});

// Mobile menu toggle
menuToggle.addEventListener('click', toggleMenu);
backdrop.addEventListener('click', toggleMenu);
function toggleMenu() {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  nav.classList.toggle('active');
  backdrop.classList.toggle('active');
  document.body.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', !isExpanded);
}

// Smooth scrolling for nav links
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    smoothScroll(targetId, 700);
  });
});

// Smooth scroll function
function smoothScroll(target, duration) {
  const element = document.querySelector(target);
  if (!element) return;

  const startPos = window.pageYOffset;
  const endPos = element.offsetTop - 70;
  const distance = endPos - startPos;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeOutCubic(timeElapsed, startPos, distance, duration);
    window.scrollTo(0, run);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  requestAnimationFrame(animation);
}

function easeOutCubic(t, b, c, d) {
  t /= d;
  t--;
  return c * (t * t * t + 1) + b;
}

// Scroll events
window.addEventListener('scroll', onScroll);
function onScroll() {
  const scrollTop = window.pageYOffset;

  if (scrollTop > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  if (scrollTop > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }

  revealEls.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
      el.classList.add('active');
    }
  });

  updateActiveNavLink(scrollTop);
}

backToTop.addEventListener('click', () => {
  smoothScroll('#about', 800);
});

// Update nav link state based on scroll position
function updateActiveNavLink(scrollTop) {
  let current = '';
  sections.forEach(section => {
    const offsetTop = section.offsetTop - 80;
    const height = section.offsetHeight;
    if (scrollTop >= offsetTop && scrollTop < offsetTop + height) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

let audioPlayers = {};
const imageModal = document.getElementById('image-modal');
const modalImage = document.querySelector('.modal-image');
const modalTitle = document.querySelector('.modal-title');
const closeModalBtn = document.querySelector('.close-modal');

document.addEventListener('DOMContentLoaded', () => {
  initSkillFilters();
  initProjectFilters();
  initAudioPlayers();
  initImageExpansion();
});

// Skill Filters
function initSkillFilters() {
  const skillFilters = document.querySelectorAll('.skill-filter');
  const skillCards   = document.querySelectorAll('.skill-card');

  skillFilters.forEach(filterBtn => {
    filterBtn.addEventListener('click', () => {
      skillFilters.forEach(btn => btn.classList.remove('active'));
      filterBtn.classList.add('active');

      const filterValue = filterBtn.getAttribute('data-filter');
      skillCards.forEach(card => {
        const cardCat = card.getAttribute('data-skill-cat');
        if (filterValue === 'all' || cardCat === filterValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Project Filters
function initProjectFilters() {
  const projectFilters = document.querySelectorAll('.project-filter');
  const projectCards = document.querySelectorAll('.project-card');
  
  projectFilters.forEach(filterBtn => {
    filterBtn.addEventListener('click', () => {
      projectFilters.forEach(btn => btn.classList.remove('active'));
      filterBtn.classList.add('active');
      
      const filterValue = filterBtn.getAttribute('data-filter');
      
      projectCards.forEach(card => {
        const cardCat = card.getAttribute('data-project-cat');
        if (filterValue === 'all' || cardCat.includes(filterValue)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Audio Player Initialization
function initAudioPlayers() {
  const playButtons = document.querySelectorAll('.play-btn[data-player]');

  if (playButtons.length === 0) {
    console.error('No audio play buttons found on the page');
    return;
  }

  playButtons.forEach(btn => {
    const playerId = btn.getAttribute('data-player');
    const audioElement = document.getElementById(playerId);

    if (!audioElement) {
      console.error(`Audio element with ID "${playerId}" not found`);
      return;
    }

    const progressIndicator = btn.closest('.audio-controls').querySelector('.audio-progress-indicator');
    const timeDisplay = btn.closest('.audio-controls').querySelector('.time-display');
    const progressBar = btn.closest('.audio-controls').querySelector('.audio-progress-bar');

    audioElement.load();

    audioPlayers[playerId] = {
      audio: audioElement,
      button: btn,
      progress: progressIndicator,
      timeDisplay: timeDisplay
    };

    audioElement.addEventListener('loadedmetadata', () => {
      timeDisplay.textContent = `0:00 / ${formatTime(audioElement.duration)}`;
    });

    audioElement.addEventListener('error', e => {
      console.error(`Error loading audio ${playerId}:`, e);
      timeDisplay.textContent = "Error loading audio";
      timeDisplay.style.color = "var(--error-color)";
    });

    btn.addEventListener('click', () => {

      for (let id in audioPlayers) {
        if (id !== playerId && !audioPlayers[id].audio.paused) {
          audioPlayers[id].audio.pause();
          audioPlayers[id].button.classList.remove('playing');
          audioPlayers[id].button.innerHTML = createPlaySVG();
        }
      }

      if (audioElement.paused) {
        try {
          const playPromise = audioElement.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                btn.classList.add('playing');
                btn.innerHTML = createPauseSVG();
              })
              .catch(error => {
                console.error(`Error playing audio ${playerId}:`, error);
              });
          }
        } catch (e) {
          console.error(`Exception playing audio ${playerId}:`, e);
        }
      } else {
        audioElement.pause();
        btn.classList.remove('playing');
        btn.innerHTML = createPlaySVG();
      }
    });

    audioElement.addEventListener('timeupdate', () => {
      const progress = (audioElement.currentTime / audioElement.duration) * 100;
      progressIndicator.style.width = `${progress}%`;
      timeDisplay.textContent = `${formatTime(audioElement.currentTime)} / ${formatTime(audioElement.duration)}`;
    });

    progressBar.addEventListener('click', e => {
      const rect = progressBar.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      audioElement.currentTime = pos * audioElement.duration;
    });

    audioElement.addEventListener('ended', () => {
      btn.classList.remove('playing');
      btn.innerHTML = createPlaySVG();
      progressIndicator.style.width = '0%';
    });

    btn.innerHTML = createPlaySVG();
  });
}

// Image Expansion / Modal
function initImageExpansion() {
  const expandButtons = document.querySelectorAll('.expand-image-btn');

  expandButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const imageSrc = btn.getAttribute('data-image');
      const imageTitle = btn.getAttribute('data-title');

      modalImage.src = imageSrc;
      modalImage.alt = imageTitle;
      modalTitle.textContent = imageTitle;

      imageModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  closeModalBtn.addEventListener('click', closeImageModal);

  imageModal.addEventListener('click', e => {
    if (e.target === imageModal) {
      closeImageModal();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && imageModal.classList.contains('open')) {
      closeImageModal();
    }
  });

  function closeImageModal() {
    imageModal.classList.remove('open');
    document.body.style.overflow = '';

    setTimeout(() => {
      if (!imageModal.classList.contains('open')) {
        modalImage.src = '';
      }
    }, 300);
  }
}

function formatTime(seconds) {
  if (isNaN(seconds) || seconds === Infinity || seconds === null || seconds === undefined) {
    return '0:00';
  }
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}

function createPlaySVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
           viewBox="0 0 24 24" fill="none" stroke="currentColor" 
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>`;
}

function createPauseSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
           viewBox="0 0 24 24" fill="none" stroke="currentColor" 
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="6" y="4" width="4" height="16"></rect>
    <rect x="14" y="4" width="4" height="16"></rect>
  </svg>`;
}

function easeOutCubic(t, b, c, d) {
  t /= d;
  t--;
  return c * (t * t * t + 1) + b;
}

document.addEventListener('DOMContentLoaded', function() {
  const copyButtons = document.querySelectorAll('.code-copy');
  
  copyButtons.forEach(button => {
    button.addEventListener('click', async () => {
      const codeBlock = button.closest('.code-block').querySelector('pre');
      const textToCopy = codeBlock.textContent.trim();
      
      try {
        await navigator.clipboard.writeText(textToCopy);
        
        const originalTooltip = button.getAttribute('data-tooltip');
        button.setAttribute('data-tooltip', 'Copied!');
        button.classList.add('copied');
        
        setTimeout(() => {
          button.setAttribute('data-tooltip', originalTooltip);
          button.classList.remove('copied');
        }, 2000);
        
      } catch (err) {
        console.error('Failed to copy: ', err);
        button.setAttribute('data-tooltip', 'Copy failed!');
        
        setTimeout(() => {
          button.setAttribute('data-tooltip', 'Copy code');
        }, 2000);
      }
    });
  });
});
