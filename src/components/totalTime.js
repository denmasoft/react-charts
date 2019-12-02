import React from 'react';
import { connect } from 'react-redux';

class TotalTime extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card widget-box-two bgc-white">
                <div className="card-body">
                    <div className="wigdet-two-content" style={{textAlign:"center"}}>
                        <p className="m-0 text-uppercase text-black" style={{color:this.props.color}} title="{this.props.type}">{this.props.type}</p>
                        <h2 className="text-black" style={{color:this.props.color}}>
                            <span data-plugin="counterup">4:30</span> 
                            <i className="mdi mdi-arrow-up text-black font-22"></i>
                        </h2>
                        <p className="text-black m-0" style={{color:this.props.color}}><b>horas</b></p>
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

const connectedTotalTime = connect(mapState, actionCreators)(TotalTime);
export { connectedTotalTime as TotalTime };