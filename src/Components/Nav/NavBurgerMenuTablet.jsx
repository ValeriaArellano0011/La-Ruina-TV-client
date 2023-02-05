import menuIcon from '../../design/menu-icon.png'

export const NavBurgerMenuTablet = () => {
    return (
        <div className="navBurgerTabletCont">
            <img 
                className='menuIcon' 
                onClick={()=>{document.querySelector('.contCanvasMenu').style.display='flex'}}
                src={menuIcon} 
                alt="menu" 
                height='30px' />
        </div>
    )
}