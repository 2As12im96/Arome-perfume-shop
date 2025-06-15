import React from 'react'
import { AsidebarContainer } from './Aside.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl, faPalette, faShop, faUsers } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

function Aside({isActive , setIsActive}) {
  const handleRemoveList = () => {
        setIsActive(false);
  };
  return (
    <AsidebarContainer className={isActive ? 'active' : ''}>
      <div className="container">
        <h3 className='mt-2 mb-4'>Quick Links</h3>
        <ul className='m-0 p-0'>
          <NavLink to='/Overview' className='d-block w-100 text-capitalize' onClick={()=> handleRemoveList()}>
            <li className='d-flex mt-3 mb-3'>
              <FontAwesomeIcon icon={faPalette} />
              <span className='d-block'>Overview</span>
            </li>
          </NavLink>
          <NavLink to='/Admin-products' className='d-block w-100 text-capitalize' onClick={()=> handleRemoveList()}>
            <li className='d-flex mt-3 mb-3'>
              <FontAwesomeIcon icon={faShop} />
              <span className='d-block'>products</span>
            </li>
          </NavLink>
          <NavLink to='/Admin-Orders' className='d-block w-100 text-capitalize' onClick={()=> handleRemoveList()}>
            <li className='d-flex mt-3 mb-3'>
              <FontAwesomeIcon icon={faListUl} />
              <span className='d-block'>orders</span>
            </li>
          </NavLink>
          <NavLink to='/Admin-users' className='d-block w-100 text-capitalize' onClick={()=> handleRemoveList()}>
            <li className='d-flex mt-3 mb-3'>
              <FontAwesomeIcon icon={faUsers} />
              <span className='d-block'>users</span>
            </li>
          </NavLink>
        </ul>
      </div>
    </AsidebarContainer>
  )
}

export default Aside
