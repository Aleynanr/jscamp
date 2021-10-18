console.log("Merhaba Kodlama.io")

//JS type safe değildir.
let dolarDun = 9.20
let dolarBugun = 9.30

{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
// euroDun = 11 hata verir euroDun'e constant verdik başka bir değer atanamaz. (sabit değer)

console.log(euroDun)

//array-dizi demektir
//camelCasing
//PascalCasing
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Özel Konut Kredisi"]
console.log(konutKredileri)

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
console.log("<li>"+konutKredileri[i]+"<li>")
}
console.log("<ul>")

// Eleman sayısını bilmiyorsak 3 yerine konutKredileri.length yazarız bu da eleman sayısının tamamı eder.

