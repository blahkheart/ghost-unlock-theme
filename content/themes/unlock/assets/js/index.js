import "../css/modals.scss";
import subscribe from "./subscribe";

const chooseMonthlyBtn = document.getElementById("subscribe-monthly");
const chooseYearlyBtn = document.getElementById("subscribe-yearly");
const tierHeading = document.getElementById("tier-heading");
const tierId = tierHeading.dataset.tier;

chooseMonthlyBtn.addEventListener("click", function () {
  console.log("choseMonthly..");
  chooseMonthlyBtn.classList.add("is-loading");
  subscribe(tierId);
});

chooseYearlyBtn.addEventListener("click", function () {
  console.log("choseYearly...");
  chooseYearlyBtn.classList.add("is-loading");
  subscribe(tierId, true);
});