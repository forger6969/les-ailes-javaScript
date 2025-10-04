// productlar:
let products = [
    {
        names: '4 Friends Лестер чиз',
        price: 138000,
        imagee: './cardsImages/4xFrinendsLester.webp',
        category: 'set'
    },
    {
        names: '4 Friends Классик бургер',
        price: 126000,
        imagee: './cardsImages/4xFriendsBurger.webp',
        category: `set`
    },
    {
        names: '4 Friends Лонгер чиз',
        price: 126000,
        imagee: `./cardsImages/4xFriendsLonger.webp`,
        category: `set`
    },
    {
        names: '4 Friends Хот-дог',
        price: 117000,
        imagee: './cardsImages/4xFriendsHotDog.webp',
        category: 'set'
    },
    {
        names: "Снек сет",
        price: 79000,
        imagee: "./cardsImages/cbidR6KU18nziNPphlU3jpa8OZi1nhaRKJkc93Cn.webp (1).png",
        category: 'set'
    },
    {
        names: 'Классик сет',
        price: 34000,
        imagee: './cardsImages/h7WO4cUYGJBiBUFs2qeUAYMhe5xYEXlSSLd1LWCa.webp (1).png',
        category: 'set'
    },
    {
        names: "Лестер сет",
        price: 53000,
        imagee: './cardsImages/9RplsrJissmFUdjyIDNnRsjr12vfFUc2RZwd7iOq.webp.png',
        category: 'set'
    },
    {
        names: "Скул сет",
        price: 36000,
        imagee: "./cardsImages/uJTcWJyBmtLq9abqzFXeiNgwFcItwFPGrllH9lGW.webp.png",
        category: 'set'
    },
    {
        names: 'Комбо сет',
        price: 20000,
        imagee: './cardsImages/komboSet.webp',
        category: 'set'
    },
    {
        names: `Do'stlar 1x`,
        price: 43000,
        imagee: `./cardsImages/iHB3KWEddHpod7sUIc82M8pI627orxHpTz18qknX.png (1).png`,
        category: 'chicken'
    },
    {
        names: `Do'stlar 2x`,
        price: 79000,
        imagee: `./cardsImages/U8v7GsJt5Nahm0L4Vna0u7HEeRc8U9PnU6R6j6TV.png (1).png`,
        category: 'chicken'
    },
    {
        names: `Do'stlar 4x`,
        price: 149000,
        imagee: `./cardsImages/eGsfAo0P5E7gh8aRB0vHPXX2JTKjAFasnhiBO777.png.png`,
        category: 'chicken'
    },
    {
        names: ` Острый Do'stlar 1x`,
        price: 43000,
        imagee: `./cardsImages/iHB3KWEddHpod7sUIc82M8pI627orxHpTz18qknX.png (1).png`,
        category: 'chicken'
    },
    {
        names: 'Hotlegs (без костей), 2шт',
        price: 25000,
        imagee: './cardsImages/hotlegs2sht.png',
        category: `chicken`
    },
    {
        names: `Hotlegs, 3шт`,
        price: 33000,
        imagee: './cardsImages/Hotlegs3sht.png',
        category: 'chicken'
    },
    {
        names: 'Hotlegs (без костей), 5 шт',
        price: 59000,
        imagee: './cardsImages/hotlegs5sht.png',
        category: 'chicken'
    },
    {
        names: `Hotlegs, 10шт`,
        price: 99000,
        imagee: './cardsImages/Hotlegs10sht.png',
        category: 'chicken'
    },
    {
        names: `Острые крылышки, 17 шт`,
        price: 108000,
        imagee: './cardsImages/krilishki17hot.webp',
        category: 'chicken'
    },
    {
        names: 'Крылышки, 17 шт',
        price: 108000,
        imagee: './cardsImages/krilishki17sht.webp',
        category: 'chicken'
    },
    {
        names: `Острые стрипсы, 17 шт`,
        price: 108000,
        imagee: './cardsImages/strips17hot.webp',
        category: 'chicken'
    },
    {
        names: 'Стрипсы, 17шт',
        price: 108000,
        imagee: `./cardsImages/strips17sht.webp`,
        category: 'chicken'
    },
    {
        names: 'Mazzarella   burger сет Sprite',
        price: 39000,
        imagee: './cardsImages/mazarellaBurger.png',
        category: 'set'
    },
    {
        names: 'Mazzarella burger сет Fanta',
        price: 39000,
        imagee: './cardsImages/mazarellaBurgerFanta.png',
        category: 'set'
    },
    {
        names: 'Mazzarella burger сет coca-Cola',
        price: 39000,
        imagee: './cardsImages/mazarellaBurgerCola.webp',
        category: `set`
    },
    {
        names: 'Картофельные шарики с сыром, 11шт',
        price: 25000,
        imagee: './cardsImages/potatoCircle11.png',
        category: 'snek'
    },
    {
        names: 'Картофельные шарики с сыром, 7шт',
        price: 18000,
        imagee: './cardsImages/potatoCircle7.webp',
        category: 'snek'
    },
    {
        names: 'Куринные нагетсы, 5шт',
        price: 20000,
        imagee: './cardsImages/neggets5.webp',
        category: 'snek'
    },
    {
        names: 'Чикен стикс, 5шт',
        price: 20000,
        imagee: './cardsImages/chickenStix5.webp',
        category: 'snek'
    },
    {
        names: 'Чикен стикс, 3шт',
        price: 15000,
        imagee: './cardsImages/chickenStiz3.webp',
        category: 'snek'
    },
    {
        names: 'Американ лестер',
        price: 27000,
        imagee: './cardsImages/americanLester.webp',
        category: 'lester'
    },
    {
        names: 'Биг бокс',
        price: 33000,
        imagee: './cardsImages/bigBoxLester.webp',
        category: 'lester'
    },
    {
        names: 'Лестер цезарь',
        price: 27000,
        imagee: './cardsImages/tesarLester.webp',
        category: `lester`
    },
    {
        names: 'Лестер тостер',
        price: 27000,
        imagee: './cardsImages/tosterLester.webp',
        category: `lester`
    },
    {
        names: 'Барбекью бургер',
        price: 27000,
        imagee: './cardsImages/barbekuBurger.png',
        category: 'burger'
    },
    {
        names: 'Бигер бургер',
        price: 30000,
        imagee: './cardsImages/bigerBurger.webp',
        category: 'burger'
    },
    {
        names: 'Сингер бургер',
        price: 27000,
        imagee: './cardsImages/singerBurger.webp',
        category: 'burger'
    },
    {
        names: "Классик бургер",
        price: 25000,
        imagee: './cardsImages/klassikBurger.webp',
        category: './cardsImages/klassikBurger.webp'
    },
    {
        names: 'Дабл чикен чиз',
        price: 34000,
        imagee: './cardsImages/dubbleChickenBurgher.png',
        category: 'burger'
    },
    {
        names: "Fruit'Ailes",
        price: 23000,
        imagee: './cardsImages/vishnaCola.webp',
        category: 'drink'
    },
    {
        names: "Fruit'Ailes тархун",
        price: 23000,
        imagee: './cardsImages/tarxun.webp',
        category: 'drink'
    },
    {
        names: "Fruit'Ailes персик",
        price: 23000,
        imagee: './cardsImages/persik.webp',
        category: 'drink'
    },
    {
        names: "Fruit'Ailes груша",
        price: 23000,
        imagee: './cardsImages/grusha.webp',
        category: 'drink'
    },
    {
        names: "Fruit'Ailes огурец-лайм",
        price: 23000,
        imagee: './cardsImages/cucumberLime.webp',
        category: 'drink'
    },
    {
        names: "new moxito",
        price: 26000,
        imagee: './cardsImages/moxito.webp',
        category: 'drink'
    },
    {
        names: 'Berry moxito',
        price: 26000,
        imagee: './cardsImages/berryMoxito.webp',
        category: 'drink'
    },
    {
        names: 'Айсти',
        price: 20000,
        imagee: './cardsImages/iceTea.webp',
        category: 'drink'
    },
    {
        names: 'Айс кофе',
        price: 17000,
        imagee: './cardsImages/iceCoffee.png',
        category: 'drink'
    },
]

