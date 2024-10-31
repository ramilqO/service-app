import Layout from '@/components/globals/Layout';
import { data } from '@/utils/data';
import React, { FC } from 'react';
import { View, Text, SectionList, TouchableOpacity } from 'react-native';
import { styles } from "./styles";
import { themes } from '@/utils/themes';
import useTheme from '@/hooks/useTheme';
import { useNavigation, useRoute } from '@react-navigation/native';

const SectionListItem: FC<{ time: string; distance: string }> = ({ time, distance }) => {
    const theme = useTheme();
    const themedStyles = styles(themes[theme]);

    return (
        <View style={themedStyles.item}>
            <View style={themedStyles.itemWrapper}>
                <Text style={themedStyles.time}>{time}</Text>
                <Text style={themedStyles.distance}>{distance}</Text>
            </View>
        </View>
    );
}

const EmployerMoves: FC = () => {
    const theme = useTheme();
    const themedStyles = styles(themes[theme]);

    const navigation = useNavigation<any>();
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

    return (
        <Layout>
            <SectionList
                keyExtractor={(item) => item.id + item.distance}
                sections={movements.map(movement => ({
                    title: movement.date,
                    data: movement.data,
                }))}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => navigation.navigate('/employer', {
                        time: item.time,
                        distance: item.distance,
                    })}>
                        <SectionListItem time={item.time} distance={item.distance} />
                    </TouchableOpacity>

                }
                renderSectionHeader={({ section }) => (
                    <View style={themedStyles.section}>
                        <Text style={themedStyles.sectionHeader}>{section.title}</Text>
                    </View>
                )}
            />
        </Layout>
    );
};

export default EmployerMoves;