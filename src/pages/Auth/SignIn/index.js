import React, {useState,useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import { Container, Input, Button, Form, FormGroup, Label} from './styles';
import api from '../../../services/api';
import { UserContext } from '../../../context/UserContext';

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = { email, password };
    const responseData = await api('POST','sessions',payload);
    if(responseData.status === 201){
      let data = await responseData.json()
      setUser({id: data.user.id, email: data.user.email, token: data.token, partner: true, signed: true })
      props.history.push('/dashboard')
    }
  }

  useEffect(() => {},[]);
  return(
  <Container>
      <Form onSubmit={() => {}}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
          value={email} onChange={ e => setEmail(e.target.value)}
          type="email" name="email" id="email" placeholder="Insira seu e-mail" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Senha</Label>
          <Input value={password} onChange={ e => setPassword(e.target.value)}
          type="password" name="password" id="senha" placeholder="Insira sua senha" />
        </FormGroup>

        <Button type="submit" onClick={handleSubmit}>Entrar</Button><br /><br />
        <Link to="/signup" className="btn btn-dark">Cadastrar-se</Link>
      </Form>
    </Container>
)};

export default SignIn;
