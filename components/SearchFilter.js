import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SearchFilter = ({data, input, setInput, item}) => {
    const navigation = useNavigation()

    
  return (
    <View>
      <FlatList data={data} renderItem={({item}) => {
        if (input === "") {
            return (
                <TouchableOpacity onPress={() => navigation.navigate("Product", {...item})}>
                    <View className="pl-14 pb-3 pt-3 border-b border-gray-200">
                        <Text className="font-bold">{item.name}</Text>
                    </View>
                </TouchableOpacity>
                
            )
        }

        if (item.name.toLowerCase().includes(input.toLowerCase())) {
            return (
                <TouchableOpacity onPress={() => navigation.navigate("Product", {...item})}>
                    <View className="pl-14 pb-3 pt-3 border-b border-gray-200">
                        <Text className="font-bold">{item.name}</Text>
                    </View>
                </TouchableOpacity>
                
            )
        }
      }} />
    </View>
  )
}

export default SearchFilter

const styles = StyleSheet.create({})