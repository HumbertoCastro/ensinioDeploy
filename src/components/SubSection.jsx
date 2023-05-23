import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { svgArrow } from '../helper/svgArrow';
import { mock } from '../helper/MockContent';
import { useTranslation } from 'react-i18next';


function SubSection() {
  const { t } = useTranslation();
  // Mock criado para uma possivel falha na API
  const [content, setContent] = useState(mock);

  const requestContent = () => {
    /* try {
      fetch("http://localhost:3000/posts/")
        .then(response => response.json()).then((res) => {
          console.log(res);
          setContent(res);
        }); 
    } catch (err) {
      console.log("err");
    } */
  }

  useEffect(() => {
    requestContent();
  }, []);

  return (
    <section className='flex-column white-text space-btw botton-section'>
      <div className="flex-row space-btw black-text">
        <div className='flex-row'>
          <div className="line"></div>
          <p className="purple-text">{ t("textoRoxo1") }</p>
        </div>
        <p>{ t("textolateral") }</p>
      </div>
      <div className="flex-row space-btw api-items">
      {
        content.map((item) => {
          const { title, text, Url } = item;
          return(
            <div className='flex-colunm' data-testid="request-content" key={ title }>
              <img src={ Url } alt="icon-img" />
              <h1 className='black-text bold-text' data-testid="request-title">{ title }</h1>
              <p className='black-text small-text'>{ text }</p>
            </div>
          )
        })
      }
      </div>
      <hr />
      <div className="flex-row space-btw black-text">
        <p>{ t("textoFooter") }</p>
        <a href='ensinio.com' className='flex-row scale-hover'>
          <p className="purple-text">{ t("verMais") }</p>
          {
            svgArrow()
          }
        </a> 
      </div>
    </section>
  );
}

export default SubSection;

SubSection.propTypes = {
};
