const anchor = document.querySelector('a[href^="#"]')
anchor.addEventListener("click", function(e) {
    e.preventDefault()
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
window.onload = () => {
    let layers = document.getElementById('layers')
   
    layers.addEventListener('mousemove',  e => {
       
        Object.assign(document.documentElement, {
            style: `
            --move-x: ${(e.clientX - window.innerWidth / 2) * -0.01}deg;
            --move-y: ${(e.clientY - window.innerHeight / 2) * -0.01}deg
            `
        })
    });
    layers.addEventListener('mouseleave',  e => {
       
        Object.assign(document.documentElement, {
            style: ''
        })
    });
}

window.onunload = () => {
    let layers = document.getElementById('layers')
}


function makeCounter(id, pr, ms){
    let number = document.getElementById(id)
    let counter = 0
    setInterval(() => {
        if(counter == pr){
            clearInterval;
        }else{
        
            counter += 1;
            number.innerHTML = `${counter}%`;
        }
        
    }, ms) 
}


makeCounter('number', 25, 29)

makeCounter('number1', 45, 40 )

makeCounter('number2', 40, 43)

makeCounter('number3',40, 43)  