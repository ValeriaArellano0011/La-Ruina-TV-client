import s from './css/YtSubscribeButton.module.css'

export const YtSubscribeButton = () => {
    return(
        <div className={s.canvasYtSubBtn}>
            <script src="https://apis.google.com/js/platform.js"></script>
            <div className="g-ytsubscribe" data-channelid="UCD8dZZ0aM2yHj4t80abSZZA" data-layout="default" data-count="default"></div>
        </div> 
    )
}