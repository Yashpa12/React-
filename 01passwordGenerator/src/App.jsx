import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [number, setNumber] = useState(false);
  const [CharAllow, setcharAllow] = useState(false);
  const [password, setPassword] = useState("");

  // useRef

  const PasswordRef = useRef(null)

const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (number) {
          str = str + "0123456789";
        }
        if (CharAllow) {
          str = str + "!@#$%^&*(){}_-+/";
        }

        for (let i = 0; i < length; i++) {
          let char = Math.floor(Math.random() * str.length + 1);
          pass += str.charAt(char)
        }
        setPassword(pass);
      },
      [length, number, CharAllow, password])


useEffect (()=>{
  passwordGenerator()
},[length, number, CharAllow])

const cpoypasswordtoclick = useCallback (()=>{
  PasswordRef.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-9 my-8 text-black-500 bg-yellow-500">
        <h1 className="text-black font-bold text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="ouline-none flex-row w-full py-1 px-3"
            placeholder="password "
            ref={PasswordRef}
          />
          <button onClick={cpoypasswordtoclick} className=" bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex item-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              value={length}
              min={6}
              max={25}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="">length : {length}</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="Numberunit">Number</label>
          
          </div>
          <div className="  flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={CharAllow}
              onChange={() => {
                setcharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="Numberunit">Charcter</label>
            </div>
          </div>

        </div>
    </>
  );
}

export default App;
