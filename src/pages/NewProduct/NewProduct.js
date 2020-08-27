import React from 'react'
import { NewProductText, NewProductWrapper } from './style';

function NewProduct() {
  return (
    <>
    <NewProductText>Adicionar Novo Produto</NewProductText>
    <NewProductWrapper>
      <form>
        <label htmlFor="price">Preço</label>
        <input type="number" name="price" id="price" min="0" placeholder="R$"/>
        
        <label htmlFor="quantity">Quantidade</label>
        <input type="number" name="quantity" id="quantity" min="0" placeholder="Digite a quantidade"/>
        
        <label htmlFor="productPicture">Foto</label>
        <input type="text" name="productPicture" id="productPicture" placeholder="Coloque o endereço da foto"/>

        <input type="submit" value="Adicionar" />
      </form>
    </NewProductWrapper>
    </>
  )
};

export default NewProduct;