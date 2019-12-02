import React from 'react';
import { connect } from 'react-redux';

import { indicadoresGeneralesActions } from '../store/actions';
import { TotalTime } from '../components/totalTime';
import { Scale } from '../components/scale';
import {BubbleChart} from '../components/bubbleChart';
class HomePage extends React.Component {
    componentDidMount() {
        this.props.getIndicadoresGenerales();
    }

    render() {
        const indicadoresGenerales = this.props.indicadoresGenerales;
        return (
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                    <h1 className="h2">Indicadores Generales</h1>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <TotalTime type="Tiempo Total" color="#135EA1"></TotalTime>
                    </div>
                    <div className="col-sm-3">
                        <Scale type="READY" color="#3392FE"></Scale>
                    </div>
                    <div className="col-sm-3">
                        <Scale type="MANTENIMIENTO" color="#FFAA21"></Scale>
                    </div>
                    <div className="col-sm-3">
                        <Scale type="DELAY" color="#FF808B"></Scale>
                    </div>
                    <div className="col-sm-3">
                        <Scale type="STANDBY" color="#5E81F4"></Scale>
                    </div>
                    <div className="col-sm-3">
                        <Scale type="Tiempo Programado" color="#24B770"></Scale>
                    </div>
                    <div className="col-sm-3">
                        <Scale type="Tiempo Operando" color="#A64FFF"></Scale>
                    </div>
                    <div className="col-sm-3">
                        <Scale type="Disponibilidad" color="#623CEA"></Scale>
                    </div>
                    <div className="col-sm-3">
                        <Scale type="Uso de Disponibilidad" color="#56C0FF" showHours="false"></Scale>
                    </div>
                    <div className="col-sm-3">
                        <Scale type="Usage" color="#089BAB" showHours="false"></Scale>
                    </div>
                    <div className="col-sm-3">
                        <Scale type="Use(Uso)" color="#FFE775" showHours="false"></Scale>
                    </div>
                    <div className="col-sm-3">
                        <BubbleChart></BubbleChart>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { indicadoresGenerales } = state;
    return { indicadoresGenerales };
}

const actionCreators = {
    getIndicadoresGenerales: indicadoresGeneralesActions.getAll
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };