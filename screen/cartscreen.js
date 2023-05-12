import * as React from 'react';
import { Box,FormControl,Input,ScrollView,VStack,Button, Center,Text } from "native-base";
import { FontAwesome5 } from '@expo/vector-icons';

const Cartkosong =() =>{
    return(
        <Box flex={1} px={4}>
            <Center h='90%'>
                <Center w={200} h={200} bg='light.50' rounded='full'>
                <FontAwesome5 name="shopping-basket" size={64} color="#FBCFE5" />
                </Center>
                <Text bold mt={5}>
                    keranjang belanja mu masih kosong</Text>
                <Text color='muted.400'>yuk cari barang yang kamu mau</Text>
            </Center>
            <Button bg='#FBCFE5' color='light.50'>
                Cari Barang
            </Button>
        </Box>
    );
};

export default Cartkosong;