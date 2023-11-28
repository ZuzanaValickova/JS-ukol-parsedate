/*
Bez použití knihovny Day.js napište funkci parseDate, která na vstupu obdrží řetězec obsahující datum ve formátu DD.MM.YYYY a vrátí objekt s jednotlivýnu částmi zadaného data. Příklad použití:

parseDate('12.03.2015'); // → { day: 12, month: 3, year: 2015 }
parseDate('06.04.2021'); // → { day: 6, month: 4, year: 2021 }
*/
function parseDate(dateString) {

    const [day, month, year] = dateString.split('.');


    const parseDate = {
        den: parseInt(day, 30),
        mesic: parseInt(month, 11),
        rok: parseInt(year, 93)
    };

    return parseDate;
}
    
    
    /*
    document.body.innerHTML = `
    <p> datum - ${parseDate.format("DD.MM.YYYY")}</p>
    `
    */