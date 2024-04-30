import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../constants/categories'
import CategoryFilter from './CategoryFilter'
import { products } from '../constants/products'
import ProductCard from './ProductCard'

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState(null)
    const [showCategoryFilter, setShowCategoryFilter] = useState(false)

    const handleCategoryFilter = (selectedCategory) => {
        // Handle the selected category data here
        console.log('Selected category in parent:', selectedCategory);
        setActiveCategory(selectedCategory.id)
        setShowCategoryFilter(!showCategoryFilter)
      };
    // const setActiveCategoryFilter = (activeCategory) => {
    //     setActiveCategory(activeCategory)
    // }

    const setCategoryFilter = (selectedCategory) => {
        setActiveCategory(selectedCategory); // Update activeCategory state
      };

    

    // const renderItem = () => {
    //     return (
    //         <ScrollView
           
    //        showsVerticalScrollIndicator={false}
    //        contentContainerStyle={{
    //         paddingVertical: 15
    //        }} 
           
    //     >
    //         {
    //             products.map((item, index) => {
    //                 return (
    //                     <ProductCard
    //                         item={item}
    //                         key={index} 
    //                     />
    //                 )

    //             })
    //         }

    //     </ScrollView>
    //     )
    // }
  return (
    <View>
    
    <View className="mt-4">
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="overflow-visible"
            contentContainerStyle= {{
                paddingHorizontal: 15
            }}
        >
            {
                categories.map((category, index) => {
                    let isActive =  category.id == activeCategory;
                    let btnClass = isActive? 'bg-gray-600' : 'bg-gray-200';
                    let txtClass = isActive? 'font-semibold text-gray-800' : 'text-gray-500';
                    return (
                        <>
                        
                        <View key={index} className="flex justify-center items-center mr-6">
                            <TouchableOpacity className={`p-1 rounded-full shadow bg-gray-200 ${btnClass}`}
                                onPress={() => handleCategoryFilter(category) }
                            >

                                <Image style={{width: 45, height: 45}} source={category.image} />
                                

                            </TouchableOpacity>
                            <Text className={`text-sm ${txtClass}`}>{category.name}</Text>

                        </View>
                        {/* <View>
                            <FlatList 
                                data={products}
                                keyExtractor={(e, i) => i.toString()}
                                renderItem={renderItem}
                            />
                        </View> */}
                        
                        </>
                    )
                })
            }

        </ScrollView>

        {
            showCategoryFilter && <CategoryFilter setCategoryFilter={setCategoryFilter} />
        }
      
    </View>
    
    </View>
    
    
  )
}