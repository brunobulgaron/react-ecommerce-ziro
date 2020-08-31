import React, { useState } from "react";
import { NewProductText, NewProductWrapper, CustomLabel, ButtonsWrapper } from "./style";

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
    photo: '',
    name: ''
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
      photo: form.photo,
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
            type="text"
            // accept="image/*"
            name="photo"
            id="photo"
            placeholder="Coloque a URL da foto"
            required
            value={form.photo}
            onChange={handleInputChange}
          />

          <ButtonsWrapper>
            <input type="submit" value="Adicionar" />
          </ButtonsWrapper>
        </form>
      </NewProductWrapper>
    </>
  );
}

export default NewProduct;