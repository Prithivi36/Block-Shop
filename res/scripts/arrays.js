export let snakes=JSON.parse(localStorage.getItem('localprod'))||[];



export const products =JSON.parse(localStorage.getItem('localprod'))||[
    {
        code: "4QYAbk9lrEOGfHxjK5",
        image: "https://m.media-amazon.com/images/I/61Id6WJDWqL._AC_UY218_.jpg",
        name: "iQOO Z7 Pro 5G (Blue Lagoon, 8GB RAM, 256GB Storage) | 3D Curved AMOLED Display | 4nm MediaTek Dimesity",
        rate: 10000,
        sellerName:"Droid-Mobiles"
    },
    {
        code: "en6NlQRKeZ3t5Dz1da",
        image: "https://m.media-amazon.com/images/I/611rQWZa5rL._AC_UY218_.jpg",
        name: "iQOO Neo 7 Pro 5G (Dark Storm, 8GB RAM, 128GB Storage) | Snapdragon® 8+ Gen 1 | Independent Gaming",
        rate: 16000,
        sellerName:"I love Mobiles"
    },
    {
        code: "DAryz1Ko66i5BH7djQ",
        image: "https://m.media-amazon.com/images/I/81bh6SxXQ+L._AC_UY218_.jpg",
        name: "Redmi A2 (Sea Green, 2GB RAM, 64GB Storage)",
        rate: 5299,
        sellerName:"TetraxMobiles"
    },
    {
        code: "KgAIKbw5QzHe6kMlcB",
        image: "https://m.media-amazon.com/images/I/818UhQ1kpdL._AC_UY218_.jpg",
        name: "realme narzo 60X 5G (Nebula Purple 6GB, 128GB Storage) | Up to 2TB External Memory | 50 MP AI Primary Camera",
        rate: 12999,
        sellerName:"Supreme Mobiles"
    },
    {
        code: "EJm5Q44FTJorV2efd4",
        image: "https://m.media-amazon.com/images/I/81PcAHZxgLL._AC_UY218_.jpg",
        name: "Samsung Galaxy M13 (Midnight Blue, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus",
        rate: 9228,
        sellerName:"Infinity Cash"
    },
    {
        code: "8LIrBwHVWNEHVsSba7",
        image: "https://m.media-amazon.com/images/I/61hl+YjqDAL._AC_UY218_.jpg",
        name: "Pova 5 Pro 5G (Dark Illusion, 8GB RAM, 256GB Storage) | Segment 1st 68W Ultra Fast Charging | India's 1st",
        rate: 15999,
        sellerName:"Hike Mobiles"
    },
    {
        code: "fmHlORxrUf6gaJDWUd",
        image: "https://m.media-amazon.com/images/I/81xJ80yRRzL._AC_UY218_.jpg",
        name: "Samsung Galaxy M04 Dark Blue, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35",
        rate: 6528,
        sellerName:"Get Me Mobiles"
    },
    {
        code: "oRKaSliCQpallaSrrG",
        image: "https://m.media-amazon.com/images/I/818VqDSKpCL._AC_UY218_.jpg",
        name: "Samsung Galaxy M14 5G (Smoky Teal, 6GB, 128GB) | 50MP Triple Cam | Segment's Only 6000 mAh 5G SP | 5nm",
        rate: 13039,
        sellerName:"Hero Mobiles"
    },
    {
        code: "Xkf0lXW7u6NJY9BngL",
        image: "https://m.media-amazon.com/images/I/81fNK5+o63L._AC_UY218_.jpg",
        name: "Oppo A79 5G (Glowing Green, 8GB RAM, 128GB Storage) | 5000 mAh Battery with 33W SUPERVOOC Charger | 50MP",
        rate: 19999,
        sellerName:"Norse Mine"
    },
    {
        code: "J4QcTBbPMoq3v1cIOR",
        image: "https://m.media-amazon.com/images/I/71UIZHHo5hL._AC_UY218_.jpg",
        name: "Redmi 12 5G Pastel Blue 8GB RAM 256GB ROM",
        rate: 14999,
        sellerName:"Chennai Mobiles"
    },
    {
        code: "Xn8aLdavoJMahSkuM0",
        image: "https://m.media-amazon.com/images/I/71K84j2O8wL._AC_UY218_.jpg",
        name: "Redmi A2 (Classic Black, 2GB RAM, 64GB Storage)",
        rate: 61999,
        sellerName:"Apple Cosmos"
    },
    ];
    export function addNewProducts(){
        localStorage.setItem('localprod',JSON.stringify(products));
    }




export const manufacturers=[
    {
        accountName:'Vivo',
        password:'Asgard'
    },
    {
        accountName:'Samsung',
        password:'Odin'
    },
    {
        accountName:'Apple',
        password:'Thor'
    },
    {
        accountName:'Oppo',
        password:'Loki'
    },
];


