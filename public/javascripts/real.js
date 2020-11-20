let autocomplete;
let placeSearch;

const componentForm = {
  street_number: "short_name",
  route: "long_name",
  locality: "long_name",
  administrative_area_level_1: "short_name",
  country: "long_name",
  postal_code: "short_name",
};

const BEDROOMS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const BATHROOMS = [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0];
const FEATURES = [
  "Beach",
  "Downtown",
  "Mountains",
  "Lake",
  "Portland",
  "Secluded",
  "Cul de Sac",
  "Near a park",
  "Pool",
  "Basement",
  "Garage",
  "Fireplace",
];

function handleSubmit(evt) {
  document.getElementById("copyOutput").innerText = "place is a dump";
}

function loadFormData() {
  const bedroomCountSelect = document.getElementById("inputBedrooms");
  BEDROOMS.forEach((count) => {
    let el = document.createElement("OPTION");
    el.value = count;
    el.innerText = count;
    bedroomCountSelect.appendChild(el);
  });

  const bathroomCountSelect = document.getElementById("inputBathrooms");
  BATHROOMS.forEach((count) => {
    let el = document.createElement("OPTION");
    el.value = count;
    el.innerText = count;
    bathroomCountSelect.appendChild(el);
  });

  const featuresContainer = document.getElementById("features");
  FEATURES.forEach((feat) => {
    let parentContainer = document.createElement("DIV");
    parentContainer.classList = "form-check form-check-inline";
    let checkboxInput = document.createElement("INPUT");
    checkboxInput.type = "checkbox";
    checkboxInput.classList = "form-check-input";
    checkboxInput.id = feat;
    let label = document.createElement("LABEL");
    label.classList = "form-check-label";
    label.for = feat;
    label.innerText = feat;

    parentContainer.appendChild(checkboxInput);
    parentContainer.appendChild(label);
    featuresContainer.appendChild(parentContainer);
  });
}

function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("autocomplete"),
    { types: ["geocode"] }
  );
  autocomplete.setFields(["address_component"]);
}

function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      const circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy,
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}
