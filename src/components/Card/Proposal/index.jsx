// react libraries
import React, { Component } from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// components
import Label from '../../Label';

// styles
import './Proposal.scss';

// components
import Card from '../../Card';

class CardProposal extends Component{
  constructor(props){
    super(props)
    this.state = {
      showDropdown: false,
    }
  }

  /**
   * Toggles dropdown
   *
   * @returns {void}
   */
  toggleDropdown = () => (
    this.setState({
      showDropdown: !this.state.showDropdown,
    })
  )

  /**
   * Hides dropdown
   *
   * @returns {void}
   */
  hideDropdown = () => (
    this.setState({
      showDropdown: false,
    })
  )

  render() {
    return (
      <Card>
        <div className="proposal">
          <div className="proposal__header">
            <div className="proposal__header--left">
              <span className="proposal__date">Expires 13/05/2018</span>
              <ul>
                <li>Agriculture</li>
                {/* <li>Request for proposal</li> */}
              </ul>
            </div>
            <div className="proposal__header--right">
              <span className="proposal__header-label">
                <Label
                  type="tertiary"
                >
                  Awaiting Interest
                </Label>
              </span>
              <span onClick={this.toggleDropdown} className="proposal__ellipsis">
                <i class="fa fa-ellipsis-h fa-2x"></i>
              </span>

              { this.state.showDropdown &&
                <div className="proposal__option" onBlur={this.hideDropdown}>
                  <div>Edit</div>
                  <div>Delete</div>
                </div>
              }
            </div>
          </div>
          <div className="proposal__content">
            Tender Opportunity for provision of intelligent pigging for Akpo Production Loops
          </div>
          <div className="proposal__footer">
            <span className="proposal__footer--indicator">34 Vendors have indicated interest</span>
            <Label
              type="primary"
            >
              Publish as Tender
            </Label>
          </div>
        </div>
      </Card>
    )
  }
}

export default CardProposal;
