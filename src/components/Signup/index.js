import React from 'react';
import { useForm } from 'react-hook-form';

import './style.css';
import ErrorIcon from '../../assets/icon-error.svg'

export default function Signup() {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <div className='signup-container'>
      <section className='apresentation'>
        <h1>Learn to code by watching others</h1>
        <h2> See how experienced developers solve problems in real-time.</h2>
        <h2>Watching scriped tutorials is great, but understanding how developers think is invaluable.</h2>
      </section>

      <section className='signup'>
        <div className='announcement'>
          <p> <strong>Try it free 7 days </strong>then $20/mo. thereafter</p>
        </div>

        <section className='form'>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputContainer">
            <input
            capture
              className= {errors.firstName  && "error-input"}
              name="firstName"
              placeholder="First Name"
              ref={register({ required: true })}
            />
            {errors.firstName && <img src={ErrorIcon} alt="error icon"/>}
            {errors.firstName && <p className="error-message">First name cannot be empty</p>}
          </div>

          <div className="inputContainer">
            <input
              className= {errors.lastName  && "error-input"}
              name="lastName"
              placeholder="Last Name"
              ref={register({ required: true })}
            />
            {errors.lastName && <img src={ErrorIcon} alt="error icon"/>}
            {errors.lastName && <p className="error-message">Last name cannot be empty</p>}
          </div>

          <div className="inputContainer">
            <input
              className= {errors.email  && "error-input"}
              name="email"
              placeholder="Email Address"
              type="email"
              ref={register({ required: true })}
            />
            {errors.email && <img src={ErrorIcon} alt="error icon"/>}
            {errors.email && <p className="error-message">Looks like this is not an email</p>}
          </div>

          <div className="inputContainer">
            <input
              className= {errors.password  && "error-input"}
              name="password"
              placeholder="Password"
              type="password"
              ref={register({ required: true })}
            />
            {errors.password && <img src={ErrorIcon} alt="error icon"/>}
            {errors.password &&  <p className="error-message">Password cannot be empty</p>}
          </div>

            <button className="button"type="submit">CLAIM YOUR FREE TRIAL</button>
            <p className="term-service">By clicking button you are agreeing to our <a href="/">Terms and Service</a> </p>
          </form>
        </section>
      </section>

    </div>
  );
}
