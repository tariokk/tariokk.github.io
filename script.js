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
// Hello, world!
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
// traducao
let translationEN = false
let tip = document.querySelector("#tip")
function translateAll() {
    translationEN = true
    clickForGlih = "click for glih"

    document.querySelector("#glihIncreaseMessage").innerHTML = 
        `Doubles the number of glihs you gain per click<br>
        Current level: ${numberAbbreviate(glihIncrease)} glih(s) per click`
    document.querySelector("#jackpotChanceMessage").innerHTML =
        `+0.01% chance per upgrade to hit a jackpot when clicking for glih which grants 10000x what the click would<br>
        Current level: ${(jackpotChance * 100).toFixed(2)}% chance`
    document.querySelector("#buyClickBoosterMessage").innerHTML = 
        `Each 5 seconds, the next click gives +(10 x (10 x level)) glihs. Can stack and adds before jackpot<br>
        Current level: +${numberAbbreviate(clickBooster)} per boost.<br>
        The next click will give: +${numberAbbreviate(currentClickBooster)} glihs`
    document.querySelector("#temporaryInfo").innerHTML = 
        `'a','d' to walk 'e' to attack spacebar to jump press it twice to double jump<br>
        '1','2' to equip wieldable items if u have them purchased thas it ok uw`

    buyGlihIncrease.textContent = `buy glih upgrade $${numberAbbreviate(buyGlihIncreasePrice)} glihs`
    buyJackpotChance.textContent = `buy jackpot chance on click $${numberAbbreviate(buyJackpotChancePrice)} glihs`
    buyClickBooster.textContent = `buy upgrade passive click booster $${numberAbbreviate(buyClickBoosterPrice)} glihs`
    for (let button of buyShopButton) {
        button.textContent = "Buy"
    }
    document.querySelectorAll("[data-translate]").forEach(element=>{
        element.textContent = translations[element.dataset.translate]
    })
}
let translations = {
    welcome: "Welcome to glihland here we have glihs",
    nameInput: "type your name:",
    glihButton: "click for glih",
    tip: "u can click with mouse OR spacebar (when u have the button focused)",
    toggleMusic: "Pause/unpause music",
    colorForm: "Type the website's color(ex: yellow ou lightblue):",
    colorMessage: "Type 'original' to change the color to the website's original",
    glihDescription: "buy a glih",
    paletteDescription: "Gives you the ability to change hte website's main color",
    elytraDescription: "Gives you the ability to fly when holding jump",
    maceDescription: "Deals more damage the more you fall before the hit",
    infoHeader: "temporary info",
}
let buttonTranslate = document.querySelector("#buttonTranslate")
buttonTranslate.addEventListener("click",()=>{
    translateAll()
    buttonTranslate.remove()
})
//mobile
let isMobile = window.matchMedia("(pointer: coarse)").matches
let temporaryInfo = document.querySelector("#temporaryInfo")
if (isMobile) {
    if (!translationEN) {
        temporaryInfo.innerHTML = `pressione botao de pulo 2 vezes pra double pular, os dois botoes nos cantos sao de inventario<br>
                                pra trocar entre items se vc tiver eles comprados so issso ok uw`
    } else {
        temporaryInfo.innerHTML = `press jump button twice to jump, the two buttons on the corners<br>
                                are for switching through items if u have them purchased thas it ok uw`
    }
    tip.hidden = true
}

//musica
let playlist = [
    "musica/WhenTheMoon'sReachingOutStars-Reload-.mp3",
    "musica/ColorYourNight.mp3",
    "musica/巌戸台分寮 -Reload-.mp3",
    "musica/Heartbeat, Heartbreak.mp3",
    "musica/Graze the Roof (In-Game).mp3"
]

