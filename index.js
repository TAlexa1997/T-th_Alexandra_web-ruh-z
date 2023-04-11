//import { autoLista } from "./lista.js";

const autoLista = [
  {
    Típus: "Captiva",
    Kivitel: "Városi terepjáró",
    Üzemanyag: "Dízel",
    Km: 238000,
    Szállítható: 7,
    Évjárat: 2014,
    Hengerűrtartalom: 2231,
    Teljesítmény: "120 kW, 162 LE",
    Hajtás: "Első kerék",
    Sebességváltó: "Manuális (6 fokozatú)",
    Ára: 3490000,
  },
  {
    Típus: "Trax",
    Kivitel: "Kombi",
    Üzemanyag: "Dízel",
    Km: 158000,
    Szállítható: 5,
    Évjárat: 2014,
    Hengerűrtartalom: 1686,
    Teljesítmény: "96 kW, 131 LE",
    Hajtás: "Első kerék",
    Sebességváltó: "Manuális (6 fokozatú)",
    Ára: 3850000,
  },
  {
    Típus: "Spark",
    Kivitel: "Ferdehátú",
    Üzemanyag: "Benzin",
    Km: 130000,
    Szállítható: 5,
    Évjárat: 2016,
    Hengerűrtartalom: 995,
    Teljesítmény: "50 kW, 68 LE",
    Hajtás: "Első kerék",
    Sebességváltó: "Manuális (5 fokozatú)",
    Ára: 1699000,
  },
  {
    Típus: "Aveo",
    Kivitel: "Ferdehátú",
    Üzemanyag: "Benzin",
    Km: 152000,
    Szállítható: 5,
    Évjárat: 2014,
    Hengerűrtartalom: 1229,
    Teljesítmény: "51 kW, 69 LE",
    Hajtás: "Első kerék",
    Sebességváltó: "Manuális (5 fokozatú)",
    Ára: 2190000,
  },
  {
    Típus: "Cruze",
    Kivitel: "Ferdehátú",
    Üzemanyag: "Dízel",
    Km: 180481,
    Szállítható: 5,
    Évjárat: 2015,
    Hengerűrtartalom: 1686,
    Teljesítmény: "81 kW, 110 LE",
    Hajtás: "Első kerék",
    Sebességváltó: "Manuális (6 fokozatú)",
    Ára: 2250000,
  },
  {
    Típus: "Orlando",
    Kivitel: "Egyterű",
    Üzemanyag: "Dízel",
    Km: 200000,
    Szállítható: 7,
    Évjárat: 2013,
    Hengerűrtartalom: 1998,
    Teljesítmény: "96 kW, 131 LE",
    Hajtás: "Első kerék",
    Sebességváltó: "Manuális (6 fokozatú)",
    Ára: 2899000,
  },
  {
    Típus: "Camaro",
    Kivitel: "Coupe",
    Üzemanyag: "Benzin",
    Km: 29792,
    Szállítható: 4,
    Évjárat: 2015,
    Hengerűrtartalom: 3600,
    Teljesítmény: "238 kW, 324 LE",
    Hajtás: "Hátsó kerék",
    Sebességváltó: "Manuális (6 fokozatú)",
    Ára: 7749000,
  },
  {
    Típus: "Volt",
    Kivitel: "Ferdehátú",
    Üzemanyag: "Hibrid (Benzin)",
    Km: 21000,
    Szállítható: 5,
    Évjárat: 2017,
    Hengerűrtartalom: 1500,
    Teljesítmény: "111 kW, 151 LE",
    Hajtás: "Első kerék",
    Sebességváltó: "Fokozatmentes automata",
    Ára: 10800000,
  },
  {
    Típus: "Silverado",
    Kivitel: "Pickup",
    Üzemanyag: "Benzin",
    Km: 113000,
    Szállítható: 6,
    Évjárat: 2014,
    Hengerűrtartalom: 5328,
    Teljesítmény: "250 kW, 340 LE",
    Hajtás: "Hátsó kerék",
    Sebességváltó: "Automata (6 fokozatú)",
    Ára: 14900000,
  },
  {
    Típus: "Suburban",
    Kivitel: "Pickup",
    Üzemanyag: "Benzin",
    Km: 161903,
    Szállítható: 7,
    Évjárat: 2017,
    Hengerűrtartalom: 5328,
    Teljesítmény: "250 kW, 340 LE",
    Hajtás: "Kapcsolható összkerék",
    Sebességváltó: "Automata (6 fokozatú)",
    Ára: 16900000,
  },
  {
    Típus: "Tahoe",
    Kivitel: "Pickup",
    Üzemanyag: "Benzin",
    Km: 47000,
    Szállítható: 7,
    Évjárat: 2017,
    Hengerűrtartalom: 5300,
    Teljesítmény: "260 kW, 360 LE",
    Hajtás: "Összkerék",
    Sebességváltó: "Automata",
    Ára: 17890000,
  },
  {
    Típus: "Corvette",
    Kivitel: "Coupe",
    Üzemanyag: "Benzin",
    Km: 58311,
    Szállítható: 2,
    Évjárat: 2014,
    Hengerűrtartalom: 6162,
    Teljesítmény: "343 kW, 466 LE",
    Hajtás: "Hátsókerék",
    Sebességváltó: "Manuális (7 fokozatú)",
    Ára: 19890000,
  },
  {
    Típus: "Blazer",
    Kivitel: "Városi terepjáró",
    Üzemanyag: "Benzin",
    Km: 0,
    Szállítható: 5,
    Évjárat: 2021,
    Hengerűrtartalom: 3.598,
    Teljesítmény: "226 kW, 307 LE",
    Hajtás: "Elsőkerék",
    Sebességváltó: "Automata",
    Ára: 20590000,
  },
  {
    Típus: "Colorado",
    Kivitel: "Pickup",
    Üzemanyag: "Benzin",
    Km: 0,
    Szállítható: 5,
    Évjárat: 2023,
    Hengerűrtartalom: 2700,
    Teljesítmény: "231 kW, 310 LE",
    Hajtás: "Összkerék",
    Sebességváltó: "Automata (8 fokozatú)",
    Ára: 41590000,
  },
  {
    Típus: "Equinox",
    Kivitel: "Városi terepjáró",
    Üzemanyag: "Benzin",
    Km: 0,
    Szállítható: 5,
    Évjárat: 2023,
    Hengerűrtartalom: 1499,
    Teljesítmény: "175 kW, 203 LE",
    Hajtás: "Összkerék",
    Sebességváltó: "Automata (9 fokozatú)",
    Ára: 46590000,
  },
  {
    Típus: "Blazer",
    Kivitel: "Városi terepjáró",
    Üzemanyag: "Dízel",
    Km: 0,
    Szállítható: 5,
    Évjárat: 2021,
    Hengerűrtartalom: 3.598,
    Teljesítmény: "226 kW, 307 LE",
    Hajtás: "Elsőkerék",
    Sebességváltó: "Automata",
    Ára: 21090000,
  },
  {
    Típus: "Colorado",
    Kivitel: "Pickup",
    Üzemanyag: "Dízel",
    Km: 0,
    Szállítható: 5,
    Évjárat: 2023,
    Hengerűrtartalom: 2700,
    Teljesítmény: "231 kW, 310 LE",
    Hajtás: "Összkerék",
    Sebességváltó: "Automata (8 fokozatú)",
    Ára: 42590000,
  },
  {
    Típus: "Equinox",
    Kivitel: "Városi terepjáró",
    Üzemanyag: "Dízel",
    Km: 0,
    Szállítható: 5,
    Évjárat: 2023,
    Hengerűrtartalom: 1499,
    Teljesítmény: "175 kW, 203 LE",
    Hajtás: "Összkerék",
    Sebességváltó: "Automata (9 fokozatú)",
    Ára: 47590000,
  },
];

