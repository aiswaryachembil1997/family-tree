import React from "react";
import Tree from "react-d3-tree";
import treeData from "../treeData.json";
import PersonCard from "./PersonCard";
import "./FamilyTree.css";

const FamilyTree = () => {
  const renderNode = ({ nodeDatum }) => (
    <g>
      {/* Person Container */}
      <PersonCard
        name={nodeDatum.name}
        image={nodeDatum.image}
        x="-100"
        y="-140"
      />

      {/* Spouse Container */}
      {nodeDatum.spouse && (
        <>
          <PersonCard
            name={nodeDatum.spouse}
            image={nodeDatum.spouseImage}
            x="100"
            y="-140"
          />
          {/* Link between person and spouse */}
          <line x1="0" y1="0" x2="200" y2="0" stroke="#000" strokeWidth="2" />
        </>
      )}
    </g>
  );

  return (
    <div style={{ height: "800px", width: "100%" }}>
      <Tree
        data={treeData}
        orientation="vertical"
        translate={{ x: 600, y: 50 }}
        renderCustomNodeElement={renderNode}
        styles={{
          links: {
            stroke: "#000",
          },
        }}
        nodeSize={{ x: 500, y: 300 }}
        pathFunc="elbow"
      />
    </div>
  );
};

export default FamilyTree;
