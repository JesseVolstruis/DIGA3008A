//--------------------[Game filter]----------------------------------------------------------------------------------------------
//Grid
const grid = document.querySelector('.GameGridContainer');

//Filter buttons
const allFilter = document.querySelector('#AllFilter');
const courseFilter = document.querySelector('#CourseFilter');
const prototypeFilter = document.querySelector('#PrototypeFilter');
const jamFilter = document.querySelector('#JamFilter');

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
    
 });

 //Filter for course assignments
 courseFilter.addEventListener('click', () => {
    gridItems.forEach(item => {
        item.style.display = 'none';
    });

    courseItems.forEach(item =>{
        item.style.display = 'block';
    });
    
 });

 //Filter for prototypes
 prototypeFilter.addEventListener('click', () => {
    gridItems.forEach(item => {
        item.style.display = 'none';
    });

    prototypeItems.forEach(item =>{
        item.style.display = 'block';
    });
    
 });

 //Filter for game jams
 jamFilter.addEventListener('click', () => {
    gridItems.forEach(item => {
        item.style.display = 'none';
    });

    jamItems.forEach(item =>{
        item.style.display = 'block';
    });
    
 });

