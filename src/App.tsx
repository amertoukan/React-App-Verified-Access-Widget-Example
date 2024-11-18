import React, { useEffect } from "react";
import "./App.css";
import * as impact from "@saasquatch/squatch-js";

// Add type declarations for custom window properties
declare global {
  interface Window {
    squatchTenant?: string;
    impactToken?: string;
  }
}

// Extend the JSX namespace to allow the <impact-embed> custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "impact-embed": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        widget: string;
      };
    }
  }
}

function App() {
  console.log(process.env)
  // Get tenant alias and JWT from environment variables
  const tenantAlias = process.env.REACT_APP_TENANT_ALIAS ;
  const JWT = process.env.REACT_APP_JWT ;


    // impact initialization logic
    impact.ready(() => {
      window.squatchTenant = tenantAlias;
      window.impactToken = JWT;
    });


  return (
    <div className="App">
      {/* Custom Saasquatch embed element */}
      <impact-embed widget="p/28196/w/referrerWidget">loading</impact-embed>
    </div>
  );
}

export default App;
