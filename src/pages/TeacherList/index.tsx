import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage'

import PageHeader from '../../components/PageHeader';
import SearchForm from '../../components/SearchForm';

import styles from './styles';

const buttonFilter = (handleFunction: () => void) => {
    return (
        <BorderlessButton onPress={handleFunction}>
            <Feather
                name="filter"
                size={20}
                color="#FFF"
            />
        </BorderlessButton>
    ); 
}

function TeacherList() {
    const [filter, setFilter] = useState(false);
    const [favorites, setFavorites] = useState([]);

    function handleToggleFilters(): void {
        setFilter(!filter);
    }

    useEffect(() => {
        AsyncStorage.getItem('favorites')
            .then(response => {
                if (response) setFavorites(JSON.parse(response));
            })
    },[]);

    return (
        <View style={styles.container}>
            <PageHeader
                title='Proffys disponíveis'
                filter={buttonFilter(handleToggleFilters)}
            >
                {filter && <SearchForm />}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >

            </ScrollView>
        </View>
    );
}

export default TeacherList;