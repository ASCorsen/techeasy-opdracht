const inventory = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: true,
        },
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: true,
        },
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
];

// #### Opdracht 5 - Functies
//
// Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:
//
//     ```
//   Philips 43PUS6504/12 - 4K TV
//   €379,-
//   43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
//
//   NIKKEI NH3216SMART - HD smart TV
//   €159,-
//   32 inch (81 cm)
//   ```
// * **Opdracht 5a:** Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één
// enkel tv-object (zoals `inventory[0]` of `inventory[6]`) verwacht en de naam op de volgende manier
// samenvoegt: `[merk] [type] - [naam]` zoals `Philips 43PUS6504/12 - 4K TV` of `NIKKEI NH3216SMART - HD smart TV`. Test
// of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.


function printTV (object) {
    const printArrayTv = object.map((array) => {
        let collection = array.brand +" " + array.type
        let collection1 = " - " + array.name
        return collection + collection1
    })
    return printArrayTv
}

console.log(printTV(inventory)[0])

//
// const printArrayTv = inventory.map((array) => {
//     let collection = array.brand +" " + array.type
//     let collection1 = " - " + array.name
//     return collection + collection1
// })
//
// console.log(printArrayTv[1])


// function arrayTv (arr) {
//     let brand = arr.brand
//     let name = arr.name
//     let type = arr.type
//     return brand+ " " + type+ " - " + name
// }




// * **Opdracht 5b:** Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als
// parameter verwacht (zoals `379`) en daar de volgende string van maakt: `€379,-`. Test of jouw functie ook werkt
// wanneer er een andere tv-prijs wordt meegegeven.

function arrayPriceTv (input) {
    const tvPrice = input.map((arr) => {
        return arr.price + ",-"
    })
    return tvPrice
}

console.log(arrayPriceTv(inventory)[0])

//
// const priceTv = inventory.map((arr) => {
//     return arr.price + ",-"
// })



// function test (input,index) {
//     return arrayTv(input[index]) + "\n" + arrayPriceTv(input)[index]
// }
//
// console.log(test(inventory,1))

// * **Opdracht 5c:** Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv, in
// zowel _inches_ als _cm_. Doe dit door een functie te schrijven die één screen-sizes array verwacht (
//     zoals `inventory[0].availableSizes`) en de groottes op de volgende manier
// samenvoegt: `[schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm)`
// etc. Als een tv maar één schermgrootte heeft (`[32]`) wordt de output `32 inch (81 cm)`. Wanneer een tv vier
// schermgroottes heeft (`[43, 50, 55, 58]`) wordt de output `43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)`.
//     Test of jouw functie werkt in alle mogelijke gevallen.

// variable maken om tv sizes te ontvangen
// uitzoeken hoe weergave naar inch omgezet kan worden
// uitzoeken hoe tv inch icm sizes weergegeven wordt



const tvSize = inventory.map((inventorySize) => {

    return inventorySize.availableSizes
})
console.log(tvSize)

// const inchToCm = inventory.map((x) => {
//     return x.availableSizes / 2.54
// })
//
// console.log(inchToCm)


// for (let i = 0; i < inventory.length; i++) {
//      inventory[i].availableSizes * 2.54
// }


























