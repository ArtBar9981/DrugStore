import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setAuthState }) {
  const [inputs, setInputs] = useState({ name: '', password: '' });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    if (response.ok) {
      const data = await response.json();
      setAuthState(data);
      navigate('/');
    }
  };

  return (
    <div>
      <h3>Авторизация</h3>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="inputttt form-label">Email</label>
          <input name="name" onChange={changeHandler} value={inputs.name} type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="inputttt form-label">Пароль</label>
          <input name="password" onChange={changeHandler} value={inputs.password} type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Авторизация</button>
      </form>
    </div>
  );
}
