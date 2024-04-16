
const myBikes = [
    {
        nome: "bianchi",
        peso: 28
    },
    {
        nome: "stella",
        peso: 27
    },
    {
        nome: "antonio",
        peso: 26
    }
];

let minorWeight = myBikes[0];

myBikes.forEach((bike) => {
    if (bike.peso < minorWeight.peso) {
        minorWeight = bike;
    }
});

console.log(`questo è il peso della bici più leggera: ${minorWeight.peso}`);

const headTitle = document.getElementById("headTitle").innerHTML = `questo è il peso della bici più leggera: ${minorWeight.peso} di: ${minorWeight.nome}`