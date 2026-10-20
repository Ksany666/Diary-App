import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { COLORS, SPACE, RADIUS, TYPO } from '../styles/tokens';

export default function DiaryDetailModal({ visible, onClose, entry }) {
  if (!entry) return null;
  const { title, date, body, preview, moodUri, heroUri, mood, moodColor } = entry;
  const activeColor = moodColor || COLORS.accent;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Image
            source={{ uri: heroUri || moodUri }}
            style={styles.hero}
            accessible={true}
            accessibilityLabel={`Gambar sampul catatan ${title}`}
          />
          <View style={styles.content}>
            <View style={styles.metaRow}>
              <Text style={styles.date}>{date}</Text>
              {mood && (
                <View style={[styles.badge, { backgroundColor: activeColor }]}>
                  <Text style={styles.badgeText}>{mood}</Text>
                </View>
              )}
            </View>

            <Text style={styles.title}>{title}</Text>
            <Text style={styles.body}>{body || preview}</Text>

            <Pressable
              onPress={onClose}
              style={[styles.button, { backgroundColor: activeColor }]}
              accessible={true}
              accessibilityRole="button"
              accessibilityLabel="Tutup detail buku harian"
            >
              <Text style={styles.buttonText}>Tutup Catatan</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  scrollContent: {
    paddingBottom: SPACE.xl,
  },
  hero: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: '#CBD5E1',
    borderBottomLeftRadius: RADIUS.card,
    borderBottomRightRadius: RADIUS.card,
  },
  content: {
    padding: SPACE.l,
    gap: SPACE.s,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACE.xs,
  },
  date: {
    fontSize: TYPO.caption,
    color: COLORS.muted,
  },
  badge: {
    paddingHorizontal: SPACE.s,
    paddingVertical: 4,
    borderRadius: RADIUS.badge,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
  },
  body: {
    fontSize: TYPO.body,
    color: COLORS.text,
    lineHeight: 22,
    marginTop: SPACE.s,
  },
  button: {
    marginTop: SPACE.xl,
    paddingVertical: SPACE.m,
    borderRadius: RADIUS.card,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },
});