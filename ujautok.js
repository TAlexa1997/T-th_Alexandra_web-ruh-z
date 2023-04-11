const kepLista = [
  "img/new_car/1.jpg",
  "img/new_car/2.jpg",
  "img/new_car/3.png",
];

let kosar ={};

const autoLista = [
  {
    Típus: "Blazer",
    Üzemanyag: "Benzin",
    Hengerűrtartalom: 3.598,
    Teljesítmény: "226 kW, 307 LE",
    Hajtás: "Elsőkerék",
    Sebességváltó: "Automata",
    Ára: 20_590_000,
  },
  {
    Típus: "Colorado",
    Üzemanyag: "Benzin",
    Hengerűrtartalom: 2700,
    Teljesítmény: "231 kW, 310 LE",
    Hajtás: "Összkerék",
    Sebességváltó: "Automata ",
    Ára: 41590000,
  },
  {
    Típus: "Equinox",
    Üzemanyag: "Benzin",
    Hengerűrtartalom: 1499,
    Teljesítmény: "175 kW, 203 LE",
    Hajtás: "Összkerék",
    Sebességváltó: "Automata ",
    Ára: 46590000,
  },
];

$(document).ready(function () {
  const TABLE = $("table");
  let txt2 = tabla();
  TABLE.html(txt2);
  
});

function tabla() {
  let txt2 = "<thead class='table-dark'><tr>";
  for (const kulcs in autoLista[0]) {
    txt2 += `<th onclick="toggleSortDirection('${kulcs}')">${kulcs}</th>`;
  }
  txt2 += `</tr></thead><tbody>`;
  for (let index = 0; index < autoLista.length; index++) {
    txt2 += `<tr>`;

    for (const kulcs in autoLista[index]) {
      if (kulcs === "Kép") {
        txt2 += `<td><img src="${kepLista[index]}" alt="kep"></td>`;
      } else if (kulcs === "Ára") {
        txt2 += `<td>${autoLista[index][kulcs]} Ft</td>`;
      } else if (kulcs === "Hengerűrtartalom") {
        txt2 += `<td>${autoLista[index][kulcs]} m3</td>`;
      } else if (kulcs === "Kép") {
        txt2 += `<img src="${kepLista[index]}" alt="kep">`;
      } else if (kulcs === "Szállítható") {
        txt2 += `<td>${autoLista[index][kulcs]} fő</td>`;
      } else {
        txt2 += `<td>${autoLista[index][kulcs]}</td>`;
      }
      
    }
    txt2 += `<td><button class = "megrendeles-gomb">Megrendelés</button></td>`
    txt2 += `</tr>`;
  }

  txt2 += "</tbody>";
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



