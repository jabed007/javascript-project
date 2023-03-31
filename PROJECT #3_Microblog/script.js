// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯
const headers = document.querySelectorAll("h1");

headers.forEach((header, index) => {
  header.style.color = "#fff";
  header.style.backgroundColor = "#555";
  header.style.padding = "15px";

  header.innerText = `Hello World ${index}`;
});

// console.log("hello");

/*
<tr>
  <td class="post">post 5</td>
  <td>
    <span class="fa fa-times float-right pr-3"></span>
  </td>
</tr>;
*/
/*
const tr = document.createElement("tr");
const td1 = document.createElement("td");
td1.classList = "post";
td1.id = "post-6";
td1.setAttribute("title", "post-title-6");
td1.innerText = "post 6";

const td2 = document.createElement("td");
const span = document.createElement("span");
span.classList = "fa fa-times float-right pr-3";
td2.append(span);

tr.append(td1, td2);

document.querySelector("tbody").append(tr);

const clearBtn = document.querySelector(".clear-post");

clearBtn.addEventListener("mouseup", function (eveent) {
  console.log("Hello");
});
*/
// set data into local storage
// localStorage.setItem("name", "Sakib");
// localStorage.setItem("age", 50);

// // get data from local storage
// const age = localStorage.getItem("age");
// console.log(age);

// // update data
// localStorage.setItem("name", "Saif");
// const name = localStorage.getItem("name");
// console.log(name);

// Remove Item From Local Storage

localStorage.removeItem("name");

// Clear All Data From Local Storage
localStorage.clear();

// Store Object and Array in Local Storage
const users = [
  { name: "Sakib", age: 26 },
  { name: "Nazmul", age: 32 },
  { name: "Hassan", age: 27 },
];

localStorage.setItem("users", JSON.stringify(users));

console.log(JSON.parse(localStorage.getItem("users")));
