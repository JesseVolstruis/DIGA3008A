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

  
