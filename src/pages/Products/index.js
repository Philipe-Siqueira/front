import React from 'react';
import Header from '../Components/Header';
import  {FaMinus, FaPlus} from 'react-icons/fa';
export default function Products(props) {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <h1>Produtos</h1>
        <form>
        
        <div className="row justify-content-around">
          <div className="col-3">
            <div className="form-group">
              <label for="exampleInputEmail1">Nome</label>
              <input type="text" className="form-control" id="name" placeholder="Nome do Produto" />
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

/*
<table class="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Primeiro</th>
              <th scope="col">Último</th>
              <th scope="col">Nickname</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>

*/