import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";


export default function Layout() {
    return(
       <Tabs screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:"#005EE9",
        tabBarInactiveTintColor:"#233E93",
        tabBarStyle:{
          backgroundColor:"#ECF4FC",
       }}}>
          <Tabs.Screen 
            name="Home"
            options={{
                title:"Home",
                tabBarIcon: ({color})  => <FontAwesome name="home" size={24} color={color}/>
            }}
          />
          <Tabs.Screen name="Favourites"
            options={{
                title:"Favourites",
                tabBarIcon: ({color})  => <MaterialCommunityIcons name="star-circle-outline" size={24} color={color} />
            }}
          />
          <Tabs.Screen name="post"
            options={{
                title:"",
                tabBarIcon: ({color})  => <AntDesign name="pluscircleo" size={24} color={color} />,
            }}
          />
          <Tabs.Screen name="Notifications"
            options={{
                title:"Notifications",
                tabBarIcon: ({color})  => <MaterialCommunityIcons name="bell-outline" size={24} color={color} />
            }}
          />
          <Tabs.Screen name="Profile"
            options={{
                title:"Profile",
                tabBarIcon: ({color})  => <FontAwesome6 name="user" size={20} color={color}/>
            }}
          />
       </Tabs>
    )
}