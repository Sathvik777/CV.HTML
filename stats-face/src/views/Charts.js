import gitStatus from '../mock/MockData';
import React, {Component} from 'react';

export default class Chart extends React.Component {
    
      render () {
        const { charts, i} = this.props;
        return (
            <LineChart width={600} height={300} data={charts}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
           <XAxis dataKey="name"/>
           <YAxis/>
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />
           <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
           <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        );
      }
    };
    