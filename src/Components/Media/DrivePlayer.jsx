import React from 'react'

const DrivePlayer = (props) => {
    const {idDrive} = props
    return (
        <div className='playerCont1'>
            <ul className='playerUl1'>
                <li className='playerLi1'>
                <iframe
                    title={idDrive}
                    src={`https://drive.google.com/file/d/${idDrive}/preview`}
                    width="640"
                    height="480"                
                    />
                </li>
            </ul>
        </div>
    );
}

export default DrivePlayer