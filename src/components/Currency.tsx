const Currency = (props: { title: string; sell: number; buy: number }) => {
    return (
        <div className="bt-10 mb-5 grid h-max grid-cols-2 items-center ">
            <h4 className="pl-3 text-lg  sm:text-2xl">{props.title}:</h4>
            <ul className="flex flex-col flex-wrap justify-center ">
                <li className="text-center text-lg  sm:text-2xl ">
                    Compra: {props.buy}$
                </li>
                <li className="  text-center text-lg  sm:text-2xl ">
                    Venta: {props.sell}$
                </li>
            </ul>
        </div>
    );
};

export default Currency;
