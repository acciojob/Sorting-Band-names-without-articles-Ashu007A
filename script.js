//your code here

document.addEventListener("DOMContentLoaded", function() {
  // Array of band names
  let bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

  // Function to remove articles and return the name without articles
  function removeArticles(name) {
    return name.replace(/^(a |an |the )/i, '').trim();
  }

  // Custom sort function to sort the band names
  bandNames.sort(function(a, b) {
    const nameA = removeArticles(a);
    const nameB = removeArticles(b);
    return nameA.localeCompare(nameB);
  });

  // Get the ul element
  const bandList = document.getElementById('band');

  // Populate the ul element with sorted band names using li elements
  bandNames.forEach(function(bandName) {
    const li = document.createElement('li');
    li.textContent = bandName;
    bandList.appendChild(li);
  });
});