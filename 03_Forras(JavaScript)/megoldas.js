//Ide illessze be a JavasScript kódot a teszteléshez
//1.feladat
function OsztokSzama(vizsgaltSzam) {
    let osztokSzama = 0;
    for (let i = 1; i <= vizsgaltSzam; i++) {
        if (vizsgaltSzam % i === 0) {
            osztokSzama++;
        }
    }
    return osztokSzama;
}
//2.feladat
function ParatlanLista(vizsgaltTomb) {
    const paratlanok = [];
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % 2 !== 0) {
            paratlanok.push(vizsgaltTomb[i]);
        }
    }
    return paratlanok;
}


//3.feladat

function VizsgaEredmeny(nev) {
    let diakAdatok = vizsgazokAdatai.find(diak => diak.nev === nev);
    if (!diakAdatok) {
        return 0; 
    }

    let osszPontszam = Object.values(diakAdatok).reduce((acc, pontszam) => {
        if (typeof pontszam === "number") {
            return acc + pontszam;
        }
        return acc;
    }, 0);

    return osszPontszam;
}

