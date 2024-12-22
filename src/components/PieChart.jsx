'use client';

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const PieChart = ({ width = 500, height = 500 }) => {
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

    // Calculate radius
    const radius = Math.min(width, height) / 2;

    // Clear the SVG
    d3.select(svgRef.current).selectAll("*").remove();

    // Create an SVG element
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Create a color scale
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Create a pie generator
    const pie = d3.pie().value((d) => d.value);

    // Create an arc generator
    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    // Bind data and append slices
    const arcs = svg
      .selectAll("arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    arcs
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => color(i));

    // Add labels
    arcs
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .style("font-size", `${Math.min(width, height) / 25}px`) // Dynamic font size
      .style("fill", "white")
      .text((d) => d.data.label);
  }, [width, height]);

  return <svg ref={svgRef}></svg>;
};

export default PieChart;
