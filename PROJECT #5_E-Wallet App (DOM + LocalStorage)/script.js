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
  const time = getFormattedTime();
  const newHtml = `
    <div class="item">
      <div class="item-description-time">
        <div class="item-description">
          <p>${desc}</p>
        </div>
        <div class="item-time">
          <p>${time}</p>
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

// 25 Feb, 06:45 PM

function getFormattedTime() {
  const now = new Date().toLocaleTimeString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = now.split(",")[0].split(" ");
  const time = now.split(",")[1];

  return `${date[1]} ${date[0]} ${time}`;
}
