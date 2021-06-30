const myForm = document.querySelector('form');
myForm.addEventListener("submit", e => {
    e.preventDefault();
    let searchQuery = e.target.searchQuery;
});