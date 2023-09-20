import Gradient from "./components/Gradient"
import { useSelector } from "react-redux"
import ColorInput from "./components/inputs/ColorInput";
import AddRemoveColor from "./components/AddRemoveColor";

function App() {
  const gradientValues = useSelector(state => state.gradient)
  console.log(gradientValues);
  return <div className="relative text-slate-100 maw-w-4xl mx-auto mt-20 p-4 border border-slate-400 flex">
    <div className="w-1/2 p-4 pr-8">
      <h1 className="text-center text-xl"> Gradient Generator</h1>
      <p className="text-center mb-6">Bring style to your apps</p>
      <p className="mb-1">Colors, min 2, max 5.</p>
      <div className="flex mb-2">
        {gradientValues.colors.map(obj =>
        <ColorInput id={obj.id} color={obj.value} key={obj.id} />
        )}

      </div>
      <div className="mb-5">
        <AddRemoveColor action={"remove"} text={"-"} />
        <AddRemoveColor action={"add"} text={"+"} />
      </div>
      <p className=""> Pick and change a color position</p>
      {/* {SelectColor} */}
      <p className="">Color's position</p>
      {/* {RangeColor} */}
      <p className=""> Gradient global angle</p>
      {/* {RangeAngle} */}

      {/* {OpenModalBtn} */}
    </div>
    <Gradient/>
  </div>
}

export default App
