const container = document.getElementById('grid-container')
const slider = document.getElementById('slider')
const sliderValue = document.getElementById('slider-value')

const greyButton = document.getElementById('btn-grey')
const restartButton = document.getElementById('btn-restart')
const eraserButton = document.getElementById('btn-eraser')
const rainbowButton = document.getElementById('btn-rainbow')
const colorPicker = document.getElementById('color-picker')



greyButton.addEventListener('click', greyOption);
eraserButton.addEventListener('click', eraserBtn);
restartButton.addEventListener('click', restartBtn);
rainbowButton.addEventListener('click', rainbowBtn);
colorPicker.addEventListener('change', colorPickerBtn)


let gridCells = document.querySelectorAll('grid-cell')



newGridSize(10)


slider.onchange = function () {

  let newSize = this.value
  sliderValue.textContent = `${newSize} X ${newSize}`;
  newGridSize(newSize)

}


function newGridSize(newSize) {
  gridCells = document.querySelectorAll('.grid-cell')
  if(gridCells.length != 0){
    deletePreviousGrid();
  }
  

  for (let i = 0; i < (newSize * newSize); i++) {
    let newGridCell = document.createElement('div')
    newGridCell.style.border = '1px solid black'
    newGridCell.style.backgroundColor = 'rgb(255, 255, 255)'
    container.appendChild(newGridCell);
    newGridCell.className = 'grid-cell'

    container.style.gridTemplateColumns = `repeat(${newSize}, auto)`
  }



}

function deletePreviousGrid() {
  let GridCells = document.querySelectorAll('.grid-cell')
  GridCells.forEach(cell => {
    cell.remove();
  })
}

function colorPickerBtn(e){
  console.log(e);
  let cells = document.querySelectorAll('.grid-cell')
  cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
    


      cell.style.background = `${e.target.value}`
    })
  })
}


function greyOption() {
  let cells = document.querySelectorAll('.grid-cell');

 

  cells.forEach(cell => {
    let greyR = 202;
    let greyG = 202;
    let greyB = 202;
    
    cell.removeEventListener('mouseover', deleteBackground)

  cell.addEventListener('mouseover', () =>{
    let cellCurrentColor = getComputedStyle(cell).backgroundColor;
    console.log(cellCurrentColor);
     cell.setAttribute('listener', 'true')
    if(cellCurrentColor == 'rgb(255, 255, 255)'){
        greyR=202;
        greyG=202;
        greyB=202;
     }
    
    cell.style.backgroundColor = `rgb(${greyR-=20},${greyG-=20},${greyB-=20})`
 
  })
  });

}


function eraserBtn() {
  let cells = document.querySelectorAll('.grid-cell');

  cells.forEach(cell => {
    
    cell.addEventListener("mouseover", deleteBackground)
  });
}

function deleteBackground(e){
  console.log(e.target)
  e.target.setAttribute('listener', 'true')
  e.target.style.backgroundColor = "rgb(255, 255, 255)"
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

function restartBtn() {
  let cells = document.querySelectorAll('.grid-cell');
  cells.forEach(cell => {
    cell.style.background = 'rgb(255, 255, 255)';
  });
}

function rainbowBtn() {

  let cells = document.querySelectorAll('.grid-cell')
  cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
      let R = Math.floor((Math.random() * 255) + 1)
      let G = Math.floor((Math.random() * 255) + 1)
      let B = Math.floor((Math.random() * 255) + 1)


      cell.style.background = `rgb(${R},${G},${B})`
    })
  })

}








