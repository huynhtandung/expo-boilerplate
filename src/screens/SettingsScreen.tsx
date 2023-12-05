import Layout from "@/components/Layout";
import { Text, View } from "react-native";

const SettingsScreen = () => {
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Settings</Text>
      </View>
    </Layout>
  );
};

export default SettingsScreen;
