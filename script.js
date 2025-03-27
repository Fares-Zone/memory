

let user_div = document.querySelector('.start_game')
let user = document.querySelector('.name span')
let attempts = document.querySelector('.Attempts span')
let btn = document.querySelector('.btn')
let input = document.querySelector('.input')
let currentTime = 1000;
btn.onclick = function(e){
  console.log(btn)
  if (input.value != "") {
    user.innerHTML = input.value
  } else {
    user.innerHTML = "Unknown"
  }
  array.forEach((ele)=>{
    ele.classList.add('has-match')
    setTimeout(() => {
      ele.classList.remove('has-match')

    }, 3000);
  })
  // document.getElementById(`game-audio`).play()
  user_div.remove()
}


let tryes = 0
attempts.innerHTML = tryes

let div = document.querySelector(`.div`);

let gameBlock = document.querySelectorAll(`.game-block`)

let boxes = []

for (let i = 0; i < gameBlock.length; i++) {
  let random = Math.floor(Math.random() * gameBlock.length)
  gameBlock[random].style.cssText = `order: ${random}`
}



let array = Array.from(div.children)

array.forEach((ele)=>{
  ele.addEventListener(`click`, (e)=>{
    // ele.classList.add('is-flipped')
    setTimeout(()=>{
    }, 2000)
    check(ele, e)
    // e.target.classList.add('stopClick')
  })
})

let congratulations = document.querySelector('.Congratulations')

function check(el,e) {
  el.classList.add('is-flipped')
  el.classList.add('stopClick')
  boxes.push(el)
  if (boxes.length == 2) {
    div.classList.add('stopClick')
    if (boxes[0].dataset.img == boxes[1].dataset.img) {
      boxes.forEach((cor)=>{
        cor.classList.add('stopClick')
        div.classList.remove('stopClick')
      })
      document.getElementById(`seccess`).play()
      boxes.forEach((e)=> {
        e.classList.add('has-match')
        e.classList.remove('is-flipped')
        
      })
      let c = array.every((e) =>{
        return e.classList.contains('has-match')
      }, 10)
      if (c) {
        congratulations.style.display = "block"
        document.getElementById('game-audio').play()
        document.querySelector('.Congratulations h3 span').innerHTML = user.innerHTML
        document.querySelector('.Congratulations h4 span').innerHTML = tryes
        
      }
      boxes =[]
    } else {
      document.getElementById(`fail`).play()
      setTimeout(() => {
        tryes++
        attempts.innerHTML = tryes
        // boxes[0]
        boxes.forEach((c)=>{
          c.classList.remove('is-flipped')
          c.classList.remove('stopClick')
          div.classList.remove('stopClick')
          // console.log("False")
          boxes = []
        })
      }, currentTime);
    }
  }
  // console.log(boxes)
}



function reset() {

  attempts.innerHTML = 0
  document.querySelector('.Congratulations h4 span').innerHTML = 0
  array.forEach((ele)=>{
    ele.classList.remove('has-match')
    div.classList.remove('stopClick')
    ele.classList.remove("stopClick")
  })
  for (let i = 0; i < gameBlock.length; i++) {
    let random = Math.floor(Math.random() * gameBlock.length)
    gameBlock[random].style.cssText = `order: ${random}`
  }
  
  array.forEach((ele)=>{
    ele.classList.add('has-match')
    setTimeout(() => {
      ele.classList.remove('has-match')
      
    }, 3000);
  })
  congratulations.style.display = 'none'
}


document.querySelector('.playAgane').addEventListener('click', (e)=>{
  reset()
})