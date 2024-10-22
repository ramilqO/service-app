import Layout from '@/components/globals/Layout';
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import EmployerItem from '@/components/globals/EmployerItem';
import { data } from "../../utils/data";

const EmployersList = () => {
    return (
        <Layout showTabs>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <EmployerItem
                        name={item.name}
                        profession={item.profession}
                        phone={item.phone}
                        id={item.id}
                    />
                )}
                keyExtractor={(item) => item.phone}
            />
        </Layout>
    );
};

export default EmployersList;