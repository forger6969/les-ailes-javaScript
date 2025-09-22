// productlar:
let products = [
    {
        names: "Qiyqiriq сет",
        price: 45000,
        imagee: "./cardsImages/HZUU2lH1ZbPF8RUMbkI00HctLUq3UCBwisuMKesd.webp (1).png"
    },
    {
        names: "Снек сет",
        price: 79000,
        imagee: "./cardsImages/cbidR6KU18nziNPphlU3jpa8OZi1nhaRKJkc93Cn.webp (1).png"
    },
    {
        names: 'Классик сет',
        price: 34000,
        imagee: './cardsImages/h7WO4cUYGJBiBUFs2qeUAYMhe5xYEXlSSLd1LWCa.webp (1).png'
    },
    {
        names: 'Лонгер рингс сет',
        price: 45000,
        imagee: "./cardsImages/xJNb3iZ1NJ8Yx11eVSQ3X2CMSn5nruiAH8p9A35U.webp (1).png"
    },
    {
        names: 'Биг сет',
        price: 62000,
        imagee: "./cardsImages/45sfsptLWqT9vq7X3cfx1bIXZXLUuCULyln6EZlf.webp (1).png"
    },
    {
        names: "Лестер сет",
        price: 53000,
        imagee: './cardsImages/9RplsrJissmFUdjyIDNnRsjr12vfFUc2RZwd7iOq.webp.png'
    },
    {
        names: "Скул сет",
        price: 36000,
        imagee: "./cardsImages/uJTcWJyBmtLq9abqzFXeiNgwFcItwFPGrllH9lGW.webp.png"
    },
    {
        names: 'Комбо сет большой',
        price: 20000,
        imagee: './cardsImages/p0TZUFzdFp7riQd4NFukH7bYCguz0h9jT5jbHNXy.webp.png'
    },
    {
        names: `Do'stlar 1x`,
        price: 43000,
        imagee: `./cardsImages/iHB3KWEddHpod7sUIc82M8pI627orxHpTz18qknX.png (1).png`
    },
    {
        names: `Do'stlar 2x`,
        price: 79000,
        imagee: `./cardsImages/U8v7GsJt5Nahm0L4Vna0u7HEeRc8U9PnU6R6j6TV.png (1).png`
    },
    {
        names: `Do'stlar 4x`,
        price: 149000,
        imagee: `./cardsImages/eGsfAo0P5E7gh8aRB0vHPXX2JTKjAFasnhiBO777.png.png`
    },
    {
        names: ` Острый Do'stlar 1x`,
        price: 43000,
        imagee: `./cardsImages/iHB3KWEddHpod7sUIc82M8pI627orxHpTz18qknX.png (1).png`
    }

]

// productlar i localS ga save qib qoysh:
localStorage.setItem(`products`, JSON.stringify(products))


// localS dan produclari olsh:
let product = JSON.parse(localStorage.getItem("products"))
let korzinaBtn = document.querySelector(".korzinaBtn")

let cardContainer = document.querySelector(`.cards-wrapper`)


// productlari DOM ga chiqarish:
product.forEach((p, index) => {

    let card = document.createElement(`div`)
    card.classList = `card`

    let price = p.price.toLocaleString('ru-RU')

    card.innerHTML = `
    
    <img class="productImg" src="${p.imagee}" alt="">
  <p class="productName">${p.names}</p>
  <p class="productPrice">${price} сум</p>
 <button id="zakazBtn" data-index="${index}" class="productBtn"><svg  width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="productSvg" fill-rule="currentColor" clip-rule="evenodd" d="M14 0C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V12H26C26.5304 12 27.0391 12.2107 27.4142 12.5858C27.7893 12.9609 28 13.4696 28 14C28 14.5304 27.7893 15.0391 27.4142 15.4142C27.0391 15.7893 26.5304 16 26 16H16V26C16 26.5304 15.7893 27.0391 15.4142 27.4142C15.0391 27.7893 14.5304 28 14 28C13.4696 28 12.9609 27.7893 12.5858 27.4142C12.2107 27.0391 12 26.5304 12 26V16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14C0 13.4696 0.210714 12.9609 0.585786 12.5858C0.960859 12.2107 1.46957 12 2 12H12V2C12 1.46957 12.2107 0.960859 12.5858 0.585786C12.9609 0.210714 13.4696 0 14 0Z" fill="white"/>
</svg>
</button>

    `

    cardContainer.append(card)

})

let btn = document.querySelectorAll(`.productBtn`)


// korzinaga qoshilgan produclari localS dan olamiz null bos yengi massiv
let selectedProducts = JSON.parse(localStorage.getItem('selectProducts')) || []


// korzinaga qoshih knoopasi:
btn.forEach(btnn => {



    btnn.addEventListener(`click`, () => {

        korzinaBtn.classList.add(`jump`)

        setTimeout(() => {
            korzinaBtn.classList.remove(`jump`)
        }, 300);

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

// Tugadi :)