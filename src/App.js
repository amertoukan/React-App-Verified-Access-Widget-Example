import logo from './logo.svg';
import './App.css';
import * as impact from "@saasquatch/squatch-js";

const tenantAlias = process.env.REACT_APP_TENANT_ALIAS 
const JWT = process.env.REACT_APP_JWT
function App() {
  impact.ready(()=> {
    window.squatchTenant = tenantAlias
    window.impactToken = JWT
  })
  return (
    <div className="App">
     <impact-embed widget="p/28196/w/referrerWidget">loading</impact-embed>
    </div>
  );
}

export default App;
