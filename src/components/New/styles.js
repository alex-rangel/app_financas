import styled from "styled-components/native";

export const Background = styled.View`
    flex: 1;
    background-color: #f0f4ff;
`;

export const Input = styled.TextInput`
    height: 50px;
    width: 90%;
    background-color: #fff;
    font-size: 17px;
    padding: 0 8px;
    margin-bottom: 14px;
    border-radius: 4px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
    height: 50px;
    width: 90%;
    background-color: #00b94a;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
`;

export const SubmitText = styled.Text`
    color: #fff;
    font-size: 21px;
    font-weight: bold;
`;