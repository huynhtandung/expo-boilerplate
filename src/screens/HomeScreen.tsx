import Layout from "@/components/Layout";
import { Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Home</Text>
      </View>
    </Layout>
  );
};

export default HomeScreen;
