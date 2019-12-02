import React from 'react';
import { connect } from 'react-redux';
class BubbleChart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card widget-box-two bgc-white">
              <div className="card-body">
                <div className="wigdet-two-content" style={{textAlign:"center"}}>
                <svg height="250" width="100%">
                  <g>
                    <circle cx="100" cy="130" r="65" stroke="black" stroke-width="0" fill="rgb(51, 146, 254)"></circle>
                    <text x="100" y="130" text-anchor="middle" fill="white" font-weight="bold" font-size="12px" dy=".3em">90%</text>
                  </g>

                  <g>
                    <circle cx="220" cy="65" r="40" stroke="black" stroke-width="0" fill="#623CEA"></circle>
                    <text x="220" y="65" text-anchor="middle" fill="white" font-weight="bold" font-size="12px" dy=".3em">90%</text>
                  </g>

                  <g>
                    <circle cx="250" cy="150" r="28" stroke="black" stroke-width="0" fill="#FF808B"></circle>
                    <text x="250" y="150" text-anchor="middle" fill="white" font-weight="bold" font-size="12px" dy=".3em">90%</text>
                  </g>

                  <g>
                    <circle cx="300" cy="190" r="20" stroke="black" stroke-width="0" fill="#24B770"></circle>
                    <text x="300" y="190" text-anchor="middle" fill="white" font-weight="bold" font-size="12px" dy=".3em">90%</text>
                  </g>
                </svg>
                </div>
              </div>
            </div>
        );
    }
}

function mapState(state) {
  const { result } = state;
  return { result };
}

const actionCreators = {
};

const connectedBubbleChart = connect(mapState, actionCreators)(BubbleChart);
export { connectedBubbleChart as BubbleChart };