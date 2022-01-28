let map = []

map[0]= "Vanha linnantorni"
map[1]= "Syvä kaivo"
map[2]= "Aurinkoinen metsäaukio"
map[3]= "Nukkuva lohikäärme"
map[4]= "Kapea metsäpolku"
map[5]= "Vanha portti"
map[6]= "Joen ranta"
map[7]= "Tyhjä puupenkki"
map[8]= "Vanha mökki"

let images = []

images[0]= "torni.jpg"
images[1]= "kaivo.jpg"
images[2]= "aukio.jpg"
images[3]= "sleepingdragon2.jpg"
images[4]= "polku.jpg"
images[5]= "suljettuportti.jpg"
images[6]= "joki.jpg"
images[7]= "penkki.jpg"
images[8]= "mokki.jpg"

let blockMessage = []

blockMessage[0] = "Haluamasi reitti on liian vaarallinen"
blockMessage[1] = "Salaperäinen voima estää liikkumisen tuohon suuntaan"
blockMessage[2] = "Vaikeakulkuinen ryteikkö estää kulkemisen"
blockMessage[3] = "Et pääse kiertämään lohikäärmettä tuota kautta"
blockMessage[4] = ""
blockMessage[5] = "Korkea muuri estää sinua kulkemasta itään"
blockMessage[6] = "Joki on liian syvä ylitettäväksi"
blockMessage[7] = "Metsä on liian tiheä kuljettavaksi"
blockMessage[8] = "Olet liian peloissasi mennäksesi tuohon suuntaan"

// missä vaiheessa peliä ollaan menossa
let gameState = 0

guideMessage = []

guideMessage[0] = "Liiku pelissä klikkaamalla nuolia tai nuolinäppäimillä. Nämä viestit voit sulkea klikkaamalla ruksia tai painamalla Enter"
guideMessage[1] = "Sinut on kutsuttu linnaan. Etsi vanha linnantorni"
guideMessage[2] = "Prinsessa: -Tarina kertoo, että nukkuva lohikäärme herää, kun tulen täysi-ikäiseksi. Syntymäpäiväni on huomenna!"
guideMessage[3] = "- Voitko auttaa? Etsi taikamiekka, jolla voi surmata lohikäärmeen. Kysy apua mieheltä syvällä kaivolla."
guideMessage[4] = "- Jos saat selville kaivon syvyyden, voin auttaa sinua. Tarvitset vain jotain mitä tiputtaa kaivoon..."
guideMessage[5] = "Löydät joen rannalta kiven ja poimit sen mukaasi."
guideMessage[6] = "- Pudota kivi kaivoon! Voimme laskea kaivon syvyyden, kun laskemme ajan, mikä kuluu, ennen kuin kuulemme kiven osuvan kaivon pohjalle."
guideMessage[7] = "- 2 sekuntia. Kaivon syvyys on siis laskukaavan mukaan noin 18,5 metriä"
guideMessage[8] = "- Oikein! Tässä on sinulle huilu, tarvitset sitä, että voit kulkea portista"
guideMessage[9] = "Pääset portista soittamalla huilua"
guideMessage[10] = "Huilu soi itsestään ja huomaat olevasi portin toisella puolella. Tie vie etelään..."
guideMessage[11] = "Mökin sisältä kuuluu hiljaista musiikkia"
guideMessage[12] = "Koputat oveen. Musiikki lakkaa ja ovi avautuu. Vanha nainen: - Olet tullut tänne hakemaan taikamiekkaa."
guideMessage[13] = "- Anna huilusi minulle, niin saat miekan. Mutta muista, että et voi palata enää portin kautta"
guideMessage[14] = "Pöllö huutaa puun oksalta: -Lohikäärme heräsi! Kiirehdi!"
guideMessage[15] = "Surmaa lohkäärme, käytä miekkaa!"
guideMessage[16] = "Lohikäärme kuoli, palaa linnaan"
guideMessage[17] = "Prinsessa: - Kiitos sinulle! Olet sankari!"
guideMessage[18] = "- Mene metsäaukiolle, sieltä löydät palkkiosi"
guideMessage[19] = "Metsäaukiolle oli järjestetty suuret juhlat ja sinulle ojennettiin valtava rahapussi. Loppu!"

// Sijainti pelin alussa
let mapLocation = 4

// Pelaajan syöte

let playersInput = ''

// Pelin viestit

let gameMessage = ''

//Pelaajan käytössä olevat toiminnot

let actionsForPlayer = ["N", "E", "S", "W"]
let action = ""

// let items = []
// items[0] = "kivi1.png"
// items[1] = "huilu.png"
// items[2] = "miekka.png"



//console.log(map[mapLocation])

let modal = document.getElementById("modalMessage")

let output = document.querySelector("#output")
output.innerHTML = '<span class="outputHeader">Sijaintisi on: </span> <br>' + map[mapLocation]
let message = document.getElementById("message")
message.innerHTML = gameMessage


// let input = document.querySelector("#input")

function openModal(){
    console.log(gameMessage)
    if(gameMessage == ''){
        modal.style.display = "none"
    } 
    else{
        modal.style.display ="block"
    }
    
}

