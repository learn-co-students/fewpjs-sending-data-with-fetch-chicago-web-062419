// // Add your code here

// In submitData, write a valid POST request to http://localhost:3000/users using fetch(). This request should include:

// The destination URL
// Headers for 'Content-Type' and 'Accept' set to 'application/json'
// A body with the name and email passed in as arguments to submitData. These should be assigned to name and email keys within an object. This object should then be stringified.
  

function submitData(name, email) {

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name, 
            email
        })
    })
    .then(function( response) {
        return response.json()
    }) 
    .then(function(object) {
        document.body.innerHTML = object ["id"]
    })
    .catch( function ( error) {
        document.body.innerHTML = error.message
    })
}