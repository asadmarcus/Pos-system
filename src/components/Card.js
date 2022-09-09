import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../store/action/product";
import numberFormat from "../utils/numberFormat";

export default function Card({id, name, image, price}) {
    const dispatch = useDispatch()

    const addToCart = id => dispatch(addCart(id))
    
    return(
        <div onClick={() => addToCart(id)} className="w-[200px] h-[200px] rounded-md bg-white relative overflow-hidden cursor-pointer outline outline-transparent hover:outline-blue-400 hover:shadow hover:shadow-blue-400">
            <img src={image} alt={name} className="w-[80px] absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2"/>
            <div className="absolute left-0 bottom-0 w-full h-[36%] text-center">
                <p className="text-sm font-regular text-gray-400 mb-1">{name}</p>
                <p className="text-sm font-semibold text-gray-800">{numberFormat(price)}</p>
            </div>
        </div>
    )
}