//Getting the links and static overlay
const links = document.querySelectorAll('a');
const staticOverlay = document.getElementById('StaticOverlay');

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
            console.log("Wawa");
            setTimeout(() => {
            window.location.href = this.href; 
            }, 120);
          } 
    });
  });

