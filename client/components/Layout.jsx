import React from 'react';
import Header from './Header';
import HeaderInfo from './HeaderInfo';

const Layout = ({children}) => {
    
    return (
        <div className="container">
            <Header />
            <HeaderInfo />
            {children}
        </div>
    );
};

export default Layout;