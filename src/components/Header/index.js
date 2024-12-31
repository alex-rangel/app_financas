import React from "react";
import Icon from "react-native-vector-icons/Feather";

import { useNavigation } from "@react-navigation/native";

import {
    Container,
    Title,
    ButtonMenu
} from "./styles";

const Header = ({ title }) => {
    const navigation = useNavigation();

    return (
        <Container>
            <ButtonMenu onPress={() => navigation.openDrawer()}>
                <Icon name="menu" size={40} color="#000" />
            </ButtonMenu>
            
            {
                title && <Title>{title}</Title>
            }
        </Container>
    );
}

export default Header;
