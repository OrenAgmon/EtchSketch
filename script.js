const container = document.getElementById('grid-container')
const slider = document.getElementById('slider')
const sliderValue = document.getElementById('slider-value')

const  greyButton  = document.getElementById('btn-grey')
const restartButton = document.getElementById('btn-restart')
const eraserButton = document.getElementById('btn-eraser')
const rainbowButton = document.getElementById('btn-rainbow')



greyButton.addEventListener('click', greyOption);
eraserButton.addEventListener('click', eraserOption);
restartButton.addEventListener('click', restartOption);
rainbowButton.addEventListener('click', rainbowOption);


createFirstGrid(10)


    slider.onchange= function(){

        let newSize = this.value
        sliderValue.textContent = `${newSize} X ${newSize}`;
        newGridSize(newSize)

    }


  function createFirstGrid(gridSize){
    for(let i=0; i<(gridSize*gridSize);i++){
        let newGridCell = document.createElement('div')
        newGridCell.style.border = '1px solid black'
        container.appendChild(newGridCell);
        newGridCell.className = 'grid-cell'

        container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`
    }
    //defaultBlackOption();
  }

  function newGridSize(newSize){
    deletePreviousGrid();

  for(let i=0; i<(newSize*newSize);i++){
      let newGridCell = document.createElement('div')
      newGridCell.style.border = '1px solid black'
      container.appendChild(newGridCell);
      newGridCell.className = 'grid-cell'

      container.style.gridTemplateColumns = `repeat(${newSize}, auto)`
  }

    
  
    }

  function deletePreviousGrid(){
    let GridCells = document.querySelectorAll('.grid-cell')
    GridCells.forEach(cell => {
         cell.remove();
    })
  }

  function greyOption(){
    let cells = document.querySelectorAll('.grid-cell');

    // cells.forEach(cell =>{
    //           cell.removeEventListener('mouseover',remove)
    //       })
   
    cells.forEach(cell  => { 
        let greyR = 202;
        let greyG = 202;
        let greyB = 202;
        cell.addEventListener('mouseover', () =>{ 

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


  
  function remove (e) {

      console.log(e.target)
      e.target.style.backgroundColor ="rgb(255, 255, 255)"
       cell.style.background = 'rgb(255, 255, 255)';
  }

  function eraserOption(){
    let cells = document.querySelectorAll('.grid-cell');

    cells.forEach(cell  => { 
        cell.addEventListener("mouseover",remove)
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
    let cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell  => { 
       
        cell.style.background = 'white';

        
    });
}

function rainbowOption(){

    let cells = document.querySelectorAll('.grid-cell')
    cells.forEach(cell =>{
        cell.addEventListener('mouseover', ()=>{
            let R = Math.floor((Math.random()*255)+1)
            let G = Math.floor((Math.random()*255)+1)
            let B = Math.floor((Math.random()*255)+1)
            
        
            cell.style.background = `rgb(${R},${G},${B})`
        })
    })
    
}








