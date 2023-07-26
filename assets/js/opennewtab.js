function openNewTab(url) {
    window.open(url, '_blank').focus();
}

function newtabs(urls) {
    urls.forEach(function(url) {
        window.open(url, '_blank');
    });
}