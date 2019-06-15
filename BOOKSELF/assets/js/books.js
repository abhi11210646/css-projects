var booklists = { books: [] };
var source = document.getElementById("image-list-template").innerHTML;
var template = Handlebars.compile(source);
fetchBooks("knowledge");
function onBookSearch() {
    var query = document.getElementById("searchBox").value;
    if (query) fetchBooks(document.getElementById("searchBox").value);
}
function fetchBooks(query) {
    var loaderElm = document.getElementById("loader");
    loaderElm.classList.remove('hide');
    fetch('https://www.googleapis.com/books/v1/volumes?q=' + query)
        .then(res => res.json()).then((res) => {
            booklists.books = res.items;
            loaderElm.classList.add('hide');
            document.getElementById("image-list").innerHTML = template(booklists);
        }).catch((err) => {
            console.log(err)
        })
}

