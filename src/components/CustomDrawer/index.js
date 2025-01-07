import React, { useContext } from "react";

import { View, Text, Image } from "react-native"

import { AuthContext } from "../../contexts/auth";

import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";

export default function CustomDrawer(props) {

    const { signOut, user } = useContext(AuthContext);

    return (
        <DrawerContentScrollView {...props}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
                <Image
                    source={require('../../assets/Logo.png')}
                    style={{ width: 90, height: 90 }}
                    resizeMode="contain"
                />

                <Text style={{ fontSize: 18, marginTop: 5 }}>
                    Bem-vindo
                </Text>

                <Text style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 14, paddingHorizontal: 20 }}
                    numberOfLines={1}
                >
                    {user && user.name}
                </Text>
            </View>

            <DrawerItemList {...props} />

            <DrawerItem
                {...props}
                label="Sair do App"
                onPress={() => signOut()}
            />
        </DrawerContentScrollView>
    );
}
