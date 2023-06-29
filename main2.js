function validateForm() {
    if (!validateAnrede()) return false;
   if (!validateFirstName()) return false;
   if (!validateLastName()) return false;
   if (!validateStrasse()) return false;
   if (!validatePlz()) return false;
   if (!validateOrt()) return false;
   if (!validateAgb()) return false;
   if (!validateKurs()) return false;
   if (!validateBemerkung()) return false;
   


   return true;
}

function validateAnrede() {
    let Anrede = document.getElementById("anrede").value;

    if (Anrede === ""){
        setMessage9("Bitte Anrede auswählen.");
        return false;
    }

    sessionStorage.setItem("anrede", Anrede);
    return true;
}

function validateFirstName() {
    let firstName = document.getElementById("fname").value;

    if (firstName === ""){
        setMessage1("Bitte den Vornamen eingeben.");
        return false;
    }

    sessionStorage.setItem("fname", firstName);
    return true;
}

function validateLastName() {
    let lastName = document.getElementById("nname").value; //value oder lastName möglich

if (lastName === ""){//hier kann man entweder value oder lastName eingeben

    setMessage2("Bitte den Nachnamen eingeben.");
    return false;
}

sessionStorage.setItem("nname", lastName);//hier auch
return true;

}

function validateStrasse() {
    let value = document.getElementById("strasse").value;

if (value === ""){

    setMessage3("Bitte Strasse eingeben.");
    return false;
}
else if (isNaN(value)) {
    setMessage10("Bitte Nummer eingeben.");
    return false;
}
sessionStorage.setItem("strasse", value);
return true

}

function validatePlz() {
    let value = document.getElementById("plz").value;

if (value === ""){

    setMessage4("Bitte die PLZ eingeben.");
    return false;
}
else if (plz.length !== 4) {
   
    setMessage11( "Ungültige PLZ. Die PLZ muss genau 4 Ziffern enthalten.");
    return false;
  }
sessionStorage.setItem("plz", value);
return true

}

function validateOrt() {
    let value = document.getElementById("ort").value;

if (value === ""){

    setMessage5("Bitte den Ort eingeben.");
    return false;
}

sessionStorage.setItem("ort", value);
return true

}

function validateAgb() {
    let value = document.getElementById("agb").value;

if (value === ""){

    setMessage6("Bitte bestätige, dass du die AGB gelesen und verstanden hast");
    return false;
}

sessionStorage.setItem("agb", value);
return true

}

function validateKurs() {
    let value = document.getElementById("kurs").value;

if (value === ""){

    setMessage7("Bitte gib an welchen Kurs du besuchen möchtest");
    return false;
}

sessionStorage.setItem("kurs", value);
return true

}

function validateBemerkung() {
    let value = document.getElementById("bem").value;

if (value === ""){

    setMessage8("Bitte den Nachnamen eingeben.");
    return false;
}

sessionStorage.setItem("bem", value);
return true

}


//funktionen für mitteilungen




function setMessage1(value) {
    document.getElementById("message-1").innerText = value;
}

function setMessage2(value) {
    document.getElementById("message-2").innerText = value;
}

function setMessage3(value) {
    document.getElementById("message-3").innerText = value;
}

function setMessage4(value) {
    document.getElementById("message-4").innerText = value;
}

function setMessage5(value) {
    document.getElementById("message-5").innerText = value;
}

function setMessage6(value) {
    document.getElementById("message-6").innerText = value;
}

function setMessage7(value) {
    document.getElementById("message-7").innerText = value;
}

function setMessage8(value) {
    document.getElementById("message-8").innerText = value;
}

function setMessage9(value) {
    document.getElementById("message-9").innerText = value;
}

function setMessage10(value) {
    document.getElementById("message-10").innerText = value;
}




//-------------für confirmation-page.html-----------------------------------.--------------------...--------

function generateConfirmation(){
    //Vornamen einfüllen (in <span)
    document.getElementById("fname").innerText = sessionStorage.getItem("fname");
    document.getElementById("nname").innerText = sessionStorage.getItem("nname");
    document.getElementById("strasse").innerText = sessionStorage.getItem("strasse");
    document.getElementById("plz").innerText = sessionStorage.getItem("plz");
    document.getElementById("ort").innerText = sessionStorage.getItem("ort");
    document.getElementById("agb").innerText = sessionStorage.getItem("agb");
    document.getElementById("kurs").innerText = sessionStorage.getItem("kurs");
    document.getElementById("bem").innerText = sessionStorage.getItem("bem");
    document.getElementById("anrede").innerText = sessionStorage.getItem("anrede");
}

