export let snakes=JSON.parse(localStorage.getItem('localprod'))||[];



export const products =JSON.parse(localStorage.getItem('localprod'))||[
    {
        code: "4QYAbk9lrEOGfHxjK5",
        image: "https://m.media-amazon.com/images/I/61Id6WJDWqL._AC_UY218_.jpg",
        ProductName: "iQOO Z7 Pro 5G (Blue Lagoon, 8GB RAM, 256GB Storage) | 3D Curved AMOLED Display | 4nm MediaTek Dimesity",
        rate: "₹  10,999",
        owner:"Droid-Mobiles"
    },
    {
        code: "en6NlQRKeZ3t5Dz1da",
        image: "https://m.media-amazon.com/images/I/611rQWZa5rL._AC_UY218_.jpg",
        ProductName: "iQOO Neo 7 Pro 5G (Dark Storm, 8GB RAM, 128GB Storage) | Snapdragon® 8+ Gen 1 | Independent Gaming",
        rate: "₹  16,000",
        owner:"I love Mobiles"
    },
    {
        code: "DAryz1Ko66i5BH7djQ",
        image: "https://m.media-amazon.com/images/I/81bh6SxXQ+L._AC_UY218_.jpg",
        ProductName: "Redmi A2 (Sea Green, 2GB RAM, 64GB Storage)",
        rate: "₹  5,299",
        owner:"TetraxMobiles"
    },
    {
        code: "KgAIKbw5QzHe6kMlcB",
        image: "https://m.media-amazon.com/images/I/818UhQ1kpdL._AC_UY218_.jpg",
        ProductName: "realme narzo 60X 5G (Nebula Purple 6GB, 128GB Storage) | Up to 2TB External Memory | 50 MP AI Primary Camera",
        rate: "₹  12,999",
        owner:"Supreme Mobiles"
    },
    {
        code: "EJm5Q44FTJorV2efd4",
        image: "https://m.media-amazon.com/images/I/81PcAHZxgLL._AC_UY218_.jpg",
        ProductName: "Samsung Galaxy M13 (Midnight Blue, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus",
        rate: "₹  9,228",
        owner:"Infinity Cash"
    },
    {
        code: "8LIrBwHVWNEHVsSba7",
        image: "https://m.media-amazon.com/images/I/61hl+YjqDAL._AC_UY218_.jpg",
        ProductName: "Pova 5 Pro 5G (Dark Illusion, 8GB RAM, 256GB Storage) | Segment 1st 68W Ultra Fast Charging | India's 1st",
        rate: "₹  15,999",
        owner:"Hike Mobiles"
    },
    {
        code: "fmHlORxrUf6gaJDWUd",
        image: "https://m.media-amazon.com/images/I/81xJ80yRRzL._AC_UY218_.jpg",
        ProductName: "Samsung Galaxy M04 Dark Blue, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35",
        rate:  "₹  6,528",
        owner:"Get Me Mobiles"
    },
    {
        code: "oRKaSliCQpallaSrrG",
        image: "https://m.media-amazon.com/images/I/818VqDSKpCL._AC_UY218_.jpg",
        ProductName: "Samsung Galaxy M14 5G (Smoky Teal, 6GB, 128GB) | 50MP Triple Cam | Segment's Only 6000 mAh 5G SP | 5nm",
        rate: "₹  13,039",
        owner:"Hero Mobiles"
    },
    {
        code: "Xkf0lXW7u6NJY9BngL",
        image: "https://m.media-amazon.com/images/I/81fNK5+o63L._AC_UY218_.jpg",
        ProductName: "Oppo A79 5G (Glowing Green, 8GB RAM, 128GB Storage) | 5000 mAh Battery with 33W SUPERVOOC Charger | 50MP",
        rate: "₹  19,999",
        owner:"Norse Mine"
    },
    {
        code: "J4QcTBbPMoq3v1cIOR",
        image: "https://m.media-amazon.com/images/I/71UIZHHo5hL._AC_UY218_.jpg",
        ProductName: "Redmi 12 5G Pastel Blue 8GB RAM 256GB ROM",
        rate: "₹  14,999",
        owner:"Chennai Mobiles"
    },
    {
        code: "Xn8aLdavoJMahSkuM0",
        image: "https://m.media-amazon.com/images/I/71K84j2O8wL._AC_UY218_.jpg",
        ProductName: "Redmi A2 (Classic Black, 2GB RAM, 64GB Storage)",
        rate: "₹  61,999",
        owner:"Apple Cosmos"
    },
    ];
    export function addNewProducts(){
        localStorage.setItem('localprod',JSON.stringify(products));
    }




export const manufacturers=[
    {
        accountProductName:'Vivo',
        password:'Asgard'
    },
    {
        accountProductName:'Samsung',
        password:'Odin'
    },
    {
        accountProductName:'Apple',
        password:'Thor'
    },
    {
        accountProductName:'Oppo',
        password:'Loki'
    },
];



