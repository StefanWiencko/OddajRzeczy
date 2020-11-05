const functions = require('firebase-functions');


const paginateData = [
  {
    foundation: '"Dbam o zdrowie"',
    purpose: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
    items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
  },
  {
    foundation: '"Dla dzieci"',
    purpose: "Pomoc dzieciom z ubogich rodzin.",
    items: "ubrania, meble, zabawki",
  },
  {
    foundation: '"Bez domu"',
    purpose: "Pomoc dla osób nie posiadających miejsca zamieszkania.",
    items: "ubrania, jedzenie, ciepłe koce",
  },
  {
    foundation: '"Dla dzieci"',
    purpose: "Pomoc dzieciom z ubogich rodzin.",
    items: "ubrania, meble, zabawki",
  },
  {
    foundation: '"Dbam o zdrowie"',
    purpose: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
    items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
  },
  {
    foundation: '"Bez domu"',
    purpose: "Pomoc dla osób nie posiadających miejsca zamieszkania.",
    items: "ubrania, jedzenie, ciepłe koce",
  },
  {
    foundation: '"Bez domu"',
    purpose: "Pomoc dla osób nie posiadających miejsca zamieszkania.",
    items: "ubrania, jedzenie, ciepłe koce",
  },
  {
    foundation: '"Dbam o zdrowie"',
    purpose: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
    items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
  },
  {
    foundation: '"Dla dzieci"',
    purpose: "Pomoc dzieciom z ubogich rodzin.",
    items: "ubrania, meble, zabawki",
  },
];
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
  // console.log(request.body.data.map(el => el.name))
  response.send(paginateData);
});