// productlar i localS ga save qib qoysh:
localStorage.setItem(`products`, JSON.stringify(products))


// localS dan produclari olsh:
let product = JSON.parse(localStorage.getItem("products"))
console.log(product);
let korzinaBtn = document.querySelector(".korzinaBtn")

// har xil category la ni filter qib ovolish
let sets = product.filter(productt => productt.category === 'set')
let burger = product.filter(productt => productt.category === 'burger')
let drink = product.filter(productt => productt.category === 'drink')
let chicken = product.filter(productt => productt.category === 'chicken')
let snek = product.filter(productt => productt.category === 'snek')
let lester = product.filter(productt => productt.category === 'lester')

// har xil category la ni har xil sect la ga chiqarish uchun sect lar
let setSect = document.getElementById(`set-sect`)
let burgerSect = document.getElementById(`burger-sect`)
let kfcSect = document.getElementById(`kfc-sect`)
let drinkSect = document.getElementById(`drink-sect`)
let sneksSect = document.getElementById(`sneks-sect`)
let lesterSect = document.getElementById(`lester-sect`)

// har productni ozini sect-ga chiqarish funciasi
function sectRenderDOM(names, container) {

    names.forEach((set) => {

        let index = product.indexOf(set)
        let card = document.createElement(`div`)
        card.classList = `card`
        card.setAttribute(`data-aos`, "zoom-in-up")
        let price = set.price.toLocaleString('ru-RU')

        card.innerHTML = `

        <img class="productImg" src="${set.imagee}" alt="">
        <p class="productName">${set.names}</p>
        <p class="productPrice">${price} сум</p>
        <button data-index="${index}" class="productBtn"><svg class="productBtnSvg"  width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="productSvg" fill-rule="currentColor" clip-rule="evenodd" d="M14 0C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V12H26C26.5304 12 27.0391 12.2107 27.4142 12.5858C27.7893 12.9609 28 13.4696 28 14C28 14.5304 27.7893 15.0391 27.4142 15.4142C27.0391 15.7893 26.5304 16 26 16H16V26C16 26.5304 15.7893 27.0391 15.4142 27.4142C15.0391 27.7893 14.5304 28 14 28C13.4696 28 12.9609 27.7893 12.5858 27.4142C12.2107 27.0391 12 26.5304 12 26V16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14C0 13.4696 0.210714 12.9609 0.585786 12.5858C0.960859 12.2107 1.46957 12 2 12H12V2C12 1.46957 12.2107 0.960859 12.5858 0.585786C12.9609 0.210714 13.4696 0 14 0Z" fill="white"/>
        </svg>
        </button>`

        container.append(card)
    })
}
sectRenderDOM(sets, setSect)
sectRenderDOM(burger, burgerSect)
sectRenderDOM(drink, drinkSect)
sectRenderDOM(chicken, kfcSect)
sectRenderDOM(snek, sneksSect)
sectRenderDOM(lester, lesterSect)

