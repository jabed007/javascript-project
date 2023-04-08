// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯
document
  .querySelector("#ewallet-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const type = document.querySelector(".add__type").value;
    const desc = document.querySelector(".add__description").value;
    const value = document.querySelector(".add__value").value;

    if (desc.length > 0 && value.length > 0) {
      createNewItem(type, desc, value);

      resetForm();
    }
  });

function createNewItem(type, desc, value) {
  const newHtml = `
    <div class="item">
      <div class="item-description-time">
        <div class="item-description">
          <p>${desc}</p>
        </div>
        <div class="item-time">
          <p>25 Feb, 06:45 PM</p>
        </div>
      </div>
      <div class="item-amount ${
        type === "+" ? "income-amount" : "expense-amount"
      }">
        <p>${type}$${value}</p>
      </div>
    </div>
      `;

  document
    .querySelector(".collection")
    .insertAdjacentHTML("afterbegin", newHtml);
}

function resetForm() {
  document.querySelector(".add__type").value = "+";
  document.querySelector(".add__description").value = "";
  document.querySelector(".add__value").value = "";
}

/* Utility Function */

function formattedTime() {
  let now = new Date();
  console.log(now);
}

formattedTime();
