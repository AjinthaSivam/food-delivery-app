import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { themeColors } from '../theme'
import * as Icon from "react-native-feather";



export default function ProductScreen() {
    const {params} = useRoute()
    let item = params
    const navigation = useNavigation()
    console.log("product: ", item)

    const [value, setValue] = useState(0)

  return (
    <View>
        <ScrollView>
            <View className="relative">
                <Image className="w-full h-72" source={item.image} />
                <TouchableOpacity
                    className="absolute top-14 left-4 bg-gray-50 rounded-full p-2 shadow"
                    onPress={() => navigation.goBack()}
                >
                    <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />

                </TouchableOpacity>

                <TouchableOpacity
                    className="absolute top-14 right-4 bg-gray-50 rounded-full p-2 shadow"
                    onPress={() => navigation.goBack()}
                >
                    <Icon.Heart strokeWidth={3} stroke={themeColors.bgColor(1)} />

                </TouchableOpacity>

            </View>
            <View
                
                className="bg-white -mt-1 pt-6"
            >
                <View className="px-5">
                    
                        <Text className="text-2xl font-bold">{item.name}</Text>
                        
                        
                    
                    
                    <View className="flex-row space-x-2 my-1">
                        <View className="flex-row items-center space-x-1">
                            <Image source={require("../assets/images/full-star-2.png")} className="h-4 w-4" />
                            <Text className="text-green-700">{item.rating}</Text>
                            <Text className="text-gray-700">
                                ({item.reviews} review) . <Text className="font-semibold">{item.category}</Text>
                            </Text>
                        
                        </View>
                    
                    

                    </View>
                    <View className="p-2">
                        <Text style={{ color: `${themeColors.text}` }} className="text-3xl font-bold pt-4">{item.price}</Text>
                    </View>

                    {/* <View className="pt-4 pb-4">
                        <NumericInput value={value} />                        
                    </View> */}
                    

                </View>
                <View className="p-6 pb-4">
                <Text>
                    {item.description}
                    </Text>

                </View>

                <View className="pl-6 pb-4">
                    <Text className="text-gray-700 font-semibold">Incredients</Text>
                    <Text className="text-gray-700">{item.ingredients}</Text>

                </View>
                <View className="items-center space-x-2 px-4 pt-6 pb-10">
                    <View className="flex-row items-center">
                        <View style={{backgroundColor: themeColors.bgColor(1)}} className="flex-row p-3 pr-4 bg-gray-300 rounded-full space-x-2">
                            <Icon.Plus height="20" width="20" stroke="white" strokeWidth={2.5}/>
                            <Text className="text-white text-10 font-semibold">ADD TO CART</Text>
                        </View>
                        
                    </View>
                
                </View>

                
                
                

            

            </View>
        </ScrollView>
      
    </View>
  )
}