//Vizsgált objektum:
const vizsgazokAdatai = [{
    nev: "Koaxk Ábel",
    htmlVizsgaresz: 15,
    bootstrapVizsgaresz: 15,
    javaScriptVizsgaresz: 20,
    typeScriptVizsgaresz: 15,
    angularVizsgaresz: 10,
    serverVizsgaresz: 15
},
{
    nev: "Meg Győző",
    htmlVizsgaresz: 15,
    bootstrapVizsgaresz: 15,
    javaScriptVizsgaresz: 20,
    typeScriptVizsgaresz: 20,
    angularVizsgaresz: 15,
    serverVizsgaresz: 15
},
{
    nev: "Fejet Lenke",
    htmlVizsgaresz: 15,
    bootstrapVizsgaresz: 15,
    javaScriptVizsgaresz: 5,
    typeScriptVizsgaresz: 5,
    angularVizsgaresz: 5,
    serverVizsgaresz: 5
},
{
    nev: "Vak Cina",
    htmlVizsgaresz: 15,
    bootstrapVizsgaresz: 15,
    javaScriptVizsgaresz: 20,
    typeScriptVizsgaresz: 20,
    angularVizsgaresz: 10,
    serverVizsgaresz: 10
},
{
    nev: "Akciós Áron",
    htmlVizsgaresz: 10,
    bootstrapVizsgaresz: 10,
    javaScriptVizsgaresz: 10,
    typeScriptVizsgaresz: 10,
    angularVizsgaresz: 10,
    serverVizsgaresz: 10
},
{
    nev: "Boro Zoltán",
    htmlVizsgaresz: 15,
    bootstrapVizsgaresz: 15,
    javaScriptVizsgaresz: 15,
    typeScriptVizsgaresz: 15,
    angularVizsgaresz: 10,
    serverVizsgaresz: 10
},
{
    nev: "Eszet Lenke",
    htmlVizsgaresz: 5,
    bootstrapVizsgaresz: 5,
    javaScriptVizsgaresz: 5,
    typeScriptVizsgaresz: 5,
    angularVizsgaresz: 5,
    serverVizsgaresz: 5
},
{
    nev: "Békés Csaba",
    htmlVizsgaresz: 15,
    bootstrapVizsgaresz: 15,
    javaScriptVizsgaresz: 20,
    typeScriptVizsgaresz: 20,
    angularVizsgaresz: 15,
    serverVizsgaresz: 15
},
];


function FuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny, fuggvenyhivas) {

    //Tábla elemek létrehozása
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(1);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    //Teszt paraméterek megadása és megjelenítése
    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = `${fuggvenyhivas}`
    if (elvartEredmeny == fuggvenyhivas) {
        visszajelzesMezo.innerHTML = `Success`;
    }
    else {
        visszajelzesMezo.innerHTML = `Fail`;
    }
}

//Hibás referencia érték esetén lefutó függvény
function HibasFuggvenyFuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny) {
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(1);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = "Fail";
    visszajelzesMezo.innerHTML = "Fail";
}

function Teszt01() {
    try {
        FuggvenyVisszajelzoSor("Osztók száma feladat", 4, 3, OsztokSzama(4));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Osztók száma feladat", 4, 3);
    }
}


function Teszt02() {
    try {
        FuggvenyVisszajelzoSor("Osztók száma feladat", 6, 4, OsztokSzama(6));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Osztók száma feladat", 6, 4);
    }
}
function Teszt03() {
    try {
        FuggvenyVisszajelzoSor("Osztók száma feladat", 12, 6, OsztokSzama(12));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Osztók száma feladat", 12, 6);
    }
}
function Teszt04() {
    try {
        FuggvenyVisszajelzoSor("Páratlanok listája", [4, 6, 3, 5], "3,5", ParatlanLista([4, 6, 3, 5]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Páratlanok listája", [4, 6, 3, 5], "3,5");
    }
}


function Teszt05() {
    try {
        FuggvenyVisszajelzoSor("Páratlanok listája", [1, 2, 3, 4, 5], "1,3,5", ParatlanLista([1, 2, 3, 4, 5]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Páratlanok listája", [1, 2, 3, 4, 5], "1,3,5");
    }
}
function Teszt06() {
    try {
        FuggvenyVisszajelzoSor("Páratlanok listája", [42, 21, 69, 33, 66], "21,69,33", ParatlanLista([42, 21, 69, 33, 66]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Páratlanok listája", [42, 21, 69, 33, 66], "21,69,33");
    }
}
function Teszt07() {
    try {
        FuggvenyVisszajelzoSor("Vizsgaeredmény feladat", "Meg Győző", 100, VizsgaEredmeny("Meg Győző"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Vizsgaeredmény feladat", "Meg Győző", 100);
    }
}
function Teszt08() {
    try {
        FuggvenyVisszajelzoSor("Vizsgaeredmény feladat", "Akciós Áron", 60, VizsgaEredmeny("Akciós Áron"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Vizsgaeredmény feladat", "Akciós Áron", 60);
    }
}
function Teszt09() {
    try {
        FuggvenyVisszajelzoSor("Vizsgaeredmény feladat", "Eszet Lenke", 30, VizsgaEredmeny("Eszet Lenke"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Vizsgaeredmény feladat", "Eszet Lenke", 30);
    }
}
function TesztFuttato() {
    Teszt01();
    Teszt02();
    Teszt03();
    Teszt04();
    Teszt05();
    Teszt06();
    Teszt07();
    Teszt08();
    Teszt09();
}
TesztFuttato();