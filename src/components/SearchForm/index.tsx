import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

const SearchForm: React.FC = () => {
    return (
        <>
        <View style={styles.searcForm}>

            <Text style={styles.label}>Matéria</Text>
            <TextInput
                placeholderTextColor="#C1BCCC"
                style={styles.input}
                placeholder="Qual a matéria?"
            />
        </View>

        <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                    placeholderTextColor="#C1BCCC"
                    style={styles.input}
                    placeholder="Qual o dia?"
                />
            </View>

            <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                    placeholderTextColor="#C1BCCC"
                    style={styles.input}
                    placeholder="Qual o horário?"
                />
            </View>
        </View>

        <RectButton style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Filtrar</Text>
        </RectButton>
        </>
    );
}

export default SearchForm;