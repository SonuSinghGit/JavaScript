fetch('https://www.w3schools.com/jsref/jsref_splice.asp')
  .then(response => response.json())
  .then(data => {
    // Do something with the fetched data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error(error);
  })