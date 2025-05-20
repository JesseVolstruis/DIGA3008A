//--------------------[Game filter]----------------------------------------------------------------------------------------------
//Grid
const grid = document.querySelector('.GameGridContainer');

//Filter buttons
const allFilter = document.querySelector('#AllFilter');
const courseFilter = document.querySelector('#CourseFilter');
const prototypeFilter = document.querySelector('#PrototypeFilter');
const jamFilter = document.querySelector('#JamFilter');
const buttonArray = [allFilter, courseFilter, prototypeFilter, jamFilter];
allFilter.style.color = '#38ccb8';
allFilter.style.boxShadow = '0 0 8px #38ccb8, 0 0 8px inset #38ccb8';

//All grid items
const gridItems = document.querySelectorAll('.GridItem')

//Course assignments
const courseItems = document.querySelectorAll('.Assignment');

//Prototypes
const prototypeItems = document.querySelectorAll('.Prototype');

//Game jams
const jamItems = document.querySelectorAll('.GameJam');

//Filter for all
 allFilter.addEventListener('click', () => {
    gridItems.forEach(item => {
        item.style.display = 'none';
    });

      gridItems.forEach(item => {
          item.style.display = 'block';
      });

      changeColour();
      allFilter.style.color = '#38ccb8';
      allFilter.style.boxShadow = '0 0 8px #38ccb8, 0 0 8px inset #38ccb8';
      toggleFilterDropdown();
    
 });

 //Filter for course assignments
 courseFilter.addEventListener('click', () => {
    gridItems.forEach(item => {
        item.style.display = 'none';
    });

    courseItems.forEach(item =>{
        item.style.display = 'block';
    });

    changeColour();
    courseFilter.style.color = '#00a6ff';
    courseFilter.style.boxShadow = '0 0 8px #00a6ff, 0 0 8px inset #00a6ff';
    toggleFilterDropdown();
    
 });

 //Filter for prototypes
 prototypeFilter.addEventListener('click', () => {
    gridItems.forEach(item => {
        item.style.display = 'none';
    });

    prototypeItems.forEach(item =>{
        item.style.display = 'block';
    });

    changeColour();
    prototypeFilter.style.color = '#38ccb8';
    prototypeFilter.style.boxShadow = '0 0 8px #38ccb8, 0 0 8px inset #38ccb8';
    toggleFilterDropdown();
    
 });

 //Filter for game jams
 jamFilter.addEventListener('click', () => {
    gridItems.forEach(item => {
        item.style.display = 'none';
    });

    jamItems.forEach(item =>{
        item.style.display = 'block';
    });

    changeColour();
    jamFilter.style.color = '#00a6ff';
    jamFilter.style.boxShadow = '0 0 8px #00a6ff, 0 0 8px inset #00a6ff';
    toggleFilterDropdown();
    
 });

 //reverts buttons to default dimmed colour
 function changeColour(){
    buttonArray.forEach(button => {
        if(button.classList.contains('FilterButton1'))
        {
            button.style.color = '#17544c';
            button.style.boxShadow = '0 0 8px #17544c, 0 0 8px inset #17544c';
        }
        else if(button.classList.contains('FilterButton2'))
        {
            button.style.color = '#002c44';
            button.style.boxShadow = '0 0 8px #002c44, 0 0 8px inset #002c44';
        }

    });
 }

 //--------------------[Filter Dropdown]----------------------------------------------------------------------------------------------

  const filterDropDown = document.querySelector('#FilterDropDown');
  const filterList = document.querySelector('.GameFilter');

  //toggles the filter options when clicking dropdown. Only works if in mobile or tablet layout
  function toggleFilterDropdown(){
    if(window.matchMedia('(max-width: 1030px)').matches || window.matchMedia('(max-width: 750px)').matches)
    {
        if(filterDropDown.classList.contains('MenuHidden'))
        {
            filterList.style.display = 'flex';
            filterDropDown.classList.remove('MenuHidden');
        }
        else if(!filterDropDown.classList.contains('MenuHidden'))
        {
            filterList.style.display = 'none';
            filterDropDown.classList.add('MenuHidden');
        }
    }

  }

  filterDropDown.addEventListener('click', () => {

    toggleFilterDropdown();

  });

  //Sets filter list and dropdown to default visibility when resizing window
  window.addEventListener('resize', () => {

    if(!window.matchMedia('(max-width: 1030px)').matches && !window.matchMedia('(max-width: 750px)').matches)
    {
        filterList.style.display = 'flex';
    }
    else if(window.matchMedia('(max-width: 1030px)').matches || window.matchMedia('(max-width: 750px)').matches)
    {
        filterList.style.display = 'none';
    }

  });


 

