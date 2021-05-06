import { ResponsiveSwarmPlot } from '@nivo/swarmplot';

const localeTimeFormat = value => new Date(value).toLocaleTimeString()

export const MyResponsiveSwarmPlot = (data, start, end, cols) => (
    <ResponsiveSwarmPlot
        // style={{ height: "60vh" }}
        data={data}
        groups={['1', '2', '3', '4']}
        theme={{ textColor: "#ffffff", fontSize: "16", }}
        value={'ISOtime'}
        valueFormat={localeTimeFormat}
        valueScale={{
            type: 'time',
            format: '%Y-%m-%dT%H:%M:%S.%LZ',
            min: start.toISOString(),
            max: end.toISOString(),
        }}
        label={'ISOtime'}
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
            format: localeTimeFormat,
            orient: 'top',
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'time throughout the lesson',
            legendPosition: 'middle',
            legendOffset: -46
        }}
        axisRight={null}
        axisBottom={null}
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
