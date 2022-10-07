const fish = {
    name: 'King Hilsa',
    address: 'Chandpur',
    color: 'silver',
    phone: '01700112233',
    price: 4000
}
// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

const {phone} = fish;

console.log(fish.phone);

const {age, name} = {name: 'Gautam', age: 24, prefession: 'Programmer'};
console.log(age);

const {address} = fish;
console.log(address);

// Array destructuring
const [first, another] = [44, 55, 22, 12, 66];
console.log(first, another);

const nayoks = ['shakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
console.log(notun);

function getNames(){
    return ['Gautam', 'Uttam'];
}
const [me, brother] = getNames();
console.log(brother, me);