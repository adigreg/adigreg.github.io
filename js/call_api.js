async function getData() {
    let response = await fetch('https://api.nasa.gov/planetary/apod?api_key=yab4F9E4bLvK9i0eaPWs0hsWCGT9adBfmcX1y0gR');
    let result = await response.json();
    caption = result.title;
    document.body.innerHTML = <img src={result.url} alt={caption}></img>
}
getData().then(result => console.log(result));