import React, {createContext, useContext, useState,useEffect} from 'react';
import {toast} from 'react-hot-toast'

const Context = createContext();

export const StateContext =({children}) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuan, setTotalQuan] = useState(0);
    const [qty, setQty] = useState(1);

    let foundProduct;
    let index;

    const onAdd = (produkt,quantity) =>{
        const checkProduktInCart = cartItems.find((item) => item._id === produkt._id);
        
        setTotalPrice((prevTotalPrice) => prevTotalPrice + produkt.cena * quantity);
        setTotalQuan((prevTOtalQuan) => prevTOtalQuan + quantity);
        
        if(checkProduktInCart) {
            const updatedCartItems = cartItems.map((cartProduct) => {
                if(cartProduct._id === produkt._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })
            setCartItems(updatedCartItems);
            
        }else {
            produkt.quantity = quantity;

            setCartItems([...cartItems,{...produkt}]);
        }

        toast.success(`${qty} ${produkt.nazov} bolo pridané do košíka.`);
    }

    const onRemove = (produkt) => {
        foundProduct = cartItems.find(item => item._id === produkt._id)
        const currCartItem = cartItems.filter(item => item._id !== produkt._id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.cena * foundProduct.quantity);
        setTotalQuan(prevTotalQuan => prevTotalQuan - foundProduct.quantity);
        setCartItems(currCartItem);

    }

    const toggleCartItemQuantity = (id, action) => {
        foundProduct = cartItems.find(item => item._id === id)
        index = cartItems.findIndex(product => product._id === id)
        const currCartItem = cartItems.filter(item => item._id !== id)
        
          if(action === 'inc'){
                currCartItem.splice(index, 0, {...foundProduct, quantity: foundProduct.quantity+1})
                setCartItems(currCartItem)
                setTotalPrice(prevTotalPrice => prevTotalPrice + foundProduct.cena)
                setTotalQuan(prevTotalQuantities => prevTotalQuantities + 1)
          }else if(action === 'dec'){
              if(foundProduct.quantity > 1){
                currCartItem.splice(index, 0, {...foundProduct, quantity: foundProduct.quantity-1})
                setCartItems(currCartItem)
                setTotalPrice (prevTotalPrice => prevTotalPrice - foundProduct.cena)
                setTotalQuan(prevTotalQuantities => prevTotalQuantities - 1)
              }
          }
        }

    const incQty = () => {
        setQty((prevQty) => prevQty +1);
    }

    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty - 1 < 1) return 1;
            
            return prevQty -1
    
        }
        );
    }

    return(
        <Context.Provider
            value={{
                showCart,
                setShowCart,
                cartItems,
                totalPrice,
                totalQuan,
                qty,
                incQty,
                decQty,
                onAdd,
                toggleCartItemQuantity,
                onRemove
                
            }}
        >
            {children}
        </Context.Provider>

    )

}

export const useStateContext = () => useContext(Context);