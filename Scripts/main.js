
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
            staticOverlay.style.display = 'flex';
            setTimeout(() => {
                document.documentElement.scrollTop= 0;
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

function preventScroll(e) {
  e.preventDefault();
}

function openLightBox(){
  imageOverlay.style.display = "flex";
  document.addEventListener('wheel', preventScroll, { passive: false });
}

function closeLightBox(){
  imageOverlay.style.display = "none";
  document.removeEventListener('wheel', preventScroll);
}

const images = document.querySelectorAll('.SubPageImage');
const imageExit = document.querySelector('#LightBoxExit');
const lightBoxImage = document.querySelector('#LightBoxImage');

images.forEach(image =>{  
   image.addEventListener('click', function(e){
    let url = this.src;
    lightBoxImage.src = url;
     openLightBox();
   });
 });

imageExit.addEventListener('click', () => {
  closeLightBox();
});

lightBoxImage.addEventListener("wheel", function(e) {
    // Zoom in or out based on the scroll direction
    let direction = e.deltaY > 0 ? -1 : 1;
    zoomImage(direction);
});


let currentZoom = 1;

function zoomImage(direction)
{
    let newZoom = currentZoom + direction * 0.1;

    // Limit the zoom level to the minimum and maximum
    // values
    if (newZoom < 1 || newZoom > 1.5) {
        return;
    }

    currentZoom = newZoom;

    // Update the CSS transform of the image to scale it
    lightBoxImage.style.transform = "scale(" + currentZoom + ")";
}




  
