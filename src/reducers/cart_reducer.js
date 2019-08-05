import Item1 from '../images/item1.jpg'
import Item2 from '../images/item2.jpg'
import Item3 from '../images/item3.jpg'
import Item4 from '../images/item4.jpg'
import Item5 from '../images/item5.jpg'
import Item6 from '../images/item6.jpg'
import Item7 from '../images/item7.jpg'
import Item8 from '../images/item8.jpg'
import Item9 from '../images/item9.jpg'
import Item10 from '../images/item10.jpg'
import Item11 from '../images/item11.jpg'
import Item12 from '../images/item12.jpg'
import Item13 from '../images/item13.jpg'
import Item14 from '../images/item14.jpg'
import Item15 from '../images/item15.jpg'




const initState = {
    items: [
        { id: 1, title: "Title 1", desc: "Man Tie Dye Cinza Grey T-Shirt", price: 10.9, img: Item1 },
        { id: 2, title: "Title 2", desc: "Sphynx Tie Dye Grey T-Shirt", price: 14.9, img: Item2 },
        { id: 3, title: "Title 3", desc: "Born On The Streets", price: 20, img: Item3 },
        { id: 4, title: "Title 4", desc: "Crazy Monkey Black T-Shirt", price: 60, img: Item4 },
        { id: 5, title: "Title 5", desc: "Cat Tee Black T-Shirt", price: 60, img: Item5 },
        { id: 6, title: "Title 6", desc: "Cat Tee Black T-Shirt", price: 50, img: Item6 },
        { id: 7, title: "Title 7", desc: "Man Tie Dye Cinza Grey T-Shirt", price: 90, img: Item7 },
        { id: 8, title: "Title 8", desc: "Danger Knife Grey", price: 90, img: Item8 },
        { id: 9, title: "Title 9", desc: "Tso 3D Black T-Shirt", price: 90, img: Item9 },
        { id: 10, title: "Title 10", desc: "Crazy monkey Grey T-Shirt", price: 30, img: Item10 },
        { id: 11, title: "Title 11", desc: "Black T-Shirt", price: 40, img: Item11 },
        { id: 12, title: "Title 12", desc: "Color Cat  T-Shirt", price: 90, img: Item12 },
        { id: 13, title: "Title 13", desc: "Grey Skul T-Shirt", price: 90, img: Item13 },
        { id: 14, title: "Title 14", desc: "White T-Shirt Symbolic", price: 50, img: Item14 },
        { id: 15, title: "Title 15", desc: "White T-Shirt Symbolic", price: 40, img: Item15 },
    ],
    addedItems: [],
    total: 0

}
const cartReducer = (state = initState, action) => {

    return state;

}
export default cartReducer;
