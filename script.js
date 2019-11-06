$("document").ready(function() {
    $("#obtain-cacti").on("mouseenter", function() {
        makeBtnVisible();
    });
});

function makeBtnVisible() {
    var buyBtn = $("#buyButton");
    buyBtn.css("visibility", "visible");
}

function openPlantagen() {
    window.open("https://www.plantagen.se/sok/?q=kaktus&lang=sv_SE", target="_blank");
}