function scuberGreetingForFeet(distance){
if (distance<=400) {
  return 'This one is on me!'
}  
else if (distance===2001){
return 'I will gladly take your thirty bucks.'
}
else {
  return 'No can do.'
}
}

function ternaryCheckCity(city){
  return (city==='NYC'?'Ok, sounds good.':'No go.')
}

function switchOnCharmFromTip(charm){
  switch (charm) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return'Thank you.'
    default:
      return 'Bye.'
  }
}