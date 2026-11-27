import { Search, X } from "lucide-react-native";

import { useState } from "react";

import { Pressable, StyleSheet, TextInput, View } from "react-native";

import { Colors } from "@/constants/color";
import { FontSize, Radius, Spacing } from "@/constants/theme";

type SearchInputProps = {
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
};

export default function SearchInput({
  value,
  onChangeText,
  placeholder = "Search recordings",
}: SearchInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, isFocused && styles.focused]}>
      <Search size={20} color={Colors.textSecondary} />

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={Colors.textSecondary}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="search"
        accessibilityLabel="Search recordings"
      />
      {value.length > 0 && (
        <Pressable
          onPress={() => onChangeText("")}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel="Clear search"
        >
          <X size={18} color={Colors.text} />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.border,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Radius.full,
    paddingHorizontal: Spacing.lg,
    minHeight: 48,
    gap: Spacing.sm,
  },
  input: {
    flex: 1,
    fontSize: FontSize.sm,
    color: Colors.text,
    paddingVertical: Spacing.md,
  },
  focused: {
    borderColor: Colors.primary,
  },
});
