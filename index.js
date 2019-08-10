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
            
            // return statement stops the execution of a function and returns a value from that function. We have to call return on the fetch, otherwise there is nothing to pass to .then
// const name = document.getElementById('name').value
// const email = document.getElementById('email').value

// Step 1 - Identify the form
const myForm = document.getElementById("myForm")

// Step 2 - Create event listener for the form for on submit

const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value
}

const formBody = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
    body: JSON.stringify(formData)
}

myForm.addEventListener("submit", event => {
    event.preventDefault();

        fetch("http://localhost:3000/users", formBody)
            .then(res => res.json()) 
            .then(data => console.log(data))
            .catch(err => console.log(err))
})




// Step 1 - Identify the form
const myForm = document.getElementById("myForm")

// Step 2 - Create event listener for the form for on submit

myForm.addEventListener("submit", event => {
	event.preventDefault();

	fetch("http://localhost:3000/users", {
		method: "POST",
		headers: {
		"Content-Type": "application/json",
		"Accept": "application/json"
		},
		body: JSON.stringify({
		name: document.getElementById('name').value,
		email: document.getElementById('email').value
		})
	})
	.then(res => res.json()) 
	.then(data => console.log(data))
	.catch(err => console.log(err))
})