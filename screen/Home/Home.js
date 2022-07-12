import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import HeaderTabs from '../../componets/Home/HeaderTab/HeaderTab';
import SearchBar from '../../componets/Home/SearchBar/SearchBar';
import Categories from '../../componets/Home/Categories/Categories';
import Bottom from '../../componets/Home/Bottom/Bottom';
import RestaurantItems, {
  localRestaurants,
} from '../../componets/Home/Resturant/Restaurant';

export default function Home({navigation}) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState('San Francisco');
  const [activeTab, setActiveTab] = useState('Delivery');
  return (
    <SafeAreaView>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />
          <RestaurantItems
            restaurantData={restaurantData}
            navigation={navigation}
          />
        </ScrollView>
        <Bottom/>
      </View>
    </SafeAreaView>
  );
}
