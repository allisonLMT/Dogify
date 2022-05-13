import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageHome from '../pages/PageHome';
import PageFavorites from '../pages/PageFavorites';
import PageAbout from '../pages/PageAbout';
import PageNotFound from '../pages/PageNotFound';



function AppRouter() {

    return (
        <div className="App">
            <Routes>
                <Route path='/' exact element={<PageHome />}/>
                <Route path='about' element={<PageAbout />} />
                <Route path='favorites' element={<PageFavorites />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>

        </div>
    );

}

export default AppRouter;