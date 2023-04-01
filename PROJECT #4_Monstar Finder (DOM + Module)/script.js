// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯

import { monsters } from "./monsters.js";

const createMonster = function (monster) {
  const monsterDiv = document.createElement("div");
  monsterDiv.className = "monster";

  const img = document.createElement("img");
  img.src = `https://robohash.org/${monster.id}?set=set2`;
  img.alt = `${monster.name}`;

  const p1 = document.createElement("p");
  p1.className = "name";
  p1.innerText = `${monster.name}`;

  const p2 = document.createElement("p");
  p2.className = "email";
  p2.innerText = `${monster.email}`;

  monsterDiv.append(img, p1, p2);

  document.querySelector(".monsters").append(monsterDiv);
};

for (const monster of monsters) {
  createMonster(monster);
}

const createNotFound = function () {
  const notFound = document.createElement("div");
  notFound.className = "p-5 not-found";
  notFound.style.display = "none";

  const span = document.createElement("span");
  span.innerText = "404";

  const h1 = document.createElement("h1");
  h1.innerText = "🧟‍♂️ No Monster Found 🧟‍♂️";

  notFound.append(span, h1);

  document.querySelector(".monsters").append(notFound);
};

createNotFound();

document
  .querySelector("#search-monster")
  .addEventListener("keyup", function (e) {
    const keyword = e.target.value.toLowerCase();
    // console.log(keyword);
    const monsterAll = document.querySelectorAll(".monster");
    //console.log(monsterAll);
    let notFound = true;
    for (const monster of monsterAll) {
      // console.log(monster);
      const name = monster.children[1].innerText.toLowerCase();
      const email = monster.children[2].innerText.toLowerCase();
      // console.log(name, email);
      if (name.includes(keyword) || email.includes(keyword)) {
        monster.style.display = "block";
        notFound = false;
      } else {
        monster.style.display = "none";
      }

      if (notFound) {
        document.querySelector(".not-found").style.display = "block";
      } else {
        document.querySelector(".not-found").style.display = "none";
      }
    }
  });

document
  .querySelector("#search-monster-form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
  });
