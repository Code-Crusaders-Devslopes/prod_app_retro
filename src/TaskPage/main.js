// importing data
import {data} from './data.js'
// const delButton = document.getElementById('delete');
const cardContainer = document.getElementById('card-container');
const inputBox = document.getElementById('input-box');
// Add card function

const addCard = () =>{
  let input = document.getElementById('input-box').value;
  const card = document.createElement('div');
  card.classList.add('nes-container')
  card.innerHTML = `${input} ${data.cardElement() || ''}`;
  document.getElementById('card-container').appendChild(card);
  document.getElementById('input-box').value = '';  
}

//Delete card Function
const delCard = (e) => {
  e.remove();
}

// Make done
const done = (e) =>{
  e.classList.toggle('background-done')
}
//Add event listener to button#add

const addButton = document.getElementById('add');
addButton.addEventListener('click', addCard);


// add delete functionality
cardContainer.addEventListener('click', (e)=>{
  if(e.target.classList.contains('delete')){
    delCard(e.target.parentElement.parentElement);
  }
  if(e.target.classList.contains('done')){
    done(e.target.parentElement.parentElement);
  }
})

inputBox.addEventListener('keydown', (e) => {
  if(e.key === 'Enter'){
    addCard();
  }
})


