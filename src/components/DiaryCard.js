import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { COLORS, SPACE, RADIUS, TYPO } from '../styles/tokens';

export default function DiaryCard({ item, onPress, variant = 'list' }) {
  const { title, date, preview, moodUri, mood, moodColor } = item;
  const activeColor = moodColor || COLORS.border;

  return (
    <Pressable
      onPress={() => onPress(item)}
      android_ripple={{ color: '#e2e8f0' }}
      style={({ pressed }) => [
        styles.pressableWrapper,
        { opacity: pressed ? 0.85 : 1 },
      ]}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={`Entri diary ${title}, tanggal ${date}, perasaan ${mood || 'umum'}`}
      accessibilityHint="Ketuk dua kali untuk melihat detail lengkap catatan ini"
    >
      <View
        style={[
          styles.card,
          { borderColor: activeColor },
          variant === 'grid' && styles.cardGrid,
        ]}
      >
        <Image source={{ uri: moodUri }} style={styles.moodImage} />
        <View style={styles.content}>
          <View style={styles.headerRow}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            {mood && (
              <View style={[styles.badge, { backgroundColor: activeColor }]}>
                <Text style={styles.badgeText}>{mood}</Text>
              </View>
            )}
          </View>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.preview} numberOfLines={3} ellipsizeMode="tail">
            {preview}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressableWrapper: {
    minHeight: 48,
  },
  card: {
    flexDirection: 'row',
    gap: SPACE.m,
    padding: SPACE.m,
    borderWidth: 2,
    borderRadius: RADIUS.card,
    backgroundColor: COLORS.surface,
  },
  cardGrid: {
    flex: 1,
  },
  moodImage: {
    width: 64,
    height: 64,
    borderRadius: RADIUS.avatar,
    backgroundColor: '#EEF2FF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACE.xs,
  },
  title: {
    flex: 1,
    fontSize: TYPO.title,
    fontWeight: '700',
    color: COLORS.text,
    marginRight: SPACE.s,
  },
  badge: {
    paddingHorizontal: SPACE.s,
    paddingVertical: 2,
    borderRadius: RADIUS.badge,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  date: {
    fontSize: TYPO.caption,
    color: COLORS.muted,
    marginBottom: 6,
  },
  preview: {
    fontSize: TYPO.body,
    color: COLORS.text,
    lineHeight: 18,
  },
});