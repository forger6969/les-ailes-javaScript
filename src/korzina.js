let container = document.querySelector(`.cards-wrapper`)
let zakazBox = document.querySelector(`.zakazBox`)

// localS dan korzinaga qoshlgan prod lar ni olish:
let selected = JSON.parse(localStorage.getItem('selectProducts'))

console.log(selected);


// localS dan olingan prod la ni DOM ga chiqarish funciasi
function render() {

    // DOM ga chiqarishdan oldin container ni tozalash
    container.innerHTML = ''

    // Agar korzina bosh bosa text chiqaris:
    if (selected.length === 0) {
        container.innerHTML = container.innerHTML = ` <p class="summ">Вы еще ничего не добавлили в корзину</p> `
        zakazBox.innerHTML = ''
        return
    }

    selected.forEach((p, index) => {

        let card = document.createElement(`div`)
        card.classList = `card`

        // price:75000 => 75 000 qilishga kere
        let price = p.price.toLocaleString('ru-RU')
        card.innerHTML = `
    
    
     <button data-index="${index}" class="otmenBtn"> 
     <svg class="trashSvg" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path class="trashSvg1" d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17" stroke="#FC004A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     </svg> </button>

     <img class="productImg" src="${p.imagee}" alt="productPhoto">
     <p class="productName">${p.names}</p>
     <p class="productPrice">${price} сум</p>
    `

        container.append(card)

    })

    let total = 0;

    selected.forEach(p => {
        total += p.price
    })

    // price:75000 => 75 000 qilishga kere
    let totalB = total.toLocaleString('ru-RU')

    zakazBox.innerHTML = `

    <p class="summ">Сумма вашего заказа: ${totalB} сум </p>
    <button class="zakazBtn">Заказать</button>

`
    let otmenBtn = document.querySelectorAll('.otmenBtn')
    // har udalit knopkasi uchun event qoshish
    otmenBtn.forEach(otmen => {

        otmen.addEventListener(`click`, () => {
            // btn ni data-index atrb da yozilgan indexni korzinadan ochirish (localS)
            let index = otmen.getAttribute('data-index')
            selected.splice(index, 1)
            localStorage.setItem('selectProducts', JSON.stringify(selected))
            // korzinani obnovit qilish
            render()
        })
    })

}

render()

let total = 0;

selected.forEach(p => {
    total += p.price
})

// dostavkani puli
let dostavka = Math.round(total / selected.length / 2)
let summTotal = total + dostavka

// price:75000 => 75 000 qilishga kere
let totalBB = summTotal.toLocaleString(`ru-RU`)

let zakazBtn = document.querySelector(`.zakazBtn`)
let podtBox = document.querySelector(`.podtverditBox`)

podtBox.innerHTML = `

<p class="summ">Стоимость доставки: ${dostavka.toLocaleString(`ru-RU`)} сум </p>
<p class="summ">Сумма вашего заказа: ${totalBB} сум </p>
 <div class="boxbox"><button class="zakazBtn2">Заказать</button>
 <button class="otmen">Отмена</button></div>
`

let otmen = document.querySelector(`.otmen`)

zakazBtn.addEventListener(`click`, () => {

    let container = document.querySelector(`.container`)

    podtBox.classList.add(`active`)
    container.classList.add(`active`)

})

// otmena knopkasi bosilsa tasdiqlash box ni yopish
otmen.addEventListener(`click`, () => {
    let container = document.querySelector(`.container`)

    podtBox.classList.remove(`active`)
    container.classList.remove(`active`)


})

let uspeshnoZakazBox = document.querySelector(`.uspeshnoZakaz`)
let zakazBtn2 = document.querySelector(`.zakazBtn2`)
let uspeshnoZakazContainer = document.querySelector(`.uspeshnoZakazContainer`)


// zakazlarni arrayini localS dan olish yoq bosa yengi array ochish
let zakaz = JSON.parse(localStorage.getItem(`zakaz`)) || []


zakazBtn2.addEventListener(`click`, () => {

    let numberrZakaz = `A${Math.floor(Math.random() * 1000)}`


    uspeshnoZakazContainer.innerHTML = `
     <div class="uspeshnoZakaz">
     <div class="badge">
            <svg class="check" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <!-- Красный круг (фон) -->
                <circle class="ring" cx="50" cy="50" r="45" />

                <!-- Галочка: path рисуется анимацией stroke-dashoffset -->
                <path class="tick" d="M30 53 L45 67 L75 37" fill="none" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </div>

        <p class="uspZakazText">Успешный заказ!</p>
        <p class="numberZakaz">№${numberrZakaz}</p>

    </div>
    `
    // zakaz uchun random number berish

    zakaz.unshift({
        numberr: numberrZakaz,
        products: [...selected],
        total: totalBB
    })
    localStorage.setItem(`zakaz`, JSON.stringify(zakaz))

    console.log(zakaz);

    selected = []
    localStorage.setItem('selectProducts', JSON.stringify(selected))
    render()


    setTimeout(() => {

        let container = document.querySelector(`.container`)


        uspeshnoZakazContainer.innerHTML = ``
        podtBox.classList.remove(`active`)
        container.classList.remove(`active`)

    }, 2500);

})

// Tugadi :)