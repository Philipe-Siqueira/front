import React from 'react';
// import { Container } from './styles';
import Header from '../Components/Header';
import  {FaMinus, FaPlus} from 'react-icons/fa';
export default function Address(props) {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <h1>Endereços</h1>
        <form>
        <div className="row justify-content-around">
          <div className="col-4">
            <div className="form-group">
              <label for="exampleInputEmail1">Endereço</label>
              <input type="text" className="form-control" id="address" placeholder="Seu Endereço" />
            </div>
          </div>
          <div className="col-2">
            <div className="form-group">
            <label for="exampleInputEmail1">Número</label>
              <input type="text" className="form-control" id="number" placeholder="Seu Número" />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
            <label for="exampleInputEmail1">Bairro</label>
              <input type="text" className="form-control" id="district" placeholder="Seu Bairro" />
            </div>
          </div>
          <div className="col-2">
            <div className="form-group">
            <label for="exampleInputEmail1">CEP</label>
              <input type="text" className="form-control" id="postcode" placeholder="Seu CEP" />
            </div>
          </div>
        </div>

        <div className="row justify-content-around">
          <div className="col-4">
            <div className="form-group">
              <label for="exampleInputEmail1">Complemento</label>
              <input type="text" className="form-control" id="complement" placeholder="Complemento do seu endereço" />
            </div>
          </div>
          <div className="col-2">
            <div className="form-group">
            <label for="exampleInputEmail1">Estado</label>
              <input type="text" className="form-control" id="state" placeholder="Estado" />
            </div>
          </div>
          <div className="col-2">
            <div className="form-group">
            <label for="exampleInputEmail1">Cidade</label>
              <input type="text" className="form-control" id="city" placeholder="Cidade" />
            </div>
          </div>
          <div className="col-2">
            <div className="form-group">
            <label for="exampleInputEmail1">Cidade</label>
              <input type="text" className="form-control" id="city" placeholder="Cidade" />
            </div>
          </div>
          <div className="col-sm-1">
            <div className="form-group">
              <label for="record">Gravar</label>
              <button type="submit" className="btn btn-dark"><FaPlus /> </button>
            </div>
          </div>
          <div className="col-sm-1">
            <div className="form-group">
              <label for="record">Remover</label>
              <button type="submit" className="btn btn-danger"><FaMinus /></button>
            </div>
          </div>
        </div>
        
        </form>
      </div>
      <hr />
        
        
        
      
      
    </div>
  );
}
