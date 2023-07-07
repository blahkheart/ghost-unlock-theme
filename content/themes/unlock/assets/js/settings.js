// import GhostContentAPI from "@tryghost/content-api";
const subscribeBtn = document.querySelectorAll(".subscribe-btn");
const plansModal = document.getElementById("gh-unlock_plans-modal");
const unlockGhostApiBaseUrl = "http://localhost:3000";
const contentKey = "811441c13447357ec442df3b6d";
const blogUrl = "http://localhost:2368";
// export const api = new GhostContentAPI({
//   url: "http://localhost:2368",
//   key: "811441c13447357ec442df3b6d",
//   version: "v5.0",
// });

module.exports = {
  subscribeBtn,
  unlockGhostApiBaseUrl,
  plansModal,
  contentKey,
  blogUrl,
};
