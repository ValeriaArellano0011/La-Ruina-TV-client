import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RequestProfile from '../../Admin/Requests/RequestProfile'
import { getAllLikes } from '../../middlewares/redux/actions'

export const Favorites = () => {

  const auth = localStorage.getItem('auth');
  const userId = auth ? JSON.parse(auth).userId : null;
  const userLikes = useSelector(state => state.allUserLikes)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllLikes(userId))
    console.log('ALL USER LIKES: ',userLikes)
  }, [dispatch])

  return (
    <div>
      <div className='divProfile'>
        <div className='navFixed' ></div>
            <RequestProfile />
            <div>
              
            </div>
      </div>
      
    </div>
  )
}
