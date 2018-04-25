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
    return datas.map(item => <div className="summaryItem" key={item}>{item}</div>)
  }

  render() {
    const details = this.getDetails();
    return (
      <div className="detailsWrapper">
        <div className="columnsContainer">

          <div className="description">
            <div className="issueDetailHeader">{details.issueNumber}</div>
            <div className="figureDeStyle">
              <div className="sectionTitle">{data.random.figureDeStyle}</div>
              <div>{details.definition}</div>
            </div>
            <div className="presentation">
              <div className="sectionTitle">{data.random.presentationSummary}</div>
              <div>{details.presentation}</div>
            </div>
          </div>

          <div className="summary">
            <div className="detail">
                  {this.setDescription()}
            </div>
          <div className="sectionTitle">{data.random.summary}</div>
           {this.setSummary()}
          </div>
          
        </div> 
      </div>
    )
  }
}
