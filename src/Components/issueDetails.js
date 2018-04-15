import React, { Component } from 'react'
import "./styles/issueDetails.css";
import data from '../assets/texts';


export default class IssueDetails extends Component {
  getDetails = () => {
    const { name } = this.props;
    return data.pages[name];
  }
  setDescription = () => {
    const { name } = this.props;
    const datas = data.pages[name].details;
    return datas.map(item => <p className="line" key={item}>{item}</p>)
  }
  setSummary = () => {
    const { name } = this.props;
    const datas = data.pages[name].summary;
    console.log(datas)
    return datas.map(item => <p className="summaryItem">{item}</p>)
  }

  render() {
    const details = this.getDetails();
    return (
      <div className="detailsWrapper">
        <div className="columnsContainer">

          <div className="description">
            <div className="header">{details.issueNumber}</div>
            <div className="figureDeStyle">
              <p>{data.random.figureDeStyle}</p>
              <p>{details.definition}</p>
            </div>
            <div className="presentation">
              <p>{data.random.presentationSummary}</p>
              <p>{details.presentation}</p>
            </div>
            <div className="detail">
                {this.setDescription()}
            </div>
          </div>

          <div className="summary">
          <div>{data.random.summary}</div>
           {this.setSummary()}
          </div>
        </div> 
      </div>
    )
  }
}
