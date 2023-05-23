import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonLink from './ButtonLink';
import { imgLink } from '../helper/imglink';
import { svgLoginIcon } from '../helper/svgLogin';
import HoverButton from './HoverButton';
import HoverLenguage from './HoverLenguage';
import { useTranslation } from 'react-i18next';


function Header() {

  const { i18n, t } = useTranslation();

  return (
    <header className="header flex-row space-arround">
      <img src={ imgLink } alt='ensinioLogo' />
      <div className="flex-row space-arround links-container">
        <HoverButton name={ t("solucoes") } />
        <ButtonLink name={ t("precos") } classType="simple move-down" testId="header-link"/>
        <ButtonLink name={ t("academy") } classType="simple move-down" testId="header-link" />
        <ButtonLink name={ t("blog") } classType="simple move-down" testId="header-link" />
        <ButtonLink name={ t("contato") } classType="simple move-down" testId="header-link" />
      </div>
      <div className='line-break'></div>
      <div className="flex-row space-arround">
        <ButtonLink name={ t("entrar") } classType="simple move-down"  testId="header-link" icon={ svgLoginIcon } />
        <ButtonLink name={ t("comecar") } classType="circle move-down"  testId="header-link" />
        <HoverLenguage />
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
};
