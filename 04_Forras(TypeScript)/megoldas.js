/*A megoldásodat ebben a fájlban készítsd el, majd fordítsd le typeScript compiler segítségével*/
function KivalasztottBetuk(vizsgaltSzoveg, kivalasztottBetuk) {
    var kisbetuSzoveg = vizsgaltSzoveg.toLowerCase();
    var elofordulasok = 0;
    for (var i = 0; i < kivalasztottBetuk.length; i++) {
        var betu = kivalasztottBetuk[i].toLowerCase();
        var regex = new RegExp(betu, 'g');
        var talalatok = kisbetuSzoveg.match(regex);
        if (talalatok) {
            elofordulasok += talalatok.length;
        }
    }
    return elofordulasok;
}
function Szamtani(elsoErtek, masodikErtek, harmadikErtek) {
    var kulonbseg1 = masodikErtek - elsoErtek;
    var kulonbseg2 = harmadikErtek - masodikErtek;
    return kulonbseg1 === kulonbseg2;
}
function VizsgaJegy(osszPont) {
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
