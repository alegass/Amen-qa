"use strict";

$(window).on('load', function() {
    $('#modalDescarga').modal('show');    
});

document.getElementById("btnDescargaAndroid").onclick = function () {
    location.href = "https://play.google.com/store/apps/details?id=com.grupophi.mutualamen";
};

document.getElementById("btnDescargaIos").onclick = function () {
    location.href = "https://apps.apple.com/ar/app/mutual-amen/id6464720133";
};