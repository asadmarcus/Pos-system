import { useState } from "react";
import Counter from "./Counter";
import { inc, dec, removeItem } from "../store/action/product";
import { useDispatch } from "react-redux";
import numberFormat from "../utils/numberFormat";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const increment = (id) => {
    setCount(count + 1);
    dispatch(inc(id));
  };
  const descrement = (id) => {
    setCount(count - 1);
    if (count > 1) {
      dispatch(dec(id));
    } else {
      dispatch(removeItem(id));
    }
  };
  return (
    <div className="flex gap-[16px] mb-8">
      <div className="h-14 w-14 bg-gray-200 rounded relative">
        <img src={item.img} className="w-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
      </div>
      <div className="w-[calc(100%-68px)]">
        <p className="capitalize text-gray-500 text-md mb-2">{item.name}</p>
        <div className="flex justify-between">
          <div className="flex justify-between p-[2px] w-[80px] border border-gray-200 rounded">
            <Counter inc={() => increment(item.id)} />
            <p className="text-gray-500"><span className="text-[12px] text-gray-300">x</span>{count}</p>
            <Counter dec={() => descrement(item.id)} />
          </div>
          <p className="text-gray-700">{numberFormat(item.price)}</p>
        </div>
      </div>
    </div>
  );
};