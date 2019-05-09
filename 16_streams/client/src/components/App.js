import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      PageOne
      <Link to="/pagetwo">Go to page Two</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <Link to="/">Back to page One</Link>
      <button>Click Me</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