function gameSteps(){
    if (mapLocation == 4 && (gameState == 0 || gameState == 1)){
        changeMessage()
        
    } 
    else if(mapLocation == 0 && (gameState == 2 || gameState == 3 || gameState == 17 || gameState == 18)){
        changeMessage()
    }
    else if(mapLocation == 1 && (gameState == 4 || (gameState > 5 && gameState <9))){
        changeMessage()
    }
    else if(mapLocation == 6 && gameState == 5){
        changeMessage()
    }
    else if(mapLocation == 5 && (gameState == 9 || gameState == 10)){
        changeMessage()
    }
    else if(mapLocation == 8 && (gameState > 10 && gameState < 14)){
        changeMessage()
        map[3] = "Raivoisa lohikäärme"
        images[3]= "dragon.jpg"
        image[5] ="suljettuportti.jpg"
        

    }
    else if(mapLocation == 7 && gameState == 14){
        changeMessage()
    }
    else if(mapLocation == 3 && (gameState == 15 || gameState == 16)){
        changeMessage()
    }
    else if(mapLocation == 2 && gameState == 19){
        changeMessage()
    }


    // else{
    //     gameMessage = ''
    // }
    // openModal()    
}

function changeMessage(){
    gameMessage = guideMessage[gameState]
    gameState++
    console.log(gameState)
}

// Yritin luoda näppäimille efektiä, jotta näkisi että on painanut, mutta en onnistunut
// let buttons = document.querySelectorAll(button)
// buttons.forEach(rippleEffect(button))

// function rippleEffect(button){
//     button.addEventListener('click', function(){
//         let rippleElement = document.createElement('span')
//         rippleElement.setAttribute('id','ripple')
//         button.appendChild(rippleElement)
//         setTimeout(function(){rippleElement.remove()}, 500)

//     })
// }

window.addEventListener('keydown', function(e){
    var key = e.key
    var closeBox = document.querySelector(".closebtn")
    console.log(key)
    if(key == "ArrowUp"){
        playGame("N")
    }
    if(key =="ArrowDown"){
        playGame("S")
    }
    if(key == "ArrowRight"){
        playGame("E")
    }
    if(key == "ArrowLeft"){
        playGame("W")
    }
    if(key == "Enter"){
        closeBox.parentElement.style.display ='none'
        render()
    }
})

let north = document.getElementById("north")
north.addEventListener("click", function(){clickHandler("N")},false)
// north.addEventListener("click", function(){
//     this.style.boxShadow = "0 0 20px 20px white"
// })

let south = document.getElementById("south")
south.addEventListener("click", function(){clickHandler("S")},false)


let west = document.getElementById("west")
west.addEventListener("click", function(){clickHandler("W")},false)


let east = document.getElementById("east")
east.addEventListener("click", function(){clickHandler("E")},false)


// let button = document.getElementsByTagName("button")
// var i;
// for (i = 0; i < button.length; i++) {
//         button[i].addEventListener("click", clickHandler, false)
        
// }
let image = document.querySelector("img")
render()

// button.style.cursor = "pointer"
// button.addEventListener("click", clickHandler, false)
// let image = document.querySelector("img")

// function closeBox(event){
//     if(event.key === "Enter"){
//         event.parentElement.style.display = 'none'
//     }
// }

function clickHandler(id){
    console.log("Nappia painettu " + id)
    playGame(id)
}
 

function playGame(id){
    playersInput = id
    console.log(playersInput)
    gameMessage = ''
    action = ''

    for(i = 0; i<actionsForPlayer.length; i++) {
        if(playersInput.indexOf(actionsForPlayer[i]) !== -1) {
            action = actionsForPlayer[i]
            console.log("Pelaajan toiminto: " + action)
            break
        } 
    } 

    switch(action) {
        case "N":
            if(mapLocation >=3) {
                mapLocation -= 3
                
            }else {
                gameMessage = blockMessage[mapLocation]
            
            }
            break
            
        case "E":
            if (!(mapLocation == 2 || mapLocation ==5 || mapLocation == 8)){
                mapLocation++
            }else{
                gameMessage = blockMessage[mapLocation]
                
            }
                
            break
        case "S":
            if(mapLocation <=5){
                mapLocation +=3
            } else{
                gameMessage = blockMessage[mapLocation]
                
            }
            break
        case "W":
            if (!(mapLocation == 0 || mapLocation ==3 || mapLocation == 6)){
                mapLocation--
            }else{
                gameMessage = blockMessage[mapLocation]
            
            }
            
            break
        default:
            gameMessage = "Tuntematon toiminto"
            
        
    }
    render()
}

function checkState(){
    if(gameState == 5){
        images[6] = "kivi1.png"
    }
    else if (gameState == 8){
        images[1] ="huilu2.png"
    }

    else if(gameState == 10 || gameState == 11){
        images[5] = "portti.jpg"
    }

    else if(gameState == 13){
        images[8] = "miekka.png"
    }
    else if(gameState == 19){
        images[2] = "juhla.jpg"
    }
    else{
        images[6] = "joki.jpg"
        images[1] = "kaivo.jpg"
        images[5] = "suljettuportti.jpg"
        images[8] = "mokki.jpg"
    }
    
}

function render() {
    checkState()
    image.src = "images/" + images[mapLocation]

    //Sijainnin päivitys
    output.innerHTML =  '<span class="outputHeader">Sijaintisi on: </span> <br>' + map[mapLocation]
    
    //pelitilan päivitys
    gameSteps()

    // Palaute pelaajalle
    message.innerHTML = gameMessage
    openModal()
    gameMessage = '' 
}   

// "<br>"