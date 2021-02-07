    // Modified Places Autocomplete Hotel Search sample from: https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch#maps_places_autocomplete_hotelsearch-javascript
let map;
let places;
let infoWindow;
let markers = [];
let autocomplete;
let selection;
let countryRestrict;

    //Marker
const MARKER_PATH =
    "https://developers.google.com/maps/documentation/javascript/images/marker_green";
const hostnameRegexp = new RegExp("^https?://.+?/");

    //Country List - Select Countries - Including a few countries beyond Google's suggested default list
const countries = {
    all: {
        center: {lat: 15, lng: -25 },
        zoom: 2.5,
    },
    au: {
        center: { lat: -25.3, lng: 133.8 },
        zoom: 4.4,
    },
    br: {
        center: { lat: -25, lng: -56.5 },
        zoom: 4.5,
    },
    ca: {
        center: { lat: 50, lng: -100.0 },
        zoom: 4,
    },
    fr: {
        center: { lat: 46.2, lng: 2.2 },
        zoom: 6,
    },
    de: {
        center: { lat: 50, lng: 10.4 },
        zoom: 6,
    },
    mx: {
        center: { lat: 10.6, lng: -102.5 },
        zoom: 5,
    },
        nz: {
        center: { lat: -42.9, lng: 173 },
        zoom: 6,
    },
        ng: {
        center:  { lat: 9.1, lng: 8.8},
        zoom: 6.2,
    },
    ie: {
        center: { lat: 53.1, lng: -7.95 },
        zoom: 7.5,
    },
    it: {
        center: { lat: 40, lng: 12.6 },
        zoom: 6.4,
    },
    za: {
        center: { lat: -30.6, lng: 22.9 },
        zoom: 5.8,
    },
    es: {
        center: { lat: 35.5, lng: -3.7 },
        zoom: 6,
    },
    pt: {
        center: { lat: 39.4, lng: -8 },
        zoom: 7.2,
    },
    us: {
        center: { lat: 22.1, lng: -90.7 },
        zoom: 4.1,
    },
    uk: {
        center: { lat: 54.2, lng: -2.6 },
        zoom: 6.5,
    },
};

    //Call for Map
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: countries["all"].zoom,
    center: countries["all"].center,
  });

  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById("info-content"),
  });

  //Add type to selection or remove if selected already//
  //Asssure that autocomplete has been initiated before running search//
function addTypeToSelection () {
   selection = event.target.name;
   if (autocomplete.getPlace()) {
    search();
   }
}

    //Found and adapted code form Stack Overflow post - https://stackoverflow.com/questions/57143671/how-to-add-class-to-buttons-on-click/57143941
document.addEventListener('DOMContentLoaded', () => {

    let myBtns=document.querySelectorAll('.active-state__buttons');
    myBtns.forEach(function(btn) {

        btn.addEventListener('click', () => {
          myBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        });
    });
});

    //Show Modal function - https://getbootstrap.com/docs/4.0/components/modal/
 $(document).ready(function(){
     $("#introModal").modal('show');
 });

    //Adding selected category / type to selection
window.onload = function() {
let types = document.querySelectorAll(".selected-cat");
types.forEach(element => element.addEventListener("click",addTypeToSelection));
}

  // Create the autocomplete object and associate it with the UI input control.
  // Restrict the search to the default country, and to place type "cities".
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("autocomplete"),
    {
      types: ["(cities)"],
      componentRestrictions: countryRestrict,
    }
  );
  places = new google.maps.places.PlacesService(map);
  autocomplete.addListener("place_changed", onPlaceChanged);
  // Add a DOM event listener to react when the user selects a country.
  document
    .getElementById("country")
    .addEventListener("change", setAutocompleteCountry);
}

    // When the user selects a city, get the place details for the city and
    // zoom the map in on the city.
function onPlaceChanged() {
    const place = autocomplete.getPlace();

  if (place.geometry) {
    map.panTo(place.geometry.location);
    map.setZoom(15);
    search();
  } else {
    document.getElementById("autocomplete").placeholder = "Enter a city";
  }
}

// Search explicitly for one of our four types in the selected city, within the viewport of the map.
function search() {
    if (selection != "cafe" && selection != "bakery" && selection != "book_store" && selection != "night_club") {
        return;
    }
  const search = {
    bounds: map.getBounds(),
    types: [selection],
  };
  places.nearbySearch(search, (results, status, pagination) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      clearResults();
      clearMarkers();

      // Create a marker for each result found, and
      // assign a letter of the alphabetic to each marker icon.
      for (let i = 0; i < results.length; i++) {
        const markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
        const markerIcon = MARKER_PATH + markerLetter + ".png";
        // Use marker animation to drop the icons incrementally on the map.
        markers[i] = new google.maps.Marker({
          position: results[i].geometry.location,
          animation: google.maps.Animation.DROP,
          icon: markerIcon,
        });
        // If the user clicks a marker, show the details of that result
        // in an info window.
        markers[i].placeResult = results[i];
        google.maps.event.addListener(markers[i], "click", showInfoWindow);
        setTimeout(dropMarker(i), i * 100);
        addResult(results[i], i);
    }

      //Utilizing PlacesServiceStatus constant to print a message when no results are found.
         } else if (status === "ZERO_RESULTS") {
            clearResults();
            clearMarkers();
            const results = document.getElementById("results");
            h3 = document.createElement("h3");
            h3.textContent = "No results here!";
            results.appendChild(h3);
         }
  });
}

