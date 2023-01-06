export default function profileMenuCss(e){
    if(e==='enter'){
        document.querySelector(`#optionProfileBtn1`).style.transform='translateX(0)'
        document.querySelector(`#optionProfileBtn2`).style.transform='translateX(0)'
        document.querySelector(`#optionProfileBtn3`).style.transform='translateX(0)'
        document.querySelector(`#optionProfileBtn1`).style.scale='1'
        document.querySelector(`#optionProfileBtn2`).style.scale='1'
        document.querySelector(`#optionProfileBtn3`).style.scale='1'

    }
    if(e==='leave'){
        document.querySelector(`#optionProfileBtn1`).style.transform='translateX(200px)'
        document.querySelector(`#optionProfileBtn2`).style.transform='translateX(200px)'
        document.querySelector(`#optionProfileBtn3`).style.transform='translateX(200px)'
        document.querySelector(`#optionProfileBtn1`).style.scale='0'
        document.querySelector(`#optionProfileBtn2`).style.scale='0'
        document.querySelector(`#optionProfileBtn3`).style.scale='0'

    }
}