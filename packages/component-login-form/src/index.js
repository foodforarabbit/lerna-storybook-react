import React from 'react'

import Button from 'component-button'
import Input from 'component-input'

import StyledLabel from './styles/styledLabel'

import Another from 'components/lib/Another';
import Hello from 'components/lib/Hello';

const LoginForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <StyledLabel>Username</StyledLabel>
    <Input name="username" />

    <StyledLabel>Password</StyledLabel>
    <Input name="password" type="password" />

    <Button type="submit">Login</Button>
    <Another />
    <Hello />
  </form>
)

export default LoginForm
