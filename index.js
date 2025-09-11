const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");

// بعد انتهاء fadeOut للـ container1

container1.addEventListener("animationend", (e) => {
  if (e.animationName === "fadeOut") {
    container1.style.display = "none"; // نخفي الأول
    container2.style.opacity = "1";     // ونظهر الثاني تدريجي
document.body.style.overflowY = "visible"; // تفعيل التمرير العمودي
}
});
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".div2 ul");

hamburger.addEventListener("click", () => {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});
const cards = document.getElementById("cards");
    cards.innerHTML += cards.innerHTML;
