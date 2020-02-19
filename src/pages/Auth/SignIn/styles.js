import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  max-width: 500px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
`;

export const Form = styled.form``;

export const FormGroup = styled.div.attrs({
  className: 'form-group',
})`
`;

export const Label = styled.label``;

export const Button = styled.button.attrs({
  className: 'btn btn-dark',
})`
`;

export const Input = styled.input.attrs({
  className: 'form-control',
})`
`;
