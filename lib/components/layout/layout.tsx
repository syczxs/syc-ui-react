import React, { ReactElement } from "react";
import { makeClassNames } from "../../helpers/classes"
import Aside from './aside';
import "./layout.scss"



interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>

}

const classNames = makeClassNames('syc-dialog')

const Header: React.FunctionComponent<Props> = (props) => {
    const { className, ...rest } = props

    const children = props.children as Array<ReactElement>
    const hasAside = children.length && children.reduce((result, node) => result || node.type === Aside, false)
    if (children.length) {
        (props.children as Array<ReactElement>).map((node => {
            console.log(node)
        }))

    }
    return (
        <div className={[classNames('', { extra: className }), className].join(" ")} {...rest}>{props.children}</ div >
    )

}
export default Header