import React from 'react'
import data from '../assets/texts'
import './styles/editionText.css';

export default () => {
  return (
      <div className="editionText">
        <div className="editionTitle">{data.pages.edition.pageSubtitle}</div>
        <div className="editionCorpus">
            <p>{data.pages.edition.edition_fig}</p>
        </div>
      </div>
  )
}
