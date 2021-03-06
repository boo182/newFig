import React from 'react'
import './styles/orderIssue.css';
import datas from '../assets/texts.json';

export default ({ issue }) => {
  const number = issue ? datas.pages[issue].number : 4;
  const defaultIssue = issue || 'pleonasme';

  return (
    <div className="issueOrdertWrapper">
        <a href={`https://revuefig.bigcartel.com/product/fig-n${number}-${defaultIssue}`} className="orderBolderFont">commander</a>
    </div>
  )
}
