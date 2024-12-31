import React, { useState } from 'react';

import { SafeAreaView,TouchableWithoutFeedback, Keyboard } from 'react-native';

import {
    Background,
    Input,
    ButtonSubmit,
    SubmitText
} from './styles';

import Header from '../Header';

const New = () => {

    const [labelInput, setLabelInput] = useState('');
    const [valueInput, setValueInput] = useState('');
    const [type, setType] = useState('receita');

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Background>

                <Header title="Registrando" />

                <SafeAreaView style={{marginTop: 14, alignItems: 'center'}}>
                    <Input
                        placeholder="Descrição desse registro"
                        value={labelInput}
                        onChangeText={text => setLabelInput(text)}
                    />

                    <Input
                        placeholder="Valor desejado"
                        keyboardType="numeric"
                        value={valueInput}
                        onChangeText={text => setValueInput(text)}
                    />

                    <ButtonSubmit>
                        <SubmitText>Registrar</SubmitText>
                    </ButtonSubmit>

                </SafeAreaView>

            </Background>
        </TouchableWithoutFeedback>
    );

}

export default New;