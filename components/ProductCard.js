import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import React from 'react';
import { products } from '../constants/products';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function ProductCard({item}) {
    const navigation = useNavigation()
  return (
    <>
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Product', {...item})}
        >
            <View 
                style={{
                    shadowColor: themeColors.bgColor(0.2),
                    shadowRadius: 10
                }}
                className="mr-6 bg-white rounded-3xl shadow-lg">
                <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
                <View className="px-3 pb-4 space-y-2">
                    <Text className="text-lg font-bold pt-2">{item.name}</Text>
                    <View className="flex-row items-center space-x-1">
                        <Image source={require("../assets/images/full-star-2.png")} className="h-4 w-4" />
                        <Text className="text-green-700">{item.rating}</Text>
                        <Text className="text-gray-700">
                            ({item.reviews} review) . <Text className="font-semibold">{item.category}</Text>
                        </Text>
                    </View>
                    

                    
                </View>
            </View>
            
        </TouchableWithoutFeedback>
    </>
  )
}
