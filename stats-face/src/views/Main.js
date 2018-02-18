import React, { Component } from 'react';
import { Chart} from "./Charts";


export default class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <div className="grid">
                    {this.props.charts.map((chart, i) => <Chart {...this.props} key={i} i={i} chart={chart} />)}
                 </div>
            </div>

        );
    }

}

