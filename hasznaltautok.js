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
    }
  ];
  
  $(document).ready(function () {
    const TABLE = $("table");
    let txt2 = tabla();
    TABLE.html(txt2);
  });
  
  function tabla() {
    let txt2 = "<table class='table-responsive'><thead class='table-dark'><tr>";
    for (const kulcs in autoLista[0]) {
      txt2 += `<th><button onclick="toggleSortDirection('${kulcs}')">${kulcs}</button></th>`;
    }
    txt2 += `</tr></thead><tbody>`;
    for (let index = 0; index < autoLista.length; index++) {
      txt2 += `<tr>`;
      for (const kulcs in autoLista[index]) {
        if (kulcs === "Ára") {
          txt2 += `<td>${autoLista[index][kulcs]} Ft</td>`;
        } else if (kulcs === "Hengerűrtartalom") {
          txt2 += `<td>${autoLista[index][kulcs]} m3</td>`;
        } else if (kulcs === "Szállítható"){
          txt2 += `<td>${autoLista[index][kulcs]} fő</td>`;
        } else{
          txt2 += `<td>${autoLista[index][kulcs]}</td>`;
        }
      }
      txt2 += `</tr>`;
    }
  
    txt2 += "</tbody></table>";
    return txt2;
  }
  
  let sortDirections = {};
  
  function toggleSortDirection(kulcs) {
    if (sortDirections[kulcs] === "asc") {
      sortDirections[kulcs] = "desc";
    } else {
      sortDirections[kulcs] = "asc";
    }
    sortTable(kulcs, sortDirections[kulcs] === "asc");
  }
  
  function sortTable(kulcs, novekvo) {
    let sorrend = Object.keys(autoLista[0]).indexOf(kulcs);
    let table, rows, eldontes, i, x, y, shouldSwitch;
    table = document.querySelector("table");
    eldontes = true;
    while (eldontes) {
      eldontes = false;
      rows = table.rows;
      for (i = 1; i < rows.length - 1; i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("td")[sorrend];
        y = rows[i + 1].getElementsByTagName("td")[sorrend];
        if (isNaN(x.innerHTML)) {
          if (novekvo ? x.innerHTML > y.innerHTML : x.innerHTML < y.innerHTML) {
            shouldSwitch = true;
            break;
          }
        } else {
          if (
            novekvo
              ? parseInt(x.innerHTML) > parseInt(y.innerHTML)
              : parseInt(x.innerHTML) < parseInt(y.innerHTML)
          ) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        eldontes = true;
      }
    }
  }
  