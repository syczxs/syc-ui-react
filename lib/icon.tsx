import React from "react";
import xiaomi from "./icons/xiaomi.svg"

console.log(xiaomi)

interface IconProps {
    name: string;
}
const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <span>{props.name}</span>
    )

}

export default Icon