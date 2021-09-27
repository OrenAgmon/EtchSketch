const container = document.getElementById('grid-container')
const slider = document.getElementById('slider')
const sliderValue = document.getElementById('slider-value')

const  greyButton  = document.getElementById('btn-grey')
const restartButton = document.getElementById('btn-restart')
const eraserButton = document.getElementById('btn-eraser')
const rainbowButton = document.getElementById('btn-rainbow')
const colorPicker = document.getElementById('cell-color')

let gridCells = document.querySelectorAll('.grid-cell')



greyButton.addEventListener('click', greyOption)
eraserButton.addEventListener('click', eraserOption)
restartButton.addEventListener('click', restartOption);
rainbowButton.addEventListener('click', rainbowOption);


newGridSize(10)


    slider.onchange= function(){

        let newSize = this.value
        sliderValue.textContent = `${newSize} X ${newSize}`;
        newGridSize(newSize)

    }




  function newGridSize(newSize){
    gridCells = document.querySelectorAll('.grid-cell')
    if(gridCells.length != 0){
      deletePreviousGrid();
    }
    

  for(let i=0; i<(newSize*newSize);i++){
      let newGridCell = document.createElement('div')
      newGridCell.style.border = '1px solid black'
      container.appendChild(newGridCell);
      newGridCell.className = 'grid-cell'

      container.style.gridTemplateColumns = `repeat(${newSize}, auto)`
  }

    
  
    }

  function deletePreviousGrid(){
    GridCells = document.querySelectorAll('.grid-cell')
    GridCells.forEach(cell => {
         cell.remove();
    })
  }




  function greyOption(){
    gridCells = document.querySelectorAll('.grid-cell');

     gridCells.forEach(cell =>{
             cell.removeEventListener('mouseover',deleteOption)
          })
   
    gridCells.forEach(cell  => { 
        let greyR = 202;
        let greyG = 202;
        let greyB = 202;
        cell.addEventListener('mouseover', function makeGrey(){ 

            let cellCurrentColor = getComputedStyle(cell).backgroundColor;
            console.log(cellCurrentColor);

            if(cellCurrentColor == 'rgb(255, 255, 255)'){
                greyR=202;
                greyG=202;
                greyB=202;
             }
            
            cell.style.background = `rgb(${greyR-=20},${greyG-=20},${greyB-=20})`
            console.log(greyR);
            console.log(greyG);
            console.log(greyB);
           
        })
        
    });

  }


  function deleteOption (e) {

      e.target.style.backgroundColor ="rgb(255, 255, 255)"
  }

  function eraserOption(){
     gridCells = document.querySelectorAll('.grid-cell');
     gridCells.forEach(cell  => { 
      
        cell.addEventListener("mouseover",deleteOption)
    });

  }
  // when need to remove listeners
//   let cells = document.querySelectorAll('grid-cell')
//  



// function defaultBlackOption(){
//     let cells = document.querySelectorAll('.grid-cell');
//     cells.forEach(cell  => { 
       
//         cell.addEventListener('mouseover', () =>{
//             cell.style.background = 'black';
//         })

        
//     });
// }

function restartOption(){
    gridCells = document.querySelectorAll('.grid-cell');
    gridCells.forEach(cell  => { 
       
        cell.style.background = 'rgb(255, 255, 255)';

        
    });
}

function rainbowOption(){

  gridCells = document.querySelectorAll('.grid-cell')
  gridCells.forEach(cell =>{
        cell.addEventListener('mouseover', ()=>{
            let R = Math.floor((Math.random()*255)+1)
            let G = Math.floor((Math.random()*255)+1)
            let B = Math.floor((Math.random()*255)+1)
            
        
            cell.style.background = `rgb(${R},${G},${B})`
        })
    })
    
}

// function setColor(option, R, G, B){
//   gridCells = document.querySelectorAll('.grid-cell')
//   gridCells.forEach(cell =>{
//     let startingOpacity = 0
//     cell.addEventListener('mouseover', ()=>{
      
//       switch(option){
//         case 'grey':
//           if(cell.style.backgroundColor == 'rgb(255, 255, 255)') startingOpacity = 0; 
//           cell.style.backgroundColor = `rgba(${R}, ${G}, ${B}, ${startingOpacity+=0.1}`
//           break;
//         case 'erase':
//           cell.style.backgroundColor = 'rgb(255,255,255)'
//           break;
        

//       }
     
       
      
     

        

//       })
//   })

//   }









