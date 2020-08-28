import React, { useState } from "react";
import { NewProductText, NewProductWrapper } from "./style";

import firebase from 'firebase/app';
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
function NewProduct() {
  const { form, onChange } = useForm({
    price: '',
    quantity: '',
    photo: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const request = await axios.post("https://mystifying-chandrasekhar-4d2fb6.netlify.app/.netlify/functions/addNewProduct", {
      price: form.price,
      quantity: form.quantity,
      photo: form.photo
    });

    alert("Produto adicionado com sucesso!");
  };
  
  return (
    <>
      <NewProductText>Adicionar Novo Produto</NewProductText>
      <NewProductWrapper>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="price">Preço</label>
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

          <label htmlFor="quantity">Quantidade</label>
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

          <label htmlFor="photo">Foto</label>
          <input
            type="text"
            // accept="image/*"
            name="photo"
            id="photo"
            required
            value={form.photo}
            onChange={handleInputChange}
          />

          <input type="submit" value="Adicionar" />
        </form>
      </NewProductWrapper>
    </>
  );
}

export default NewProduct;