export const productCodeInfo=JSON.parse(localStorage.getItem('localinfo'))||[
    {
        code: "4QYAbk9lrEOGfHxjK5",
        image: "https://m.media-amazon.com/images/I/61Id6WJDWqL._AC_UY218_.jpg",
        ProductName: "iQOO Z7 Pro 5G (Blue Lagoon, 8GB RAM, 256GB Storage) | 3D Curved AMOLED Display | 4nm MediaTek Dimesity",
        rate: 10000,
        owner:"Droid-Mobiles",
        manufacturer:'Vivo'
    },
    {
        code: "en6NlQRKeZ3t5Dz1da",
        image: "https://m.media-amazon.com/images/I/611rQWZa5rL._AC_UY218_.jpg",
        ProductName: "iQOO Neo 7 Pro 5G (Dark Storm, 8GB RAM, 128GB Storage) | Snapdragon® 8+ Gen 1 | Independent Gaming",
        rate: 16000,
        owner:"I love Mobiles",
        manufacturer:'Vivo'
    },
    {
        code: "DAryz1Ko66i5BH7djQ",
        image: "https://m.media-amazon.com/images/I/81bh6SxXQ+L._AC_UY218_.jpg",
        ProductName: "Redmi A2 (Sea Green, 2GB RAM, 64GB Storage)",
        rate: 5299,
        owner:"TetraxMobiles",
        manufacturer:'Redmi'
    },
    {
        code: "KgAIKbw5QzHe6kMlcB",
        image: "https://m.media-amazon.com/images/I/818UhQ1kpdL._AC_UY218_.jpg",
        ProductName: "realme narzo 60X 5G (Nebula Purple 6GB, 128GB Storage) | Up to 2TB External Memory | 50 MP AI Primary Camera",
        rate: 12999,
        owner:"Supreme Mobiles",
        manufacturer:'Realme'
    },
    {
        code: "EJm5Q44FTJorV2efd4",
        image: "https://m.media-amazon.com/images/I/81PcAHZxgLL._AC_UY218_.jpg",
        ProductName: "Samsung Galaxy M13 (Midnight Blue, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus",
        rate: 9228,
        owner:"Infinity Cash",
        manufacturer:'Samsung'
    },
    {
        code: "8LIrBwHVWNEHVsSba7",
        image: "https://m.media-amazon.com/images/I/61hl+YjqDAL._AC_UY218_.jpg",
        ProductName: "Pova 5 Pro 5G (Dark Illusion, 8GB RAM, 256GB Storage) | Segment 1st 68W Ultra Fast Charging | India's 1st",
        rate: 15999,
        owner:"Hike Mobiles",
        manufacturer:'Pova'
    },
    {
        code: "fmHlORxrUf6gaJDWUd",
        image: "https://m.media-amazon.com/images/I/81xJ80yRRzL._AC_UY218_.jpg",
        ProductName: "Samsung Galaxy M04 Dark Blue, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35",
        rate: 6528,
        owner:"Get Me Mobiles",
        manufacturer:'Samsung'
    },
    {
        code: "oRKaSliCQpallaSrrG",
        image: "https://m.media-amazon.com/images/I/818VqDSKpCL._AC_UY218_.jpg",
        ProductName: "Samsung Galaxy M14 5G (Smoky Teal, 6GB, 128GB) | 50MP Triple Cam | Segment's Only 6000 mAh 5G SP | 5nm",
        rate: 13039,
        owner:"Hero Mobiles",
        manufacturer:'Samsung'
    },
    {
        code: "Xkf0lXW7u6NJY9BngL",
        image: "https://m.media-amazon.com/images/I/81fNK5+o63L._AC_UY218_.jpg",
        ProductName: "Oppo A79 5G (Glowing Green, 8GB RAM, 128GB Storage) | 5000 mAh Battery with 33W SUPERVOOC Charger | 50MP",
        rate: 19999,
        owner:"Norse Mine",
        manufacturer:'Oppo'
    },
    {
        code: "J4QcTBbPMoq3v1cIOR",
        image: "https://m.media-amazon.com/images/I/71UIZHHo5hL._AC_UY218_.jpg",
        ProductName: "Redmi 12 5G Pastel Blue 8GB RAM 256GB ROM",
        rate: 14999,
        owner:"Chennai Mobiles",
        manufacturer:'Redmi'
    },
    {
        code: "Xn8aLdavoJMahSkuM0",
        image: "https://m.media-amazon.com/images/I/71K84j2O8wL._AC_UY218_.jpg",
        ProductName: "Redmi A2 (Classic Black, 2GB RAM, 64GB Storage)",
        rate: 61999,
        owner:"Apple Cosmos",
        manufacturer:'Redmi'
    },
];


export function codeInfo(){
    localStorage.setItem('localinfo',JSON.stringify(productCodeInfo));
}

export const myPurchase=JSON.parse(localStorage.getItem('localpurchase'))||[];


export function purchaseInfo(){
    localStorage.setItem('localpurchase',JSON.stringify(myPurchase));
}
