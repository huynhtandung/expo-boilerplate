import Layout from "@/components/Layout";
import { Text, View } from "react-native";

const StoriesScreen = () => {
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Stories</Text>
      </View>
    </Layout>
  );
};

export default StoriesScreen;
