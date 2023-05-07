const Currency = (props: { title: string; sell: number; buy: number }) => {
    return (
        <div className="bt-10 mb-5 grid h-max grid-cols-2 items-center ">
            <h4 className="pl-3 text-2xl ">{props.title}:</h4>
            <ul className="flex flex-col flex-wrap justify-center ">
                <li className="text-center text-xl ">Compra: {props.buy}$</li>
                <li className="  text-center text-xl ">Venta: {props.sell}$</li>
            </ul>
        </div>
    );
};

export default Currency;
