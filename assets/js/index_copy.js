// Initialize and add the map
function initMap() {
  // The location of Uluru
  const navonna = { lat: 41.8992, lng: 12.4731 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: navonna,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: navonna,
    map: map,
  });
}
