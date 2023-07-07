import "../css/modals.scss";
import subscribe from "./subscribe";
import discount from "./helpers/discount";
import yearlyPrice from "./helpers/yearlyPrice";
import monthlyPrice from "./helpers/monthlyPrice";
import tierId from "./helpers/tierId";

const tierName = document.getElementById("tier-heading").innerHTML;
const _tierId = await tierId(tierName);
const chooseMonthlyBtn = document.getElementById("subscribe-monthly");
const chooseYearlyBtn = document.getElementById("subscribe-yearly");
const percentageDiscount = document.getElementById("discount");
const monthlyPriceAmount = document.getElementById("monthly-price-amount");
const yearlyPriceAmount = document.getElementById("yearly-price-amount");

function handleClick(isYearly = false) {
  console.log(`chose${isYearly ? "Yearly" : "Monthly"}...`);
  const btn = isYearly ? chooseYearlyBtn : chooseMonthlyBtn;
  btn.classList.add("is-loading");
  subscribe(_tierId, isYearly);
}

chooseMonthlyBtn.addEventListener("click", () => handleClick());
chooseYearlyBtn.addEventListener("click", () => handleClick(true));

percentageDiscount.innerText = await discount(tierName);
monthlyPriceAmount.innerText = await monthlyPrice(tierName);
yearlyPriceAmount.innerText = await yearlyPrice(tierName);