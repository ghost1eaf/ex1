import React, { useContext, useEffect, useState } from 'react'
import {Product} from '../Components/Products'
import {useProducts} from '../hooks/products'
import axios, {AxiosError} from 'axios'
import {IProduct} from '../models'
import { Loader } from '../Components/Loader'
import { ErrorMessage } from '../Components/ErrorMessage'
import { Modal } from "../Components/Modal"
import { CreateProduct } from '../Components/CreateProduct'
import { ModalContext } from '../Context/ModalContext'

export function ProductsPage() {
    const{loading, error, products, addProduct} = useProducts()
    const {modal, open, close} = useContext(ModalContext)
    
    const createHandler = (product: IProduct) => {
      close()
      addProduct(product)
    }
  
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      { loading && <Loader /> }
      { error && <ErrorMessage error={error} /> }  
      { products.map(product => <Product product={product} key={product.id} />) }
     
      {modal && <Modal title='Create new product' onClose={close}>
      <CreateProduct onCreate={createHandler}/>
      </Modal>}
  
      <button 
      className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-6 py-6'
      onClick={open}
      >Add item</button>
  
    </div>
    )
}