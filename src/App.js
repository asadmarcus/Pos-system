import { useSelector } from "react-redux";
import Card from "./components/Card";
import CartItem from "./components/CartItem";
import numberFormat from "./utils/numberFormat";

export default function App() {
  const products = useSelector((state) => state.product.products);
  const carts = useSelector((state) => state.product.carts);
  const subtotal = carts.reduce(
    (totalPrice, current) => totalPrice + current.price,
    0
  );

  return (
    <div className="flex">
      <div className="h-screen w-full mr-[360px]">
        <div className="w-full h-[88px] mb-8 px-14 flex items-center justify-between">
          <p className="text-[20px] text-gray-600 font-semibold">
            <span className="text-blue-600">Wave</span> Computer
          </p>
          <input
            className="rounded border-none w-[200px] h-12 px-4 bg-gray-200 text-gray-500"
            placeholder="Cari Product"
          />
        </div>
        <div className="h-fit flex flex-wrap gap-[1.6rem] px-14 pb-12">
          {products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.img}
            />
          ))}
        </div>
      </div>
      <div className="h-screen w-[360px] bg-white fixed right-0 top-0">
        <div className="h-[88px] w-full flex items-center text-center px-6">
          <p className="text-gray-600 text-lg">Current Order</p>
        </div>
        <div className="overflow-y-scroll absolute left-0 w-full h-[calc(100vh-208px)] px-6">
          {carts.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="absolute left-0 bottom-0 w-full h-[120px] px-6 pt-4">
          <div className="flex justify-between mb-4">
            <p className="text-gray-400 text-sm">Subtotal</p>
            <p className="text-gray-700 font-semibold">{numberFormat(subtotal)}</p>
          </div>
          <button className="bg-blue-600 text-white w-full py-2 rounded hover:shadow-md hover:shadow-blue-200">Order</button>
        </div>
      </div>
    </div>
  );
}
