import React from 'react';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';


function PageAbout() {

    return (
        <div className='page-container'>
            <NavMenu page={'about'}/>
                <div className='content-wrap'>
                    <h2>about</h2>
                </div>
            <Footer />
            
        </div>
    )
}

export default PageAbout;