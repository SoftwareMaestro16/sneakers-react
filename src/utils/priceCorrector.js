export default function priceCorrector(price) {
    const stringedPrice = price.toString();
    let modifiedPrice = '';

    for (let i = 0; i < stringedPrice.length; i++) {
        if ((stringedPrice.length - i) % 3 === 0) {
            modifiedPrice += " ";
        }
        modifiedPrice += stringedPrice[i];
    }

    return modifiedPrice + " руб.";
}