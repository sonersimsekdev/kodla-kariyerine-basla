
var sonucdegisken = document.getElementById('sonuc');
var sonucBaslikdegisken = document.getElementById('sonucBaslik');
var sonucIcerikdegisken = document.getElementById('sonucIcerik');

var agirlik; 
var boy;
var vucutKitleEndeksi;


function vkiHesaplama() {
     agirlik = parseInt(document.getElementById('kiloDegeri').value);
     boy = parseInt(document.getElementById('boyDegeri').value);
     vucutKitleEndeksi = parseFloat((agirlik / ((boy * boy)/10000)).toFixed(2));

    if (parseInt(vucutKitleEndeksi) > 0 && parseInt(vucutKitleEndeksi) < 18.9) {
         //sonucdegisken.style.display="flex";  
         sonucBaslikdegisken.innerHTML=vucutKitleEndeksi;
         sonucIcerikdegisken.innerHTML="Zayıf";
         
    }
    else if (parseInt(vucutKitleEndeksi)  >= 18.9 && parseInt(vucutKitleEndeksi)  < 24.9) {
        //sonucdegisken.style.display="flex"; 
        console.log("normal kilo "+vucutKitleEndeksi);
        sonucBaslikdegisken.innerHTML=vucutKitleEndeksi;
        sonucIcerikdegisken.innerHTML="Normal kilolu";
    }
    else if (parseInt(vucutKitleEndeksi)  >= 25 && parseInt(vucutKitleEndeksi)  < 29.9) {
        //sonucdegisken.style.display="flex"; 
        sonucBaslikdegisken.innerHTML=vucutKitleEndeksi;
        sonucIcerikdegisken.innerHTML="Fazla kilolu";
    }
    else if (parseInt(vucutKitleEndeksi)  >= 30 && parseInt(vucutKitleEndeksi)  < 39.9) {
        //sonucdegisken.style.display="flex"; 
        sonucBaslikdegisken.innerHTML=vucutKitleEndeksi;
        sonucIcerikdegisken.innerHTML="Obez";
    }
    else if (parseInt(vucutKitleEndeksi)  >= 40) {
        //sonucdegisken.style.display="flex"; 
        sonucBaslikdegisken.innerHTML=vucutKitleEndeksi;
        sonucIcerikdegisken.innerHTML="İleri derecede obez (morbid obez)";
    }
    else {
        alert("Lütfen geçerli değerler giriniz...");
    }

}


