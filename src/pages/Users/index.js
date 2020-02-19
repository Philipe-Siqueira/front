/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useContext} from 'react';
import api from '../../services/api';
import { UserContext } from '../../context/UserContext';
import Header from '../Components/Header';
import  {FaMinus, FaPlus} from 'react-icons/fa';

export default function Users(props) {
  const { User } = useContext(UserContext);
  const [list, setList] = useState([]);
  
  const getAllUsers = async () => {
    const responseData = await api('GET','users');
    if(responseData.status === 200){
      let data = await responseData.json()
      setList(data);
      console.log(list);
    }
  }

  useEffect(() => {
    getAllUsers()
  }, []);
  return (
    <>
      <Header />
      <div className="row justify-content-around">
          <h1>Usuários</h1>
          <button type="button" className="btn btn-dark"><FaPlus /></button>
      </div>
      <br />
      <div className="container-fluid">
        
      <div class="table-responsive">
        <table class="table">
        <thead>
          <tr>
            <th scope="col" hidden>#</th>
            <th scope="col">Nome</th>
            <th scope="col">Sobrenome</th>
            <th scope="col">E-mail</th>
            {/*<th scope="col">Senha</th>*/}
            <th scope="col">Celular</th>
            <th scope="col">Tipo</th>
            <th scope="col">Gravar</th>
            <th scope="col">Remover</th>
          </tr>
        </thead>
        <tbody>
          { list.map( item => 

          
            <tr key={item.id}>
              <td hidden ><input type="text" className="form-control" id="id" value={item.id} placeholder="Nome do Produto" /></td>
              <td><input disabled type="text" className="form-control" id="name" value={item.name} placeholder="Nome do Produto" /></td>
              <td><input disabled type="text" className="form-control" id="surname" value={item.surname} placeholder="Nome do Produto" /></td>
              <td><input disabled type="text" className="form-control" id="email" value={item.email} placeholder="Nome do Produto" /></td>
              {/*<td><input disabled type="text" className="form-control" id="password" value={item.password} placeholder="Nome do Produto" /></td>*/}
              <td><input type="text" disabled className="form-control" id="cellphone" value={item.cellphone} placeholder="Nome do Produto" /></td>
              <td>
                <select disabled class="form-control" id="partner">
                  { item.partner ? <option value="true">Parceiro </option> : <option value="false">Cliente</option>}
                  { item.partner ? <option value="false">Cliente</option> : <option value="true">Parceiro </option>}
                  
                </select>
              </td>
              <td> <button type="submit" className="btn btn-dark"><FaPlus /> </button></td>
              <td><button type="submit" className="btn btn-danger"><FaMinus /></button></td>
            </tr>
          
          )}
        </tbody>
      </table>
      </div>
      
      </div>
    </>
  );
}
