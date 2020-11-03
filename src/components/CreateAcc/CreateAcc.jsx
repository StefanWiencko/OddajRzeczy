import React from "react";
import HomePageSectionNav from "../HomePageMainSectionNav/HomePageMainSectionNav";
import AuthenticationPanel from "../AuthenticationPanel/AuthenticationPanel";

function CreateAcc() {
  return (
    <section className="createAcc">
      <HomePageSectionNav />
      <AuthenticationPanel
        ornamentText="Załóż konto"
        repeatPassword={true}
        btnLeft="Zaloguj się"
        bntLeftTo="/login"
        btnRight="Załóż konto"
        bntRightTo="/"
      />
    </section>
  );
}

export default CreateAcc;
