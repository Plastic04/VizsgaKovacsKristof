/*A megoldásodat ebben a fájlban készítsd el, majd fordítsd le typeScript compiler segítségével*/
function KivalasztottBetuk(vizsgaltSzoveg: string, kivalasztottBetuk: string[]): number {
    const kisbetuSzoveg = vizsgaltSzoveg.toLowerCase();
    let elofordulasok = 0;

    
    for (let i = 0; i < kivalasztottBetuk.length; i++) {
        const betu = kivalasztottBetuk[i].toLowerCase(); 
        const regex = new RegExp(betu, 'g');
        const talalatok = kisbetuSzoveg.match(regex);
        if (talalatok) {
            elofordulasok += talalatok.length;
        }
    }

    return elofordulasok;
}


function Szamtani(elsoErtek: number, masodikErtek: number, harmadikErtek: number): boolean {
    let kulonbseg1 = masodikErtek - elsoErtek;
    let kulonbseg2 = harmadikErtek - masodikErtek;
    return kulonbseg1 === kulonbseg2;
}



function VizsgaJegy(osszPont: number): number {
    if (osszPont < 50) {
        return "Elégtelen";
    }
    else if (osszPont < 60) {
        return "Elégséges";
    }
    else if (osszPont < 70) {
        return "Közepes";
    }
    else if (osszPont < 80) {
        return "Jó";
    }
    else if (osszPont < 90) {
        return "Jeles";
    }
}

