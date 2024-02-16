import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { search } from '../redux/restuarantSlice';


function Header() {
  const dispatch=useDispatch();
    return (
   <>
   <Link to={'/'} style={{textDecoration:"none"}}>
   <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <img
            height={"70px"}
            width={"100px"}
            src="https://th.bing.com/th/id/OIP.U75lKSW4AFwCQB3r2s-7xgAAAA?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""></img>
          <Navbar.Brand href="#home">Palaram</Navbar.Brand>
        <input
        onChange={(e)=>dispatch(search(e.target.value))}
        type="text"  className='form-control w-25' placeholder='search by neibghood' />
        </Container>
      </Navbar>
   
   </Link>

   
   </>
  )
}

export default Header
