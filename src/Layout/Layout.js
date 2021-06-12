import Header from '../components/Header';
import { Fragment } from 'react';

const Layout = (props) => {
    return <Fragment>
        <Header />
        {props.children}
    </Fragment>
}

export default Layout;