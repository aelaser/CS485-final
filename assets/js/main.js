/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    let scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/ 
function scaleCv(){
    document.body.classList.add('scale-cv')
}

/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/ 
function removeScale(){
    document.body.classList.remove('scale-cv')
}



// Mixuop

// var mixerPortfolio = mixitup('#featured-courses', {
//     selectors: {
//         target: '.course-item'
//     },
//     animation: {
//         duration: 300
//     }
// });

// const linkWork = document.querySelectorAll('.work__item')

// function activeWork() {
//     linkWork.forEach(L => L.classList.remove('active-work'))
//     this.classList.add('active-work')
// }

// linkWork.forEach(L=> L.addEventListener('click', activeWork))


// //Slider
// $("#featured-courses").flickity({
// 	// wrapAround: true,
//     // draggable: '>1',
//   pageDots: true

// });


// set vars
var slider = $('#slider');
var filterButtons = $('.work__filters');

// //Slider
// $("#featured-courses").flickity({
// 	// wrapAround: true,
//     // draggable: '>1',
//   pageDots: true

// });
function flicitySlider() {
  //init flickity
  slider.flickity({
    pageDots: false,
    contain: true,
    imagesLoaded: true,
    cellAlign: 'left',
    cellSelector: '.flickity'
  });
}

flicitySlider();


//when filter buttons clicked
filterButtons.on( 'click', '.buttonFilter', function() {
  //use data-filter attribute & class for filtering 
  var filterValue = $( this ).attr('data-filter');
  var slide = slider.find('.slide');

  if (filterValue == 'all') {
    // if all show all
    slide.fadeIn(450);
    slide.addClass('flickity');
  } else {
    //set active slide
    var active = $('.' + filterValue).fadeIn(450);
    // show only slide with the same class as the button "attr('data-filter')"
    slide.addClass('flickity');
    slide.not(active).removeClass('flickity');
    slide.not(active).hide();
  }

  // destroy slider so we can rebuild with new filters
  slider.flickity('destroy');

  //rebuild slider with new images
  flicitySlider();
  
  // remove active class from all buttons
  $('.work__item').removeClass('active-work');
  
  // add active class to active button
  $(this).addClass('active-work');
  
});