let body = document.querySelector("body")
let buttons = document.querySelectorAll("button")
function numberAbbreviate(number) {
    if (number < 1000) {
        return number.toFixed(0)
    }
    if (number >= 1_000 && number < 1_000_000) {
        return (number/1000).toFixed(1).replace(".0","") + "k"
    }
    if (number >= 1_000_000 && number < 1_000_000_000) {
        return (number/1_000_000).toFixed(1).replace(".0","") + "m"
    }
    if (number >= 1_000_000_000 && number < 1_000_000_000_000) {
        return (number/1_000_000_000).toFixed(1).replace(".0","") + "b"
    }
    if (number >= 1_000_000_000_000 && number < 1_000_000_000_000_000) {
        return (number/1_000_000_000_000).toFixed(1).replace(".0","") + "t"
    }
    if (number >= 1_000_000_000_000_000 && number < 1_000_000_000_000_000_000) {
        return (number/1_000_000_000_000_000).toFixed(1).replace(".0","") + "q"
    }
    if (number >= 1_000_000_000_000_000_000 && number < 1_000_000_000_000_000_000_000) {
        return (number/1_000_000_000_000_000_000).toFixed(1).replace(".0","") + "qi"
    }
    if (number >= 1_000_000_000_000_000_000_000 && number < 1_000_000_000_000_000_000_000_000) {
        return (number/1_000_000_000_000_000_000_000).toFixed(1).replace(".0","") + "s"
    }
    if (number >= 1_000_000_000_000_000_000_000_000 && number < 1_000_000_000_000_000_000_000_000_000) {
        return (number/1_000_000_000_000_000_000_000_000).toFixed(1).replace(".0","") + "sp"
    }
    if (number >= 1_000_000_000_000_000_000_000_000_000 && number < 1_000_000_000_000_000_000_000_000_000_000) {
        return (number/1_000_000_000_000_000_000_000_000_000).toFixed(1).replace(".0","") + "o"
    }
    if (number >= 1_000_000_000_000_000_000_000_000_000_000 && number < 1_000_000_000_000_000_000_000_000_000_000_000) {
        return (number/1_000_000_000_000_000_000_000_000_000_000).toFixed(1).replace(".0","") + "n"
    }
    if (number >= 1_000_000_000_000_000_000_000_000_000_000_000 && number < 1_000_000_000_000_000_000_000_000_000_000_000_000) {
        return (number/1_000_000_000_000_000_000_000_000_000_000_000).toFixed(1).replace(".0","") + "d"
    }
    return number
}
let glihVisualChange = function glihVisualChange() {
    glihBalanceMessage.textContent = `glihs: ${numberAbbreviate(glihBalance)}`
    if (glihNumber > 1 || glihNumber < 1) {
        if (!translationEN) {
            glihMessage.textContent = `${userName} ganhou ${glihNumber.toFixed(0)} glihs!`
        } else {
            glihMessage.textContent = `${userName} gained ${glihNumber.toFixed(0)} glihs!`
        }
    }
    else {
        if (!translationEN) {
            glihMessage.textContent = `${userName} ganhou ${glihNumber} glih!`
        } else {
            glihMessage.textContent = `${userName} gained ${glihNumber} glih!`
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
        glih.src = "images/mavih.webp"
        glihItem.innerHTML = `<img src="images/mavih.webp">mavih`
        glihDescription.textContent = "compre uma mavih"

    //verity
    } else if (userName.toLowerCase().startsWith("verity")) {
        if (!translationEN) {
            userNameMessage.textContent = "nao come meu cerebros :( eu mudei as musicas de fundo pra voce"
        } else {
            userNameMessage.textContent = "dont eat my brainz :( I changed the background music songs for u"
        }
        playlist = [
            "musica/It's me, It's Verity.mp3",
            "musica/Master of Humanity.mp3",
            "musica/I Miss The Quiet.mp3"
        ]
        verityRemove = (event)=>{
            event.preventDefault()
            if (!userName.toLowerCase().startsWith("verity")) {
                playlist = [
                    "musica/WhenTheMoon'sReachingOutStars-Reload-.mp3",
                    "musica/ColorYourNight.mp3",
                    "musica/巌戸台分寮 -Reload-.mp3",
                    "musica/Heartbeat, Heartbreak.mp3",
                    "musica/Graze the Roof (In-Game).mp3"
                ]
                formGlihName.removeEventListener("submit",verityRemove)
            }
        }
        formGlihName.addEventListener("submit",verityRemove)
    
    //zurted
    } else if (userName.toLowerCase().startsWith("zurt")) {
        userNameMessage.textContent = `oh my god its zurted the father of tariok the brother of cala slayer of the rat chamber finale inventor of the river`
        translateAll()
        glihVisualChange = function glihVisualChange() {
            glihBalanceMessage.textContent = `zurts: ${numberAbbreviate(glihBalance)}`
            if (glihNumber > 1 || glihNumber < 1) {
                if (!translationEN) {
                glihMessage.textContent = `${userName} ganhou ${glihNumber.toFixed(0)} zurts!`
                } else {
                    glihMessage.textContent = `${userName} gained ${glihNumber.toFixed(0)} zurts!`
                }
            }
            else {
                if (!translationEN) {
                glihMessage.textContent = `${userName} ganhou ${glihNumber} zurt!`
                } else {
                    glihMessage.textContent = `${userName} gained ${glihNumber} zurt!`
                }
            }
            
        }
        glihButton.textContent = clickForGlih
        glihVisualChange()
        clickForGlih = "click for zurt"
        glihButton.textContent = clickForGlih
        zurtedRemove = (event)=>{
            event.preventDefault()
            if (!userName.toLowerCase().startsWith("zurt")) {
                glihVisualChange = function glihVisualChange() {
                    glihBalanceMessage.textContent = `glihs: ${numberAbbreviate(glihBalance)}`
                    if (glihNumber > 1 || glihNumber < 1) {
                        if (!translationEN) {
                            glihMessage.textContent = `${userName} ganhou ${glihNumber.toFixed(0)} glihs!`
                        } else {
                            glihMessage.textContent = `${userName} gained ${glihNumber.toFixed(0)} glihs!`
                        }
                    }
                    else {
                        if (!translationEN) {
                            glihMessage.textContent = `${userName} ganhou ${glihNumber} glih!`
                        } else {
                            glihMessage.textContent = `${userName} gained ${glihNumber} glih!`
                        }
                    }
                }            
                formGlihName.removeEventListener("submit",zurtedRemove)
            }
        }
        formGlihName.addEventListener("submit",zurtedRemove)

    //paximos
    } else if (userName.toLowerCase().startsWith("pax")) {
        userNameMessage.textContent = `Welcome, Paximoselle the Androgynous Beast.`
        translateAll()
        glihVisualChange = function glihVisualChange() {
            glihBalanceMessage.textContent = `paxs: ${numberAbbreviate(glihBalance)}`
            glihMessage.textContent = `${userName} gained ${glihNumber.toFixed(0)} pax!`
        }
        clickForGlih = "click for pax"
        glihButton.textContent = clickForGlih
        paximosRemove = (event)=>{
            event.preventDefault()
            if (!userName.toLowerCase().startsWith("pax")) {
                glihVisualChange = function glihVisualChange() {
                    glihBalanceMessage.textContent = `glihs: ${numberAbbreviate(glihBalance)}`
                    if (glihNumber > 1 || glihNumber < 1) {
                        if (!translationEN) {
                            glihMessage.textContent = `${userName} ganhou ${glihNumber.toFixed(0)} glihs!`
                        } else {
                            glihMessage.textContent = `${userName} gained ${glihNumber.toFixed(0)} glihs!`
                        }
                    }
                    else {
                        if (!translationEN) {
                            glihMessage.textContent = `${userName} ganhou ${glihNumber} glih!`
                        } else {
                            glihMessage.textContent = `${userName} gained ${glihNumber} glih!`
                        }
                    }
                }            
                formGlihName.removeEventListener("submit",paximosRemove)
            }
        }
        formGlihName.addEventListener("submit",paximosRemove)
    } else {
        if (!translationEN) {
            userNameMessage.textContent = `oi ${userName}!!!!!!!!!!!!!!!!!!!`
        } else {
            userNameMessage.textContent = `hi ${userName}!!!!!!!!!!!!!!!!!!!`
        }
    }
    nameInput.value = ""
})
// botao principal de aumentar glihs & balança
clickForGlih = "clique para glih"
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
let glihIncrease = 1
glihBalanceMessage.hidden = true
glihButton.addEventListener("keydown", (event)=> {
    if (event.key === "Enter") {
        event.preventDefault()
    }
})
glihButton.addEventListener("click", () => {
    if (glihNumber === 0) {
        glih67button.hidden = false
        //musica
        const backgroundMusic = new Audio()
        currentSong = randomSong(playlist,playedSongs)
        playedSongs.push(currentSong)
        backgroundMusic.src = playlist[currentSong]
        backgroundMusic.volume = 0.15
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
        if (currentClickBooster === 0) {
            glihNumber += (glihIncrease + currentClickBooster) * 1000
            glihBalance += (glihIncrease + currentClickBooster) * 1000
            new Audio("sfx/Totem_of_Undying.ogg").play()
            body.classList.add("jackpotEffect")
            glihMessage.classList.add("jackpotEffect")
            glihBalanceMessage.classList.add("jackpotEffect")
            glihButton.classList.add("jackpotEffect")
            glihButton.textContent = "JACKPOT!!!"
            glihVisualChange = function glihVisualChange() {
                glihBalanceMessage.textContent = `glihs: ${numberAbbreviate(glihBalance)}`    
                glihMessage.textContent = `+${numberAbbreviate(glihIncrease * 1000)} glihs!`
            }
            setTimeout(()=>{
                body.classList.remove("jackpotEffect")
                glihMessage.classList.remove("jackpotEffect")
                glihBalanceMessage.classList.remove("jackpotEffect")
                glihButton.classList.remove("jackpotEffect")
            },1)
            setTimeout(()=>{
                glihButton.textContent = clickForGlih
                glihVisualChange = function glihVisualChange() {
                    glihBalanceMessage.textContent = `glihs: ${numberAbbreviate(glihBalance)}`
                    if (glihNumber > 1 || glihNumber < 1) {
                        if (!translationEN) {
                            glihMessage.textContent = `${userName} ganhou ${glihNumber.toFixed(0)} glihs!`
                        } else {
                            glihMessage.textContent = `${userName} gained ${glihNumber.toFixed(0)} glihs!`
                        }
                    }
                    else {
                        if (!translationEN) {
                            glihMessage.textContent = `${userName} ganhou ${glihNumber} glih!`
                        } else {
                            glihMessage.textContent = `${userName} gained ${glihNumber} glih!`
                        }
                    }
                }
                glihVisualChange()
            },2000)
        // jackpot + boost
        } else {
            glihButton.disabled = true
            glihNumber += (glihIncrease + currentClickBooster) * 1000
            glihBalance += (glihIncrease + currentClickBooster) * 1000
            const totemOfUndyingSFX = new Audio("sfx/Totem_of_Undying.ogg")
            totemOfUndyingSFX.preservesPitch = false
            totemOfUndyingSFX.playbackRate = 0.93
            totemOfUndyingSFX.play()
            body.classList.add("jackpotBoostEffect")
            body.classList.add("jackpotBoostAnimation")
            glihMessage.classList.add("jackpotBoostEffect")
            glihBalanceMessage.classList.add("jackpotBoostEffect")
            glihButton.classList.add("jackpotBoostEffect")
            glihButton.textContent = "JACKPOT + BOOST!!!!!!"
            glihVisualChange = function glihVisualChange() {
                glihBalanceMessage.textContent = `glihs: ${numberAbbreviate(glihBalance)}`    
                glihMessage.textContent = `+${numberAbbreviate((glihIncrease + currentClickBooster) * 1000)} GLIHS!!!`
            }
            setTimeout(()=>{
                glihMessage.classList.remove("jackpotBoostEffect")
                glihBalanceMessage.classList.remove("jackpotBoostEffect")
                glihButton.classList.remove("jackpotBoostEffect")
            },4000)
            setTimeout(() => {
                body.classList.remove("jackpotBoostEffect")
            }, 5000);
            setTimeout(()=>{
                body.classList.remove("jackpotBoostAnimation")
            },8000)
            setTimeout(()=>{
                glihButton.textContent = clickForGlih
                glihVisualChange = function glihVisualChange() {
                    glihButton.disabled = false
                    glihBalanceMessage.textContent = `glihs: ${numberAbbreviate(glihBalance)}`
                    if (glihNumber > 1 || glihNumber < 1) {
                        if (!translationEN) {
                            glihMessage.textContent = `${userName} ganhou ${glihNumber.toFixed(0)} glihs!`
                        } else {
                            glihMessage.textContent = `${userName} gained ${glihNumber.toFixed(0)} glihs!`
                        }
                    }
                    else {
                        if (!translationEN) {
                            glihMessage.textContent = `${userName} ganhou ${glihNumber} glih!`
                        } else {
                            glihMessage.textContent = `${userName} gained ${glihNumber} glih!`
                        }
                    }
                }
                glihVisualChange()
            },2000)
        }
    } else {
        glihNumber += glihIncrease + currentClickBooster
        glihBalance += glihIncrease + currentClickBooster    
    }
    glihVisualChange()
    if (currentClickBooster > 0) {
        currentClickBooster = 0
        if (!translationEN) {
            document.querySelector("#buyClickBoosterMessage").innerHTML = 
            `A cada 5 segundos, o proximo clique da +(10 x (10 x nivel)) glihs. Pode acumular e adiciona antes de jackpot<br>
            Nivel atual: +${numberAbbreviate(clickBooster)} por boost.<br>
            O proximo clique dara: +${numberAbbreviate(currentClickBooster)} glihs`
        } else {
            document.querySelector("#buyClickBoosterMessage").innerHTML = 
            `Each 5 seconds, the next click gives +(10 x (10 x level)) glihs. Can stack and adds before jackpot<br>
            Current level: +${numberAbbreviate(clickBooster)} per boost.<br>
            The next click will give: +${numberAbbreviate(currentClickBooster)} glihs`
        }
    }
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
        buyGlihIncreasePrice = buyGlihIncreasePrice * 2
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
//botao clickboostser
let buyClickBooster = document.querySelector("#buyClickBooster")
let buyClickBoosterMessage = document.querySelector("#buyClickBoosterMessage")
let clickBooster = 0
let currentClickBooster = 0
let buyClickBoosterPrice = 134
buyClickBooster.textContent = `comprar upgrade click booster passivo $${buyClickBoosterPrice} glihs`
buyClickBooster.addEventListener("click",()=>{
    if (glihBalance >= buyClickBoosterPrice) {
        glihBalance -= buyClickBoosterPrice
        glihVisualChange()
        buyClickBoosterPrice *= 8
        if (clickBooster === 0) {
            clickBooster += 10
        } else {
            clickBooster *= 10
        }
        if (!translationEN) {
            buyClickBooster.textContent = `comprar upgrade click booster passivo $${numberAbbreviate(buyClickBoosterPrice)} glihs`
        } else {
            buyClickBooster.textContent = `buy upgrade passive click booster $${numberAbbreviate(buyClickBoosterPrice)} glihs`
        }
        if (!translationEN) {
            document.querySelector("#buyClickBoosterMessage").innerHTML = 
            `A cada 5 segundos, o proximo clique da +(10 x (10 x nivel)) glihs. Pode acumular e adiciona antes de jackpot<br>
            Nivel atual: +${numberAbbreviate(clickBooster)} por boost.<br>
            O proximo clique dara: +${numberAbbreviate(currentClickBooster)} glihs`
        } else {
            document.querySelector("#buyClickBoosterMessage").innerHTML = 
            `Each 5 seconds, the next click gives +(10 x (10 x level)) glihs. Can stack and adds before jackpot<br>
            Current level: +${numberAbbreviate(clickBooster)} per boost.<br>
            The next click will give: +${numberAbbreviate(currentClickBooster)} glihs`
        }
    }
})
setInterval(()=>{
    currentClickBooster += clickBooster
    if (!translationEN) {
            document.querySelector("#buyClickBoosterMessage").innerHTML = 
            `A cada 5 segundos, o proximo clique da +(10 x (10 x nivel)) glihs. Pode acumular e adiciona antes de jackpot<br>
            Nivel atual: +${numberAbbreviate(clickBooster)} por boost.<br>
            O proximo clique dara: +${numberAbbreviate(currentClickBooster)} glihs`
        } else {
            document.querySelector("#buyClickBoosterMessage").innerHTML = 
            `Each 5 seconds, the next click gives +(10 x (10 x level)) glihs. Can stack and adds before jackpot<br>
            Current level: +${numberAbbreviate(clickBooster)} per boost.<br>
            The next click will give: +${numberAbbreviate(currentClickBooster)} glihs`
        }
},5000)

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

//loja
function inventoryCheck() {
    if (inventory.Palette) {
        colorForm.hidden = false
    }
    if (inventory.glih || inventory.mavih) {
        glih.hidden = false
        requestAnimationFrame(moveGlih)
    }
    if (inventory.Mace) {
        mace = true
        Mace.hidden = false
        maceIcon.hidden = false
        if (inventory.Elytra) {
            inventory.Elytra = false
            Elytra.hidden = true
        }
    }
    if (inventory.Elytra) {
        elytra = true
        Elytra.hidden = false
        elytraIcon.hidden = false
        if (inventory.Mace) {
            inventory.Mace = false
            Mace.hidden = true
        }
    }
}
let buyShopButton = document.querySelectorAll(".buyShopButton")
let inventory = {}
for (let button of buyShopButton) {
    button.addEventListener("click",(event)=>{
        itemPrice = event.target.closest("tr").querySelector("[data-price]").dataset.price
        if (glihBalance >= itemPrice) {
            glihBalance -= itemPrice
            glihVisualChange()
            item = event.target.closest("tr").querySelector("td").textContent
            inventory[item] = true
            inventoryCheck()
            button.remove()
        }
    })
}
let colorForm = document.querySelector("#colorForm")
let colorInput = document.querySelector("#colorInput")
let originalGradient = "linear-gradient(to right, #e4c1ff, #ffffff)"
colorForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    chosenColor = colorInput.value.trim().toLowerCase()
    colorGradient = `linear-gradient(to right, hsl(from ${chosenColor} h s calc(l * 1.8)), #fff)`
    if (colorInput.value != "original") {
        document.documentElement.style.setProperty("--mainColor",chosenColor)
        document.documentElement.style.setProperty("--backgroundGradient",colorGradient)
        document.documentElement.style.setProperty("--buttonBackgroundColor",`hsl(from ${chosenColor} h s calc(l * 1.2))`)
        document.documentElement.style.setProperty("--buttonBorderColor",`hsl(from ${chosenColor} h s calc(l * 0.4))`)
    } else{
        document.documentElement.style.setProperty("--mainColor","#af4aff")
        document.documentElement.style.setProperty("--backgroundGradient",originalGradient)
        document.documentElement.style.setProperty("--buttonBackgroundColor","#ff85e4")
        document.documentElement.style.setProperty("--buttonBorderColor","#632497")
    }
    colorInput.value = ""
})
let glih = document.querySelector("#glih")
let glihX = 0
let glihY = 0
let glihXspeed = 3
let glihYspeed = 3
let screenWidth = window.innerWidth
let screenHeight = window.innerHeight
function moveGlih() {
    glihX += glihXspeed
    glihY += glihYspeed
    screenWidth = window.innerWidth
    screenHeight = window.innerHeight
    if (glihX >= screenWidth - glih.offsetWidth) {
        glihX = screenWidth - glih.offsetWidth
        glihXspeed = -Math.abs(glihXspeed)
    }
    if (glihY >= screenHeight - glih.offsetHeight) {
        glihY = screenHeight - glih.offsetHeight
        glihYspeed = -Math.abs(glihYspeed)
    }
    if (glihX < 0) {
        glihX = 0
        glihXspeed = Math.abs(glihXspeed)
    }
    if (glihY < 0) {
        glihY = 0
        glihYspeed = Math.abs(glihYspeed)
    }
    document.documentElement.style.setProperty("--glihX", `${glihX}px`)
    document.documentElement.style.setProperty("--glihY", `${glihY}px`)
    requestAnimationFrame(moveGlih)
}
let glihItem = document.querySelector("#glihItem")
let glihItemImg = document.querySelector("#glihItemImg")
let glihDescription = document.querySelector("#glihDescription")

