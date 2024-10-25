import Layout from '@/components/globals/Layout';
import { data } from '@/utils/data';
import React, { FC } from 'react';
import { View, Text, SectionList, TouchableOpacity } from 'react-native';
import { styles } from "./styles";
import { themes } from '@/utils/themes';
import useTheme from '@/hooks/useTheme';
import { useRoute } from '@react-navigation/native';

const SectionListItem: FC<{ time: string; distance: string }> = ({ time, distance }) => {
    const theme = useTheme();
    const themedStyles = styles(themes[theme]);

    return (
        <TouchableOpacity>
            <View style={themedStyles.item}>
                <View style={themedStyles.itemWrapper}>
                    <Text style={themedStyles.time}>{time}</Text>
                    <Text style={themedStyles.distance}>{distance}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const EmployerMove: FC = () => {
    const theme = useTheme();
    const themedStyles = styles(themes[theme]);
    const route = useRoute();

    const employer = data.find(item => item.id === route.params?.id);    // любые другие запросы к API для получения передвижений

    if (!employer) {
        return (
            <Layout>
                <Text>Работодатель не найден</Text>
            </Layout>
        );
    }

    const movements = employer.movements;

    console.log(movements);


    return (
        <Layout>
            <SectionList
                keyExtractor={(item) => item.id + item.distance}
                sections={movements.map(movement => ({
                    title: movement.date,
                    data: movement.data,
                }))}
                renderItem={({ item }) => <SectionListItem time={item.time} distance={item.distance} />}
                renderSectionHeader={({ section }) => (
                    <View style={themedStyles.section}>
                        <Text style={themedStyles.sectionHeader}>{section.title}</Text>
                    </View>
                )}
            />
        </Layout>
    );
};

export default EmployerMove;