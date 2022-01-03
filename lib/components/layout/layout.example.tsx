import React from "react";
import Layout from "./layout"
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';



export default function () {
    return (
        <div>
            <Layout style={{height: 500, width: 500}} className="hi">
                <Header >header</Header>
                <Content >content</Content>
                <Footer >footer</Footer>
            </Layout>
        </div>
    )

}