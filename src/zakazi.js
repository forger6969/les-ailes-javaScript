let zakaziBox = document.querySelector(`.zakaziBox`)

// localS dan zakazla arrayini olish
let zakaz = JSON.parse(localStorage.getItem(`zakaz`)) || []

console.log(zakaz);

// zakazlani DOM ga chiqazish
zakaz.forEach((zak, index) => {
    let time = new Date(zak.time)
    let timeForm = time.toLocaleString(`ru-RU`, {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    })


    let zakazDiv = document.createElement(`div`)
    zakazDiv.classList = 'zakaz'

    zakazDiv.innerHTML = `
                <p class="number">${zak.numberr}</p>

                <div><p class="price">${zak.total} сум</p>
                <p class="zakazDate">${timeForm}</p>
                </div>
                
                <button data-index="${index}" class="checkBtn">Подробнее..</button>
        `
    zakaziBox.append(zakazDiv)
})

let checkBtns = document.querySelectorAll(`.checkBtn`)
let cardsCont = document.querySelector(`.cards`)
let container = document.querySelector(`.container`)
let closeBtn = document.querySelector(`.closeBtn`)

// btn bosilganda zakaz qilingan productlani korsatsh
checkBtns.forEach(btn => {
    btn.addEventListener(`click`, () => {

        cardsCont.classList.add(`active`)
        container.style.filter = "blur(5px)"
        closeBtn.classList.add(`active`)

        let index = btn.getAttribute(`data-index`)

        console.log(index);

        let zakazIndex = zakaz[index].products

        cardsCont.innerHTML = ''

        zakazIndex.forEach(zakazz => {

            console.log(zakazIndex);

            let divv = document.createElement(`div`)
            divv.classList = `card`

            let pricee = zakazz.price.toLocaleString(`ru-RU`)

            divv.innerHTML = `
        
        <img src="${zakazz.imagee}" class="productImg" alt="ProductPhoto">
        <p class="productName">${zakazz.names}</p>
        <p class="productPrice">${pricee} сум</p>
        `

            cardsCont.append(divv)

        })
    })
})

closeBtn.addEventListener(`click`, () => {
    cardsCont.classList.remove(`active`)
    container.style.filter = "blur(0)"
    closeBtn.classList.remove(`active`)
})