import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  max-width: 500px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
`;

export const Form = styled.form.attrs(

)`

`;

export const FormGroup = styled.div.attrs({
  className: 'form-group row',
})`
`;

export const InputGroup = styled.div.attrs({
  className: 'form-group',
})`
`;

export const InputGroupAppend = styled.div.attrs({
  className: 'input-group-append',
})`
`;

export const InputGroupText = styled.div.attrs({
  className: 'input-group-text',
})`
`;



export const Col12 = styled.div.attrs({
  className: 'col-12',
})`
`;

export const Label = styled.label``;

export const Button = styled.button.attrs({
  className: 'btn btn-dark btn-block',
  type: 'submit'
})`
`;

export const Input = styled.input.attrs({
  className: 'form-control',
})`
`;

export const Span = styled.span.attrs({
  className: 'form-text text-muted',
})`
`;
