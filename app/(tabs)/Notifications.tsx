import Duration from "@/components/duration";
import Header from "@/components/header/header";
import Notification from "@/components/notification";
import images from "@/types/images";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Notifications = () => {
  const [earlierExpanded, setEarlierExpanded] = useState(false);
  const [weekExpanded, setWeekExpanded] = useState(false);

  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
        <View>
          <Header title={"Notifications"} />

          {/* Always visible notifications */}
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

          {/* EARLIER */}
          <Duration
            time="Earlier"
            expanded={earlierExpanded}
            onToggle={() => setEarlierExpanded((prev) => !prev)}
          />
          {earlierExpanded ? (
            <>
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
            </>
          ) : (
            <View className="p-2">
              <Notification
                image={images.profile}
                text="The price for [Property Name] has dropped to [New Price]."
                duration="20 Sec ago"
              />
            </View>
          )}

          {/* THIS WEEK */}
          <Duration
            time="This Week"
            expanded={weekExpanded}
            onToggle={() => setWeekExpanded((prev) => !prev)}
          />
          {weekExpanded ? (
            <>
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
            </>
          ) : (
            <View className="p-2">
              <Notification
                image={images.profile}
                text="Exclusive deals on hotels in Buea! Book now and save👍."
                duration="2 days ago"
              />
            </View>
          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Notifications;
