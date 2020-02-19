import React, {useState,useEffect, useContext} from 'react';
import api from '../../../services/api';
import { UserContext } from '../../../context/UserContext';

import {
  Container,
  Input,
  InputGroup,
  Button,
  Form,
  FormGroup,
  Label,
  Col12,
  Span} from './styles';

export default function Users(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = { name, email, password, partner: false };
    const responseData = await api('POST','users',payload);
    if(responseData.status === 201){
      let data = responseData.json()
      setUser({ id: data.id, email: data.email, token: data.token, partner: data.partner, signed: true });
      props.history.push('/dashboard')
    }
    console.log(responseData);
  }
  useEffect(() => {},[]);
  return (
    <Container>
      <h1>Cadastrar</h1>
    <Form>
      <FormGroup>
        <Col12 >
          <Label htmlFor="name">Nome</Label>
          <InputGroup className="input-group">
            <Input
              value={name} onChange={ e => setName(e.target.value)}
              id="name" placeholder="Insira seu nome"
              type="text" aria-describedby="nameHelpBlock" required="required"
            />
          </InputGroup>
          <Span id="nameHelpBlock" className="form-text text-muted">Primeiro nome</Span>
        </Col12 >
      </FormGroup>
      
      <FormGroup>
        <Col12 >
          <Label htmlFor="email">E-mail</Label>
          <InputGroup>
            <Input
              value={email} onChange={ e => setEmail(e.target.value)}
              id="email" placeholder="Insira seu e-mail"
              type="text" className="form-control" aria-describedby="emailHelpBlock"
          />
          </InputGroup>
          <Span id="emailHelpBlock" className="form-text text-muted">email@provedor.com</Span>
        </Col12 >
      </FormGroup>
      <FormGroup>
        <Col12 >
          <Label htmlFor="password" >Senha</Label>
          <Input
            value={password} onChange={ e => setPassword(e.target.value)}
            id="password" type="password" required="required"
          />
        </Col12 >
      </FormGroup>
      <FormGroup className="form-group row">
        <Col12 >
          <Button onClick={handleSubmit}>Submit</Button>
        </Col12>
      </FormGroup>
    </Form>
    </Container>
  );
}
