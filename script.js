function process() {
    var search_query_url = 'https://www.duckduckgo.com?q=' + document.getElementById('search_field').value;
    window.location.replace(search_query_url);
}

window.onload = function() {
    console.log('hello!');
    document.getElementById('search_field').addEventListener('keydown', function(event) {
        if (event.keyCode === 13) process();
    });
}
