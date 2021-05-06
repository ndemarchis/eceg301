import { ResponsiveSwarmPlot } from '@nivo/swarmplot';

export const MyResponsiveSwarmPlot = (data, start, end, cols) => (
    <ResponsiveSwarmPlot
        // style={{ height: "60vh" }}
        data={data}
        groups={['1', '2', '3', '4']}
        theme={{ textColor: "#ffffff", fontSize: "16", }}
        value={'time'}
        label={'clicker'}
        valueScale={{ type: 'linear', min: start, max: end, reverse: false }}
        size={{ key: 'volume', values: [4, 20], sizes: [cols, 20] }}
        forceStrength={4}
        layout="horizontal"
        simulationIterations={100}
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
        motionDamping={10} />
);
