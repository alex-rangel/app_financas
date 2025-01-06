import React, { useState } from 'react';

import { SafeAreaView,TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import {
    Background,
    Input,
    ButtonSubmit,
    SubmitText
} from './styles';

import Header from '../Header';
import RegisterType from '../RegisterType';
import Userapi from '../../services/user';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

const New = () => {
    const navigation = useNavigation();

    const [labelInput, setLabelInput] = useState('');
    const [valueInput, setValueInput] = useState('');
    const [type, setType] = useState('receita');

    function handleSubmit() {
        
        Keyboard.dismiss();

        if (isNaN(parseFloat(valueInput)) || type === '') {
            alert('Preencha todos os campos!');
            return;
        }

        Alert.alert(
            'Confirmando dados',
            `Tipo: ${type} -  Valor: ${parseFloat(valueInput)}`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Continuar',
                    onPress: () => handleAdd()
                }
            ]
        );


    }

    async function handleAdd() {
        
        Keyboard.dismiss();

        await Userapi.post('/receive', {
            description: labelInput,
            value: Number(valueInput),
            type: type, 
            date: format(new Date(), 'dd/MM/yyyy')
        })

        setLabelInput('');
        setValueInput('');
        navigation.navigate('Home');

    }

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

                    <RegisterType type={type} sendTypeChanged={(item) =>setType(item)} />

                    <ButtonSubmit onPress={handleSubmit}>
                        <SubmitText>Registrar</SubmitText>
                    </ButtonSubmit>

                </SafeAreaView>

            </Background>
        </TouchableWithoutFeedback>
    );

}

export default New;