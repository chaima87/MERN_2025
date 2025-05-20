import React, { useState } from 'react';

export default function RegistrationForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const isInvalid = {
    firstName: form.firstName.length > 0 && form.firstName.length < 2,
    lastName: form.lastName.length > 0 && form.lastName.length < 2,
    email: form.email.length > 0 && form.email.length < 8,
    password: form.password.length > 0 && form.password.length < 8,
    confirmPassword:
      form.confirmPassword.length > 0 &&
      form.confirmPassword !== form.password,
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h2>Registration Form</h2>

      {/* First Name */}
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={form.firstName}
        onChange={handleChange}
      />
      {isInvalid.firstName && (
        <div style={{ color: 'red' }}>First name must be at least 2 characters</div>
      )}

      {/* Last Name */}
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={form.lastName}
        onChange={handleChange}
      />
      {isInvalid.lastName && (
        <div style={{ color: 'red' }}>Last name must be at least 2 characters</div>
      )}

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      {isInvalid.email && (
        <div style={{ color: 'red' }}>Email must be at least 8 characters</div>
      )}

      {/* Password */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />
      {isInvalid.password && (
        <div style={{ color: 'red' }}>Password must be at least 8 characters</div>
      )}

      {/* Confirm Password */}
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={handleChange}
      />
      {isInvalid.confirmPassword && (
        <div style={{ color: 'red' }}>Passwords do not match</div>
      )}
    </div>
  );
}
