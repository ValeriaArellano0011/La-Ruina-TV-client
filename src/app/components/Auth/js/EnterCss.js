import { $d } from "../../../../functions"

export const EnterCss = () => {
    return(
    $d('body').style.backgroundColor= `#000000`,
    $d('body').style.backgroundPosition="center",
    $d('body').style.overflowX= 'hidden',
    $d('body').style.height= '100vh'
)}
