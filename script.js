

const menu = document.getElementById('menu')

const menuBtn = document.getElementById("menuBtn")

const modal = document.getElementById("modal")

const modalBg = document.getElementById("modalBg")

const mainBody = document.getElementById("mainBody")

const radio1 = document.getElementById("radio1")
const radio2 = document.getElementById("radio2")
const radio3 = document.getElementById("radio3")

const lowerBox2 = document.getElementById("lowerBox2")
const lowerBox3 = document.getElementById("lowerBox3")

const boxCard1 = document.getElementById("card1")
const boxCard2 = document.getElementById("card2")
const boxCard3 = document.getElementById("card3")

const bambooLeft = document.getElementById("bambooLeft")
const blackLeft = document.getElementById("blackLeft")

const mainBambooLeft = document.getElementById("mainBambooLeft")
const mainBlackLeft = document.getElementById("mainBlackLeft")

const totalBackers = document.getElementById("totalBackers")

const bambooPledge = document.getElementById("bambooPledge")
const blackPledge = document.getElementById("blackPledge")

const totalPledge = document.getElementById("totalPledge")

const bookmark = document.getElementById("bookmark")

let bambooNum = 101
let blackNum = 64
let mainBambooNum = 101
let mainBlackNum = 64

let backers = 5007

let totalPledgeNum = 89914

document.activeElement.blur()

const openMenu = () =>{
    menuBtn.classList.toggle('open')
    menu.classList.toggle('openMenu')
}

const closeModal = () =>{
    modalContainer.classList.remove('modalBg');
    mainBody.classList.remove("overflow-hidden")
}

const card1 = () =>{
    radio1.checked = true
    lowerBox2.classList.remove("selected")
    lowerBox3.classList.remove("selected")
    boxCard1.classList.add("cardSelected")
    boxCard2.classList.remove("cardSelected")
    boxCard3.classList.remove("cardSelected")
}

const card2 = () =>{
    radio2.checked = true
    lowerBox3.classList.remove("selected")
    lowerBox2.classList.add("selected")
    boxCard2.classList.add("cardSelected")
    boxCard3.classList.remove("cardSelected")
    boxCard1.classList.remove("cardSelected")
    
}

const pledgeBamboo = () =>{
    bambooNum--
    mainBambooLeft.innerHTML = bambooNum
    bambooLeft.textContent = bambooNum
    backers++
    totalBackers.textContent = backers
    let updatedTotal = totalPledgeNum + Number(bambooPledge.value)
    let newTotal = updatedTotal.toString().replace(/,/g, '')
    newTotal = newTotal.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    totalPledge.textContent = "$" + newTotal
    closeModal()
} 

const pledgeBlack = () =>{
    blackNum--
    mainBlackLeft.textContent = blackNum
    blackLeft.textContent = blackNum
    backers++
    totalBackers.textContent = backers

    // Putting commas every 3 digit number
    let updatedTotal = totalPledgeNum + Number(blackPledge.value)
    let newTotal = updatedTotal.toString().replace(/,/g, '')
    newTotal = newTotal.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    totalPledge.textContent = "$" + newTotal
    closeModal()
}

const card3 = () =>{
    radio3.checked = true
    lowerBox2.classList.remove("selected")
    lowerBox3.classList.add("selected")
    boxCard3.classList.add("cardSelected")
    boxCard2.classList.remove("cardSelected")
    boxCard1.classList.remove("cardSelected")
}

const modalTrigger = document.getElementById('modal-trigger');
const modalContainer = document.getElementById("modals")

modalTrigger.addEventListener('click', () => {
  modalContainer.classList.add('modalBg');
  mainBody.classList.add("overflow-hidden")
});

const bookmarked = () =>{
    const bookmarkText = document.getElementById("bookmarkText")
    if(bookmarkText.textContent === "Bookmark")
    {
        bookmarkText.textContent = "Bookmarked"
        bookmark.style.backgroundColor = "hsl(176, 50%, 47%)"
        bookmarkText.style.color = "hsl(176, 50%, 47%)"
    }
    else{
        bookmarkText.textContent = "Bookmark"
        bookmark.style.backgroundColor = "black"
        bookmarkText.style.color = "black"
    }

}





