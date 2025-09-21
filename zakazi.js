let zakaziBox = document.querySelector(`.zakaziBox`)

let zakaz = JSON.parse(localStorage.getItem(`zakaz`)) || []

console.log(zakaz);

zakaz.forEach((zak, index) => {

    zak.products.forEach(z => {

        console.log(zak.numberr);


    })

    let zakazDiv = document.createElement(`div`)
    zakazDiv.classList = 'zakaz'

    zakazDiv.innerHTML = `
                <p class="number">${zak.numberr}</p>

                <p class="price">${zak.total} so'm</p>

                <button data-index="${index}" class="checkBtn">Подробнее..</button>
        `
    zakaziBox.append(zakazDiv)
})

let checkBtns = document.querySelectorAll(`.checkBtn`)
let cardsCont = document.querySelector(`.cards`)
let container = document.querySelector(`.container`)
let closeBtn = document.querySelector(`.closeBtn`)

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
        
        ${zakazz.imagee}
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