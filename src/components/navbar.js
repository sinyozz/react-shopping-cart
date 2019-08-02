import React from 'react';
import {link} from 'react-router-dom'


const Navbar= ()=>{
    return(
<nav class Name="nav-wrapper">
    <div class="container">
 <link to ="/" className="brand-logo">shopping</link>
     
       <ul className="right">
    
      <li><link to= "/">shop</link></li>
      <li> <link to="/">My cart</link></li>
       <li><link to="/cart"><i className="mateiral-icons">shopping_cart</i></link></li>

       </ul>





 </div>


</nav>


    )
}

export default Navbar;