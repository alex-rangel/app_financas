import React, { useContext, useEffect, useState } from "react";
import { format } from "date-fns";

import { Background, ListBalance } from "./styles";

import { useIsFocused } from "@react-navigation/native";

import { AuthContext } from "../../contexts/auth";
import Userapi from "../../services/user";
import Header from "../../components/Header";
import BalanceItem from "../../components/BalanceItem";

const Home = () => {

    const [ listBalance, setListBalance ] = useState([]);
    const [dateMovement, setDateMovement] = useState(new Date());
    const isFocused = useIsFocused();

    useEffect(() => {
        let isActive = true;
    
        async function getMovements() {
            let dateFormatted = format(dateMovement, 'dd/MM/yyyy');
            
            const balance = await Userapi.get('/balance', {
                params: {
                    date: dateFormatted
                }
            })

            if (isActive) {
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

        </Background>
    );
}

export default Home;
