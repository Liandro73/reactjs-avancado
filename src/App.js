import React, { useRef } from 'react';

function App () {
  const inputRef = useRef()

  const hadleClick = () => {
    inputRef.current.focus()
    console.log('inputRef.current', inputRef.current)
  }

  return (
    <>
      <h1>Valor de count</h1>
      Foco: <input ref={inputRef} />
      <br />
      <br />
      <br />
      <button onClick={hadleClick} >Focar</button>
    </>
  )
}

export default App;