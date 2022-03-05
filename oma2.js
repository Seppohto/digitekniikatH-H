fetch('https://run.mocky.io/v3/ec62452c-2be3-4155-98e0-f24beeb0ab54')
// Muunnetaan vastaus JSON muotoon
 .then(function (response) {
return response.json();
})
// Käsitellään muunnettu (eli JSON muotoinen) vastaus
.then(function (responseJson) {
// Testataan onnistuuko json-luku
// jos onnistuu päivitetään tähän json-datan käsittelevän funktion kutsu
kerro(responseJson);
})
// Jos tuli jokin virhe
.catch(function (error) {
document.getElementById("vastaus").innerHTML =
"<p>Tietoa ei pystytä hakemaan</p>";
})

function kerro(data){
    var teksti = ""; 
    teksti = "<h1>" + data.yritys + "</h1>";
    teksti = teksti + "<p> Osoite: " + data.yhteystiedot.osoite + "</p>"
    teksti = teksti + "<p> Puhelin: " + data.yhteystiedot.puhelin + "</p>"
    teksti = teksti + "<p> Email: " + data.yhteystiedot.email + "</p>"
    teksti = teksti + "<ul>"
    for(var i = 0; i < data.tuotteet.length; i++) {
        teksti = teksti + "<li>" + data.tuotteet[i] + "</li>";
        }
    teksti = teksti + "</ul>"
    for(var i = 0; i < data.henkilokunta.length; i++) {
        teksti = teksti + "<p>" + data.henkilokunta[i].nimi + " "+data.henkilokunta[i].titteli+"</p>";
        }

    



    
    // teksti-muuttujan sisällön tulostus
    document.getElementById("vastaus").innerHTML = teksti;
    }