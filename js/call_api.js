async function getData() {
    let response = await fetch('https://pewresearch.org/wp-json/prc-api/v2/pathways-2020/?auth=rIoneC5sH1NhDLwXcSjzDCxXosA3&question=NEWSHEARDUA_a');
    let data = await response.json();
    return data;
}
getData().then(data => console.log(data));