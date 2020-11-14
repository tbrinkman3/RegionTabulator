const letter = document.getElementById('letter');
const score = document.getElementById('score');
const scoreTable = document.getElementById('score-table');
const submitButton = document.querySelector('#submit');

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
