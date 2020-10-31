import React from "react";
import MainOrnament from "../MainOrnament/MainOrnament";

function HomePageFormSection() {
  return (
    <section className="homePageFormSection">
      <MainOrnament text="Skontaktuj się z nami" />
      <form className="homePageFormSectionForm" action="">
        <div className="homePageFormSectionFormPersonalData">
          <div>
            <label htmlFor="name">Wpisz swoje imię</label>
            <input type="text" name="name" placeholder="Krzysztof" />
          </div>
          <div>
            <label htmlFor="surname">Wpisz swój email</label>
            <input type="text" name="surname" placeholder="abc@xyz.pl" />
          </div>
        </div>
        <div className="homePageFormSectionFormTextarea">
          <label htmlFor="message">Wpisz swoją wiadomość</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          ></textarea>
        </div>
        <input className="button submit" type="submit" value="Wyślij" />
      </form>
      <footer>
          <h4>Copyright by Stefan Wiencko</h4>
          <div className="socials">
              <a href="https://www.facebook.com/" className="facebook"/>
              <a href="https://www.instagram.com/" className="instagram"/>
          </div>
      </footer>
    </section>
  );
}

export default HomePageFormSection;
