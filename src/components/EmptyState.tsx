import { AudioLines, SearchX } from "lucide-react-native";

import { StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/color";
import { FontSize, Radius, Spacing } from "@/constants/theme";

type EmptyStateProps = {
  variant?: "recordings" | "search";
};

export default function EmptyState({
  variant = "recordings",
}: EmptyStateProps) {
  const isSearch = variant === "search";

  const Icon = isSearch ? SearchX : AudioLines;

  const title = isSearch ? "No results found" : "No recording yet";

  const description = isSearch
    ? "Try searching for a different recording name"
    : "Tap the microphone below to create your first voice note";

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon size={36} color={Colors.primary} />
      </View>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.xxl,
    gap: Spacing.md,
  },
  iconContainer: {
    width: 88,
    height: 88,
    borderRadius: Radius.full,
    backgroundColor: Colors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Spacing.sm,
  },
  title: {
    fontSize: FontSize.xl,
    fontWeight: "600",
    color: Colors.text,
    textAlign: "center",
  },
  description: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    textAlign: "center",
    lineHeight: 22,
    maxWidth: 260,
  },
});
