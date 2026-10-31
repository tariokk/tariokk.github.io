const rafaps = document.querySelectorAll("html body div.rafax9 p");
rafaps.forEach(p => {
    console.log("found rafap");
    p.style.transition = "width 1s ease-in-out";
    p.style.width = "40%";
    let expanded = false;
    setInterval(() => {
        expanded = !expanded;
        p.style.width = expanded ? "75%" : "40%";
    }, 2500);
});
let glihSFX = new Audio("glitch67.ogg")
let playlist = [
    "WhenTheMoon'sReachingOutStars-Reload-.mp3",
    "ColorYourNight.mp3",
    "巌戸台分寮 -Reload-.mp3",
    "Heartbeat, Heartbreak.mp3",
    "Graze the Roof (In-Game).mp3"
]
let helloWorldButton = document.querySelector("#helloWorldButton")
let helloWorld = document.querySelector("#helloWorld")
if (helloWorldButton) {
    helloWorldButton.addEventListener("click", () => {
        helloWorld.textContent += "Hello world! "
        helloWorld.scrollIntoView({
            block: "end"
        })
    })
}
let body = document.querySelector("body")
let buttons = document.querySelectorAll("button")
let translationEN = false
function numberAbbreviate(number) {
    if (number < 1000) {
        return number.toFixed(0)
    }
    if (number >= 1_000 && number <= 1_000_000) {
        return (number/1000).toFixed(1) + "k"
    }
    if (number >= 1_000_000 && number <= 1_000_000_000) {
        return (number/1_000_000).toFixed(1) + "m"
    }
    if (number >= 1_000_000_000 && number <= 1_000_000_000_000) {
        return (number/1_000_000_000).toFixed(1) + "b"
    }
    if (number >= 1_000_000_000_000 && number <= 1_000_000_000_000_000) {
        return (number/1_000_000_000_000).toFixed(1) + "t"
    }
    if (number >= 1_000_000_000_000_000 && number <= 1_000_000_000_000_000_000) {
        return (number/1_000_000_000_000_000).toFixed(1) + "q"
    }
    if (number >= 1_000_000_000_000_000_000 && number <= 1_000_000_000_000_000_000_000) {
        return (number/1_000_000_000_000_000_000).toFixed(1) + "qi"
    }
    if (number >= 1_000_000_000_000_000_000_000 && number <= 1_000_000_000_000_000_000_000_000) {
        return (number/1_000_000_000_000_000_000_000).toFixed(1) + "s"
    }
    if (number >= 1_000_000_000_000_000_000_000_000 && number <= 1_000_000_000_000_000_000_000_000_000) {
        return (number/1_000_000_000_000_000_000_000_000).toFixed(1) + "sp"
    }
    if (number >= 1_000_000_000_000_000_000_000_000_000 && number <= 1_000_000_000_000_000_000_000_000_000_000) {
        return (number/1_000_000_000_000_000_000_000_000_000).toFixed(1) + "o"
    }
    if (number >= 1_000_000_000_000_000_000_000_000_000_000 && number <= 1_000_000_000_000_000_000_000_000_000_000_000) {
        return (number/1_000_000_000_000_000_000_000_000_000_000).toFixed(1) + "n"
    }
    if (number >= 1_000_000_000_000_000_000_000_000_000_000_000 && number <= 1_000_000_000_000_000_000_000_000_000_000_000_000) {
        return (number/1_000_000_000_000_000_000_000_000_000_000_000).toFixed(1) + "d"
    }
    return number
}
function glihVisualChange() {
    glihBalanceMessage.textContent = `glihs: ${numberAbbreviate(glihBalance)}`
    if (glihNumber > 1) {
        if (!translationEN) {
        glihMessage.textContent = `${userName} ganhou ${glihNumber.toFixed(0)} glihs!`
        } else {
            glihMessage.textContent = `${userName} gained ${glihNumber.toFixed(0)} glihs!`
        }
    }
    else {
        if (!translationEN) {
        glihMessage.textContent = `${userName} ganhou ${glihNumber} glihs!`
        } else {
            glihMessage.textContent = `${userName} gained ${glihNumber} glihs!`
        }
    }
    
}
// nome
let formGlihName = document.querySelector("#formGlihName")
let nameInput = document.querySelector("#nameInput")
let userName = ""
const userNameMessage = document.querySelector("#userNameMessage")
formGlihName.addEventListener("submit", (event) => {
    event.preventDefault()
    userName = nameInput.value
    //nomes especiais

    // glitch
    if (userName.toLowerCase().startsWith("glitch") || userName.toLowerCase().startsWith("glih") ||
        userName.toLowerCase().startsWith("ryan") || userName.toLowerCase().startsWith("67")
    ) {
        userNameMessage.textContent = "oi irmao!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"

    //mavis
    } else if (
        userName.toLowerCase().startsWith("mavis") || userName.toLowerCase().startsWith("veeb") || userName.toLowerCase().startsWith("mavih")
    ) {
        userNameMessage.textContent = "oi irma!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"

    //verity
    } else if (userName.toLowerCase().startsWith("verity")) {
        if (!translationEN) {
            userNameMessage.textContent = "nao come meu cerebros :( eu mudei as musicas de fundo pra voce"
        } else {
            userNameMessage.textContent = "dont eat my brainz :( I changed the background music songs for u"
        }
        playlist = [
            "It's me, It's Verity.mp3",
            "Master of Humanity.mp3",
            "I Miss The Quiet.mp3"
        ]
        formGlihName.addEventListener("submit",(event)=>{
            event.preventDefault()
            if (!userName.toLowerCase().startsWith("verity")) {
                playlist = [
                    "WhenTheMoon'sReachingOutStars-Reload-.mp3",
                    "ColorYourNight.mp3",
                    "巌戸台分寮 -Reload-.mp3",
                    "Heartbeat, Heartbreak.mp3",
                    "Graze the Roof (In-Game).mp3"
                ]
            }
        })
    } else {
        if (!translationEN) {
            userNameMessage.textContent = `oi ${userName}!!!!!!!!!!!!!!!!!!!`
        } else {
            userNameMessage.textContent = `hi ${userName}!!!!!!!!!!!!!!!!!!!`
        }
        nameInput.value = ""
    }
})
// botao principal de aumentar glihs & balança
let toggleMusic = document.querySelector("#toggleMusic")
toggleMusic.hidden = true
let currentSong = 0
function randomSong(playlist,playedSongs) {
    do {
        currentSong = Math.floor(Math.random() * playlist.length)
    } while (playedSongs.includes(currentSong))
    return currentSong
    /*Essa array abaixo vai conter todas as musicas que ja foram tocadas
    song = 67
    console.log(`song: ${song}`)
    console.log(`tamanho da playlist: ${playlist.length}`)
    currentSong = 67
    console.log(`currentSong: ${currentSong}`)
    //Esse loop a seguir continua dando um valor aleatorio à música aleatoria que essa função está tentando gerar até que este valor NÃO:
    //1. Ultrapasse o limite da playlist; 2. Seja uma música que já foi tocada
    while (currentSong >= playlist.length || currentSong === song) {
        if (playedSongs.length > 0) {
            for (song of playedSongs) {
                console.log(`song do for (song of playedSongs): ${song}`)
                currentSong = Number(Math.random().toFixed(1)) * 10
                console.log(`currentSong gerado aleatoriamente do if: ${currentSong}`)
            }
        } else {
            while (currentSong >= playlist.length) {
                currentSong = Number(Math.random().toFixed(1)) * 10
                console.log(`currentSong gerado aleatoriamente do else: ${currentSong}`)
            }
        }
    }
    console.log(`currentSong final: ${currentSong}`)
    return currentSong
    //fiquei um tempao tentando resovler esse problema de logica eu sou maluca*/
}
let playedSongs = []
let buyButtonButton = document.querySelectorAll(".buyButtonButton")
let jackpotChance
let glihButton = document.querySelector("#glihButton")
let glihMessage = document.querySelector("#glihMessage")
let glihBalanceMessage = document.querySelector("#glihBalanceMessage")
let glihBalance = 0
let glihNumber = 0
let tip = document.querySelector("#tip")
let glihIncrease = 1
glihBalanceMessage.hidden = true
glihButton.addEventListener("keydown", (event)=> {
    if (event.key === "Enter") {
        event.preventDefault()
    }
})
glihButton.addEventListener("click", () => {
    if (glihNumber === 0) {
        //musica
        const backgroundMusic = new Audio()
        currentSong = randomSong(playlist,playedSongs)
        playedSongs.push(currentSong)
        backgroundMusic.src = playlist[currentSong]
        backgroundMusic.play()
        backgroundMusic.addEventListener("ended",()=>{
            if (playedSongs.length === playlist.length) {
                playedSongs = [] 
            }
            currentSong = randomSong(playlist,playedSongs)
            playedSongs.push(currentSong)
            backgroundMusic.src = playlist[currentSong]
            backgroundMusic.play()
        })
        toggleMusic.hidden = false
        toggleMusic.addEventListener("click",()=>{
            if (backgroundMusic.paused) {
                backgroundMusic.play()
            } else {
                backgroundMusic.pause()
            }
        })
    }
    tip.hidden = true
    glihBalanceMessage.hidden = false
    //jackpot
    if (Math.random() < jackpotChance) {
        glihNumber += glihIncrease * 10000
        glihBalance += glihIncrease * 10000
        new Audio("Totem_of_Undying.ogg").play()
        body.classList.add("jackpotEffect")
        glihMessage.classList.add("jackpotEffect")
        glihBalanceMessage.classList.add("jackpotEffect")
        glihButton.textContent = "JACKPOT!!!"
        setTimeout(()=>{
            body.classList.remove("jackpotEffect")
            glihMessage.classList.remove("jackpotEffect")
            glihBalanceMessage.classList.remove("jackpotEffect")
        },1)
        setTimeout(()=>{
            if(!translationEN) {
                glihButton.textContent = "clique para glih"
            } else {
                glihButton.textContent = "click for glih"
            }
        },2000)
    } else {
        glihNumber += glihIncrease
        glihBalance += glihIncrease
        
    
    }
    glihVisualChange()
})
// botoes de upgrade
let details = document.querySelectorAll(".details")
for (let i of details) {
    i.hidden = true
}
let detailsButton = document.querySelectorAll(".detailsButton")
for (i of detailsButton) {
    i.addEventListener("click",(event) => {
        if (event.currentTarget.parentElement.nextElementSibling.hidden) {
            event.currentTarget.parentElement.nextElementSibling.hidden = false
            const rect = event.currentTarget.parentElement.nextElementSibling.getBoundingClientRect()
            if (rect.bottom > window.innerHeight || rect.top === 0) { 
                event.currentTarget.parentElement.nextElementSibling.scrollIntoView({
                    behavior: "smooth",
                    block: "end"
                })
            }
        } else {
            event.currentTarget.parentElement.nextElementSibling.hidden = true
        }
    })
}
// botao de upgrade de clique
let glihIncreaseMessage = document.querySelector("#glihIncreaseMessage")
let buyGlihIncrease = document.querySelector("#buyGlihIncrease")
let buyGlihIncreasePrice = 67
buyGlihIncrease.textContent = `comprar glih upgrade $${buyGlihIncreasePrice} glihs`
buyGlihIncrease.addEventListener("click",()=>{
    if (glihBalance >= buyGlihIncreasePrice) {
        glihIncrease = glihIncrease * 2
        glihBalance = glihBalance - buyGlihIncreasePrice
        glihVisualChange()
        buyGlihIncreasePrice = Math.round(buyGlihIncreasePrice * 2)
        if (!translationEN) {
            buyGlihIncrease.textContent = `comprar glih upgrade $${numberAbbreviate(buyGlihIncreasePrice)} glihs`
        } else {
            buyGlihIncrease.textContent = `buy glih upgrade $${numberAbbreviate(buyGlihIncreasePrice)} glihs`
        }
        if (!translationEN) {
            document.querySelector("#glihIncreaseMessage").innerHTML = 
            `Dobra o numero de glihs que voce ganha por clique<br>
            Nivel atual: ${numberAbbreviate(glihIncrease)} glihs por clique`
        } else {
            document.querySelector("#glihIncreaseMessage").innerHTML = 
            `Doubles the number of glihs you gain per click<br>
            Current level: ${numberAbbreviate(glihIncrease)} glihs per click`
        }
    }
})
// botao de upgrade passivo
let glihPassiveIncreaseMessage = document.querySelector("#glihPassiveIncreaseMessage")
let buyGlihPassiveIncrease = document.querySelector("#buyGlihPassiveIncrease")
let glihPassiveIncrease = 0
let buyGlihPassiveIncreasePrice = 134
buyGlihPassiveIncrease.textContent = `comprar glih upgrade passivo $${buyGlihPassiveIncreasePrice} glihs`
buyGlihPassiveIncrease.addEventListener("click",()=>{
    if (glihBalance >= buyGlihPassiveIncreasePrice) {
        glihPassiveIncrease += 0.025
        glihBalance -= buyGlihPassiveIncreasePrice
        glihVisualChange()
        if (!translationEN) {
            document.querySelector("#glihPassiveIncreaseMessage").innerHTML =
            `Aumenta seu saldo de glihs por 5% por upgrade passivamente a cada segundo<br>
            Nivel atual: ${(glihPassiveIncrease * 100).toFixed(1)}% de glihs por segundo`
        } else {
            document.querySelector("#glihPassiveIncreaseMessage").innerHTML =
            `Increases your glih balance by 5% per upgrade each second<br>
            Current level: ${(glihPassiveIncrease * 100).toFixed(1)}% glihs per second`
        }
        buyGlihPassiveIncreasePrice = Math.round(buyGlihPassiveIncreasePrice ** 3)
        if (!translationEN) {
            buyGlihPassiveIncrease.textContent = `comprar glih upgrade passivo $${numberAbbreviate(buyGlihPassiveIncreasePrice)} glihs`
        } else {
            buyGlihPassiveIncrease.textContent = `buy glih passive upgrade $${numberAbbreviate(buyGlihPassiveIncreasePrice)} glihs`
        }
    }
})
setInterval(()=>{
        glihBalance += glihBalance * glihPassiveIncrease
        glihNumber += glihBalance * glihPassiveIncrease
        if (glihPassiveIncrease > 0) {
            glihVisualChange()
        }
    },1000)
