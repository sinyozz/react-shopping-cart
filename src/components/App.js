import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../styles/index.css'
// import '../styles/cart.css'

class Home extends Component {
  render() {
    let itemList = this.props.items.map(item => {
      return (
        <div className="card">
          <div className="image-card">
            <img src={item.img} alt={item.title} />
          </div>
          <div>
            <span>{item.desc}</span>
          </div>
          <div>
            <span><hr width="20%" /></span>
          </div>
          <div>
            <span><center>{(item.price).toFixed(2)}</center></span>
          </div>
          <div className="atc-outline">
            <center>
              <div className="add-to-cart" onClick={this.addToCart}>ADD TO CART</div>
            </center>

          </div>
        </div>
      )
    })
    return (
      <div className="page">
        <div className="side-bar">
          <span>Sizes</span>
        </div>
        <div className="main">
          <div className="top">
            <span>16 Product(s) found.</span>
          </div>
          <div className="bottom">
            {itemList}
          </div>
        </div>
        <div className="cart-icon">
          <span>Cart Icon</span>
        </div>
      </div>
    )
  }

  addToCart() {
    console.log()
  }
}



const mapStateToProps = (state) => {
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
