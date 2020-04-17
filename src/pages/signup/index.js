import React from 'react';
import { useForm } from 'react-hook-form';
import './style.css';

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
            <input
              name="firstName"
              placeholder="First Name"
              ref={register({ required: true })}
            />

            <input
              name="lastName"
              placeholder="Last Name"
              ref={register({ required: true })}
            />

            <input
              name="email"
              placeholder="Email Address"
              type="email"
              ref={register({ required: true })}
            />

            <input
              name="password"
              placeholder="Password"
              type="password"
              ref={register({ required: true })}
            />

            <button className="button"type="submit">CLAIM YOUR FREE TRIAL</button>
            <p>By clicking button you are agreeing to our <a href="/">Terms and Service</a> </p>
          </form>
        </section>
      </section>

    </div>
  );
}
