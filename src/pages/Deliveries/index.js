import React from 'react';
import Header from '../Components/Header';
import  {FaMinus, FaPlus} from 'react-icons/fa';
export default function Deliveries(props) {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <h1>Entregas</h1>
        <form>
        
        <div className="row justify-content-around">
          <div className="col-3">
            <div className="form-group">
              <label for="exampleFormControlSelect1">Selecione o Produto</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
          <div className="col-5">
            <div className="form-group">
            <label for="exampleInputEmail1">Descrição</label>
              <input type="text" className="form-control" id="description" placeholder="Descrição do produto" />
            </div>
          </div>
          <div className="col-2">
            <div className="form-group">
            <label for="exampleInputEmail1">Valor</label>
              <input type="text" className="form-control" id="value" placeholder="Valor do item" />
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
    </>
  );
}

