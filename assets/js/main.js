const hamburger = document.getElementById('hamburger');
const header = document.querySelector('header');

hamburger.addEventListener('click', () => {
    header.classList.toggle('show');
});


document.addEventListener('scroll', function() {
    const aside = document.querySelector('aside');
    const startTriggerPoint = 500;
    const middleTriggerPoint = 100;
    const endTriggerPoint = 3100;

    if (window.scrollY > startTriggerPoint && window.scrollY < middleTriggerPoint) {
        aside.classList.remove('visible');
    } else if (window.scrollY >= middleTriggerPoint && window.scrollY < endTriggerPoint) {
        aside.classList.add('visible');
    } else {
        aside.classList.remove('visible');
    }
});

const menuItems = document.querySelectorAll('nav ul li a');

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        menuItems.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

const navbar = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
});

window.scrollTo(0, 0);

window.addEventListener('load', function() {
    const loadPage = document.querySelector('.load-page');
    
    setTimeout(function() {
        loadPage.classList.add('fade-out');
        
        loadPage.addEventListener('transitionend', function() {
            loadPage.style.display = 'none';
            document.body.style.overflowY = 'scroll';
            document.body.style.overflowX = 'hidden';
        });
    }, 1500);
});

const popupTriggers = document.querySelectorAll('.popup-trigger');
const popupBg = document.querySelector('.popup-bg');
const popupModal = document.querySelector('.popup-modal');
const linkInput = document.getElementById('linkInput');
const btnCancel = document.querySelector('.btn-cancel');
const btnVisit = document.querySelector('.btn-visit');

popupTriggers.forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    const link = trigger.getAttribute('data-link');
    linkInput.value = link;
    popupBg.style.display = 'flex';
  });
});

linkInput.addEventListener('click', () => {
  copyTextToClipboard(linkInput.value);
});

btnCancel.addEventListener('click', () => {
  popupBg.style.display = 'none';
});

btnVisit.addEventListener('click', () => {
  const link = linkInput.value;
  if (link) window.open(link, '_blank');
});

popupBg.addEventListener('click', (e) => {
  if (!popupModal.contains(e.target)) {
    popupBg.style.display = 'none';
  }
});

async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    alert('Link copied to clipboard!');
  } catch (err) {
    alert('Error copying text: ' + err);
  }
}


