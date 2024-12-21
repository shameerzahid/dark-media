const header = document.getElementById('header');
const logo = document.querySelector('.logo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

// Random image
const images = [
  'image_1.jpg', 'image_2.jpg', 'image_3.jpg', 'image_4.jpg',
  'image_5.jpg', 'image_6.jpg', 'image_7.jpg', 'image_8.jpg',
  'image_9.jpg', 'image_10.jpg', 'image_11.jpg', 'image_12.jpg',
  'image_13.jpg', 'image_14.jpg'
];
const randomImage = images[Math.floor(Math.random() * images.length)];
document.getElementById('random-image').src = `assets/${randomImage}`;
// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqButtons = document.querySelectorAll('.faq-header button');
    
    faqButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle the current collapse
            const target = this.getAttribute('data-target');
            const collapse = document.querySelector(target);
            
            // Close all other collapses
            document.querySelectorAll('.collapse.show').forEach(item => {
                if (item !== collapse) {
                    item.classList.remove('show');
                    const btn = document.querySelector(`[data-target="#${item.id}"]`);
                    if (btn) btn.classList.add('collapsed');
                }
            });
            
            // Toggle current collapse
            collapse.classList.toggle('show');
            this.classList.toggle('collapsed');
        });
    });
});
// Get the drawer elements
const menuIcon = document.getElementById('menu-icon');
const drawer = document.getElementById('drawer');
const drawerOverlay = document.getElementById('drawer-overlay');

// Function to open the drawer
function openDrawer() {
  drawer.style.right = '0';
  drawerOverlay.style.display = 'block';
}

// Function to close the drawer
function closeDrawer() {
  drawer.style.right = '-300px';
  drawerOverlay.style.display = 'none';
}

// Event listeners for opening and closing the drawer
menuIcon.addEventListener('click', openDrawer);
drawerOverlay.addEventListener('click', closeDrawer);
// Get the close button element
const menuClose = document.getElementById('menu-close');

// Function to close the drawer
function closeDrawer() {
  const drawer = document.getElementById('drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');
  drawer.style.right = '-300px';
  drawerOverlay.style.display = 'none';
}

// Event listener for closing the drawer when the close icon is clicked
menuClose.addEventListener('click', closeDrawer);

