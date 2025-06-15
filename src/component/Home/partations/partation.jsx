import React from 'react'
import { Button, Partation } from './partation_style'
import partation_logic from './partation_logic';
import { Link } from 'react-router-dom';



function Partations() {
const {UiData} = partation_logic();
  return (
    <>
      <Partation>
            <div className='container'>
                <div className='row'>
                    {UiData}
                </div>
                <div className='d-flex justify-content-center align-items-center w-100'>
                    <Button><Link to='/Collection'>VIEW ALL</Link></Button>
                </div>
            </div>
      </Partation>
    </>
  )
}

export default Partations