function otherItemsFalse() {
    for (let i in inventory) {
        if (i != currentItem) {
            inventory[i] = false
            if (currentItem != "Mace") {
                Mace.hidden = true
            }
            if (currentItem != "Elytra") {
                Elytra.hidden = true
            }
        }
    }
}
document.addEventListener("keydown",(event)=>{
    if (event.key === "1" && mace) {
        Mace.hidden = false
        inventory.Mace = true
        currentItem = "Mace"
        otherItemsFalse()
    } else if (event.key === "2" && elytra) {
        Elytra.hidden = false
        inventory.Elytra = true
        currentItem = "Elytra"
        otherItemsFalse()
    }
})
let maceMobile = document.querySelector("#maceMobile")
maceMobile.addEventListener("touchstart",()=>{
    if (mace) {
        Mace.hidden = false
        inventory.Mace = true
        currentItem = "Mace"
        otherItemsFalse()
    }
})
let elytraMobile = document.querySelector("#elytraMobile")
elytraMobile.addEventListener("touchstart",()=>{
    if (elytra) {
        Elytra.hidden = false
        inventory.Elytra = true
        currentItem = "Elytra"
        otherItemsFalse()
    }
})

let Mace = document.querySelector("#Mace")
let mace = false
let distanceFallen = 0
let maceIcon = document.querySelector("#maceIcon")

