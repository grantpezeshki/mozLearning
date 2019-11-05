let customName = document.getElementById('customname');
let randomize = document.querySelector('.randomize');
let story = document.querySelector('.story');

const x = ['Willy the Goblin','Big Daddy','Father Christmas']
const y = ['the soup kitchen','Disneyland','the White House']
const z = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away']


let insertx = randomValueFromArray(x)
let inserty = randomValueFromArray(y)
let insertz = randomValueFromArray(z)

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    var name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    var weight = (Math.round(300/14))+' stone';
      var temperature = (Math.round((94-32)*(5/9)))+' Centigrade';
      }
  else {        //us
      var weight = (Math.round(300))+' pounds';
      var temperature = (Math.round(94))+'  Fahrenheit';
    }

  story.textContent = 'It was '+temperature+' outside, so '+insertx
                        +' went for a walk. When they got to '+inserty
                        +', they stared in horror for a few moments, then '+insertz
                        +'. '+name+' saw the whole thing, but was not surprised — '+insertx
                        +' weighs '+weight+', and it was a hot day.';
  story.style.visibility = 'visible';

  insertx = randomValueFromArray(x);
    inserty = randomValueFromArray(y);
    insertz = randomValueFromArray(z); 
    //console.log('hi, you redid out the inserts')
}

function reset() {

    insertx = null;
    inserty = null;
    insertz = null; 
    console.log('hi, you nulled out the inserts')
}

/*  

2. RAW TEXT STRINGS

It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.

Willy the Goblin
Big Daddy
Father Christmas

the soup kitchen
Disneyland
the White House

spontaneously combusted
melted into a puddle on the sidewalk
turned into a slug and crawled away

3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    var name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300);
    var temperature =  Math.round(94);

  }

  story.textContent = ;
  story.style.visibility = 'visible';
}

*/