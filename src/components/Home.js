import React, {useState, useContext, useEffect} from 'react';
import FadeIn from 'react-fade-in';
import {Badge} from 'react-bootstrap'

import {Navigation} from './Navigation'
import {Cover} from './Cover'
import {Products} from './Products'
import {Contact} from './Contact'
import {Breaker} from './Breaker'
import {Offers1} from './Offers1'
import {Offers2} from './Offers2'
import {Offers3} from './Offers3'
import {Offers4} from './Offers4'
import {Footer} from './Footer'

export const Home = (props) => {
	const [selectedMenu, setSelectedMenu] = useState(0);
	const changeMenuState = (menu) => {
		if(selectedMenu == menu){
			setSelectedMenu(0);
		} else {
			setSelectedMenu(menu);
		}
		console.log('State changed to : ' + menu);
	}
	const menuList = [0, 'Offers', "Cigarillos","Vapes","E-Lequids"]
    return (
        <>
			<Navigation />
			<div className="container text-center my-3">
				<Badge variant="success" className={`menuBadge ${selectedMenu == 1 ? `activeMenu` : ``}` } onClick={() => changeMenuState(1)}>Offers</Badge>{' '}
				<Badge variant="success" className={`menuBadge ${selectedMenu == 2 ? `activeMenu` : ``}` } onClick={() => changeMenuState(2)}>Cigarillos</Badge>{' '}
				<Badge variant="success" className={`menuBadge ${selectedMenu == 3 ? `activeMenu` : ``}` } onClick={() => changeMenuState(3)}>Vapes</Badge>{' '}
				<Badge variant="success" className={`menuBadge ${selectedMenu == 4 ? `activeMenu` : ``}` } onClick={() => changeMenuState(4)}>E-Lequids</Badge>{' '}
			</div>
			{selectedMenu == 0 && 
			<FadeIn>
				<Cover />
				<Breaker />
				<Products />
			</FadeIn> || 
			selectedMenu == 1 && 
			<FadeIn>
				<Offers1 />
			</FadeIn> || 
			selectedMenu == 2 && 
			<FadeIn>
				<Offers2 />
			</FadeIn> || 
			selectedMenu == 3 && 
			<FadeIn>
				<Offers3 />
			</FadeIn> || 
			selectedMenu == 4 && 
			<FadeIn>
				<Offers4 />
			</FadeIn>
			}
			
			<Breaker />
			{/* <Contact /> */}
			<Footer />
        </>
    )
}
