function ujVisszajelzoSor(tesztneve, visszajelzes) {
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(1);
    var tesztNeveMezo = adatSor.insertCell(0);
    var visszajelzesMezo = adatSor.insertCell(1);
    tesztNeveMezo.innerHTML = `${tesztneve}`;
    visszajelzesMezo.innerHTML = `${visszajelzes}`;
}




function teszt01() {
    try {
        let tesztElem = document.querySelector("h1");
        if (tesztElem.innerHTML == "Junior Frontend Fejlesztő online tesztsor") {
            ujVisszajelzoSor("1-es szintű címsor tartalma", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("1-es szintű címsor tartalma", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("1-es szintű címsor tartalma", "HIBA");
    }
}

function teszt02() {
    try {
        let tesztElem = document.querySelector("h2");
        if (tesztElem.innerHTML == "A tesztsorok az alábbi modulokból épülnek fel:") {
            ujVisszajelzoSor("2-es szintű címsor tartalma", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("2-es szintű címsor tartalma", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("2-es szintű címsor tartalma", "HIBA");
    }
}



function teszt03() {
    try {
        let tesztElem = document.querySelectorAll("img");
        if (tesztElem[0].src.includes("test_logo.jpg")) {
            ujVisszajelzoSor("Teszt ikon forrás", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Teszt ikon forrás", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Teszt ikon forrás", "HIBA");
    }
}

function teszt04() {
    try {
        let tesztElem = document.querySelectorAll("img");
        if (tesztElem[0].alt == "Online teszt") {
            ujVisszajelzoSor("Teszt ikon kép alternatív szöveg", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Teszt ikon kép alternatív szöveg", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Teszt ikon kép alternatív szöveg", "HIBA");
    }
}

function teszt05() {
    try {
        let tesztElem = document.querySelectorAll("img");
        if (tesztElem[0].title == "Online teszt") {
            ujVisszajelzoSor("Teszt ikon kép címke", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Teszt ikon kép címke", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Teszt ikon kép címke", "HIBA");
    }
}

function teszt06() {
    try {
        let tesztElem = document.querySelectorAll("b");
        if (tesztElem[0].innerHTML == "HTML") {
            ujVisszajelzoSor("Félkövér kiemelés HTML szövegre, első bekezdésben", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Félkövér kiemelés HTML szövegre, első bekezdésben", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Félkövér kiemelés HTML szövegre, első bekezdésben", "HIBA");
    }
}

function teszt07() {
    try {
        let tesztElem = document.querySelectorAll("b");
        if (tesztElem[1].innerHTML == "CSS") {
            ujVisszajelzoSor("Félkövér kiemelés CSS szövegre, első bekezdésben", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Félkövér kiemelés CSS szövegre, első bekezdésben", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Félkövér kiemelés CSS szövegre, első bekezdésben", "HIBA");
    }
}

function teszt08() {
    try {
        let tesztElem = document.querySelectorAll("b");
        if (tesztElem[2].innerHTML == "JavaScript") {
            ujVisszajelzoSor("Félkövér kiemelés JavaScript szövegre, első bekezdésben", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Félkövér kiemelés JavaScript szövegre, első bekezdésben", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Félkövér kiemelés JavaScript szövegre, első bekezdésben", "HIBA");
    }
}


function teszt09() {
    try {
        let tesztElem = document.querySelectorAll("a");
        if (tesztElem[0].href == "https://en.wikipedia.org/wiki/Front-end_web_development") {
            ujVisszajelzoSor("Frontend fejlesztő link útvonal", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Frontend fejlesztő link útvonal", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Frontend fejlesztő link útvonal", "HIBA");
    }
}

function teszt10() {
    try {
        let tesztElem = document.querySelectorAll("a");
        if (tesztElem[1].href == "https://en.wikipedia.org/wiki/Web_developer") {
            ujVisszajelzoSor("Web fejlesztő link útvonal", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Web fejlesztő link útvonal", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Web fejlesztő link útvonal", "HIBA");
    }
}

function teszt11() {
    try {
        let tesztElem = document.querySelectorAll("a");
        if (tesztElem[0].target == "_blank" && tesztElem[1].target == "_blank") {
            ujVisszajelzoSor("Linkek új ablakban", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Linkek új ablakban", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Linkek új ablakban", "HIBA");
    }
}

function teszt12() {
    try {
        let tesztElem = document.querySelectorAll("p");
        if (tesztElem[2].classList == "forras" && tesztElem[3].classList == "forras") {
            ujVisszajelzoSor("Link bekezdésekhez tartozó osztály", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Link bekezdésekhez tartozó osztály", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Link bekezdésekhez tartozó osztály", "HIBA");
    }
}

function teszt13() {
    try {
        let tesztElem = document.querySelectorAll("p");
        if (tesztElem[0].style.textIndent == "10px" && tesztElem[1].style.textIndent == "10px") {
            ujVisszajelzoSor("Első sori behúzás első 2 bekezdés esetén", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Első sori behúzás első 2 bekezdés esetén", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Első sori behúzás első 2 bekezdés esetén", "HIBA");
    }
}

function teszt14() {
    try {
        let tesztElem = document.querySelector("#igazito");
        if (tesztElem != null) {
            ujVisszajelzoSor("Külső igazító DIV elem", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Külső igazító DIV elem", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Külső igazító DIV elem", "HIBA");
    }
}




function allTeszt() {
    teszt01();
    teszt02();
    teszt03();
    teszt04();
    teszt05();
    teszt06();
    teszt07();
    teszt08();
    teszt09();
    teszt10();
    teszt11();
    teszt12();
    teszt13();
    teszt14();
}
allTeszt();