$(document).ready(function () {
  const TABLE1 = $("table1");
  let txt1 = tabla1();
  TABLE1.html(txt1);
  const TABLE2 = $("table2");
  let txt2 = tabla2();
  TABLE2.html(txt2);
  const TABLE3 = $("table3");
  let txt3 = tabla3();
  TABLE3.html(txt3);
  const TABLE4 = $("table4");
  let txt4 = tabla4();
  TABLE4.html(txt4);
});

function tabla1() {
  let txt1 = "<table class='table-responsive'><thead class='table-dark'><tr>";
  for (const kulcs in autoLista[0]) {
    txt1 += `<th onclick="toggleSortDirection('${kulcs}')">${kulcs}</th>`;
  }
  txt1 += `</tr></thead><tbody>`;
  const szurtAutok = autoLista.filter(auto => auto.Üzemanyag === "Benzin" && auto.Km === 0);
  for (let index = 0; index < szurtAutok.length; index++) {
    txt1 += `<tr>`;
    for (const kulcs in szurtAutok[index]) {
      if (kulcs === "Ára") {
        txt1 += `<td>${szurtAutok[index][kulcs]} Ft</td>`;
      } else if (kulcs === "Hengerűrtartalom") {
        txt1 += `<td>${szurtAutok[index][kulcs]} m3</td>`;
      } else if (kulcs === "Szállítható"){
        txt1 += `<td>${szurtAutok[index][kulcs]} fő</td>`;
      } else{
        txt1 += `<td>${szurtAutok[index][kulcs]}</td>`;
      }
    }
    txt1 += `<td><button class = "megrendeles-gomb">Megrendelés</button></td>`
    txt1 += `</tr>`;
  }

txt1 += "</tbody></table>";
return txt1;
}