// botao de jackpot
let buyJackpotChance = document.querySelector("#buyJackpotChance")
let buyJackpotChancePrice = 777
jackpotChance = 0.0001
buyJackpotChance.textContent = `comprar chance de jackpot ao clicar $${buyJackpotChancePrice} glihs`
let jackpotChanceMessage = document.querySelector("#jackpotChanceMessage")
buyJackpotChance.addEventListener("click",()=>{
    if (glihBalance >= buyJackpotChancePrice) {
        if (jackpotChance  === 0.0001) {
            jackpotChance += 0.0009
        } else {
            jackpotChance += 0.001
        }
        glihBalance -= buyJackpotChancePrice
        glihVisualChange()
        buyJackpotChancePrice = buyJackpotChancePrice * 10
        if(!translationEN) {
            buyJackpotChance.textContent = `comprar chance de jackpot ao clicar $${numberAbbreviate(buyJackpotChancePrice)} glihs`
            document.querySelector("#jackpotChanceMessage").innerHTML =
                `+0.1% de chance por upgrade de conseguir um jackpot quando clicar no botao de clique por glih que garante 10000x mais glihs nesse clique<br>
                Nivel atual: ${(jackpotChance * 100).toFixed(1)}% de chance`
        } else {
            buyJackpotChance.textContent = `buy jackpot chance on click $${numberAbbreviate(buyJackpotChancePrice)} glihs`
            document.querySelector("#jackpotChanceMessage").innerHTML =
            `+0.1% chance per upgrade to hit a jackpot when clicking for glih which grants 10000x what the click would<br>
            Current level: ${(jackpotChance * 100).toFixed(1)}% chance`
        }
    }
})

