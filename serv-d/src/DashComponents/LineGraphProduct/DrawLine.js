import * as d3 from "d3";
import {
  topStart,
  yScale,
  yScaleRev,
  marginLeft,
  marginTop,
  determineRightPush,
} from "./LineGraphDimensions";

export const drawLine = ({ svgId, graphData, xScale, xArray }) => {
  const svgSelection = d3.select(`#${svgId}`);

  const rightPush = determineRightPush(graphData);

  const valueline = d3
    .line()
    .x((d, i) => xScale(xArray[i]) + marginLeft + rightPush)
    .y((d) => topStart - marginTop - yScale(d.pct_on_time))
    // .curve(d3.curveCardinal);
    .curve(d3.curveCardinal.tension(0.2));

  const linePath = svgSelection
    .append("path")
    .datum(graphData)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2)
    .attr("class", "lineGraphLine")
    .attr("d", valueline)
    .attr("shape-rendering", "auto");

  const totalLength = linePath.node().getTotalLength();

  // Set initial attributes for the transition
  linePath
    .attr("stroke-dasharray", totalLength) // Set the stroke-dasharray to the total length
    .attr("stroke-dashoffset", totalLength); // Set the stroke-dashoffset to the total length (line is invisible)

  // Start the transition
  linePath
    .transition()
    .duration(500) // Transition duration
    .ease(d3.easeLinear) // Easing function for smooth transition
    .attr("stroke-dashoffset", 0); // Set the stroke-dashoffset to 0 (line is fully visible)
};

export default drawLine;