// korzinaga qoshilgan produclari localS dan olamiz null bos yengi massiv
let selectedProducts = JSON.parse(localStorage.getItem('selectProducts')) || []

let searchBtn = document.querySelector('.searchBtn')
let searchInput = document.getElementById(`searchInput`)
let searchBox = document.querySelector(`.searchCardsBox`)

searchBtn.addEventListener(`click`, () => {
    searchInput.classList.toggle('active')
})


searchInput.addEventListener(`input`, () => {

    let inputValue = searchInput.value.toLowerCase().trim()
    if (inputValue === '') {
        searchBox.style.display = 'none'
        return
    }

    searchBox.style.display = `flex`
    let searchFilter = product.filter(prod => prod.names.toLowerCase().includes(inputValue))
    console.log(searchFilter);
    searchBox.innerHTML = ``

    searchFilter.forEach((search, index) => {
        let card = document.createElement(`div`)
        card.classList = `card`
        let price = search.price.toLocaleString('ru-RU')

        card.innerHTML = `
        <img class="productImg" src="${search.imagee}" alt="">
        <p class="productName">${search.names}</p>
        <p class="productPrice">${price} сум</p>
        <button data-index="${index}" class="productBtnSearch"><svg class="productBtnSvg"  width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="productSvg" fill-rule="currentColor" clip-rule="evenodd" d="M14 0C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V12H26C26.5304 12 27.0391 12.2107 27.4142 12.5858C27.7893 12.9609 28 13.4696 28 14C28 14.5304 27.7893 15.0391 27.4142 15.4142C27.0391 15.7893 26.5304 16 26 16H16V26C16 26.5304 15.7893 27.0391 15.4142 27.4142C15.0391 27.7893 14.5304 28 14 28C13.4696 28 12.9609 27.7893 12.5858 27.4142C12.2107 27.0391 12 26.5304 12 26V16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14C0 13.4696 0.210714 12.9609 0.585786 12.5858C0.960859 12.2107 1.46957 12 2 12H12V2C12 1.46957 12.2107 0.960859 12.5858 0.585786C12.9609 0.210714 13.4696 0 14 0Z" fill="white"/>
        </svg>
        </button>`
        searchBox.append(card)
    })

})


