// author: "dannithomx"
// purpose: 


$(document).ready(function () {
  const signupBtn = $(".gh-unlock_cta-btn-signup");
  const loginBtn = $(".gh-unlock_cta-btn-login");

  const generateSignUpWithUnlockURL = () => {
    const signinWithUnlock = new URL(
      "https://app.unlock-protocol.com/checkout"
    );
    const signupRedirectURI = new URL(
      "https://598c-102-36-149-129.eu.ngrok.io/signup"
    );
    const clientId = signupRedirectURI.hostname;
    signinWithUnlock.searchParams.append("client_id", clientId);
    signinWithUnlock.searchParams.append("redirect_uri", signupRedirectURI);
    return signinWithUnlock.toString();
  };

  const generateLoginWithUnlockURL = () => {
    const signinWithUnlock = new URL(
      "https://app.unlock-protocol.com/checkout"
    );
    const loginRedirectURI = new URL(
      "https://9bd8-102-36-149-153.eu.ngrok.io/login/"
    );
    const clientId = loginRedirectURI.hostname;
    signinWithUnlock.searchParams.append("client_id", clientId);
    signinWithUnlock.searchParams.append("redirect_uri", loginRedirectURI);
    return signinWithUnlock.toString();
  };

  signupBtn.attr("href", generateSignUpWithUnlockURL);
  loginBtn.attr("href", generateLoginWithUnlockURL);
});
