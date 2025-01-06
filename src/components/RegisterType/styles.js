import styled from "styled-components/native";

export const RegisterContainer = styled.View`
    flex-direction: row;
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    justify-content: space-between;
    align-items: center;
    
`;

export const RegisterTypeButton = styled.TouchableOpacity`
    flex-direction: row;
    background-color: ${props => props.checked ? '#fff' : '#e7e7e7'};
    border-radius: 4px;
    width: 47%;
    justify-content: center;
    align-items: center;
    height: 45px;
    border-width: 1.5px;
    border-color: ${props => props.checked ? '#3b3dbf' : 'transparent'};
    margin-bottom: 14px;
`;  

export const RegisterLabel = styled.Text`
    font-size: 17px;
    margin-left: 8px;
`;

