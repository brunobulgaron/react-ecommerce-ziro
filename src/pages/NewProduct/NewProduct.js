import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import { NewProductText, NewProductWrapper, CustomLabel, ButtonsWrapper } from "./style";

import { app } from '../../index';

import axios from "axios";

// Custom Hook useForm
const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value};
    setForm(newForm);
  };

  return { form, onChange };
};

// Componente
function NewProduct(props) {
  const { form, onChange } = useForm({
    price: '',
    quantity: '',
    photo: '',
    name: ''
  });
  const [file, setFile] = useState();
  const history = useHistory();

  useEffect(() => {
    if(!props.currentUser){
      history.push('/')
    };
  }, [props.currentUser]);

  const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];

    setFile(file);
  };

  const handleStorageFile = async () => {
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    
    await fileRef.put(file);
    const customURL = await fileRef.getDownloadURL();
    
    return customURL;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const downloadUrl = await handleStorageFile();

    await axios.post("https://mystifying-chandrasekhar-4d2fb6.netlify.app/.netlify/functions/addNewProduct", {
      price: form.price,
      quantity: form.quantity,
      photo: downloadUrl,
      name: form.name
    });

    alert("Produto adicionado com sucesso!");
  };
  
  return (
    <>
      <NewProductText>Adicionar Novo Produto</NewProductText>
      <NewProductWrapper>
        <form onSubmit={handleFormSubmit}>
          <CustomLabel htmlFor="name">Nome</CustomLabel>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite o nome do produto"
            required
            value={form.name}
            onChange={handleInputChange}
          />

          <CustomLabel htmlFor="price">Preço</CustomLabel>
          <input
            type="number"
            name="price"
            id="price"
            min="0"
            placeholder="R$"
            required
            value={form.price}
            onChange={handleInputChange}
          />

          <CustomLabel htmlFor="quantity">Quantidade</CustomLabel>
          <input
            type="number"
            name="quantity"
            id="quantity"
            min="0"
            placeholder="Digite a quantidade"
            required
            value={form.quantity}
            onChange={handleInputChange}
          />
          
          <CustomLabel htmlFor="photo">Foto</CustomLabel>
          <input
            type="file"
            accept="image/png"
            name="photo"
            id="photo"
            value={form.photo}
            onChange={handleFileInputChange}
          />
          <p>Somente imagem com extensão .png</p>

          <ButtonsWrapper>
            <input type="submit" value="Adicionar" />
          </ButtonsWrapper>
        </form>
      </NewProductWrapper>
    </>
  );
}

export default NewProduct;