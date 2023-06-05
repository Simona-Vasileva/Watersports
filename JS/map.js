function initMap() {
    const lefkada = {
        lat: 38.70724,
        lng: 20.71104
    };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: lefkada,
    });
    const marker = new google.maps.Marker({
        position: lefkada,
        map: map,
    });
}

window.initMap = initMap;