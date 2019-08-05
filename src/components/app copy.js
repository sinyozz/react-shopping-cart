import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../styles/index.css'
// import '../styles/cart.css'

 class Home extends Component{
   render() {
       let itemList = this.props.items.map(item => {
        return (
          <div className="card" key={item.id}>
            <div className="card-image">
              <img src={item.img} alt={item.title}/>
              <span className="card-title">
                {item.title}
              </span>
              <span to="/" className="btn-floating halfway-fab waves-effect waves-light red">
                <i>add</i>
              </span>
            </div>
            <div className="card-content">
              <p>{item.desc}</p>
              <p><b>Price: ${item.price}</b></p>
            </div>
          </div>
        )
       })
       return(
        <div className="container">
            <h3 className="center">Our items</h3>
            <div className="box">
                {itemList}
            </div>
        </div>
    )
   }

}

const mapStateToProps = (state)=>{
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(Home)





// //import React from 'react'
// import 'normalize.css/normalize.css'
// import '../styles/App.css'
// import '../styles/Cart.css'
// import { Provider } from 'react-redux'
// import store from '../store'
// //import MaterialIcons from "material-icons-react"
// //import {setToggle} from "./Cart"

// import Cart from './Cart'
// import Home from './Home'

// export default props => {





//   return (
//     <Provider store={store}>
//       <div id="container">
//           <Home />
//           <Cart />
//       </div>
//     </Provider>
//   )
// }
