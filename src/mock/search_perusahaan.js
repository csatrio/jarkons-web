import sample_img from "../assets/mock/sample_grid.png";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const _item = {
    //imageUrl: 'https://mmgmemphis.com/wp-content/uploads/2018/08/MemphisIR-LOGO-tagline-black-font-200x141-300x200.png',
    imageUrl: sample_img,
    productName: 'Semen',
    companyName: 'PT Semen Kujang',
    rating: 5,
}


export default function (size) {
    const data = [];
    for (let i = 1; i <= size; i++) {
        const itemCopy = Object.assign({}, _item);
        data.push(itemCopy);
        itemCopy.rating = Number(`${getRandomInt(1, 4)}.${getRandomInt(1, 9)}`)
    }
    return data;
}
