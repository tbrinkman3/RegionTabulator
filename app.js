const letter = document.getElementById('letter');
const score = document.getElementById('score');
const scoreTable = document.getElementById('score-table');
const submitButton = document.querySelector('#submit');
const tableCreator = document.querySelector('#table-create')

/////////////////////
//SUBMIT BUTTON
//////////////////////
submitButton.addEventListener('click', () => {
    if(letterCheck(letter.value)&&numberCheck(score.value)){
    addScore(letter, score)
    }
});
/////////////////////
//ADD SCORE TO TABLE
//////////////////////
function addScore(letter, score){
  let newLine = document.createElement('p');
  newLine.textContent = "Letter: "+letter.value+' Score:'+score.value
+ '\n'

  scoreTable.appendChild(newLine)
}
/////////////////////////////////////////////
//VALIDATE INPUTS
////////////////////////////////////////////
function letterCheck(input){
    let regex = /[a-zA-Z]/;
    if(!regex.test(input)){
        alert('Please enter a single letter!')
    }else{
        return true
    }
}

function numberCheck(input){
    let numRegex = /[0-9]/gi;
    if(!numRegex.test(input)){
        alert('Please enter a valid number')
    }else{
        return true
    }
}

////////////////////////////////////////////


tableCreator.addEventListener('click', () => {
    createTable();
})

/////////////////////////////////////
//Create TABLE BUTTON
/////////////////////////////////
function createTable(){
    var table  = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');

    for(let i = 0; i< 2;i++){
        var row = document.createElement('tr');

        for(let j = 0; j<2;j++){
            var cell = document.createElement('td');
            var cellText = document.createTextNode(letter.value);

            cell.appendChild(cellText);
            row.appendChild(cell)
        }
        tbody.appendChild(row)
    }
    table.appendChild(tbody)

    scoreTable.appendChild(table)
    table.setAttribute('border', '2')

}
