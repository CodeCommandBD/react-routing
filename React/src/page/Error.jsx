import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.error(error); 

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Oops! Something went wrong.</h1>
      <p>We couldn't find the page you were looking for.</p>

      
      {error && (
        <h1 style={{ color: 'red', marginTop: '1rem' }}>
          {error.message || JSON.stringify(error)}
        </h1>
      )}

      <Link className='p-3 bg-amber-200 rounded-lg text-xl font-semibold' to="/" style={{ marginTop: '1rem', display: 'inline-block',  }}>
        Go back to Home
      </Link>
    </div>
  );
};

export default Error;
