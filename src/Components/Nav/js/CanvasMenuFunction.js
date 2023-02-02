export default function CanvasMenuFunction(){
        document.addEventListener('mouseup', function(e) {
            var container= document.querySelector('.contCanvasMenu');
                if (!container.contains(e.target))
                {   
                    document.querySelector('.contCanvasMenu').style.display='none'
                }
    })
}
