import products from "../utils/data/products"

export const stateHolder={
    SetCategory:"Set-Category",
    SetAll:"Set-All",
    SetCart:"Set-Cart",
    RemoveCart:"Remove-Cart",
    SetUser:"Set-User",
    RemoveUser:"Remove-User",
    SetHam:"Set-HamBurger",
    SetDisplay:"Set-Display"
}
export const reducer=(state,action)=>{
  if(action.type===stateHolder.SetCategory){
    return{
        ...state,
        category:products.filter((prod)=>prod.category===action.category)
    }
  }
  else if(action.type===stateHolder.SetAll){
    return{
        ...state,
        category:action.category
    }
  }
  else if(action.type===stateHolder.SetCart){
    return{
        ...state,
        cart:[...state.cart,action.cart]
    }
  }
  else if(action.type===stateHolder.RemoveCart){
    return{
        ...state,
        cart:state.cart.filter((item)=>item!==action.cart)
    }
  }
  else if(action.type===stateHolder.SetUser){
    return{
        ...state,
        user:action.user
    }
  }
  else if(action.type===stateHolder.RemoveUser){
    return{
        ...state,
        user:action.user
    }
  }
  else if(action.type===stateHolder.SetHam){
    return{
        ...state,
        hamBurger:action.ham
    }
  }
  else if(action.type===stateHolder.SetDisplay){
    return{
        ...state,
        display:action.display
    }
  }
}