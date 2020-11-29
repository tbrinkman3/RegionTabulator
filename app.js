const submitButton = document.querySelector('#submit');
const letter = document.getElementById('letter');
const score = document.getElementById('score');
const scoreTable = document.querySelector('#score-table')

let scores = [];

///////////////////////////////// START HERE WITH A FUNCITON TO UPDATE SCORES AND THEN FIGURE OUT HOW TO MERGE THAT WITH CREATE TABLE

function updateScores(){
  let scoreObj = {};
  scoreObj.Letters = letter.value;
  scoreObj.Scores = score.value
  scores.push(scoreObj);
}





function createTable(data){
    let table = document.createElement('table');

    let fields = Object.keys(data[0]);
    let headerRow = document.createElement('tr');

    fields.forEach(function(info){
        let headCell = document.createElement('th');
        headCell.appendChild(document.createTextNode(info));
        headerRow.appendChild(headCell);
    });

    table.appendChild(headerRow);

    data.forEach(function(object){
        let row = document.createElement('tr');

        fields.forEach(function(field){
            let cell = document.createElement('td');
            cell.appendChild(document.createTextNode(object[field]));
            row.appendChild(cell);
        })
        table.appendChild(row)
    })

    return table
}



submitButton.addEventListener('click', function() {
    updateScores();
    console.log(scores)
    scoreTable.appendChild(createTable(scores))
    //scoreTable.appendChild(createTable())
})





