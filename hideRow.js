

function hideRows() {
    var rows=document.querySelectorAll('td');
    for(var i = 0; i < rows.length; i++) {
        if (i % 2 === 0) {
            rows[i].setAttribute('class','hide');
        }
    }
}