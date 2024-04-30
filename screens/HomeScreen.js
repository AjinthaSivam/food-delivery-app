import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';
import { features } from '../constants/features';
import FeaturedRow from '../components/FeaturedRow';
import SearchFilter from '../components/SearchFilter';
import { products } from '../constants/products';
import CategoryFilter from '../components/CategoryFilter';

export default function HomeScreen() {

  const [input, setInput] = useState("");
  const [showSearchFilter, setShowSearchFilter] = useState(false)
  

  const handleSearchClick = () => {
    setShowSearchFilter(!showSearchFilter)
  }

  return (
    <SafeAreaView className="bg-white pt-12">
      <StatusBar barStyle="dark-content" />
      <View className="flex-row items-center space-x-2 px-4 pb-6">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput onPressIn={handleSearchClick} value={input} onChangeText={(text) => setInput(text)} placeholder="What excites your taste buds?" className="ml-1 flex-1" />
          
        </View>

        <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3 bg-gray-300 rounded-full">
          <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white" />

        </View>

      </View>

      {
        showSearchFilter && <SearchFilter data={products} input={input} setInput={setInput} />
      }

      

      {/* main */}
      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20
        }}
      >
        {/* Categories */}
        <Categories />
        

        {/* Features */}
        <View className="mt-5">
          {
            features.map((feature, index) => {
              return (
                <FeaturedRow
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />

                
              )
            })
          }
        </View>
        

      </ScrollView>
    </SafeAreaView>
  )
}