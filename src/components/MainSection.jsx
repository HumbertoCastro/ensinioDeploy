import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonLink from './ButtonLink';
import { svgVideo } from '../helper/svgVideo';
import { useTranslation } from 'react-i18next';
import personImage from '../helper/images/ISTOCKPHOTO_613523662_large 2.png'

const srcIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExIDE4SDE0IiBzdHJva2U9IiM5OUYzRjUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTYuNDY4OTcgMTguODcyOUM2LjQ0MDk3IDE4Ljg3MjkgNi40MTg5NyAxOC44OTQ5IDYuNDE4OTcgMTguOTIyOUM2LjQxODk3IDE4Ljk1MDkgNi40NDA5NyAxOC45NzI5IDYuNDY4OTcgMTguOTcyOSIgc3Ryb2tlPSIjOTlGM0Y1IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xOSAxMlY1QzE5IDMuODk2IDE4LjEwNSAzIDE3IDNINkM0Ljg5NSAzIDQgMy44OTYgNCA1VjEwIiBzdHJva2U9IiM5OUYzRjUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMC41IDIwSDE4LjQwOUMxNy41ODEgMjAgMTYuOTA5IDE5LjMyOCAxNi45MDkgMTguNVYxMy41QzE2LjkwOSAxMi42NzIgMTcuNTgxIDEyIDE4LjQwOSAxMkgyMC41QzIxLjMyOCAxMiAyMiAxMi42NzIgMjIgMTMuNVYxOC41QzIyIDE5LjMyOCAyMS4zMjggMjAgMjAuNSAyMFoiIHN0cm9rZT0iIzk5RjNGNSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTYuOTEgMTVIMTEiIHN0cm9rZT0iIzk5RjNGNSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkgMjFINEMyLjg5NSAyMSAyIDIwLjEwNSAyIDE5VjEyQzIgMTAuODk1IDIuODk1IDEwIDQgMTBIOUMxMC4xMDUgMTAgMTEgMTAuODk1IDExIDEyVjE5QzExIDIwLjEwNSAxMC4xMDUgMjEgOSAyMVoiIHN0cm9rZT0iIzk5RjNGNSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" 

function MainSection({ name, classType, icon }) {
  const { t } = useTranslation();
  return (
    <section className='flex-row white-text text-section space-btw'>
      <div className='flex-colunm side-text'>
        <div className='flex-row'>
            <img src={ srcIcon } alt="plataform icon" />
            <p className='small-text'>{ t("plataforma") }</p>
        </div>
        <h1 className='large-text' data-testid="main-text">{ t("principal") }</h1>
        <p className='medium-text'>{ t("subTexto") }</p>
        <div className='flex-row space-btw'>
          <ButtonLink name={ t("comecar") } classType="full-circle black-text medium-text scale-hover"/>
          <ButtonLink name={ t("video") }  classType="simple scale-hover" icon={ svgVideo}/>
        </div>
      </div>
      <img src={ personImage } alt='personImage' className='sideImage'/>
    </section>
  );
}

export default MainSection;

MainSection.propTypes = {
};
