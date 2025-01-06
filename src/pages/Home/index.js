import React, { useEffect, useState } from "react";
import { format } from "date-fns";

import {
    Background,
    ListBalance,
    Area,
    Title,
    List
} from "./styles";

import { useIsFocused } from "@react-navigation/native";

import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import Userapi from "../../services/user";
import Header from "../../components/Header";
import BalanceItem from "../../components/BalanceItem";
import HistoricoList from "../../components/HistoricList";

const Home = () => {

    const [listBalance, setListBalance] = useState([]);
    const [dateMovement, setDateMovement] = useState(new Date());
    const [moviments, setMoviments] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        let isActive = true;

        async function getMovements() {
            let dateFormatted = format(dateMovement, 'dd/MM/yyyy');

            const receives = await Userapi.get('/receives', {
                params: {
                    date: dateFormatted
                }
            });

            const balance = await Userapi.get('/balance', {
                params: {
                    date: dateFormatted
                }
            })

            if (isActive) {

                setMoviments(receives.data);
                setListBalance(balance.data);
            }
        }

        getMovements();

        return () => isActive = false;
    }, [isFocused]);

    return (
        <Background>

            <Header title="Minhas movimentações" />

            <ListBalance
                data={listBalance}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.tag}
                renderItem={({ item }) => (
                    <BalanceItem data={item} />
                )}
            />

            <Area>
                <TouchableOpacity>
                    <Icon name="event" size={30} color="#121212" />
                </TouchableOpacity>
                <Title>Ultimas movimentações</Title>
            </Area>

            <List
                showsVerticalScrollIndicator={false}
                data={moviments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <HistoricoList data={item} />
                }
            />

        </Background>
    );
}

export default Home;
