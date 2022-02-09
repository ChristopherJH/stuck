import ReactFlow, { MiniMap, Controls, Background } from "react-flow-renderer";
import { initialElements } from "../initialElements";

const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

export default function MainFlow() {
  return (
    <ReactFlow
      elements={initialElements}
      snapToGrid={true}
      onLoad={onLoad}
      key="edge-with-button"
      style={{ width: " 100vw ", height: "100vh" }}
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  );
}
