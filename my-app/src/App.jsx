import React from 'react'

const App = () => {
  return (
    <div>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@100;200;300;600&display=swap');
      </style>
      <h1>TIME TELLER</h1>
      <p id='demo'></p>
      <button  onClick={sayHello}>Get Date and Time</button>
      <button className='clr' onClick={sayBye}>clear</button>
    </div>
    
  

    
  )
}




function sayHello() {
  let current= new Date();
  let cDate = current.getDate()+ '-'+(current.getMonth() + 1) + '-' +current.getFullYear();
  let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
  document.getElementById('demo').innerHTML="THE DATE IS :"+cDate+"<br>"+"THE TIME IS :"+cTime;
 
  
 
 
/*   alert('TODAYS DATE  AND TIME IS \n'+ Date()); */
}
function sayBye(){

  document.getElementById('demo').innerHTML="THANK YOU";
 
}




export default App