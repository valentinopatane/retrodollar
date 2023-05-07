import { useEffect, useState } from "react";
import Currency from "./components/Currency";
import Calculator from "./components/Calculator";

interface DolarTypes {
    blue: { value_avg: number; value_sell: number; value_buy: number };
    blue_euro: { value_avg: number; value_sell: number; value_buy: number };
    last_update: string;
    oficial: { value_avg: number; value_sell: number; value_buy: number };
    oficial_euro: { value_avg: number; value_sell: number; value_buy: number };
}

function App() {
    const [values, setValues] = useState<DolarTypes>({
        blue: { value_avg: 0, value_sell: 0, value_buy: 0 },
        blue_euro: { value_avg: 0, value_sell: 0, value_buy: 0 },
        last_update: "",
        oficial: { value_avg: 0, value_sell: 0, value_buy: 0 },
        oficial_euro: { value_avg: 0, value_sell: 0, value_buy: 0 },
    });
    useEffect(() => {
        fetch("https://api.bluelytics.com.ar/v2/latest")
            .then((res) => res.json())
            .then((res) => setValues(res));
    }, []);
    return (
        <>
            <main className="flex h-max w-full flex-col items-center justify-center bg-stone-900 py-10 lg:h-screen lg:py-0">
                <section className="pipback flex h-max w-4/5 flex-col items-center justify-center rounded-xl p-12 lg:h-3/4 lg:flex-row">
                    <Calculator
                        dblue={values.blue.value_sell}
                        doficial={values.oficial.value_sell}
                        eblue={values.blue_euro.value_sell}
                        eoficial={values.oficial_euro.value_sell}
                    />
                    <div className="h-full w-full  font-mono text-green-600 lg:w-1/2">
                        <h3 className="text-center text-3xl font-bold underline">
                            Cotizaciones
                        </h3>
                        <h6 className="mb-5 mt-2 text-center">
                            Fecha: {values?.last_update.substring(0, 10)}
                        </h6>
                        <Currency
                            title="Dólar Blue"
                            sell={values.blue.value_sell}
                            buy={values.blue.value_buy}
                        />
                        <Currency
                            title="Dólar Oficial"
                            sell={values.oficial.value_sell}
                            buy={values.oficial.value_buy}
                        />
                        <Currency
                            title="Euro Blue"
                            sell={values.blue_euro.value_sell}
                            buy={values.blue_euro.value_buy}
                        />
                        <Currency
                            title="Euro Oficial"
                            sell={values.oficial_euro.value_sell}
                            buy={values.oficial_euro.value_buy}
                        />
                    </div>
                </section>
                <section className="mt-10 flex h-10 w-4/5 items-center justify-around">
                    <div className="w-1/3 text-center">
                        <span className="reddot"></span>
                    </div>
                    <div className="flex h-full w-2/3 items-center justify-center rounded-3xl bg-gray-300 lg:w-1/3 ">
                        <h1 className="font-mono font-bold text-emerald-900">
                            RetroDolar - Dolar Hoy
                        </h1>
                    </div>
                    <div className="hidden w-1/3 items-center justify-evenly lg:flex">
                        <span className="square"></span>
                        <span className="square"></span>
                        <span className="square"></span>
                    </div>
                </section>
            </main>
        </>
    );
}

export default App;
