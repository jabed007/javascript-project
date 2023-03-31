// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯

import { monsters } from "./monsters.js";

for (const monster of monsters) {
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
