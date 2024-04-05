function flipCard(card) {
  card.classList.toggle("flipped");
}

const ok2 = document.querySelector(".ok2");
const cards = document.querySelectorAll(".card");

ok2.addEventListener("click", function () {
  cards.forEach((card) => card.classList.toggle("flipped"));
  if (ok2.textContent === "Olasz-Magyar") ok2.textContent = "Magyar-Olasz";
  else if (ok2.textContent === "Magyar-Olasz") ok2.textContent = "Olasz-Magyar";
});
