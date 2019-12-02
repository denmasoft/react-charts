import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import 'easy-pie-chart/dist/jquery.easypiechart';
window.jQuery = $;
window.$ = $;
class Scale extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.$el = $(this.el);
        this.$el.easyPieChart({
            barColor: this.$el.data('color'),
            trackColor: '#EEEEEE',
            scaleColor: false,
            lineCap: 'butt',
            lineWidth: 8,
            animate: 1000,
            size:75
        }).css('color', '#87CEEB');
      }
      componentWillUnmount() {
        this.$el.easyPieChart('destroy');
      }

    render() {
        return (
            <div className="card widget-box-two bgc-white">
                <div className="card-body">
                    <div className="float-right avatar-lg rounded-circle bg-soft-light mt-2">
                        <div className="easy-pie-chart percentage" ref={el => this.el = el} data-percent="12.3" data-color="#91A1B8">
                            <div className="round-center" style={{backgroundColor: this.props.color}}>
                                <span className="percent">12.3%</span>
                            </div>
                        </div>
                    </div>
                    <div className="wigdet-two-content">
                        <p className="m-0 text-uppercase text-black" style={{color:this.props.color}} title="{this.props.type}">{this.props.type}</p>
                        { !this.props.showHours ? <h2 className="text-black" style={{color:this.props.color}}>
                            <span data-plugin="counterup">4:30</span> 
                            <i className="mdi mdi-arrow-up text-black font-22"></i>
                        </h2>: <div></div> }
                        { !this.props.showHours ? <p className="text-black m-0" style={{color:this.props.color}}><b>horas</b></p>: <div></div> }
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

const connectedScale = connect(mapState, actionCreators)(Scale);
export { connectedScale as Scale };