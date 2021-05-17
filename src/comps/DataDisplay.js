
// array of all pressed indecies

import { Button } from '@material-ui/core'
import { useEffect } from 'react-dom'
import * as d3 from "d3";
import EditorFormatListBulleted from 'material-ui/svg-icons/editor/format-list-bulleted';
import { MyResponsiveSwarmPlot } from './MyResponsiveSwarmPlot';

let formattedData = [];



const DataDisplay = (props) => {

    const { startUnix, endUnix } = genStartAndEnd(props);
    parseData(props, startUnix, endUnix);

    return (
        <div style={{ color: "white" }}>
            <div style={{paddingLeft: "10vw"}}>
                <Button
                    onClick={() => { props.reset() }}
                    variant="contained" 
                    color="secondary"
                >
                    🠔 Go back
                </Button>
            </div>
            {MyResponsiveSwarmPlot(formattedData, startUnix, endUnix, 6)}
            {console.log(formattedData)}
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
            let group = parseInt(oldObj.field2)
            newObj.volume = 4;
            newObj.group = (((group > 0) && (group <= 4)) ? group : null);
            if (newObj.group == null) { continue }
            newObj.time = created.getTime();
            newObj.ISOtime = created.toISOString();
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
        newArr[i] = `${temp.getHours()}:${temp.getMinutes().toString().padStart(2, "0")}`
        console.log(newArr[i])
    }
    console.log(newArr);
    return newArr;
}