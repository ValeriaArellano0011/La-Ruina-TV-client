import React from 'react'

const DrivePlayer = (props) => {
    const {idDrive} = props
    return (
        <div className='playerCont1'>
            <ul className='playerUl1'>
                <li className='playerLi1'>
                <iframe
                    style={{border: 'none'}}
                    title={idDrive}
                    src={`https://drive.google.com/file/d/${idDrive}/preview`}
                    width="100%"
                    height="100%"   
                    allowfullscreen
                    autoplay         
                    />
                </li>
            </ul>
        </div>
    );
}

export default DrivePlayer