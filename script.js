function process() {
    var search_query_url = 'https://duckduckgo.com/?q=' + document.getElementById('search_field').value;
    window.location.replace(search_query_url);
}