import React from "react";
import HomePageMainSectionNav from "../HomePageMainSectionNav/HomePageMainSectionNav";
import AuthenticationPanel from "../AuthenticationPanel/AuthenticationPanel";

function LoginPage() {
  return (
    <div className="loginPage">
      <HomePageMainSectionNav />
      <AuthenticationPanel
        ornamentText="Zaloguj się"
        repeatPassword={false}
        btnLeft="Zaloguj się"
        bntLeftTo="/"
        btnRight="Załóż konto"
        bntRightTo="/createAcc"
      />
    </div>
  );
}

export default LoginPage;
