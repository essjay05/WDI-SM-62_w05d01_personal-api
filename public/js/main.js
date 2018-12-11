(function() {}

console.log('Loaded');

function fetchImages(searchTerm) {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=DDylHjODKL4waP5jxgAIDYThfkAnKzjD&limit=25`)
        .then(res => {
            let imageEl = document.getElementById('images');
        
            res.data.featuresforEach( i => {
                let image = document.createElement('img');
                image.src = i.images.original.url;
                imageEl.appendChild(image);
            });
        });
    };

// CHANGE TO ADD SEARCH TO GIPHY
document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    let searchTerm = e.target[0].value;
    fetchImages(searchTerm);
    e.target[0].value = "";
    // document.getElementById("images").innerHTML = "";
    imageEl.innerHTML = "";
});
}) ();
