'use client'

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarGraph = () => {
  const svgRef = useRef();

  useEffect(() => {
    // Data
    const data = [
      { label: "A", value: 30 },
      { label: "B", value: 70 },
      { label: "C", value: 50 },
      { label: "D", value: 40 },
      { label: "E", value: 20 },
    ];

    // Dimensions
    const width = 500;
    const height = 300;
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };

    // Clear the SVG
    d3.select(svgRef.current).selectAll("*").remove();

    // Create an SVG element
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Create scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([margin.left, width - margin.right])
      .padding(0.4); // Increased padding for more space between bars

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    // Create axes
    const xAxis = (g) =>
      g
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(xScale).tickSizeOuter(0));

    const yAxis = (g) =>
      g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(yScale))
        .call((g) => g.select(".domain").remove());

    // Append axes
    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);

    // Draw bars
    svg
      .append("g")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d) => xScale(d.label))
      .attr("y", (d) => yScale(d.value))
      .attr("height", (d) => yScale(0) - yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("fill", "steelblue");

    // Add labels
    svg
      .append("g")
      .selectAll("text")
      .data(data)
      .join("text")
      .attr("x", (d) => xScale(d.label) + xScale.bandwidth() / 2)
      .attr("y", (d) => yScale(d.value) - 5)
      .attr("text-anchor", "middle")
      .style("font-size", "12px")
      .style("fill", "black")
      .text((d) => d.value);
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default BarGraph;