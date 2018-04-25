import React, { Component } from 'react'
import './styles/issue.css';
import PageTitle from '../Components/PageTitle';
import ShopIssueDetails from '../Components/ShopIssueDetails';


export default class IssueDetail extends Component {
    state = {
        issueToDisplay: this.props.params.match.params.issue,
    };
    
    componentWillMount() {
        this.props.getActualPage('issues');
        this.props.getIssue(this.state.issueToDisplay);
    }

    render() {
    return (
        <div className="issueDetailContainer">
            <div className="pageTitle">
                <PageTitle title={'boutique'} />
            </div>
            <ShopIssueDetails issue={this.state.issueToDisplay} />
    </div>
    )
  }
}
