// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯

const createMonster = function () {
  const monster = document.createElement("div");
  monster.className = "monster";

  const img = document.createElement("img");
  img.src = "https://robohash.org/6?set=set2";
  img.alt = "Md. Jabed Hossan";

  const p1 = document.createElement("p");
  p1.className = "name";
  p1.innerText = "Md. Jabed Hossain";

  const p2 = document.createElement("p");
  p2.className = "email";
  p2.innerText = "jabed.cse.21@gmail.com";

  monster.append(img, p1, p2);
  //console.log(monster);

  document.querySelector(".monsters").append(monster);
};

createMonster();

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
