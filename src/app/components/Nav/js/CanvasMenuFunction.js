import { $d } from "../../../../functions";

export default function CanvasMenuFunction(){
        document.addEventListener('mouseup', function(e) {
            var container= $d('.contCanvasMenu');
                if (!container?.contains(e.target))
                {   
                    $d('.contCanvasMenu').style.display='none'
                }
    })
}
