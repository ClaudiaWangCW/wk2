import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import Header from "./components/Header.js";
import AlbumList from "./components/AlbumList.js";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Header />
      <AlbumList />
    </SafeAreaView>
  );
};