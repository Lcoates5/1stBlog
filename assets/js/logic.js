// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const lightDark = document.getElementById("toggle");
const circle = document.getElementById("circle")

lightDark.addEventListener("click", function () {
console.log("Button was clicked")
if (document.body.classList.contains("dark-mode")){
    console.log("check class list for dark mode")
    document.body.classList.remove("dark-mode");
}
else {
    document.body.classList.add("dark-mode");
    console.log("reset state")
};
})


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.


// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};