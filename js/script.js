let meals = [
  "Pasta Primavera",
  "Grilled Herb Chicken",
  "Margherita Pizza",
  "Herb and Egg Salad",
  "Grilled Chicken Caesar Salad",
  "Tuna and Egg Salad Nicoise",
  "Zucchini Noodles with Tomato Sauce",
  "Creamy Chicken and Egg Fettuccine",
  "Beyond Burger with Vegan Cheese",
];

let desc = [
  "Pasta with Vegetables: A hearty pasta dish with fresh, crisp vegetables mixed in a savory sauce.",
  "Grilled Chicken: Juicy and tender chicken breast marinated and grilled to perfection.",
  "Our Delicious Pizza: A classic pizza made with fresh tomato sauce, mozzarella cheese, and your choice of toppings.",
  "Egg Salad: Creamy egg salad made with fresh eggs, mayonnaise, and a blend of spices.",
  "Chicken Salad: A flavorful mix of chicken, mayonnaise, and celery served on a bed of lettuce.",
  "Tuna Salad with Egg: Tuna salad blended with chopped boiled eggs, mayonnaise, and a touch of seasoning.",
  " Zucchini Pasta: A healthy and flavorful pasta dish made with zucchini noodles and a savory sauce.",
  "Chicken-Egg Pasta: Tender chicken breast and boiled eggs mixed with al dente pasta in a light tomato cream sauce.",
  "Vegan Burger: A juicy and delicious burger patty made from plant-based ingredients and served with your choice of toppings.",
];
const showColumns = () => {
  for (let i = 0; i < 3; i++) {
    $(".row .col-md-12").eq(i).show(2500);
  }
};
showColumns();

let items = Array.from(document.querySelectorAll(".image-item"));
let box = document.querySelector(".light-item");
let centerdImageDiv = document.getElementById("centerdImageDiv");
let closeIcon = document.getElementById("close");
let leftArrow = document.getElementById("prev");
let rightArrow = document.getElementById("next");
let images = Array.from(document.querySelectorAll(".image-item img"));
let detailsText = document.getElementById("detailsText");
let detailsDesc = document.getElementById("detailsDesc");
let currentIndex;
items.forEach(function (item) {
  item.addEventListener("click", (e) => {
    currentIndex = images.indexOf(e.target);
    console.log(e.target);
    centerdImageDiv.classList.remove("d-none");
    box.style.cssText = `background-image: url(${e.target.getAttribute(
      "src"
    )});`;
    detailsText.innerHTML = meals[currentIndex];
    detailsDesc.innerHTML = desc[currentIndex];
  });
});

closeIcon.addEventListener("click", () => {
  centerdImageDiv.classList.add("d-none");
});

function slide(i) {
  currentIndex = currentIndex + i;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  if (currentIndex > images.length - 1) {
    currentIndex = 0;
  }
  box.style.cssText = `background-image: url(${images[currentIndex].src});`;
  detailsText.innerHTML = meals[currentIndex];
  detailsDesc.innerHTML = desc[currentIndex];
}

leftArrow.addEventListener("click", () => slide(-1));
rightArrow.addEventListener("click", () => slide(1));

document.addEventListener("keydown", (e) => {
  if (e.key == "ArrowRight") {
    slide(1);
  } else if (e.key == "ArrowLeft") {
    slide(-1);
  } else if (e.key == "Escape") {
    centerdImageDiv.classList.add("d-none");
  }
});

//counter
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

let detailsCount = document.getElementById("detailsCount");
let detailsCount2 = document.getElementById("detailsCount2");
let detailsCount3 = document.getElementById("detailsCount3");

let x1 = setInterval(() => {
  counter1++;
  detailsCount.innerHTML = counter1;
  if (counter1 == 1000) {
    clearInterval(x1);
  }
}, 2);

let x2 = setInterval(() => {
  counter2++;
  detailsCount2.innerHTML = counter2;
  if (counter2 == 5000) {
    clearInterval(x2);
  }
}, 2);

let x3 = setInterval(() => {
  counter3++;
  detailsCount3.innerHTML = counter3;
  if (counter3 == 3000) {
    clearInterval(x3);
  }
}, 2);
