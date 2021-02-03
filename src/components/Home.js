import React from 'react';
import {Navigation} from './Navigation'
import {Menu} from './Menu'
import {Cover} from './Cover'
import {Products} from './Products'
import {Contact} from './Contact'
import {Breaker} from './Breaker'
import {Footer} from './Footer'
export const Home = (props) => {

    return (
        <>
			<Navigation />
			<Menu />
			<Cover />
			<Breaker />
			<Products />
			<Breaker />
			<Contact />
			<Footer />

			{/* <section className="section-4 has-text-centered container">
				Copyright © 2021 Developed by Quanta Devs.
			</section> */}
        </>
    )
}
