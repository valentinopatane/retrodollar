import { useRef, useState } from "react";

type ResultType = {
    r_dblue: number;
    r_doficial: number;
    r_eblue: number;
    r_eoficial: number;
};
const Calculator = (props: {
    dblue: number;
    doficial: number;
    eblue: number;
    eoficial: number;
}) => {
    const [ars, setArs] = useState<number>(0);
    const [result, setResult] = useState<ResultType>({
        r_dblue: 0,
        r_doficial: 0,
        r_eblue: 0,
        r_eoficial: 0,
    });
    const ref = useRef<HTMLInputElement>(null);
    const handleChange = () => {
        setArs(Number(ref.current?.value));
    };
    const calculate = () => {
        setResult({
            r_dblue: ars / props.dblue,
            r_doficial: ars / props.doficial,
            r_eblue: ars / props.eblue,
            r_eoficial: ars / props.eoficial,
        });
    };
    return (
        <div className="items-between mt-1 flex h-80 w-full flex-col items-center font-mono text-green-600 sm:mt-0 lg:h-full lg:w-1/2 lg:justify-between">
            <div className="mb-5 flex h-12 w-full items-center justify-evenly sm:mb-0">
                <input
                    min={0}
                    className="h-4/5 w-1/2 rounded-xl border border-green-600 bg-transparent p-5 text-xs outline-0 sm:text-sm"
                    type="number"
                    placeholder="Introducir ARS"
                    ref={ref}
                    onChange={handleChange}
                />
                <button
                    className="lg:text-md h-2/3 w-1/4 rounded-xl border border-green-600 text-xs hover:bg-green-600 hover:text-white"
                    onClick={calculate}
                >
                    Calcular
                </button>
            </div>
            <ul className="flex h-max w-11/12 flex-col justify-center text-xl lg:h-full xl:ml-16">
                {result.r_dblue !== 0 ? (
                    <>
                        <li className="mb-6 text-sm lg:text-xl">
                            Dólares blue: {result.r_dblue.toFixed(2)} $
                        </li>
                        <li className="mb-6 text-sm lg:text-xl">
                            Dólares oficiales: {result.r_doficial.toFixed(2)} $
                        </li>

                        <li className="mb-6 text-sm lg:text-xl">
                            Euros blue: {result.r_eblue.toFixed(2)} $
                        </li>
                        <li className="mb-6 text-sm lg:text-xl">
                            Euros oficiales: {result.r_eoficial.toFixed(2)} $
                        </li>
                    </>
                ) : null}
            </ul>
        </div>
    );
};

export default Calculator;
