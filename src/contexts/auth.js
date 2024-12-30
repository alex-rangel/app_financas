import React, { createContext, useState, useEffect } from "react";

import Userapi from "../services/user";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();

    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem("token");

            if (storageUser) {

                const response = await Userapi.get("/me", {
                    headers: {
                        Authorization: `Bearer ${storageUser}`,
                    },
                });

                Userapi.defaults.headers["Authorization"] = `Bearer ${storageUser}`;
                setUser(response.data);
                setLoading(false);
            }

            setLoading(false);
        }

        loadStorage();
    }
        , []);

    async function signUp(nome, email, password) {

        setLoadingAuth(true);

        if (nome === "" || email === "" || password === "") {
            alert("Preencha todos os campos!");
            return;
        }

        try {
            const response = await Userapi.post("/users", {
                name: nome,
                password: password,
                email: email,
            });
            setLoadingAuth(false);

            navigation.goBack();

        } catch (error) {
            console.log(error);
            setLoadingAuth(false);
        }
    }

    async function signIn(email, password) {
        setLoadingAuth(true);

        try {
            const response = await Userapi.post("/login", {
                email: email,
                password: password,
            });

            const { id, name, token } = response.data;

            const data = {
                id: id,
                name: name,
                email: email,
                token: token,
            };

            await AsyncStorage.setItem('token', token);

            Userapi.defaults.headers["Authorization"] = `Bearer ${token}`;

            setUser({
                id,
                name,
                email,
            });

            setLoadingAuth(false);

        } catch (error) {
            console.log("Erro ao logar", error);
            setLoadingAuth(false);
        }
    }

    async function signOut() {

        await AsyncStorage.clear().then(() => {
            setUser(null);
        }
        );
    }


    return (
        <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn, loadingAuth, loading, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;