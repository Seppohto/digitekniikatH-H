fetch('https://run.mocky.io/v3/be72c1e9-c130-427a-af22-156209ba4876')
// Muunnetaan vastaus JSON muotoon
 .then(function (response) {
return response.json();
})
// Käsitellään muunnettu (eli JSON muotoinen) vastaus
.then(function (responseJson) {
// Kutsutaan funktiota ja välitetään sille json-vastaus
kerro(responseJson);
})
// Jos tuli jokin virhe
.catch(function (error) {
document.getElementById("vastaus").innerHTML =
"<p>Tietoa ei pystytä hakemaan</p>";
})

function kerro(data){
    var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään
    // otsikkotiedon hakeminen ja sijoittaminen h1-elementtiin
    teksti = "<h1>" + data.otsikko + "</h1>";
    // tähän tulee muiden tietojen käsittely kohta
    teksti = teksti + "<p>" + data.kuvaus + "</p>";
    teksti = teksti + "<p><img src='" + data.kuva + "' alt='kuva' ></p>";
    teksti = teksti + "<h3>Opintojakso: " + data.opintojakso.nimi + " " + data.opintojakso.tunnus + " " + data.opintojakso.opintopisteet +"op</h3>";
    teksti = teksti + "<ul>"
    for(var i = 0; i < data.sisalto.length; i++) {
        teksti = teksti + "<li>" + data.sisalto[i] + "</li>";
        }
    teksti = teksti + "</ul>"
    for(var i = 0; i < data.tekniikat.length; i++) {
        teksti = teksti + "<p>" + data.tekniikat[i].aihe + " <a href=" +data.tekniikat[i].linkki +">"+data.tekniikat[i].linkki+"</a></p>";
        }

    



    
    // teksti-muuttujan sisällön tulostus
    document.getElementById("vastaus").innerHTML = teksti;
    }
    