import React, { useState } from 'react';

// import { Container } from './styles';

const Login = () => {
  const [ email, SetEmail] = useState([
    { id: 0, title: 'teste0@email.com', done: false},
    { id: 1, title: 'teste1@email.com', done: false},
    { id: 2, title: 'teste2@email.com', done: false},
  ]);

  const handleFormSubmit = e => {
    e.preventDefault();
  }
  return (
    <div>
      {
        email.map( index => (
          <div key={index.id}>{index.title}</div>
        ))
      }
      <br /><hr /><br />
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="email" />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default Login;