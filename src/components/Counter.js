export default function Counter({inc, dec}) {
    if(inc) {
        return <div onClick={inc} className={style.btn}>+</div>
    } else {
        return <div onClick={dec} className={style.btn}>-</div>
    }
}

const style = {
    btn: "bg-gray-100 text-slate-500 text-[14px] flex items-center justify-center font-semibold w-5 text-center rounded-[3px] cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-[50ms] ease-in"
}