let Elytra = document.querySelector("#Elytra")
let elytra = false
let elytraIcon = document.querySelector("#elytraIcon")

//glihouse
let glihouse = document.querySelector("#glihouse")
let player = document.querySelector("#player")
let glihSprite = document.querySelector("#glihSprite")
let playerX = 0
let playerY = 0
let playerXspeed = 300
let playerYspeed = 500
let playerIsFacingRight = true
let playerIsFacingLeft = false
let gravity = 1800
let playerDamage = 1
let playerJump = false
let keysHeld = {}
let enemy = document.querySelector("#enemy")
let attack = document.querySelector("#attack")
attack.style.opacity = "0"
let enemyHealthBar = document.querySelector("#enemyHealthBar")
let enemyHealth = 1000
enemyHealthBar.textContent = enemyHealth
let attackHitbox = attack.getBoundingClientRect()
let enemyHitbox = enemy.getBoundingClientRect()
let collision =
    attackHitbox.left < enemyHitbox.right &&
    attackHitbox.right > enemyHitbox.left &&
    attackHitbox.top < enemyHitbox.bottom &&
    attackHitbox.bottom > enemyHitbox.top;
let leftButton = document.querySelector("#leftButton")
let rightButton = document.querySelector("#rightButton")
let attackButton = document.querySelector("#attackButton")
let jumpButton = document.querySelector("#jumpButton")
let glih67button = document.querySelector("#glih67button")
let glih67sfx = new Audio("sfx/glitch67.ogg")
document.addEventListener("keydown",(event)=>{
    if (event.key === "d") {
        keysHeld.keyD = true
        playerIsFacingRight = true
        playerIsFacingLeft = false
    }
    if (event.key === "a") {
        keysHeld.keyA = true
        playerIsFacingLeft = true
        playerIsFacingRight = false
    }
    if (event.key === " ") {
        keysHeld.keySpace = true
    }
    if (event.key === "6" || event.key === "7") {
        glih67sfx = new Audio("sfx/glitch67.ogg")
        glih67sfx.currentTime = 0.6
        glih67sfx.play()
    }
})
document.addEventListener("keyup",(event)=>{
    if (event.key === "d") {
        keysHeld.keyD = false
    }
    if (event.key === "a") {
        keysHeld.keyA = false
    }
    if (event.key === " ") {
        keysHeld.keySpace = false
        playerDoubleJump = true
    }
})
leftButton.addEventListener("touchstart",()=>{
    keysHeld.keyA = true
    playerIsFacingLeft = true
    playerIsFacingRight = false
})
rightButton.addEventListener("touchstart",()=>{
    keysHeld.keyD = true
    playerIsFacingRight = true
    playerIsFacingLeft = false
})
attackButton.addEventListener("touchstart",()=>{
    if (attack.style.opacity === "0") {
        attack.style.opacity = "0.5"
        if (collision && !inventory.Mace) {
            enemyHealthDecrease(playerDamage)
        }
        if (collision && inventory.Mace && distanceFallen < 20) {
            enemyHealthDecrease(playerDamage + 7)
        } else if (collision && inventory.Mace && playerY < 0 && distanceFallen >= 20 && 1+1 === 2) {
            enemyHealthDecrease(playerDamage + 27)
            playerYspeed = 100
            if (distanceFallen < 27) {
                randomSFX = Math.random() * 100
                if (randomSFX <= 25)  {
                    maceSFX = new Audio("sfx/Mace_smash_ground1.ogg")
                } else if (randomSFX <= 50)  {
                    maceSFX = new Audio("sfx/Mace_smash_ground2.ogg")
                } else if (randomSFX <= 75)  {
                    maceSFX = new Audio("sfx/Mace_smash_ground3.ogg")
                } else if (randomSFX <= 100)  {
                    maceSFX = new Audio("sfx/Mace_smash_ground4.ogg")
                }
            } else {
                maceSFX = new Audio("sfx/Mace_smash_ground_heavy.ogg")
            }
            maceSFX.play()
        }
        setTimeout(()=>{
            attack.style.opacity = "0"
        },350)
    }
})
jumpButton.addEventListener("touchstart",()=>{
    keysHeld.keySpace = true
})
leftButton.addEventListener("touchend",()=>{
    keysHeld.keyA = false
})
rightButton.addEventListener("touchend",()=>{
    keysHeld.keyD = false
})
jumpButton.addEventListener("touchend",()=>{
    keysHeld.keySpace = false
    playerDoubleJump = true
})
glih67button.addEventListener("touchstart",()=>{
    glih67sfx = new Audio("sfx/glitch67.ogg")
        glih67sfx.currentTime = 0.6
        glih67sfx.play()
})
let maceSFX = new Audio()
let damageDealtMessage = document.querySelector("#damageDealtMessage")
let damageDealt = 0
damageDealtMessage.textContent = damageDealt
function enemyHealthDecrease(playerDamage) {
    enemyHealth -= playerDamage
    enemyHealthBar.textContent = Math.round(enemyHealth)
    damageDealt = playerDamage
    damageDealtMessage.textContent = Math.round(damageDealt)
    if (enemyHealth <= 0) {
        enemyHealth = 1000
        enemyHealthBar.textContent = Math.round(enemyHealth)
    }
}
document.addEventListener("keydown",(event)=>{
    if (event.key === "e" && attack.style.opacity === "0") {
        attack.style.opacity = "0.5"
        if (collision && !inventory.Mace) {
            enemyHealthDecrease(playerDamage)
        }
        if (collision && inventory.Mace && distanceFallen < 20) {
            enemyHealthDecrease(playerDamage + 7)
        } else if (collision && inventory.Mace && playerY < 0 && distanceFallen >= 20 && playerYspeed < 0 && 1+1 === 2) {
            console.log("Distance fallen: ",distanceFallen)
            enemyHealthDecrease(playerDamage - 5 + distanceFallen ** 1.25)
            playerYspeed = 100
            if (distanceFallen < 27) {
                randomSFX = Math.random() * 100
                if (randomSFX <= 25)  {
                    maceSFX = new Audio("sfx/Mace_smash_ground1.ogg")
                } else if (randomSFX <= 50)  {
                    maceSFX = new Audio("sfx/Mace_smash_ground2.ogg")
                } else if (randomSFX <= 75)  {
                    maceSFX = new Audio("sfx/Mace_smash_ground3.ogg")
                } else if (randomSFX <= 100)  {
                    maceSFX = new Audio("sfx/Mace_smash_ground4.ogg")
                }
            } else {
                maceSFX = new Audio("sfx/Mace_smash_ground_heavy.ogg")
            }
            maceSFX.play()
            distanceFallen = 0
        }
        setTimeout(()=>{
            attack.style.opacity = "0"
        },350)
    }
})
let lastFrame = 0
let playerDoubleJump = false
let playerUsedDoubleJump = false
function playerMovement(timestamp) {
    let deltaTime = (timestamp - lastFrame) / 1000
    lastFrame = timestamp
    let glihouseWidth = glihouse.offsetWidth
    let glihouseHeight = glihouse.offsetHeight

    //movimento pra direita
    if (keysHeld.keyD) {
        playerXspeed = Math.abs(playerXspeed)
        playerX += playerXspeed * deltaTime
    }
    //movimento pra esquerda
    if (keysHeld.keyA) {
        playerXspeed = -Math.abs(playerXspeed)
        playerX += playerXspeed * deltaTime
    }
    if (playerX < 0) {
        playerX = 0
    }
    if (playerX > glihouseWidth - player.offsetWidth) {
        playerX = glihouseWidth - player.offsetWidth
    }
    //pulo
    if (keysHeld.keySpace && playerY === 0) {
        playerJump = true
    }
    if (playerJump && !inventory.Elytra) {
        playerY += -playerYspeed * deltaTime
        playerYspeed -= gravity * deltaTime
        if (playerYspeed < 0) {
            distanceFallen++
        }
        if (playerYspeed > -30 && playerYspeed < 30) {
            distanceFallen = 0
        }
    } else if (playerJump && inventory.Elytra) {
        if (keysHeld.keySpace) {
            playerY += -playerYspeed * deltaTime
        } else {
            playerY += -playerYspeed * deltaTime
            playerYspeed -= gravity * deltaTime
            playerUsedDoubleJump = false
        }
        if (playerYspeed < 0) {
            distanceFallen++
        }
        if (playerYspeed > -30 && playerYspeed < 30) {
            distanceFallen = 0
        }
    }
    if (keysHeld.keySpace && playerDoubleJump && !playerUsedDoubleJump) {
        playerYspeed = 500
        playerDoubleJump = false
        playerUsedDoubleJump = true
    }
    if (playerY > 0) {
        playerJump = false
        playerDoubleJump = false
        playerUsedDoubleJump = false
        playerY = 0
        playerYspeed = 500
        if (inventory.Mace) {
            distanceFallen = 0
        }
    }
    if (Math.abs(playerY) > glihouseHeight - player.offsetHeight) {
        playerY = -(glihouseHeight - player.offsetHeight)
    }
    //hitbox
    if (playerIsFacingLeft) {
            attack.style.left = "-100%"
            glihSprite.style.transform = "scaleX(-1)"
            Mace.style.transform = "scaleX(-1)"
            Mace.style.left = "-35%"
        } else {
            attack.style.left = "100%"
            glihSprite.style.transform = "scaleX(1)"
            Mace.style.transform = "scaleX(1)"
            Mace.style.left = "65%"
        }
    player.style.transform = `translate(${playerX}px,${playerY}px)`

    attackHitbox = attack.getBoundingClientRect()
    enemyHitbox = enemy.getBoundingClientRect()
    collision =
    attackHitbox.left < enemyHitbox.right &&
    attackHitbox.right > enemyHitbox.left &&
    attackHitbox.top < enemyHitbox.bottom &&
    attackHitbox.bottom > enemyHitbox.top;

    requestAnimationFrame(playerMovement)
}
requestAnimationFrame(playerMovement)
let platform1Support = document.querySelector("#platform1Support")
let platform1SupportCtx = platform1Support.getContext("2d")
platform1SupportCtx.beginPath()
platform1SupportCtx.strokeStyle = "black"
platform1SupportCtx.lineWidth = 3.5
platform1SupportCtx.moveTo(0,50)
platform1SupportCtx.lineTo(825,-150)
platform1SupportCtx.stroke()

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
    if (adminInput.value === "1987") {
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
// botao de upgrade passivo (descartado)

/*
traducao
document.querySelector("#glihPassiveIncreaseMessage").innerHTML =
`Increases your glih balance by 2.5% per upgrade each second<br>
Current level: ${(glihPassiveIncrease * 100).toFixed(1)}% glihs per second`

buyGlihPassiveIncrease.textContent = `buy glih passive upgrade $${numberAbbreviate(buyGlihPassiveIncreasePrice)} glihs`

configuracao do botao
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
*/
