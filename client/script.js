const myForm = document.querySelector('#the-form');
myForm.addEventListener("submit", e => {
    e.preventDefault();
    const searchQuery = e.target.searchQuery;
});