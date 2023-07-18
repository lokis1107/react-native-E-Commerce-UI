import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { products } from '../data/Prodect'
import ProductCart from './ProductCart'


const ProductList = () => {
  return (
    <FlatList 
      data={products}
      keyExtractor={item => item.id}
      renderItem={({item}) =><ProductCart {...item}/> } 
      className="mb-36"
      contentContainerStyle={{paddingHorizontal:15}}
    />
  )
}

export default ProductList