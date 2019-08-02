import Item1 from '../image/item1.jpg'
import Item2 from '../image/item2.jpg'
import Item3 from '../image/item3.jpg'
import Item4 from '../image/item4.jpg'
import Item5 from '../image/item5.jpg'
import Item6 from '../image/item6.jpg'
import Item7 from '../image/item7.jpg'
import Item8 from '../image/item8.jpg'
import Item9 from '../image/item9.jpg'
import Item10 from '../image/item10.jpg'
import Item11 from '../image/item11.jpg'
import Item12 from '../image/item12.jpg'
import Item13 from '../image/item13.jpg'
import Item14 from '../image/item14.jpg'
import Item15 from '../image/item15.jpg'
import Item16 from '../image/item16.jpg'




const initState = {
    items: [
        {id:1,title:'Sphynx Tie Dye Grey T-Shirt', desc: "14/15 s/nº", price:10.9,img:Item1},
        {id:2,title:'', desc: " ", price:14.9,img: Item2},
        {id:3,title:'x', desc: "x",price:120,img: Item3},
        {id:4,title:'x', desc: "x", price:260,img:Item4},
        {id:5,title:'x', desc: "x", price:160,img:Item5},
        {id:6,title:'x', desc: "x",price:90,img: Item6},
        {id:7,title:'x', desc: "x",price:90,img: Item7},
        {id:8,title:'x', desc: "x",price:90,img: Item8},
        {id:9,title:'x', desc: "x",price:90,img: Item9},
        {id:10,title:'x', desc: "x",price:90,img: Item10},
        {id:11,title:'x', desc: "x",price:90,img: Item11},
        {id:12,title:'x', desc: "x",price:90,img: Item12},
        {id:13,title:'x', desc: "x",price:90,img: Item13},
        {id:14,title:'x', desc: "x",price:90,img: Item14},
        {id:15,title:'x', desc: "x",price:90,img: Item15},
        {id:16,title:'x', desc: "x",price:90,img: Item16},
    ],
    addedItems:[],
    total: 0

}
const cartreducer= (state = initState,action)=>{
    
    return state;

}
export default cartreducer;
