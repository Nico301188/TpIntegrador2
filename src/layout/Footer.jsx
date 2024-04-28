import React from 'react'
import FooterContact from '../components/FooterContat'

function Footer() {
    return (
        <footer className='footer__container'>
            <div className='footer__wrapper'>
                <h2>Tienda online</h2>
                <FooterContact />
                <p>Copyrigth - 2024</p>
            </div>
        </footer>
    )
}

export default Footer