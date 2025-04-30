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
  function scrollFunction()
  {
    const toTop = document.querySelector(".ToTop");
    if(toTop){
    const toTopNav = toTop.closest('nav');
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      toTop.style.bottom = "25px";
      //toTopNav.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
     
      
    } else {
      toTop.style.bottom = "-50px";
      //toTopNav.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
  }
}

  
