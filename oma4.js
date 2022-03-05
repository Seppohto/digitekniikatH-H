fetch('http://gis.vantaa.fi/rest/tyopaikat/v1/Opetusala')
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
document.getElementById("tyot").innerHTML =
"<p>Tietoa ei pystytä hakemaan</p>";
})

function kerro(data){
    var teksti = ""; 
    teksti = teksti + "<ul>"
    for(var i = 0; i < data.length; i++) {
        teksti = teksti 
        + "<li>Työtehtävä: " + data[i].tyotehtava 
        + "<br>Osoite: " + data[i].osoite 
        + "<br><a href=" + data[i].tyoavain 
        + ">Linkki</a></li>";
        }
    teksti = teksti + "</ul>"
    



    
    // teksti-muuttujan sisällön tulostus
    document.getElementById("tyot").innerHTML = teksti;
    }