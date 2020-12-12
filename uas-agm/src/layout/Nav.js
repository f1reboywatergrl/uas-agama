import React, {useContext} from 'react';
import Logo from '../logo.svg'
import './bootstrap.css'
import {Dropdown,SplitButton} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';



//
const Nav = () => {

    return(    
      <AppBar style={{position:"static"}}>
        <Toolbar style={{background:"#041624",padding:"0.25%",display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:"0.5%",position:"fixed",top:0,width:"100%",zIndex:1,height:"13%"}}>
          <a href="/"><img className="App-logo" id="logo" src={Logo} width="60%" height="60%" alt="Home"/></a>
          <span style={{justifyContent:"center"}}><img src="https://kemahasiswaan.itb.ac.id/assets/berkas_kegiatan/80_logo.png" className="kmk" width="12%" height="12%" style={{marginRight:"1%"}} ></img><img src="https://seeklogo.com/images/I/institut-teknologi-bandung-logo-7B8F816823-seeklogo.com.png"className="itb" width="12%" height="12%"></img> </span>
          <nav class="navbar">                               
              <Dropdown style={{width:"20%",height:"20%"}}>
                  <Dropdown.Toggle variant="primary" id="dropdown-split-variants-primary" size="lg">
                      Menu
                  </Dropdown.Toggle> 
                  <Dropdown.Menu>                 
                    <Dropdown.Item href="/">Home</Dropdown.Item>
                    <Dropdown.Item href="/about">About</Dropdown.Item>
                    
                    <Dropdown.Divider/>
                    <Dropdown.Header>Isi</Dropdown.Header>
                    <Dropdown.Item href="/passion">Pemilihan Jurusan</Dropdown.Item>    
                    <Dropdown.Item href="/jurusan">Overview Jurusan</Dropdown.Item>    
                    <Dropdown.Item href="/arsikom">II2130</Dropdown.Item> 
                    <Dropdown.Item href="/ompi">TI3005</Dropdown.Item>
                    <Dropdown.Item href="/penutup">Penutup</Dropdown.Item>                                
                  </Dropdown.Menu>                   
              </Dropdown>
          </nav>           
        </Toolbar>

      </AppBar>
    )
}
//
export default Nav;
