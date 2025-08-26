import { useSelector, useDispatch } from "react-redux";
import { digit, setOperator, equals, clear } from "./store";

export default function App() {
  const display = useSelector((s) => s.calc.display);
  const dispatch = useDispatch();

  return (
    <div className="w-60 mx-auto mt-12 font-sans">
      {/* Display Screen */}
      <h2 className="bg-gray-900 text-lime-400 p-4 rounded-lg text-right mb-4 text-2xl font-mono">
        {display}
      </h2>

      {/* Calculator Grid */}
      <div className="grid grid-cols-4 gap-3">
        {/* Digits */}
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((n) => (
          <button
            key={n}
            onClick={() => dispatch(digit(String(n)))}
            className="bg-gray-200 hover:bg-gray-300 text-black py-3 rounded-lg text-lg font-semibold"
          >
            {n}
          </button>
        ))}

        {/* Operators */}
        <button
          onClick={() => dispatch(setOperator("+"))}
          className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-lg font-bold"
        >
          +
        </button>
        <button
          onClick={() => dispatch(setOperator("-"))}
          className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-lg font-bold"
        >
          -
        </button>
        <button
          onClick={() => dispatch(setOperator("*"))}
          className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-lg font-bold"
        >
          ×
        </button>
        <button
          onClick={() => dispatch(setOperator("/"))}
          className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-lg font-bold"
        >
          ÷
        </button>

        {/* Equals */}
        <button
          onClick={() => dispatch(equals())}
          className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-bold col-span-2"
        >
          =
        </button>

        {/* Clear */}
        <button
          onClick={() => dispatch(clear())}
          className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-lg font-bold col-span-2"
        >
          C
        </button>
      </div>
    </div>
  );
}
