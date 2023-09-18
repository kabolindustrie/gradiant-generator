import Gradient from "./components/Gradient"
function App() {
  return <div className="relative text-slate-100 maw-w-xl mx-auto mt-20 p-4 border border-slate-400 flex">
    <div className="w-1/2 p-4 pr-8">
      <h1 className="text-center text-xl"> Gradient Generator</h1>
      <p className="text-center mb-6">Bring style to your apps</p>
      <p className="mb-1">Colors, min 2, max 5.</p>
      <div className="flex mb-2">
        <input type="color" />
        <input type="color" />
      </div>
      <div className="mb-5">
        <button>+</button>
        <button>-</button>
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
