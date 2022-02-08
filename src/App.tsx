import "./App.css";
import ReactFlow, { MiniMap, Controls, Background } from "react-flow-renderer";
import { initialElements } from "./initialElements";

function App() {
  //const [elements, setElements] = useState(initialElements);
  return (
    <div className="App">
      <ReactFlow
        elements={initialElements}
        snapToGrid={true}
        key="edge-with-button"
        style={{ width: " 100vw ", height: "100vh" }}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default App;
