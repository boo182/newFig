import React from 'react';
import data from '../assets/texts.json';
import './styles/editionText.css';

export default () => (
  <div className="editionText">
    <div className="sideContainer">
      <div className="editionTitle">{data.pages.edition.titleLeft}</div>
      <div className="editionCorpus">
            <div>{data.pages.edition.contentLeft}</div>
          </div>
    </div>
    <div>
      <div className="editionTitle">{data.pages.edition.titleRight}</div>
      <div className="editionCorpus">
            <div dangerouslySetInnerHTML={{__html: data.pages.edition.contentRight}}></div>
          </div>
    </div>
  </div>
);
