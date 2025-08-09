import Triangle from '@/components/Shape/triangle';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";
import { Text, View } from 'react-native';


export default function Layout() {
    return(
       <Tabs screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:"#005EE9",
        tabBarInactiveTintColor:"#233E93",
        tabBarStyle:{
          backgroundColor:"#ECF4FC",
          position:"relative",
          display:"flex",
          alignItems:"center",
    
       }}}>
          <Tabs.Screen 
            name="Home"
            options={{
                title:"Home",
                 tabBarLabelStyle:{
                    fontSize:12,
                    fontWeight:800
                },
                tabBarIcon: ({color,focused})  => 
                <View className='flex flex-col items-center'>
                    {
                     //  conditionall render for active triangle
                    }
                    {focused &&  <Text><Triangle/></Text>}   
                    <FontAwesome name="home" size={24} color={color}/>
                </View> 
            }}
          />
          <Tabs.Screen name="Favourites"
            options={{
                title:"Favourites",
                tabBarLabelStyle:{
                    fontSize:12,
                    fontWeight:800
                },
                tabBarIcon: ({color,focused})  => 
                    <View className='flex flex-col items-center'>
                    {
                     //  conditionall render for active triangle
                    }
                    {focused &&  <Text><Triangle/></Text>}   
                    <MaterialCommunityIcons name="star-circle-outline" size={24} color={color} />
                </View> 
                
            }}
          />
          <Tabs.Screen name="post"
            options={{
                title:"",
                tabBarIcon: ({color,focused})  =>
                     <View className='flex flex-col items-center'>
                    {
                     //  conditionall render for active triangle
                    }
                    {focused &&  <Text><Triangle/></Text>}   
                     <AntDesign name="pluscircleo" size={24} color={color} />,
                </View> 
            }}
          />
          <Tabs.Screen name="Notifications"
            options={{
                title:"Notifications",
                 tabBarLabelStyle:{
                    fontSize:12,
                    fontWeight:800
                },
                tabBarIcon: ({color,focused})  => 
                    <View className='flex flex-col items-center'>
                    {
                     //  conditionall render for active triangle
                    }
                    {focused &&  <Text><Triangle/></Text>}   
                    <MaterialCommunityIcons name="bell-outline" size={24} color={color} /> 
                </View> 
               
            }}
          />
          <Tabs.Screen name="Profile"
            options={{
                title:"Profile",
                 tabBarLabelStyle:{
                    fontSize:12,
                    fontWeight:800
                },
                tabBarIcon: ({color,focused})  => 
                    <View className='flex flex-col items-center'>
                    {
                     //  conditionall render for active triangle
                    }
                    {focused &&  <Text><Triangle/></Text>}   
                    <FontAwesome6 name="user" size={20} color={color}/>
                </View> 
                
            }}
          />
       </Tabs>
    )
}