function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    if (markers[i]) {
      markers[i].setMap(null);
    }
  }
  markers = [];
}

// Set the country restriction based on user input.
// Also center and zoom the map on the given country.
function setAutocompleteCountry() {
  const country = document.getElementById("country").value;

  if (country == "all") {
    autocomplete.setComponentRestrictions({ country: [] });
    map.setCenter({ lat: 15, lng: -25 });
    map.setZoom(2.5);
  } else {
    autocomplete.setComponentRestrictions({ country: country });
    map.setCenter(countries[country].center);
    map.setZoom(countries[country].zoom);
  }
  clearResults();
  clearMarkers();
}

function dropMarker(i) {
  return function () {
    markers[i].setMap(map);
  };
}


//List Results
function addResult(result, i) {
  const results = document.getElementById("results");
  const markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
  const markerIcon = MARKER_PATH + markerLetter + ".png";
  const tr = document.createElement("tr");
  tr.style.backgroundColor = i % 2 === 0 ? "#e8f6ff" : "#FFFFFF";

  tr.onclick = function () {
    google.maps.event.trigger(markers[i], "click");
  };
  const iconTd = document.createElement("td");
  const nameTd = document.createElement("td");
  const icon = document.createElement("img");
  icon.src = markerIcon;
  icon.setAttribute("class", "placeIcon");
  icon.setAttribute("className", "placeIcon");
  const name = document.createTextNode(result.name);
  iconTd.appendChild(icon);
  nameTd.appendChild(name);
  tr.appendChild(iconTd);
  tr.appendChild(nameTd);
  results.appendChild(tr);
}

function clearResults() {
  const results = document.getElementById("results");

  while (results.childNodes[0]) {
    results.removeChild(results.childNodes[0]);
  }
}

// Get the place details for a result. Show the information in an info window,
// anchored on the marker for the result that the user selected.
function showInfoWindow() {
  const marker = this;
  places.getDetails(
    { placeId: marker.placeResult.place_id },
    (place, status) => {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return;
      }
      infoWindow.open(map, marker);
      buildIWContent(place);
    }
  );
}

// Load the place information into the HTML elements used by the info window.
function buildIWContent(place) {
  document.getElementById("iw-icon").innerHTML =
    '<img class="hotelIcon" ' + 'src="' + place.icon + '"/>';
  document.getElementById("iw-url").innerHTML =
    '<b><a href="' + place.url + '">' + place.name + "</a></b>";
  document.getElementById("iw-address").textContent = place.vicinity;

  if (place.formatted_phone_number) {
    document.getElementById("iw-phone-row").style.display = "";
    document.getElementById("iw-phone").textContent =
      place.formatted_phone_number;
  } else {
    document.getElementById("iw-phone-row").style.display = "none";
  }

  // Assign a five-star rating to the result, using a black star ('&#10030;')
  // to indicate the rating the result has earned, and a white star ('&#10025;')
  // for the rating points not achieved.
  if (place.rating) {
    let ratingHtml = "";

    for (let i = 0; i < 5; i++) {
      if (place.rating < i + 0.5) {
        ratingHtml += "&#10025;";
      } else {
        ratingHtml += "&#10030;";
      }
      document.getElementById("iw-rating-row").style.display = "";
      document.getElementById("iw-rating").innerHTML = ratingHtml;
    }
  } else {
    document.getElementById("iw-rating-row").style.display = "none";
  }

  // The regexp isolates the first part of the URL (domain plus subdomain)
  // to give a short URL for displaying in the info window.
  if (place.website) {
    let fullUrl = place.website;
    let website = String(hostnameRegexp.exec(place.website));

    if (!website) {
      website = "http://" + place.website + "/";
      fullUrl = website;
    }
    document.getElementById("iw-website-row").style.display = "";
    document.getElementById("iw-website").textContent = website;
    document.getElementById("iw-website").innerHTML =
        '<u><a href="' + place.url + '">' + website + "</a></u>";
        //, "_blank" trying to integrate new window _blank for urls
  } else {
    document.getElementById("iw-website-row").style.display = "none";
  }
}

// Button state change

$('button').on('click', function(){
    $('button').removeClass('active');
    $(this).addClass('active');
});


