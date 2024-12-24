import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-expo";

import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import {
    getFilms,
    getFilmsNowPlaying,
    getGenders,
  } from "../../../services/filmesApi";

import { ButtonOut } from "@/components/ButtonOut";

import { styles } from "./styles";


export default function Home() {
    const [listTrending, setlistTrending] = useState();
    const [listNow, setlistNow] = useState();
    const [listGenders, setlistGenders] = useState();
    const { signOut } = useAuth();

    const init = async () => {
        const response = await getFilms(1);
        setlistTrending(response.data.results);
    };
    const getFilmsNow = async () => {
        const response = await getFilmsNowPlaying(1);
        setlistNow(response.data.results);
    };
    const getFilmsGenders = async () => {
        const response = await getGenders(1);
        setlistGenders(response.data.results);
    };

    useEffect(() => {
        getFilmsGenders();
    }, []);
    useEffect(() => {
        getFilmsNow();
    }, []);
    useEffect(() => {
        init();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Produtos Stone</Text>
                <ButtonOut icon="exit" onPress={() => signOut()} />
            </View>
            <ScrollView style={styles.containerScroll}>
                <Text style={styles.products}>Produtos Stone</Text>
                <ScrollView style={styles.carousel}>
                <FlatList
                    data={listTrending}
                    horizontal
                    pagingEnabled
                    keyExtractor={(item, index) => `${item}_${index}`}
                    renderItem={({ item }) => {
                        const uri = `https://image.tmdb.org/t/p/w342/${item.poster_path}`;

                        return (
                        <TouchableOpacity style={{ height: "100%", width: 70 }}>
                            <Image
                                source={{
                                    uri,
                                }}
                            />
                        </TouchableOpacity>
                        );
                    }}
                />
                </ScrollView>
            </ScrollView>
        </View>
    )
}