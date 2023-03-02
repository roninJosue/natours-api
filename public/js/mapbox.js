/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const locations = JSON.parse(document.getElementById('map').dataset.locations);

const map = L.map('map', {
  center: [51.505, -0.09],
  zoom: 13,
});
