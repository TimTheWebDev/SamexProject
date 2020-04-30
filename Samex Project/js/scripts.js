fetch('./data.json')
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
    console.log(data)
  })
  .catch(err => {
    // Do something for an error here
  })

  // Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://virtserver.swaggerhub.com/TimTheWebDev/FormAPI/1.0.0/inventory', true)

request.onload = function() {
  // Begin accessing JSON data here
}

// Send request
request.send()