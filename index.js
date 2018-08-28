// Write your code in this file!
function scuberGreetingForFeet(someValue){
  let greeting
  if (someValue <= 400) {
    greeting = 'This one is on me!'
  } else if (someValue > 2500){
    greeting = 'No can do.'
  } else if (someValue > 2000){
    greeting = 'I will gladly take your thirty bucks.'
  }
  return greeting
}


function ternaryCheckCity(city){
  let response
  if (city === 'NYC'){
    response = "Ok, sounds good."
  } else {
    response = 'No go.'
  }
  return response
}

function switchOnCharmFromTip(tip){
  let gratitude
  if (tip === 'generous'){
    gratitude = 'Thank you so much.'
  } else if (tip === 'not as generous'){
    gratitude = 'Thank you.'
  } else {
    gratitude = 'Bye.'
  }
  return gratitude
}
