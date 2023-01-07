export function searchBarFunction(e) {
    if(e==='enter'){
        document.querySelector(`#liSearchBar`).style.width='200px'
        document.querySelector(`#liSearchBar`).style.opacity='1'
    }
    if(e==='leave'){
        document.querySelector(`#liSearchBar`).style.width='40px'
        document.querySelector(`#liSearchBar`).style.opacity='0'
    }
}
