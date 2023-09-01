import { $d, $gId } from "../../../../functions";

export function searchBarFunction(e) {
    document.addEventListener('mouseup', function(e) {
    var container = $gId('liSearchBar');
        if (!container?.contains(e.target)) {
            $d(`#liSearchBar`).style.width='40px'
            $d(`#liSearchBar`).style.opacity='0'
        }
    })
    if(e==='enter'){
        $d(`#liSearchBar`).style.width='200px'
        $d(`#liSearchBar`).style.opacity='1'
    }
}