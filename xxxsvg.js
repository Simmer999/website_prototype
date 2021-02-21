
const Xdata = [
    { id: 'd1', value: 10, region: 'US' },
    { id: 'd2', value: 11, region: 'India' },
    { id: 'd3', value: 12, region: 'Chine' },
    { id: 'd4', value: 6, region: 'Germany' }

];

const yScale = d3.scaleBand()
    .domain(Xdata.map((dataPoint) => dataPoint.region))
    .rangeRound([0, 250])
    .padding(0.1);
const xScale = d3.scaleLinear().domain([0, 15]).range([200, 0]);

const container = d3.select('svg')
    .classed('container', true)
   
const bars = container
    .selectAll('bar')
    .data(Xdata)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('height', yScale.bandwidth())
    .attr('width', data => 200 - xScale(data.value))
    .attr('y', data => yScale(data.region))
    .attr('x', data => xScale(data.value));