// traducao
let translations = {
    welcome: "Welcome to glihland here we have glihs",
    nameInput: "type your name:",
    glihButton: "click for glih",
    tip: "if yoyr'e on pc you can click with mouse OR spacebar",
}
let buttonTranslate = document.querySelector("#buttonTranslate")
buttonTranslate.addEventListener("click",()=>{
    translationEN = true

    document.querySelector("#glihIncreaseMessage").innerHTML = 
        `Doubles the number of glihs you gain per click<br>
        Current level: ${numberAbbreviate(glihIncrease)} glih(s) per click`
    document.querySelector("#glihPassiveIncreaseMessage").innerHTML =
        `Increases your glih balance by 2.5% per upgrade each second<br>
        Current level: ${(glihPassiveIncrease * 100).toFixed(1)}% glihs per second`
    document.querySelector("#jackpotChanceMessage").innerHTML =
        `+0.1% chance per upgrade to hit a jackpot when clicking for glih which grants 10000x what the click would<br>
        Current level: ${(jackpotChance * 100).toFixed(1)}% chance`

    buyGlihIncrease.textContent = `buy glih upgrade $${numberAbbreviate(buyGlihIncreasePrice)} glihs`
    buyGlihPassiveIncrease.textContent = `buy glih passive upgrade $${numberAbbreviate(buyGlihPassiveIncreasePrice)} glihs`
    buyJackpotChance.textContent = `buy jackpot chance on click $${numberAbbreviate(buyJackpotChancePrice)} glihs`
    document.querySelectorAll("[data-translate]").forEach(element=>{
        element.textContent = translations[element.dataset.translate]
    })
    buttonTranslate.remove()
})
let adminInput = document.querySelector("#adminInput")
let adminForm = document.querySelector("#adminForm")
let adminGlihBalance = document.querySelector("#adminGlihBalance")
let adminJackpotChance = document.querySelector("#adminJackpotChance")
let adminGlihBalanceInput = document.querySelector("#adminGlihBalanceInput")
let adminJackpotChanceInput = document.querySelector("#adminJackpotChanceInput")
adminGlihBalance.hidden = true
adminJackpotChance.hidden = true
adminForm.addEventListener("submit", (event) => {
    event.preventDefault()
    if (adminInput.value === "676767") {
        adminGlihBalance.hidden = false
        adminJackpotChance.hidden = false

        adminGlihBalance.addEventListener("submit",(event)=>{
            event.preventDefault()
            glihBalance = Number(adminGlihBalanceInput.value)
            glihVisualChange()
            adminGlihBalanceInput.value = ""
        })
        adminJackpotChance.addEventListener("submit",(event)=>{
            event.preventDefault()
            jackpotChance = Number(adminJackpotChanceInput.value) / 100
            adminJackpotChanceInput.value = ""
        })
    }
})
