
const form = document.getElementById('cost-calculation-form');
const calculateButton = document.getElementById('calculate-button');
const costResultElement = document.getElementById('cost-result');

const destinations = [
  { id: 'paris', name: 'Paris, France', price: 1000, accommodation: { budget: 500, midRange: 800, luxury: 1200 } },
  { id: 'rome', name: 'Rome, Italy', price: 800, accommodation: { budget: 400, midRange: 600, luxury: 1000 } },
  { id: 'nyc', name: 'New York City, USA', price: 1200, accommodation: { budget: 600, midRange: 900, luxury: 1500 } },
  { id: 'tokyo', name: 'Tokyo, Japan', price: 1500, accommodation: { budget: 700, midRange: 1000, luxury: 1800 } },
  { id: 'sydney', name: 'Sydney, Australia', price: 1800, accommodation: { budget: 800, midRange: 1200, luxury: 2000 } }
];

calculateButton.addEventListener('click', (e) => {
  e.preventDefault();
  const destinationId = document.getElementById('destination').value;
  const numTravelers = parseInt(document.getElementById('num-travelers').value);
  const tripDuration = parseInt(document.getElementById('trip-duration').value);
  const accommodationType = document.getElementById('accommodation-type').value;

  const destination = destinations.find((dest) => dest.id === destinationId);
  const baseCost = destination.price;
  const accommodationCost = destination.accommodation[accommodationType];
  const totalCost = (baseCost + accommodationCost) * numTravelers * tripDuration;

  costResultElement.textContent = `Total Cost: $${totalCost.toLocaleString()}`;
});
