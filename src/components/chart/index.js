import React, {Component, Fragment} from 'react';
import Plot from 'react-plotly.js';

const MyChart = ({data,title = 'Words frequency',width = '100%',height = 400, xTitle = 'Frequency', yTitle = 'Words'}) => {

    let x = data.map(el => el.word);
    let y = data.map(el => el.count);
    let xaxis = { title:xTitle };
    let yaxis = { title:yTitle };

    return (
        <Fragment>
            <Plot
                data={[
                    {type: 'bar', x: x, y: y},
                ]}
                layout={ {width: width, height: height, title: title, xaxis: xaxis , yaxis: yaxis } }
            />
        </Fragment>
    );
}

export default MyChart;