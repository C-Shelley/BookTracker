const button = document.querySelector(".btn-primary");
const bookisbn = document.querySelector(".isbn");
const book = document.querySelector(".search");
const popularFantasy = 'top+fantasy+books+2020';
const dystopian = 'subject:dystopian';
const NewFantasybooks = 'new+fantasy+books+2024';
const Adventure = 'subject:adventure';
const SciFi = 'popular+science+fiction+books+2019';
const publisher = 'inpublisher:'
const language = '&langRestrict=en'
const maxRes = "&maxResults=1"
const searchbutton = document.querySelector(".btn-secondary");

let key = "&key=AIzaSyBEL16HA8A8wZ_kH8d75BNXTtrONcmi9bY";

let url = 'https://www.googleapis.com/books/v1/volumes?q=';

searchbutton.addEventListener("click", getBooks);

google.books.load({ "language": "en" });

function alertBookNotFound() {
    alert("Book not found!");
}

function initialiase() {
    var viewer = new google.books.DefaultViewer(document.getElementById("viewerCanvas"));
    viewer.load("ISBN:" + bookisbn.value);

}

function showPreview(){
    document.getElementById('viewerCanvas').setAttribute("style", "width: 750px; height: 715px; display: flex; ");
}

function closePreview(){
    document.getElementById('viewerCanvas').setAttribute("style", "display: none;");
}

function getBooks() {

    fetch(url + book.value + maxRes + key).then(function (response) {

        return response.json();

    }).then(function (data) {

        console.log(data);

        let books = document.getElementById('books');


        data.items.forEach(function (book) {

            document.getElementById('button1').setAttribute("style", "display: flex;")
            document.getElementById('button2').setAttribute("style", "display: flex;")
            
            
            let author = book.volumeInfo.authors;
            let title = book.volumeInfo.title;
            let isbn = book.volumeInfo.industryIdentifiers[0].identifier;
            let genre = book.volumeInfo.categories;
            
            const isbnbutton = document.querySelector(".isbnbutton");
            isbnbutton.addEventListener("click", preview);

            function preview() {
                var viewer = new google.books.DefaultViewer(document.getElementById("viewerCanvas"));
                viewer.load("ISBN:" + isbn);
            
            }

            let image = false;

            if ("imageLinks" in book.volumeInfo) {
                image = book.volumeInfo.imageLinks.thumbnail;

                
            }

            let newItem =
            
            
                "<h5 style='text-align: center;'" + title + "</h5>" +
                "Title: " + title + "<br>" +
                "By: " + author + "<br>" + "Genre: " + genre + "<br>" +
                "ISBN: " + isbn + "<br>"
                ;
                
    

            if (image) {
                newItem += "<br>" +
                    "<img src='" + image + "' width='200'>";
            }

            newItem += "</li>";

            books.innerHTML += newItem;



        });
    }).catch(function (err) {

        alertBookNotFound();
        console.log('Invalid.', err);

    });

    document.getElementById('button1').setAttribute("style", "display: none;")
    document.getElementById('viewerCanvas').setAttribute("style", "display: none;");
}


function getPopularFantasyBooks() {

    fetch(url + popularFantasy + key).then(function (response) {

        return response.json();

    }).then(function (data) {

        console.log(data);

        let books = document.getElementById('PopularFantasybooks');


        data.items.forEach(function (book) {




            let author = book.volumeInfo.authors;
            let title = book.volumeInfo.title;





            if ("imageLinks" in book.volumeInfo) {
                image = book.volumeInfo.imageLinks.thumbnail;
            }

            let newItem =

                
            "<a >"
             

            if (image) {
                newItem += "<br>" +
                    "<img src='" + image + "' width='200'>";
            }


            books.innerHTML += newItem;



        });
    }).catch(function (err) {


        console.log('Invalid.', err);

    });


}

function getDystopianBooks() {

    fetch(url + dystopian  + key).then(function (response) {

        return response.json();

    }).then(function (data) {

        console.log(data);

        let books = document.getElementById('Dystopianbooks');


        data.items.forEach(function (book) {




            let author = book.volumeInfo.authors;
            let title = book.volumeInfo.title;





            if ("imageLinks" in book.volumeInfo) {
                image = book.volumeInfo.imageLinks.thumbnail;
            }

            let newItem =

                
            "<a >"
             

            if (image) {
                newItem += "<br>" +
                    "<img src='" + image + "' width='200'>";
            }


            books.innerHTML += newItem;



        });
    }).catch(function (err) {


        console.log('Invalid.', err);

    });


}

function getNewFantasyBooks() {

    fetch(url + NewFantasybooks + key).then(function (response) {

        return response.json();

    }).then(function (data) {

        console.log(data);

        let books = document.getElementById('NewFantasybooks');


        data.items.forEach(function (book) {




            let author = book.volumeInfo.authors;
            let title = book.volumeInfo.title;





            if ("imageLinks" in book.volumeInfo) {
                image = book.volumeInfo.imageLinks.thumbnail;
            }

            let newItem =

                
            "<a >"
             

            if (image) {
                newItem += "<br>" +
                    "<img src='" + image + "' width='200'>";
            }


            books.innerHTML += newItem;



        });
    }).catch(function (err) {


        console.log('Invalid.', err);

    });


}


function getAdventureBooks() {

    fetch(url + SciFi   + key).then(function (response) {

        return response.json();

    }).then(function (data) {

        console.log(data);

        let books = document.getElementById('Adventurebooks');


        data.items.forEach(function (book) {




            let author = book.volumeInfo.authors;
            let title = book.volumeInfo.title;





            if ("imageLinks" in book.volumeInfo) {
                image = book.volumeInfo.imageLinks.thumbnail;
            }

            let newItem =

                
            "<a >"
             

            if (image) {
                newItem += "<br>" +
                    "<img src='" + image + "' width='200'>";
            }


            books.innerHTML += newItem;



        });
    }).catch(function (err) {


        console.log('Invalid.', err);

    });


}


function Clean() {
    document.getElementById('books').innerHTML = '';

}


