import React from 'react'
import data from '../assets/texts'
import './styles/editionText.css';

export default () => {
  return (
      <div className="editionText">
        <div className="editionTitle">Revue indépendante de critique architecturale</div>
        <div className="editionCorpus">
            <p>{data.edition_fig}</p>
        </div>
      </div>
  )
}
