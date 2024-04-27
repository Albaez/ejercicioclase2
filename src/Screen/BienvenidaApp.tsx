import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const BienvenidaApp = () => {
    const [nombre, setNombre] = useState('');

    useEffect(() => {
        console.log('¡Hola!, Bienvenido', nombre);
    }, [nombre]);

    const clearNombre = () => {
        setNombre('');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={nombre}
                onChangeText={(text) => setNombre(text)}
                placeholder="Ingrese su nombre"
            />
            <Button title="Limpiar" onPress={clearNombre} />
            <Text style={styles.saludo}>¡Hola!, Bienvenido {nombre}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'pink', // Cambia el color de fondo aquí
    },
    input: {
        width: '100%',
        height: 100,
        borderWidth: 3,
        borderColor: 'green',
        borderRadius: 15,
        paddingHorizontal: 90,
        marginBottom: 30,
        fontSize: 24, // Cambia el tamaño de la fuente aquí
        color: 'black', // Cambia el color del texto aquí
    },
    
    saludo: {
        fontSize: 30, // Cambia el tamaño de la fuente del saludo aquí
        color: 'green', // Cambia el color del saludo aquí
    },
});

export default BienvenidaApp;