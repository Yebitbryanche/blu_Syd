import Duration from "@/components/duration";
import Header from "@/components/header/header";
import Notification from "@/components/notification";
import images from "@/types/images";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Notifications = () => {
  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
        <View>
          <Header title={"Notifications"} />
          <View className="p-2">
            <Notification
              image={images.profile}
              text="New listings matching your search criteria for [Location] are now available 🥳"
              duration="20 Sec ago"
            />
          </View>
          <View className="p-2">
            <Notification
              image={images.profile}
              text="Checkout the newly added properties on bluSYD this week"
              duration="40 Sec ago"
            />
          </View>
          <View>
            <Duration time="Earlier" />
          </View>
          <View className="p-2">
            <Notification
              image={images.profile}
              text="The price for [Property Name] has dropped to [New Price]."
              duration="20 Sec ago"
            />
          </View>
          <View className="p-2">
            <Notification
              image={images.profile}
              text="Exclusive deals on hotels in Buea! Book now and save👍."
              duration="20 Sec ago"
            />
          </View>
          <View className="p-2">
            <Notification
              image={images.profile}
              text="New listings matching your search criteria for [Location] are now available 🥳"
              duration="4 mins ago"
            />
          </View>
          <View>
            <Duration time="This Week" />
          </View>
          <View className="p-2">
            <Notification
              image={images.profile}
              text="Exclusive deals on hotels in Buea! Book now and save👍."
              duration="2 days ago"
            />
          </View>
          <View className="p-2">
            <Notification
              image={images.profile}
              text="New listings matching your search criteria for [Location] are now available 🥳"
              duration="20 Sec ago"
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Notifications;
