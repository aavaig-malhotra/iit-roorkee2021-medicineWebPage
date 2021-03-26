const heading = document.querySelector(".medicine__name");
const image = document.querySelector(".medicine__image");
const body = document.querySelector("body");
let list = document.querySelector(".medicine__list");

let requestUrl =
  "https://inigma-5744a-default-rtdb.firebaseio.com/medicines.json";

let request = new XMLHttpRequest();

request.open("GET", requestUrl);

request.responseType = "json";

request.send();

request.onload = function () {
  const medicine = request.response;
  medicineData(medicine);
  //   console.log(`Hello`);
};

function medicineData(medicines) {
  body.innerHTML = "";

  let count = 0;
  for (let [key, value] of Object.entries(medicines)) {
    // let container = document.createElement("div");

    // container.classList.add(`container`);
    // container.classList.add(`container-${count + 1}`);

    // console.log(curcontainer, count);

    const html = `<div class="container container-${count + 1}">
        <div class="medicine__info">
          <h3 class="medicine__name">Medicine Name - ${
            value.name ? value.name : ""
          }</h3>
          <img
            src="${value.url}"
            alt=""
            class="medicine__image"
          />
        </div>
        </div>`;

    body.insertAdjacentHTML("beforeend", value.name ? html : "");
    count++;
  }

  const containers = document.querySelectorAll(".container");
  //   console.log(containers);

  containers.forEach((container, i) => {
    container.classList.add(`container-${i + 1}`);
  });

  console.log(containers);

  // ;

  let i = 0;
  for (let [key, v] of Object.entries(medicines)) {
    const container = document.querySelector(`.container-${i + 1}`);

    console.log(container);
    const list = document.createElement("ul");
    list.classList.add("medicine__list");

    console.log(key, medicines[key]);
    if (typeof medicines[key] === "object" && medicines[key].name) {
      for (let [k, v] of Object.entries(medicines[key])) {
        const li = document.createElement("li");
        if (k === `url` || k == `notifyId` || k === `name`) {
          continue;
        }
        console.log(k, v);
        li.textContent = `${k.slice("")}  :- ${v}`;
        list.appendChild(li);
      }
      console.log(list);
      container.appendChild(list);
    }
    i++;
    console.log(i);
  }
  // console.log(curcontainer);
}
