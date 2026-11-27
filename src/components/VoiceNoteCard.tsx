import { EllipsisVertical, Play } from "lucide-react-native";

import { Pressable, StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/color";
import { FontSize, Radius, Spacing } from "@/constants/theme";

import { VoiceNote } from "@/types/voiceNote";
import { formatDuration } from "@/utils/formatDuration";
import { formatDate } from "@/utils/formateDate";

type VoiceNoteCardProps = {
  note: VoiceNote;
  onPlay: () => void;
  onMenuPress: () => void;
};

export default function VoiceNoteCard({
  note,
  onPlay,
  onMenuPress,
}: VoiceNoteCardProps) {
  return (
    <View style={styles.constainer}>
      <Pressable
        style={styles.playButton}
        onPress={onPlay}
        accessibilityRole="button"
        accessibilityLabel={`Play ${note.name}`}
      >
        <Play size={20} color={Colors.primary} fill={Colors.primary} />
      </Pressable>
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {note.name}
        </Text>

        <View>
          <Text style={styles.duration} numberOfLines={1}>
            {formatDuration(note.duration)}
          </Text>
          <Text style={styles.date} numberOfLines={1}>
            {formatDate(note.createdAt)}
          </Text>
        </View>
      </View>
      <Pressable
        style={styles.menuButton}
        onPress={onMenuPress}
        accessibilityRole="button"
        accessibilityLabel={`More options for ${note.name}`}
      >
        <EllipsisVertical size={20} color={Colors.textSecondary} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    padding: Spacing.md,
    gap: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
    elevation: 2,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },
  playButton: {
    width: 48,
    height: 48,
    borderRadius: Radius.md,
    backgroundColor: Colors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    minWidth: 0,
    gap: Spacing.sm,
  },
  name: {
    fontSize: FontSize.md,
    fontWeight: "600",
    color: Colors.text,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: Spacing.xs,
  },
  duration: {
    fontSize: FontSize.xs,
    color: Colors.textSecondary,
  },
  date: {
    flexShrink: 1,
    fontSize: FontSize.xs,
    color: Colors.textSecondary,
    textAlign: "right",
  },
  menuButton: {
    width: 32,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
});
