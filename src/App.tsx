import type { Component } from 'solid-js';
import { Route, Routes } from '@solidjs/router';

import Template from './Components/Template';
import Login from './Components/Login';
import Artifact from './Components/Artifact';
import Get from './Components/Get';

const App: Component = () => {


  return (
    <div>
      <h1>OPSIM</h1>
      <Routes>
        <Route path="/template" component={Template} />
        <Route path="/login" component={Login} />
        <Route path="/Artifacts" component={Artifact} />
        <Route path="/" component={Artifact} />
      </Routes>
    </div>
  );
};

export default App;