function tabla2() {
  let txt2 = "<table class='table-responsive'><thead class='table-dark'><tr>";
  for (const kulcs in autoLista[0]) {
    txt2 += `<th onclick="toggleSortDirection2('${kulcs}')">${kulcs}</th>`;
  }
  txt2 += `</tr></thead><tbody>`;
  const szurtAutok = autoLista.filter(auto => auto.Üzemanyag === "Dízel" && auto.Km === 0);
  for (let index = 0; index < szurtAutok.length; index++) {
    txt2 += `<tr>`;
    for (const kulcs in szurtAutok[index]) {
      if (kulcs === "Ára") {
        txt2 += `<td>${szurtAutok[index][kulcs]} Ft</td>`;
      } else if (kulcs === "Hengerűrtartalom") {
        txt2 += `<td>${szurtAutok[index][kulcs]} m3</td>`;
      } else if (kulcs === "Szállítható"){
        txt2 += `<td>${szurtAutok[index][kulcs]} fő</td>`;
      } else{
        txt2 += `<td>${szurtAutok[index][kulcs]}</td>`;
      }
    }
    txt2 += `<td><button class = "megrendeles-gomb">Megrendelés</button></td>`
    txt2 += `</tr>`;
  }

txt2 += "</tbody></table>";
return txt2;
}

function tabla3() {
  let txt3 = "<table class='table-responsive'><thead class='table-dark'><tr>";
  for (const kulcs in autoLista[0]) {
    txt3 += `<th onclick="toggleSortDirection('${kulcs}')">${kulcs}</th>`;
  }
  txt3 += `</tr></thead><tbody>`;
  const szurtAutok = autoLista.filter(auto => auto.Üzemanyag === "Benzin" && auto.Km > 0);
  for (let index = 0; index < szurtAutok.length; index++) {
    txt3 += `<tr>`;
    for (const kulcs in szurtAutok[index]) {
      if (kulcs === "Ára") {
        txt3 += `<td>${szurtAutok[index][kulcs]} Ft</td>`;
      } else if (kulcs === "Hengerűrtartalom") {
        txt3 += `<td>${szurtAutok[index][kulcs]} m3</td>`;
      } else if (kulcs === "Szállítható"){
        txt3 += `<td>${szurtAutok[index][kulcs]} fő</td>`;
      } else{
        txt3 += `<td>${szurtAutok[index][kulcs]}</td>`;
      }
    }
    txt3 += `<td><button class = "megrendeles-gomb">Megrendelés</button></td>`
    txt3 += `</tr>`;
  }

txt3 += "</tbody></table>";
return txt3;
}

function tabla4() {
  let txt4 = "<table class='table-responsive'><thead class='table-dark'><tr>";
  for (const kulcs in autoLista[0]) {
    txt4 += `<th onclick="toggleSortDirection('${kulcs}')">${kulcs}</th>`;
  }
  txt4 += `</tr></thead><tbody>`;
  const szurtAutok = autoLista.filter(auto => auto.Üzemanyag === "Dízel" && auto.Km > 0);
  for (let index = 0; index < szurtAutok.length; index++) {
    txt4 += `<tr>`;
    for (const kulcs in szurtAutok[index]) {
      if (kulcs === "Ára") {
        txt4 += `<td>${szurtAutok[index][kulcs]} Ft</td>`;
      } else if (kulcs === "Hengerűrtartalom") {
        txt4 += `<td>${szurtAutok[index][kulcs]} m3</td>`;
      } else if (kulcs === "Szállítható"){
        txt4 += `<td>${szurtAutok[index][kulcs]} fő</td>`;
      } else{
        txt4 += `<td>${szurtAutok[index][kulcs]}</td>`;
      }
    }
    txt4 += `<td><button class = "megrendeles-gomb">Megrendelés</button></td>`
    txt4 += `</tr>`;
  }

txt4 += "</tbody></table>";
return txt4;
}


function toggleSortDirection(){
  // Táblázat és th tagok kiválasztása
const table = document.querySelector('table4');
const ths = table.querySelectorAll('th');

// Rendezési irány
let sortOrder = false;

// Eseménykezelők hozzáadása minden th taghoz
ths.forEach((th) => {
  th.addEventListener('click', () => {
    // Azonosítja az oszlopot, amelyen alapulóan rendezni kell
    const column = th.dataset.column;
    const rows = Array.from(table.querySelectorAll('tr:nth-child(n+2)'));
    
    // Az adatok rendezése a megadott oszlop szerint
    const sortDirection = sortOrder ? 1 : -1;
    rows.sort((rowA, rowB) => {
      const cellA = rowA.querySelector(`td:nth-child(${column})`);
      const cellB = rowB.querySelector(`td:nth-child(${column})`);
      return sortDirection * cellA.textContent.localeCompare(cellB.textContent);
    });

    // A rendezett adatok újra felvétele a táblázatba
    table.querySelector('tbody').append(...rows);
    
    // A rendezési irány megfordítása
    sortOrder = !sortOrder;
  });
});
}
