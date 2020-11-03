import React from "react";
import MainOrnament from "../MainOrnament/MainOrnament";
import { Link } from "react-router-dom";

function AuthenticationPanel({
  repeatPassword,
  ornamentText,
  btnLeft,
  bntLeftTo,
  btnRight,
  bntRightTo,
}) {
  return (
    <section className="authenticationPanel">
      <MainOrnament text={ornamentText} />
      <form>
        <div className="enail">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" />
        </div>
        <div className="password">
          <label htmlFor="password">Hasło</label>
          <input name="password" type="password" />
        </div>
        {repeatPassword && (
          <div className="repeatPassword">
            <label htmlFor="repeatPassword">Powtórz hasło</label>
            <input name="repeatPassword" type="password" />
          </div>
        )}
      </form>
      <div className="authenticationPanelButtons">
        <Link to={bntLeftTo} className="button authenticationPanelButton">
          {btnLeft}
        </Link>
        <Link to={bntRightTo} className="button authenticationPanelButton">
          {btnRight}
        </Link>
      </div>
    </section>
  );
}

export default AuthenticationPanel;
