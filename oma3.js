fetch('https://run.mocky.io/v3/287f14f8-fa98-442e-9c19-794f8453274c')
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
document.getElementById("palaveri").innerHTML =
"<p>Tietoa ei pystytä hakemaan</p>";
})

function kerro(data){
    var teksti = ""; 
    teksti = "<h1>" + data.palaveri + "</h1>";
    teksti = teksti + "<p> Paikka: " + data.perustiedot.paikka + "</p>"
    teksti = teksti + "<p> Aloitus: " + data.perustiedot.alkuaika + "</p>"
    teksti = teksti + "<p> Kesto: " + data.perustiedot.kesto + "</p>"
    teksti = teksti + "<p>Osallistujia: "+data.osallistujat.length+" kpl </p>"
    teksti = teksti + "<ul>"
    for(var i = 0; i < data.osallistujat.length; i++) {
        teksti = teksti + "<li>" + data.osallistujat[i] + "</li>";
        }
    teksti = teksti + "</ul>"
    



    
    // teksti-muuttujan sisällön tulostus
    document.getElementById("palaveri").innerHTML = teksti;
    }