import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { infoprodutor, ensinioCorporate, escola} from '../helper/imglink';

function HoverButton({ name }) {
  return (
    <div className="dropdown link">
      <button className="dropbtn move-down">{ name }</button>
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-hover">
        <path d="M5.848 6.6432C5.45633 7.26987 4.54367 7.26987 4.152 6.6432L0.956249 1.53C0.539968 0.86395 1.01881 1.68514e-07 1.80425 2.37179e-07L8.19575 7.95942e-07C8.98119 8.64607e-07 9.46003 0.863952 9.04375 1.53L5.848 6.6432Z" fill="#99F3F5"/>
      </svg>
      <div className="dropdown-content flex-colunm space-arround">
        <h1 className='medium-text'>SOLUÇÕES PRINCIPAIS</h1>
        <button className="btn flex-row move-down" href="ensinio.com">
          <img className="icon-dropdown" src={ infoprodutor } alt='infoprodutor' />
          <div className='flex-colunm '>
            <p className="bold-text">Crie uma Escola Online</p>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </button>
        <button className="btn flex-row move-down" href="ensinio.com" >
          <img className="icon-dropdown" src={ ensinioCorporate } alt='infoprodutor' />
          <div className='flex-colunm'>
            <p className="bold-text">Comunidade e rede social</p>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </button>
        <button className="btn flex-row move-down" href="ensinio.com" >
          <img className="icon-dropdown" src={ escola } alt='infoprodutor' />
          <div className='flex-colunm'>
            <p className="bold-text">Gamificação</p>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </button>
        <button className="btn flex-row move-down" href="ensinio.com" >
          <img className="icon-dropdown" src={ infoprodutor } alt='infoprodutor' />
          <div className='flex-colunm'>
            <p className="bold-text">Aplicativo mobile</p>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default HoverButton;

HoverButton.propTypes = {
  name: PropTypes.string.isRequired,
};

