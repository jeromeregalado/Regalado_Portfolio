import React from 'react';
import {MDBFooter, MDBContainer, MDBIcon, MDBBtn} from 'mdb-react-ui-kit';

const FooterNavBar = () => {
  return (
    <MDBFooter className='text-center text-white fixed-bottom' style={{ backgroundColor: '#21081a' }}>
      <MDBContainer className='p-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
      </MDBContainer>
      

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      <p className="footerFormat">Jerome Regalado &#169; {new Date().getFullYear()}</p>
      </div>
    </MDBFooter>
  );
}

export default FooterNavBar