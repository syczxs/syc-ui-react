import React, { Fragment, ReactElement, ReactFragment, ReactNode } from "react"

import "./dialog.scss"
import { Icon } from "../../index"
import ReactDOM from 'react-dom';
import { makeClassNames } from "../../helpers/classes"
interface Props {
    visible: Boolean,
    footer?: Array<ReactElement>
    onClose: React.MouseEventHandler
    closeOnOverLay?: Boolean

}


const classNmaes = makeClassNames('syc-dialog')

const Dialog: React.FunctionComponent<Props> = (props) => {
    const onClickClose: React.MouseEventHandler = (e) => {
        props.onClose(e)

    }
    const onClickOverLay: React.MouseEventHandler = (e) => {
        if (props.closeOnOverLay) {
            props.onClose(e);
        }
    };
    const x = props.visible ?
        <Fragment>
            <div className="syc-overlay" onClick={onClickOverLay}></div>
            <div className={classNmaes()}>
                <header className={classNmaes('header')}>
                    111
                    <Icon name="close" className={classNmaes('close')} onClick={onClickClose}></Icon>

                </header>
                <main className={classNmaes('main')}>
                    {props.children}
                </main>
                {props.footer && props.footer.length > 0 &&
                    <footer className={classNmaes('footer')}>
                        {props.footer && props.footer.map((button, index) =>
                            React.cloneElement(button, { key: index })
                        )}
                    </footer>
                }

            </div>

        </Fragment>
        :
        null

    return (
        ReactDOM.createPortal(x, document.body)

    )

}

const modal = (content: ReactNode | ReactFragment, footer?: Array<ReactElement>, afterClose?: () => void) => {
    const onClose = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const component = <Dialog
        visible={true}
        footer={footer}
        onClose={() => {
            close();
            afterClose && afterClose();
        }}
    >{content}</Dialog>
    const div = document.createElement("div")
    document.body.append(div)
    ReactDOM.render(component, div)
    return onClose

}

const alert = (content: string) => {
    const footer = <button onClick={() => close()}>OK</button>;
    const close = modal(content, [footer]);
}

const confirm = (content: string, yes?: () => void, no?: () => void) => {
    const onYes = () => {
        close();
        yes && yes();
    };
    const onNo = () => {
        close();
        no && no();
    };
    const buttons = [
        <button onClick={onYes}>yes</button>,
        <button onClick={onNo}>no</button>
    ];
    const close = modal(content, buttons, no);
}



Dialog.defaultProps = {
    closeOnOverLay: false
};

export default Dialog
export { alert, confirm, modal };