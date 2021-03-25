// 1
setTimeout(() => {
    const div1 = document.querySelector(`#first`);
    const p1 = document.createElement(`p`);
    p1.innerText = `Hi`;
    div1.append(p1);
  }, 1000);
  
  // 2
  setTimeout(() => {
    const divTM = document.querySelector(`#timeout-nesting`);
    const p1 = document.createElement(`p`);
    p1.innerText = `One`;
    divTM.append(p1);
    setTimeout(() => {
      const p2 = document.createElement(`p`);
      p2.innerText = `Two`;
      divTM.append(p2);
    }, 1000);
  }, 2000);
  


let time = 0

const clock = setInterval(() => {
    console.log(time);
    time++
}, 1000);

const stop = document.querySelector(`button`);

stop.addEventListener(`click`, () =>{
    clearInterval(clock);
});








const div3 = document.querySelector(`#countdown`);
const p4 = document.createElement(`p`);
p4.innerText = `2:00`;
div3.append(p4);



let startingSeconds = 120;

const countdown = setInterval(() => {
   startingSeconds --;
   const minutes = Math.floor(startingSeconds / 60) ;
   const seconds = startingSeconds % 60; 
  p4.innerText = `${minutes}:${seconds}`;
  
  
  if (seconds < 10) {
      p4.innerText = `${minutes}:0  ${seconds}`;
      
  }else{
      p4.innerText = `${minutes}:${seconds}`;
  }


  if (startingSeconds === 0 ){
      p4.innerText = `Time is Up`;

      clearInterval(countdown);


  }
   
}, 1000);