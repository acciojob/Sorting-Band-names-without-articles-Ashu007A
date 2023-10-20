// Your array of band names
let bandNames = ['The Rolling Stones', 'The Beatles', 'Led Zeppelin', 'Pink Floyd', 'Queen'];

// Function to remove articles ('a', 'an', 'the') from band names
function removeArticles(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort the band names lexicographically after removing articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Create a UL element
const ul = document.getElementById('band');

// Loop through the sorted band names and create list items
bandNames.forEach((bandName) => {
  const li = document.createElement('li');
  li.textContent = bandName;
  ul.appendChild(li);
});