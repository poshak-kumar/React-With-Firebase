import GetFirebaseData from "./components/GetData/GetFirebaseData";
import "./App.css";
import UpdateFirebaseData from "./components/UpdateFirebaseData/UpdateFirebaseData";
import CreateFirebaseData from "./components/CreateFirebaseData/CreateFirebaseData";
import DeleteFirebaseData from "./components/DeleteFirebaseData/DeleteFirebaseData";

function App() {
  return (
    <>
      <GetFirebaseData></GetFirebaseData>
      <UpdateFirebaseData></UpdateFirebaseData>
      <CreateFirebaseData></CreateFirebaseData>
      <DeleteFirebaseData></DeleteFirebaseData>
    </>
  );
}

export default App;
