
// array of all pressed indecies

const DataDisplay = (props) => {

    const { startUnix, endUnix } = genStartAndEnd(props);
    parseData(props, startUnix, endUnix);

    return (
        <div style={{color: "white"}}>
            data display!
            <br />
            {startUnix.toString()}
            <br />
            {endUnix.toString()}
        </div>
    )
}

export default DataDisplay;

function parseData(props, startUnix, endUnix) {
    for (let i = 0; i < props.data.feeds.length; i++) {
        let created = new Date(props.data.feeds[i].created_at);
        if ((startUnix <= created) && (endUnix >= created)) {
            // props.data.feeds[i]
        }
    }
}

function genStartAndEnd(props) {
    const startUnix = new Date(props.formData.date);
    const endUnix = new Date(startUnix);
    endUnix.setHours(endUnix.getHours() + props.formData.duration);
    return { startUnix, endUnix };
}
