import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import DiaryCard from '../components/DiaryCard';

const diaryEntries = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2026-10-06',
    preview: 'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...',
    imageUri: 'https://picsum.photos/seed/happy/80',
    moodColor: '#10b981',
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2026-10-05',
    preview: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...',
    imageUri: 'https://picsum.photos/seed/focus/80',
    moodColor: '#3b82f6',
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2026-10-04',
    preview: 'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...',
    imageUri: 'https://picsum.photos/seed/calm/80',
    moodColor: '#f59e0b',
  },
  {
    id: 4,
    title: 'Eksplorasi React Native',
    date: '2026-10-03',
    preview: 'Belajar styling komponen, flexbox, dan memisahkan card jadi reusable component...',
    imageUri: 'https://picsum.photos/seed/code/80',
    moodColor: '#8b5cf6',
  },
  {
    id: 5,
    title: 'Evaluasi Mingguan',
    date: '2026-10-02',
    preview: 'Merapikan materi kuliah dan mengecek tugas mingguan sebelum batas akhir...',
    imageUri: 'https://picsum.photos/seed/review/80',
    moodColor: '#ef4444',
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.header}>Buku Harian</Text>
          <Text style={styles.subHeader}>Catatan Aktivitas Harian</Text>
        </View>
        <Image
          source={{ uri: 'https://picsum.photos/seed/avatar123/100' }}
          style={styles.avatar}
        />
      </View>

      {diaryEntries.map((entry) => (
        <DiaryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          preview={entry.preview}
          imageUri={entry.imageUri}
          moodColor={entry.moodColor}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  content: {
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
  },
  subHeader: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 2,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#e5e7eb',
  },
});