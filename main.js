'use script'

const KmUser = Number(prompt('inserisci il numero di km'));

const age = parseInt(prompt('inserisci la tua età'));

const priceKm = 0.21;

const under = 18;
const over = 65;

const discountUnder = 20;
const discountOver = 40;

let price = KmUser * priceKm;

if (age <= under) {
 price = price - (price / 100 * discountUnder);
}
else if (age >= over) {
price = price - (price / 100 * discountOver);
}













console.log(price.toFixed(2));