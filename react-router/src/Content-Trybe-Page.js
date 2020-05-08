import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Solutions from './Solutions';
import Schedule from './Schedule';
import TrybeContent from './TrybeContent';
import Setup from './Setup';
import Home from './Home';

function Content() {
  const solutionsSample = ['14.1', '14.2', '14.3'];

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/solutions/:solutionId" component={Solutions}/>
      <Route
        path="/solutions"
        render={(props) => <Solutions {...props} availableSolutions={solutionsSample}/>}
      />
      <Route path="/schedule" component={Schedule} />
      <Route path="/trybe-content" component={TrybeContent} />
      <Route path="/setup" component={Setup} />
    </Switch>
  );
}

export default Content;
