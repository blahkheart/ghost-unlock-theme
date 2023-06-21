import "../css/modals.scss";
import subscribe from "./subscribe";

const chooseMonthlyBtn = document.getElementById("subscribe-monthly");
const chooseYearlyBtn = document.getElementById("subscribe-yearly");
const tierId = document.getElementById("tier-heading").dataset.tier;

function handleClick(isYearly = false) {
  console.log(`chose${isYearly ? "Yearly" : "Monthly"}...`);
  const btn = isYearly ? chooseYearlyBtn : chooseMonthlyBtn;
  btn.classList.add("is-loading");
  subscribe(tierId, isYearly);
}

chooseMonthlyBtn.addEventListener("click", () => handleClick());
chooseYearlyBtn.addEventListener("click", () => handleClick(true));