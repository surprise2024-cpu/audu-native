import { ArrowLeft, EllipsisVertical } from "lucide-react-native";

import { Pressable, StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/color";
import { FontSize, Spacing } from "@/constants/theme";

type ScreenHeaderProps = {
  title: string;
  onBack: () => void;
  onMenuPress: () => void;
};

export default function ScreenHeader({
  title,
  onBack,
  onMenuPress,
}: ScreenHeaderProps) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onBack}
        style={styles.iconButton}
        accessibilityRole="button"
        accessibilityLabel="Go Back"
      >
        <ArrowLeft size={24} color={Colors.text} />
      </Pressable>

      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>

      {onMenuPress ? (
        <Pressable
          onPress={onMenuPress}
          style={styles.iconButton}
          accessibilityRole="button"
          accessibilityLabel="More options"
        >
          <EllipsisVertical size={24} color={Colors.text} />
        </Pressable>
      ) : (
        <View style={styles.iconButton} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: Spacing.md,
  },
  title: {
    flex: 1,
    fontSize: FontSize.lg,
    fontWeight: "600",
    color: Colors.text,
    textAlign: "center",
  },
  iconButton: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
});
