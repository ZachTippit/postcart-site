import React from 'react'
import { SplashCover, SellingPoints, NewsletterSignUp, ProductCollections } from './Subcomponents/'

const Home = () => {

    return (
        <>
            <SplashCover />
            <SellingPoints isBuyer={true} />
            <NewsletterSignUp />
            <SellingPoints isBuyer={false} />
            <ProductCollections />
        </>
 
    )
}

export default Home;