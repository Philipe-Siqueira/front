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

export default function Users() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cellphone, setCellphone] = useState('');
  const { setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = { name, surname, email, password, cellphone, partner: false };
    const responseData = await api('POST','users',payload);
    if(responseData.status === 201){
      let data = responseData.json()
      setUser({id: data.user.id, email: data.user.email, token: data.token, partner: false, signed: true })
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
          <Label for="name">Nome</Label>
          <InputGroup class="input-group">
            <Input
              value={name} onChange={ e => setName(e.target.value)}
              id="name" placeholder="Insira seu nome"
              type="text" aria-describedby="nameHelpBlock" required="required"
            />
          </InputGroup>
          <Span id="nameHelpBlock" class="form-text text-muted">Primeiro nome</Span>
        </Col12 >
      </FormGroup>
      <FormGroup>
        <Col12 >
          <Label for="surname">Sobrenome</Label>
          <InputGroup>
            <Input
              value={surname} onChange={ e => setSurname(e.target.value)}
              id="surname" placeholder="Insira seu sobrenome"
              type="text" class="form-control" aria-describedby="surnameHelpBlock" required="required"
            />
          </InputGroup>
          <Span id="surnameHelpBlock" class="form-text text-muted">Seu sobrenome</Span>
        </Col12 >
      </FormGroup>
      <FormGroup>
        <Col12 >
          <Label for="email">E-mail</Label>
          <InputGroup>
            <Input
              value={email} onChange={ e => setEmail(e.target.value)}
              id="email" placeholder="Insira seu e-mail"
              type="text" class="form-control" aria-describedby="emailHelpBlock"
          />
          </InputGroup>
          <Span id="emailHelpBlock" class="form-text text-muted">email@provedor.com</Span>
        </Col12 >
      </FormGroup>
      <FormGroup>
        <Col12 >
          <Label for="cellphone">Celular</Label>
          <InputGroup>
            <Input
            value={cellphone} onChange={ e => setCellphone(e.target.value)}
            id="cellphone" placeholder="Insira seu celular com DDD"
            type="text" class="form-control" aria-describedby="cellphoneHelpBlock"
          />
          </InputGroup>
          <Span id="cellphoneHelpBlock" class="form-text text-muted">Apenas números 21988887777</Span>
        </Col12 >
      </FormGroup>
      <FormGroup>
        <Col12 >
          <Label for="password" >Senha</Label>
          <Input
            value={password} onChange={ e => setPassword(e.target.value)}
            id="password" type="password" required="required"
          />
        </Col12 >
      </FormGroup>
      <FormGroup class="form-group row">
        <Col12 >
          <Button onClick={handleSubmit}>Submit</Button>
        </Col12>
      </FormGroup>
    </Form>
    </Container>
  );
}
