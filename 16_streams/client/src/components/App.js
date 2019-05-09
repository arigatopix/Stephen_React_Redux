import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      PageOne
      <a href="/pagetwo">Go to page Two (BAD!!!)</a>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <a href="/">Back to page One (BAD!!!)</a>
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
