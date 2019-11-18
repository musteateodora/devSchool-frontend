//fct care returneaza rezolutia ecranului
//fct care returneaza data curenta
// functie care determina pozitia geografica (lat,long): geolocation
// 2 butoane get resolution un div in pagina afisat
// cand apasam afisam rezultatul in tr un div nou
// location o fct care se autoapeleaza iife function in care apelam getposition
// lat si lang in alt div

function screenResolution() {
  return `${window.screen.width}x${window.screen.height}`;
}

function onClickRes() {
  document.getElementById("showRes").innerHTML = screenResolution();
}

function currentDate() {
  return new Date().toDateString();
}

function onClickDate() {
  document.getElementById("getDate").innerHTML = currentDate();
}

(function() {
  getGeoLocation();
})();

function getGeoLocation() {
  navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude.toFixed(2);
    const long = position.coords.longitude.toFixed(2);
    document.getElementById(
      "getLocation"
    ).innerHTML = `longitude: ${long} | latitude: ${lat}`;
  });
}
// fct cu promise asyc await
// html cu un fisier separat de js si unu separat de css, pe ntru
centru aliniat si pe vert si orizontala
un ceas cu ora currentDate, ore minute secunde 
si un buton de start stop ca sa opresti timpul 