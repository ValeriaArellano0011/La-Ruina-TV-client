import { $d, $gId } from "../../../../functions";

export default function profileMenuCss(e){
    document.addEventListener('mouseup', function(e) {
        var container0 = $gId('optionProfileBtn0');
        var container1 = $gId('optionProfileBtn1');
        var container2 = $gId('optionProfileBtn2');
        var container3 = $gId('optionProfileBtn3');
        var container4 = $gId('optionProfileBtn4');
        var container5 = $gId('optionProfileBtn5');
        var container6 = $gId('optionProfileBtn6');
        var containerUl = $d('.liProfileMenuDisplay')
            if (!container0?.contains(e.target) && 
                !container1?.contains(e.target) && 
                !container2?.contains(e.target) && 
                !container3?.contains(e.target) && 
                !container4?.contains(e.target) && 
                !container5?.contains(e.target) && 
                !container6?.contains(e.target) &&
                !containerUl?.contains(e.target))
            {   
                $d(`#profileCont`).style.backgroundColor='transparent'
                $d(`#optionProfileBtn0`).style.transform='translateX(200px)'
                $d(`#optionProfileBtn1`).style.transform='translateX(200px)'
                $d(`#optionProfileBtn2`).style.transform='translateX(200px)'
                $d(`#optionProfileBtn3`).style.transform='translateX(200px)'
                $d(`#optionProfileBtn4`).style.transform='translateX(200px)'
                $d(`#optionProfileBtn5`).style.transform='translateX(200px)'
                $d(`#optionProfileBtn6`).style.transform='translateX(200px)'
                $d(`#optionProfileBtn0`).style.scale='0'
                $d(`#optionProfileBtn1`).style.scale='0'
                $d(`#optionProfileBtn2`).style.scale='0'
                $d(`#optionProfileBtn3`).style.scale='0'
                $d(`#optionProfileBtn4`).style.scale='0'
                $d(`#optionProfileBtn5`).style.scale='0'
                $d(`#optionProfileBtn6`).style.scale='0'
                $d(`.liProfileMenuDisplay`).style.display='0'

            }
        })
    if(e==='enter'){
        $d(`#profileCont`).style.backgroundColor='#171717'
        $d(`#optionProfileBtn0`).style.transform='translateX(0)'
        $d(`#optionProfileBtn1`).style.transform='translateX(0)'
        $d(`#optionProfileBtn2`).style.transform='translateX(0)'
        $d(`#optionProfileBtn3`).style.transform='translateX(0)'
        $d(`#optionProfileBtn4`).style.transform='translateX(0)'
        $d(`#optionProfileBtn5`).style.transform='translateX(0)'
        $d(`#optionProfileBtn6`).style.transform='translateX(0)'
        $d(`#optionProfileBtn0`).style.scale='1'
        $d(`#optionProfileBtn1`).style.scale='1'
        $d(`#optionProfileBtn2`).style.scale='1'
        $d(`#optionProfileBtn3`).style.scale='1'
        $d(`#optionProfileBtn4`).style.scale='1'
        $d(`#optionProfileBtn5`).style.scale='1'
        $d(`#optionProfileBtn6`).style.scale='1'
        $d(`.liProfileMenuDisplay`).style.scale='1'
    }
}