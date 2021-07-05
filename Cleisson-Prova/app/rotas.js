import React from 'react'
import { TouchableOpacity, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { createStackNavigator } from '@react-navigation/stack'
import TelaAnterior from './src/screens/TelaAnterior'
import Dashboard from './src/screens/Dashboard'
import DefaultCards from './src/screens/DefaultCards'
import PricingTables from './src/screens/PricingTables'
import ContentBlocks from './src/screens/ContentBlocks'
import Forms from './src/screens/Forms'

const Stack = createStackNavigator()

const PrimeiraTela = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    headerLeft: () => (
                        <>
                            <TouchableOpacity style={{ marginLeft: 20, flexDirection: 'row' }}
                                onPress={() => navigation.openDrawer()}>
                                <Feather
                                    name='menu'
                                    size={40}
                                    color='black'
                                />
                            </TouchableOpacity>
                        </>
                    )
                }}
            />
            <Stack.Screen
                name="TelaAnterior"
                component={TelaAnterior}
            />
        </Stack.Navigator>
    )
}

export { PrimeiraTela }

const SegundaTela = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="DefaultCards"
                component={DefaultCards}
                options={{
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginLeft: 20 }}
                            onPress={() => navigation.openDrawer()}>
                            <Feather
                                name='menu'
                                size={40}
                                color='black'
                            />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen
                name="TelaAnterior"
                component={TelaAnterior}
            />
        </Stack.Navigator>
    )
}

export { SegundaTela }

const TerceiraTela = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="PricingTables"
                component={PricingTables}
                options={{
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginLeft: 20 }}
                            onPress={() => navigation.openDrawer()}>
                            <Feather
                                name='menu'
                                size={40}
                                color='black'
                            />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen
                name="TelaAnterior"
                component={TelaAnterior}
            />
        </Stack.Navigator>
    )
}

export { TerceiraTela }

const QuartaTela = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ContentBlocks"
                component={ContentBlocks}
                options={{
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginLeft: 20 }}
                            onPress={() => navigation.openDrawer()}>
                            <Feather
                                name='menu'
                                size={40}
                                color='black'
                            />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen
                name="TelaAnterior"
                component={TelaAnterior}
            />
        </Stack.Navigator>
    )
}

export { QuartaTela }

const QuintaTela = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Forms"
                component={Forms}
                options={{
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginLeft: 20 }}
                            onPress={() => navigation.openDrawer()}>
                            <Feather
                                name='menu'
                                size={40}
                                color='black'
                            />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen
                name="TelaAnterior"
                component={TelaAnterior}
            />
        </Stack.Navigator>
    )
}

export { QuintaTela }

const SextaTela = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Screen6"
                component={Screen6}
                options={{
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginLeft: 20 }}
                            onPress={() => navigation.openDrawer()}>
                            <Feather
                                name='menu'
                                size={40}
                                color='black'
                            />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen
                name="TelaAnterior"
                component={TelaAnterior}
            />
        </Stack.Navigator>
    )
}

export { SextaTela }