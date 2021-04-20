
// array of all pressed indecies

import { ResponsiveSwarmPlot } from '@nivo/swarmplot'
import { useEffect } from 'react-dom'
import * as d3 from "d3";

let formattedData = [];



const DataDisplay = (props) => {

    const { startUnix, endUnix } = genStartAndEnd(props);
    parseData(props, startUnix, endUnix);

    return (
        <div style={{ color: "white" }}>
            data display!
            <br />
            {startUnix.toString()}
            <br />
            {endUnix.toString()}
            <br />
            {MyResponsiveSwarmPlot(formattedData, startUnix, endUnix, 6)}
        </div>
    )
}

export default DataDisplay;


function parseData(props, startUnix, endUnix) {
    let arr = []
    for (let i = 0; i < props.data.feeds.length; i++) {
        let created = new Date(props.data.feeds[i].created_at);
        if ((startUnix <= created) && (endUnix >= created)) {
            let newObj = {}
            let oldObj = props.data.feeds[i];
            newObj.volume = 4;
            newObj.group = parseInt(oldObj.field2);
            newObj.time = created.getTime();
            newObj.id = oldObj.entry_id.toString();
            newObj.clicker = parseInt(oldObj.field1);
            arr.push(newObj);
        }
    }
    console.log(arr);
    formattedData = arr;
    return arr
}

function genStartAndEnd(props) {
    const startUnix = new Date(props.formData.date);
    const endUnix = new Date(startUnix);
    endUnix.setHours(endUnix.getHours() + props.formData.duration);
    return { startUnix, endUnix };
}

const xLabels = (a, b, n) => {
    // n++;
    if (typeof n === "undefined") n = Math.max(Math.round(b - a) + 1, 1);
    if (n < 2) { return n === 1 ? [a] : []; }
    var i, ret = Array(n);
    // n--;
    for (i = n; i >= 0; i--) { ret[i] = (i * b + (n - i) * a) / n; }
    let newArr = [];
    for (i = 0; i < ret.length; i++) {
        let temp = new Date(ret[i]);
        newArr[i] = `${temp.getHours()}:${temp.getMinutes()}`
    }
    console.log(newArr);
    return newArr;
}

const MyResponsiveSwarmPlot = (data, start, end, cols) => (
    <ResponsiveSwarmPlot
        style={{ height: "60vh" }}
        data={data}
        groups={['1', '2', '3', '4']}
        value={'time'}
        valueScale={{ type: 'linear', min: start, max: end, reverse: false }}
        size={{ key: 'volume', values: [4, 20], sizes: [cols, 20] }}
        forceStrength={4}
        layout="horizontal"
        simulationIterations={100}
        gridXValues={() => {xLabels(start, end, cols)}}
        gridYValues={["✔️", "❓", "😀", "☹️"]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.6
                ],
                [
                    'opacity',
                    0.5
                ]
            ]
        }}
        margin={{ top: 80, right: 100, bottom: 80, left: 100 }}
        axisTop={{
            orient: 'top',
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'time throughout the lesson',
            legendPosition: 'middle',
            legendOffset: -46
        }}
        axisRight={{
            orient: 'right',
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
        }}
        axisBottom={{
            orient: 'bottom',
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'reaction button clicked',
            legendPosition: 'middle',
            legendOffset: -76
        }}
        motionStiffness={50}
        motionDamping={10}
    />
)