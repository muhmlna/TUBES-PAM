import * as React from 'react';
import { Text, Image, Box, Heading, Badge, VStack, Center } from 'native-base';
import { Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
//   const handleEditProfile = () => {
//     // Logika untuk mengatur navigasi ke halaman edit profil
//     // Implementasikan sesuai kebutuhan Anda
//     Alert.alert('Edit Profil');
//   };

//   const handleLogout = () => {
//     // Logika untuk logout pengguna
//     // Implementasikan sesuai kebutuhan Anda
//     Alert.alert('Log Out');
//   };
    const navigation = useNavigation();
  return (


    <Box bg='light.500'>
      <Box bg="#FBCFE5" alignItems="center" h={40}>
        <Image
          source={require('..//assets/profilIcon.jpg')}
          alignItems='center'
          alt='profile'
          w={20}
          h={20}
          margin={5}
          resizeMode='cover'
        />
        <Heading bold fontSize={15} color='#000000'>
          Cahya Cantik
        </Heading>
      </Box>

      <VStack h='full' alignItems='center' bg='light.50'>
        <Pressable onPress={() => navigation.navigate('Edit Profile')}>
          <Center margin={5} w="64" h="10" bg="light.50" rounded="md" shadow={3}>
            <Text>Edit Profil</Text>
            <Text color='muted.500' fontSize={10}>Atur Informasi Akun</Text>
          </Center>
        </Pressable>
        <Pressable onPress={() => {navigation.navigate('Login'); alert("Anda telah keluar")}}>
          <Center margin={5} w="64" h="10" bg="light.50" rounded="md" shadow={3}>
            <Text>Log Out</Text>
            <Text color='muted.500' fontSize={10}>Keluar Akun</Text>
          </Center>
        </Pressable>
      </VStack>
    </Box>
  );
}
