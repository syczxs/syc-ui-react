import React from "react";
import ReactDom from "react-dom"
import Icon from "./icon/icon"

const fn: React.MouseEventHandler<Element> = (e) => {
   console.log(e)

}
// const fn = (e: React.MouseEvent) => {
//    console.log(e)

// }


ReactDom.render(
   <div>
      <Icon name="xiaomi" onClick={fn}  />
      {/* <Icon name="apple" /> */}
   </div>, document.querySelector('#root'))

