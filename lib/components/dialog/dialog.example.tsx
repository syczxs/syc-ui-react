import React, { useState } from 'react'
import Dialog, { alert, confirm, modal } from './dialog';


export default function () {

  const [x, setX] = useState(false);

  const openDialog=()=>{
    const close=modal(
      <>
      <h1>你好</h1>
      <button onClick={()=>{close()}}>1</button>
      </>)

  }



  return (
    <div>
      <button onClick={() => { setX(!x) }}>show</button>
      <Dialog visible={x}
        footer={[<div>11</div>, <button>按钮</button>]}
        onClose={() => { setX(!x) }}
        closeOnOverLay={true}

      >
        <div>1</div>

      </Dialog>


      <button onClick={() => { alert("内容") }}>alert</button>
      <button onClick={() => { confirm("内容", () => { console.log("confirm") }) }}>confirm</button>
      <button onClick={openDialog}>modal</button>

    </div>
  );

}