
const Xdata = [
    { id: 'd1', value: 13, region: 'a' },
    { id: 'd2', value: 13, region: 'b' },
    { id: 'd3', value: 24, region: 'c' },
    { id: 'd4', value: 26, region: 'd' },
    { id: 'd5', value: 24, region:  'e' },
    { id: 'd6', value: 27, region: 'f' },
    { id: 'd7', value: 30, region: 'g' },
    { id: 'd8', value: 25, region: 'h' },
    { id: 'd9', value: 28, region: 'i' },
    { id: 'd10', value: 25, region: 'j' },
    { id: 'd11', value: 30, region: 'k' },
    { id: 'd12', value: 29, region: 'l' },
    { id: 'd13', value: 27, region: 'm' },
    { id: 'd14', value: 33, region: 'n' },
    { id: 'd15', value: 28, region: 'o' },
    { id: 'd16', value: 26, region: 'p' },
    { id: 'd17', value: 29, region: 'qq' },
    { id: 'd18', value: 28, region: 'r' },
    { id: 'd19', value: 30, region: 's' },
    { id: 'd20', value: 31, region: 't' },
    { id: 'd21', value: 32, region: 'u' },
    { id: 'd22', value: 31, region: 'v' },
    { id: 'd23', value: 31, region: 'w' },
    { id: 'd24', value: 27, region: 'x' },
    { id: 'd25', value: 30, region: 'y' },
    { id: 'd26', value: 28, region: 'z' },
    { id: 'd27', value: 29, region: 'aa' },
    { id: 'd28', value: 29, region: 'ab' }


];

const yScale = d3.scaleBand()
    .domain(Xdata.map((dataPoint) => dataPoint.region))
    .rangeRound([0, 515])
    .padding(0.1);
const xScale = d3.scaleLinear().domain([0, 40]).range([200, 0]);

const container = d3.select('svg')  //This is how the chart gets into the DOM.
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

