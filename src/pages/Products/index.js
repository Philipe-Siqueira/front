import React, {useState, useEffect, useContext, useCallback} from 'react';
import Header from '../Components/Header';
import  { FaPlus } from 'react-icons/fa';
import api from '../../services/api';
import { UserContext } from '../../context/UserContext';

export default function Products(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const { user } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = { name, description, value };
    const responseData = await api('POST','products',payload, user.token);
    if(responseData.status === 201){
      let data = responseData.json()
      console.log(data);
      getAllProducts();
    }
    console.log(payload);
  }

  

  
  const getAllProducts = async () => {
    const responseData = await api('GET','products');
    if(responseData.status === 200){
      let data = await responseData.json()
      setList(data);
      console.log(list);
    }
  }
  const preventLoop = useCallback(getAllProducts, [])
  useEffect(() => {  
    preventLoop();
  }, [preventLoop]);

  
  return (
    <>
      <Header />
      <div className="container-fluid">
        <h1>Produtos</h1>
        <form >
        
        <div className="row justify-content-around">
          <div className="col-4">
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                value={name} onChange={ e => setName(e.target.value)}
                type="text" className="form-control" id="name" placeholder="Nome do Produto"
              />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
            <label htmlFor="description">Descrição</label>
              <input
                value={description} onChange={ e => setDescription(e.target.value)} 
                type="text" className="form-control" id="description" placeholder="Descrição do produto" 
              />
            </div>
          </div>
          <div className="col-3">
            <div className="form-group">
            <label htmlFor="value">Valor</label>
              <input 
                value={value} onChange={ e => setValue(e.target.value)}
                type="text" className="form-control" id="value" placeholder="Valor do item" />
            </div>
          </div>
          <div className="col-sm-1">
            <div className="form-group">
              <label htmlFor="record">Gravar</label>
              <button onClick={handleSubmit} type="submit" className="btn btn-dark"><FaPlus /> </button>
            </div>
          </div>
        </div>

        </form>
        <hr />
        <br />

        <div className="table-responsive">
        <table className="table">
        <thead>
          <tr>
            <th scope="col" hidden>#</th>
            <th scope="col">Nome</th>
            <th scope="col">Descrição</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>
          { list.map( item => 
            <tr key={item.id}>
              <td hidden ><input type="text" className="form-control" id="id" value={item.id} placeholder="Nome do Produto" /></td>
              <td><input disabled type="text" className="form-control" id="name" value={item.name} placeholder="Nome do Produto" /></td>
              <td><input disabled type="text" className="form-control" id="description" value={item.description} placeholder="Nome do Produto" /></td>
              <td><input disabled type="text" className="form-control" id="value" value={item.value} placeholder="Nome do Produto" /></td>
            </tr>
          
          )}
        </tbody>
      </table>
      </div>
      
      </div>
      

    </>
  );
}

