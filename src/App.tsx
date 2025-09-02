import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <>
      <div className="row-2">
        <Card bg="green" type="rectangle" span="col-1" />
        <div className="col-2">
          <div className="row-50 ">
            <div className="row-1">
              <Card bg="red" type="circle" span="col-50" />
              <Card bg="blue" type="square" span="col-50" />
            </div>
          </div>
          <Card bg="gray" type="rectangle" span="row-50" />
        </div>
        <div className="col-2">
          <Card bg="red" type="rectangle" span="row-50" />
          <div className="row-50">
            <div className="row-1">
              <Card bg="red" type="circle" span="col-50" />
              <Card bg="blue" type="circle" span="col-50" />
            </div>
          </div>
        </div>
      </div>
      <div className="row-1">
        <Card bg="cyan" type="rectangle" span="col-2" />
        <Card bg="orange" type="circle" span="col-1" />
        <Card bg="indigo" type="rectangle" span="col-2" />
      </div>
      <div className="row-1">
        <Card bg="violet" type="circle" span="col-1" />
        <Card bg="gray" type="rectangle" span="col-3" />
        <Card bg="wheat" type="circle" span="col-1" />
      </div>
    </>
  );
}

export default App;
