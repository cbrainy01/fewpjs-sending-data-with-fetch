// Add your code here
function submitData(userName, userEmail) {

//the data were trying to add to the server via post
const formData = {
    name: userName,
    email: userEmail
};
const configurationObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json", 
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)

}; 

return fetch("http://localhost:3000/users", configurationObj)
.then(  (response) => {return response.json();}  )
//get id from response and append its value to the DOM
.then(  (returnData) => {
console.log(returnData);
const idValue = returnData.id;
//now append to body
const body = document.querySelector("body");
const p = document.createElement("p");
p.textContent = idValue;
body.appendChild(p);
}  )
.catch(  (error) => {
//create variable to store error message
    const errorMessage = error.message;
    //create p element to put error message in
    const p = document.createElement("p");
    //set error message as textContent of p
    p.textContent = errorMessage;
    //select body element which p will be appended to
    const body = document.querySelector("body");
    //append the p to the body
    body.appendChild(p);
} );







}