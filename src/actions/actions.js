import store from '../store'

export function greet(greeting) {
  store.dispatch({
    type: 'GREETING',
    payload: greeting
  })
}



// export const fetchproducts=()=>(dispatch)=>{
//     fetch('http://localhost:3000/products').then(res => res.json())
//       .catch(err => fetch('default.json').then(res => res.json()).then(data => 
    
//     return dispatch({type: FETCH_PRODUCTS,payload: data});

// });
// }

//more than questions it is that I need to practice : 1-functions
//2-components 3-how to use 
