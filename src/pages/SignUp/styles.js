import styled from "styled-components/native";

export const Background = styled.View`
    flex: 1;
    background-color: #f0f4ff;

    `;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const AreaInput = styled.View`
    
    flex-direction: row;
`;

export const Input = styled.TextInput`
    background-color: #fff;
    width: 90%;
    font-size: 17px;
    padding: 10px;
    border-radius: 8px;
    color: #121212;
    margin-bottom: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #3b3dbf;
    width: 90%;
    height: 45px;
    border-radius: 8px;
    margin-top: 10px;
`;

export const SubmitText = styled.Text`
    font-size: 20px;
    color: #fff;
`;