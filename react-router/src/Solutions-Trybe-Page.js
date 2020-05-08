import React from 'react';
import { Link } from 'react-router-dom';
import './Solutions.css';

function Solutions(props) {
  console.log('Props de solutions:', props);
  const solutionId = props.match.params.solutionId;

  if (solutionId) return <h2>{solutionId}</h2>;

  return (
    <div>
      <h1>Gabaritos</h1>
      {props.availableSolutions.map((solution) =>(
        <div key={solution}>
          <Link className="solution-link" to={`/solutions/${solution}`}>
            {solution}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Solutions;
