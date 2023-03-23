const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const mensage = document.querySelector('#mensage')


btnTry.addEventListener('click', toggleScreen)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enter)


function handleResetClick(){
    toggleScreen()    
    randomNumber = Math.round(Math.random() * 10)

    switch (randomNumber) {
    case 1:
        screen2.querySelector('h2').innerText = "A vida trará coisas boas se tiver paciência."
    break;
    case 2:
        screen2.querySelector('h2').innerText = "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si."
    break;
    case 3:
        screen2.querySelector('h2').innerText = "Não compense na ira o que lhe falta na razão."
    break;
    case 4:
        screen2.querySelector('h2').innerText = "Defeitos e virtudes são apenas dois lados da mesma moeda."
    break;
    case 5:
        screen2.querySelector('h2').innerText = "A maior de todas as torres começa no solo."
    break;
    case 6:
        screen2.querySelector('h2').innerText = "Não há que ser forte. Há que ser flexível."
    break;
    case 7:
        screen2.querySelector('h2').innerText = "A sorte favorece os audazes."
    break;
    case 8:
        screen2.querySelector('h2').innerText = "A sorte é o que acontece quando a preparação encontra a oportunidade."
    break;
    case 9:
        screen2.querySelector('h2').innerText = "Não há sorte, há trabalho."
    break;
    case 10:
        screen2.querySelector('h2').innerText = "Escolha um caminho com o coração e não se arrependerá."
    break;
    }
}


function toggleScreen(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function enter(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide'))
    handleResetClick()
}

