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
let formGlihName = document.querySelector("#formGlihName")
let nameInput = document.querySelector("#nameInput")
let userName = ""
formGlihName.addEventListener("submit", (event) => {
    event.preventDefault()
    userName = nameInput.value
    const userNameMessage = document.querySelector("#userNameMessage")
    userNameMessage.textContent = `oi ${userName}!!!!!!!!!!!!!!!!!!!`
    nameInput.value = ""
})
let translationEN = false
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
    tip.hidden = true
    glihBalanceMessage.hidden = false
    glihNumber = glihNumber + glihIncrease
    glihBalance = glihBalance + glihIncrease
    glihBalanceMessage.textContent = `glihs: ${glihBalance}`
    if (glihNumber > 1) {
        if (!translationEN) {
        glihMessage.textContent = `${userName} ganhou ${glihNumber} glihs!`
        } else {
            glihMessage.textContent = `${userName} gained ${glihNumber} glihs!`
        }
    }
    else {
        if (!translationEN) {
        glihMessage.textContent = `${userName} ganhou ${glihNumber} glihs!`
        } else {
            glihMessage.textContent = `${userName} gained ${glihNumber} glihs!`
        }
    }
})
let buyGlih = document.querySelector("#buyGlih")
let buyGlihPrice = 67
if (!translationEN) {
    buyGlih.textContent = `comprar glih upgrade $${buyGlihPrice} glihs`
} else {
    buyGlih.textContent = `buy glih upgrade $${buyGlihPrice} glihs`
}
buyGlih.addEventListener("click",()=>{
    if (glihBalance >= buyGlihPrice) {
        glihBalance = glihBalance - buyGlihPrice
        glihBalanceMessage.textContent = `glihs: ${glihBalance}`
        buyGlihPrice = buyGlihPrice * 2
        if (!translationEN) {
            buyGlih.textContent = `comprar glih upgrade $${buyGlihPrice} glihs`
        } else {
            buyGlih.textContent = `buy glih upgrade $${buyGlihPrice} glihs`
        }
        glihIncrease++
    }
})
// traducao
translations = {
    welcome: "Welcome to glihland here we have glihs",
    nameInput: "type your name:",
    glihButton: "click for glih",
    tip: "if yoyr'e on pc you can click with mouse OR spacebar"
}
buttonTranslate = document.querySelector("#buttonTranslate")
buttonTranslate.addEventListener("click",()=>{
    translationEN = true
    document.querySelectorAll("[data-translate]").forEach(element=>{
        element.textContent = translations[element.dataset.translate]
    })
    buttonTranslate.remove()
})
