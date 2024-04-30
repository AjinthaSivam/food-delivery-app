import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { products } from '../constants/products'
import ProductCard from './ProductCard'

export default function CategoryFilter({setCategoryFilter}) {

  const [selectedCategory, setSelectedCategory] = useState("All")

  const [filteredProducts, setFilteredProducts] = useState(products)

  const HandleSetCategoryFilter = (selectedCategory) => {
    console.log("selected category: ", selectedCategory)
    if (!selectedCategory === "All") {
      setFilteredProducts([...products.filter(product => product.category === selectedCategory)])
    }
    else {
      setFilteredProducts(products)
    }
    setSelectedCategory(selectedCategory)

    setCategoryFilter(category);
  }


  return (
    <View className="flex pl-12 pt-3 pb-3">
             {
                filteredProducts.map((product, index) => {
                    return (
                        <ProductCard
                            item={product}
                            key={index} 
                        />
                    )

                })
            } 

    </View>
  )
}

const styles = StyleSheet.create({})