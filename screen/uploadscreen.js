import React, { useState } from "react";
import {
  FormControl,
  Input,
  Stack,
  Text,
  Divider,
  Box,
  ScrollView,
  Center,
  Image,
  Button,
  NativeBaseProvider,
} from "native-base";
import DocumentPicker from 'react-native-document-picker';
import { useNavigation } from '@react-navigation/native';



export default function Upload() {
  const navigation = useNavigation();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
  
      setSelectedFile(res);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        // File selection was canceled
        console.log('File selection canceled');
      } else {
        // Other error occurred
        console.error('Error selecting file:', error);
      }
    }
  };
  

  const handleClearFile = () => {
    setSelectedFile(null);
  };

  return (
    <ScrollView w="100%">
      <Stack
        space={2.5}
        alignSelf="center"
        px="4"
        safeArea
        mt="4"
        w={{
          base: "100%",
          md: "25%",
        }}
      >
        <Box>
          <FormControl mb="5">
            <FormControl.Label>Judul</FormControl.Label>
            <Input placeholder="Masukkan judul tawaran Anda." />
            <FormControl.HelperText>
              Berikan judul pada tawaran Anda.
            </FormControl.HelperText>
          </FormControl>
          <Divider />
          <FormControl mb="5">
            <FormControl.Label>Harga</FormControl.Label>
            <Input
              keyboardType="numeric"
              placeholder="Masukkan harga tawaran Anda."
            />
            <FormControl.HelperText>
              Masukkan harga tawaran dalam rupiah.
            </FormControl.HelperText>
          </FormControl>
          <Divider />
          <FormControl mb="5">
            <FormControl.Label>Lokasi</FormControl.Label>
            <Input placeholder="Masukkan lokasi Anda." />
            <FormControl.HelperText>
              Masukkan lokasi tawaran Anda.
            </FormControl.HelperText>
          </FormControl>
          <Divider />
          <FormControl mb="5">
            <FormControl.Label>Deskripsi</FormControl.Label>
            <Input placeholder="Masukkan deskripsi tawaran" />
            <FormControl.HelperText>
              Berikan deskripsi singkat mengenai tawaran Anda.
            </FormControl.HelperText>
          </FormControl>
          <Divider />
          <FormControl mb="5">
            <FormControl.Label>Unggah File</FormControl.Label>
            <Button onPress={handleFileSelect} colorScheme="primary">
              Pilih File
            </Button>
            {selectedFile && (
              <Box mt="3">
                <Text>{selectedFile.name}</Text>
                <Button onPress={handleClearFile} mt="3" size="sm">
                  Hapus File
                </Button>
              </Box>
            )}
          </FormControl>
          <Divider />
          <Center>
            <Button  mt={5} bg="#FBCFE5" onPress={() => {navigation.navigate('Posting'); alert("Tawaran diunggah!")}}>Unggah</Button>
          </Center>
        </Box>
      </Stack>
    </ScrollView>
  );
}

