import products from "../utils/data/products";

export const initialState={
    category:products,
    cart:[],
    user:JSON.parse(localStorage.getItem('user-credential')),
    hamBurger:false,
    display:{
        transfrom:"translateY(0%)"
    }
}