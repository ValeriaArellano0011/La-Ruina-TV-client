export default function profileMenuCss(e){
    document.addEventListener('mouseup', function(e) {
        var container0 = document.getElementById('optionProfileBtn0');
        var container1 = document.getElementById('optionProfileBtn1');
        var container2 = document.getElementById('optionProfileBtn2');
        var container3 = document.getElementById('optionProfileBtn3');
        var container4 = document.getElementById('optionProfileBtn4');
        var container5 = document.getElementById('optionProfileBtn5');
        var container6 = document.getElementById('optionProfileBtn6');
            if (!container0.contains(e.target) && 
                !container1.contains(e.target) && 
                !container2.contains(e.target) && 
                !container3.contains(e.target) && 
                !container4.contains(e.target) && 
                !container5.contains(e.target) && 
                !container6.contains(e.target))
            {   
                document.querySelector(`#profileCont`).style.backgroundColor='transparent'
                document.querySelector(`#optionProfileBtn0`).style.transform='translateX(200px)'
                document.querySelector(`#optionProfileBtn1`).style.transform='translateX(200px)'
                document.querySelector(`#optionProfileBtn2`).style.transform='translateX(200px)'
                document.querySelector(`#optionProfileBtn3`).style.transform='translateX(200px)'
                document.querySelector(`#optionProfileBtn4`).style.transform='translateX(200px)'
                document.querySelector(`#optionProfileBtn5`).style.transform='translateX(200px)'
                document.querySelector(`#optionProfileBtn6`).style.transform='translateX(200px)'
                document.querySelector(`#optionProfileBtn0`).style.scale='0'
                document.querySelector(`#optionProfileBtn1`).style.scale='0'
                document.querySelector(`#optionProfileBtn2`).style.scale='0'
                document.querySelector(`#optionProfileBtn3`).style.scale='0'
                document.querySelector(`#optionProfileBtn4`).style.scale='0'
                document.querySelector(`#optionProfileBtn5`).style.scale='0'
                document.querySelector(`#optionProfileBtn6`).style.scale='0'
            }
        })
    if(e==='enter'){
        document.querySelector(`#profileCont`).style.backgroundColor='#171717'
        document.querySelector(`#optionProfileBtn0`).style.transform='translateX(0)'
        document.querySelector(`#optionProfileBtn1`).style.transform='translateX(0)'
        document.querySelector(`#optionProfileBtn2`).style.transform='translateX(0)'
        document.querySelector(`#optionProfileBtn3`).style.transform='translateX(0)'
        document.querySelector(`#optionProfileBtn4`).style.transform='translateX(0)'
        document.querySelector(`#optionProfileBtn5`).style.transform='translateX(0)'
        document.querySelector(`#optionProfileBtn6`).style.transform='translateX(0)'
        document.querySelector(`#optionProfileBtn0`).style.scale='1'
        document.querySelector(`#optionProfileBtn1`).style.scale='1'
        document.querySelector(`#optionProfileBtn2`).style.scale='1'
        document.querySelector(`#optionProfileBtn3`).style.scale='1'
        document.querySelector(`#optionProfileBtn4`).style.scale='1'
        document.querySelector(`#optionProfileBtn5`).style.scale='1'
        document.querySelector(`#optionProfileBtn6`).style.scale='1'
    }
}