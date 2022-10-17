import React from 'react'
import './footer.css'
import logo from '../../images/emi-footer-r.png'

export default function footer() {
  return (
    <footer>
        <div id='logo'>
        <img id='img-logo' src={logo} />
        </div>
        <ol id='footer-nav'> 
            <li> <a className='footer-link' href='https://arts-jessica-ferreira.vercel.app/' target='blank' rel='noreffer'> Criadora</a> </li>
            <li>  <a className='footer-link' href='forms' target='blank' rel='noreffer'> Feedback </a> </li>
            <li>  <a className='footer-link' href='limpa dados' target='blank' rel='noreffer' onClick={localStorage. clear()} > Reinicie sua jornada</a>  </li>
        </ol>
    </footer>
  )
}