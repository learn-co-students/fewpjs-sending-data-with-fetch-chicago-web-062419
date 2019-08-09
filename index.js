// Add your code here

// JSON.stringify() converts objects to strings
// Use object as second argument in fetch = this obejct can be given certain properties with certain values in order to change its behaviour

//Takes a URL string as a first argument
// let formData = { // converts object to string
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   }

// let configObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// }

// fetch("http://localhost:3000/dogs", configObject)
// //callback function passed into .then that takes in response as argument
//     .then(function(res) {
//             return res.json();
//     }) 
// //converts the body of the response from JSON to Javascript object. The result of json() is passed onto the second .then
//     .then(function(obj) {
//         console.log(obj)
//     })
//     .catch(function(err) {
//         alert("ERROR");
//         console.log(err.message)
//     })



submitData = (name, email) => {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ 
            name,
            email
        })
    })
    .then(res => res.json())
    .then(json => document.body.innerHTML = json.id)
    .catch(err => document.body.innerHTML = err.message)
}

// submitData("Grace", "grace@.com")
