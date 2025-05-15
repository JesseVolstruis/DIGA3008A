
//--------------------[STATIC EFFECT]----------------------------------------------------------------------------------------------
//Getting the links and static overlay
const links = document.querySelectorAll('a');
const staticOverlay = document.getElementById('StaticOverlay');

//Activates static when changing pages or clicking to top buttons
links.forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.target === "_blank") {
            return; 
          }

          if(this.getAttribute('href') === '#'){
            e.preventDefault();
            this.style.color = '#17544c';
            this.style.boxShadow = '0 0 8px #17544c, 0 0 8px inset #17544c';
            staticOverlay.style.display = 'flex';
            setTimeout(() => {
                document.documentElement.scrollTop= 0;
                this.style.color = '#38ccb8';
                this.style.boxShadow = '0 0 8px #17544c, 0 0 8px inset #38ccb8';
                setTimeout(() => {
                    staticOverlay.style.display = 'none';
                },100);
            },120);

          }else{
            e.preventDefault();
            staticOverlay.style.display = 'flex'; 
            setTimeout(() => {
            window.location.href = this.href; 
            }, 120);
          } 
    });
  });

  //Removes static when page is shown
  window.addEventListener('pageshow', function(event) {
    staticOverlay.style.display = 'none';
  });

  //--------------------[TO TOP BUTTONS]----------------------------------------------------------------------------------------------
  window.onscroll = function() {scrollFunction()};

  //FOR PERFORMANCE might be constantly polling totop, could cause issues
  //When you scroll beneath the nav bar the totop button shows up
  function scrollFunction()
  {
    const toTop = document.querySelector(".ToTop");
    if(toTop){
    const toTopNav = toTop.closest('nav');
    toTopNav.style.position = "fixed";
    toTopNav.style.left = "50%";
    toTopNav.style.transform = "translateX(-50%)";
    toTop.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    toTopNav.style.width = "100%";
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      toTopNav.style.bottom = "30px";
     
      
    } else {
      toTopNav.style.bottom ="-50px";
    }
  }
}

//--------------------[CRT FLICKER]----------------------------------------------------------------------------------------------

function randomizeFlicker() {
  const flicker = document.querySelector(".FlickerOverlay");
  if (!flicker) return;

  const randomDelay = Math.floor(Math.random() * (15000 - 100 + 1)) + 100;

  flicker.style.animation = 'crtFlicker 100ms';

  setTimeout(() => {
    flicker.style.animation = 'none';
    setTimeout(randomizeFlicker, randomDelay);
  }, 100);
}

randomizeFlicker();

//--------------------[LightBox Images]----------------------------------------------------------------------------------------------

const imageOverlay = document.getElementById("ImageOverlay");

//prevents from scrolling while overlay is open
function preventScroll(e) {
  e.preventDefault();
}

//opens overlay
function openLightBox(){
  imageOverlay.style.display = "flex";
  document.addEventListener('wheel', preventScroll, { passive: false });
}

//closes overlay
function closeLightBox(){
  imageOverlay.style.display = "none";
  document.removeEventListener('wheel', preventScroll);
}

const images = document.querySelectorAll('.SubPageImage');
const imageExit = document.querySelector('#LightBoxExit');
const lightBoxImage = document.querySelector('#LightBoxImage');
let currentImageIndex = 0; 
const imageArray = Array.from(images);
const prevBtn = document.querySelector('#PrevButton');
const nextBtn = document.querySelector('#NextButton');
const lightBoxText = document.querySelector("#LightBoxText");

//opens overlay when image is clicked
images.forEach((image, index) => {
  image.addEventListener('click', function () {
    currentImageIndex = index;
    showImageAt(currentImageIndex);
    showTextAt(currentImageIndex);
    openLightBox();
  });
});

function showImageAt(index) {
  const selectedImage = imageArray[index];
  lightBoxImage.src = selectedImage.src;
  lightBoxImage.alt = selectedImage.alt;
}

function showTextAt(index) {
  lightBoxText.textContent = (index + 1) + "/" + imageArray.length;
}

//previous button for images
prevBtn.addEventListener('click', () => {
  prevBtn.style.color = '#17544c';
  prevBtn.style.boxShadow = '0 0 8px #17544c, 0 0 8px inset #17544c';
  currentImageIndex = (currentImageIndex - 1 + imageArray.length) % imageArray.length;
  showImageAt(currentImageIndex);
  showTextAt(currentImageIndex);
  setTimeout(() => {
    prevBtn.style.color = '#38ccb8';
    prevBtn.style.boxShadow = '0 0 8px #38ccb8, 0 0 8px inset #38ccb8';
  },70);
});

//next button for images
nextBtn.addEventListener('click', () => {
  nextBtn.style.color = '#17544c';
  nextBtn.style.boxShadow = '0 0 8px #17544c, 0 0 8px inset #17544c';
  currentImageIndex = (currentImageIndex + 1) % imageArray.length;
  showImageAt(currentImageIndex);
  showTextAt(currentImageIndex);
  setTimeout(() => {
    nextBtn.style.color = '#38ccb8';
    nextBtn.style.boxShadow = '0 0 8px #38ccb8, 0 0 8px inset #38ccb8';
  },70);
});

imageExit.addEventListener('click', () => {
  imageExit.style.color = '#17544c';
  imageExit.style.boxShadow = '0 0 8px #17544c, 0 0 8px inset #17544c';
  setTimeout(() => {
    imageExit.style.color = '#38ccb8';
    imageExit.style.boxShadow = '0 0 8px #38ccb8, 0 0 8px inset #38ccb8';
     closeLightBox();
  },70);
});

//allows arrow keys to cycle between images
 document.addEventListener('keydown', (e) => { 
   if (document.getElementById('ImageOverlay').style.display === "flex") {
     if (e.key === 'ArrowRight') nextBtn.click();
     if (e.key === 'ArrowLeft') prevBtn.click();
     if (e.key === 'Escape') imageExit.click();
   }
 });





  
