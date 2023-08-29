import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import Stack from './stack'
import About from '../screens/About'
export default function Draw(){
    const Drawer = createDrawerNavigator()
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name='Home'
                    component={Stack}
                    options={{
                        headerTransparent: true,
                        headerTitle: 'CineDev',
                        headerTitleStyle:{
                            color: '#fff',
                            fontSize: '1.9rem',
                            width: '100%',
                            marginLeft: '60%',
                            
                        },
                    }}
                />
                <Drawer.Screen
                    name='About'
                    component={About}
                    options={{
                        headerTransparent: true,
                        headerTitle: 'Sobre nós',
                        headerTitleStyle:{
                            color: '#fff',
                            fontSize: '1.9rem',
                            width: '100%',
                            marginLeft: '60%',
                            
                        },
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}