// korzinaga qoshih knoopasi:
let btn = document.querySelectorAll(`.productBtn`)

btn.forEach(btnn => {
    btnn.addEventListener(`click`, () => {

        korzinaBtn.classList.add(`jump`)

        setTimeout(() => {
            korzinaBtn.classList.remove(`jump`)
        }, 900);

        let index = btnn.getAttribute(`data-index`)

        let indexProduct = product[index]
        let namesProd = indexProduct.names
        let priceNumber = indexProduct.price
        let productImg = indexProduct.imagee

        console.log(namesProd);

        let productOb = {
            names: namesProd,
            price: priceNumber,
            imagee: productImg
        }

        selectedProducts.push(productOb)

        localStorage.setItem('selectProducts', JSON.stringify(selectedProducts))

        korzina()
    })
});


// korzina knopkasi ustida korzinadegi produclar lengthi 
function korzina() {
    let s = JSON.parse(localStorage.getItem("selectProducts")) || []
    korzinaBtn.style.setProperty("--length", `"${s.length}"`)
}

korzina()


const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

// dark/light mode
let body = document.querySelector(`body`);
let cards = document.querySelectorAll(`.card`);
let header = document.querySelector('.header');
let productName = document.querySelectorAll('.productName');
let inputs = document.querySelector(`input`)
let themeBtn = document.getElementById("switch");

if (localStorage.getItem(`theme`) === 'night') {
    body.classList.add(`night`);
    header.classList.add(`night`);
    themeBtn.classList.add('night');
    searchBox.classList.add('night')
    cards.forEach(card => card.classList.add(`night`));
    productName.forEach(names => names.classList.add(`night`));
    inputs.style.color = `white`

    themeBtn.checked = true;
} else {
    body.classList.remove(`night`);
    header.classList.remove(`night`);
    themeBtn.classList.remove('night');
    searchBox.classList.remove('night')
    cards.forEach(card => card.classList.remove(`night`));
    productName.forEach(names => names.classList.remove(`night`));

    themeBtn.checked = false;
}

themeBtn.addEventListener(`click`, () => {
    body.classList.toggle(`night`);
    header.classList.toggle(`night`);
    themeBtn.classList.toggle(`night`);
    cards.forEach(card => card.classList.toggle(`night`));
    productName.forEach(names => names.classList.toggle(`night`));

    if (themeBtn.checked) {
        localStorage.setItem(`theme`, `night`);
    } else {
        localStorage.setItem(`theme`, `light`);
    }
});

// Tugadi :)