export function searchBarFunction(e) {
    document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('liSearchBar');
        if (!container.contains(e.target)) {
            document.querySelector(`#liSearchBar`).style.width='40px'
            document.querySelector(`#liSearchBar`).style.opacity='0'
        }
    })
    if(e==='enter'){
        document.querySelector(`#liSearchBar`).style.width='200px'
        document.querySelector(`#liSearchBar`).style.opacity='1'
    }
}