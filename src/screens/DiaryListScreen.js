import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  Image,
} from 'react-native';
import DiaryCard from '../components/DiaryCard';
import DiaryDetailModal from '../components/DiaryDetailModal';
import { COLORS, SPACE, TYPO, BREAKPOINTS, RADIUS } from '../styles/tokens';

const DATA = [
  {
    id: '1',
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    mood: 'Senang',
    moodColor: COLORS.moodHappy,
    preview: 'Bangun lebih pagi dan jalan kaki santai 20 menit menikmati sejuknya udara...',
    body: 'Pagi ini terasa sangat berbeda dari biasanya. Udara sejuk dan suasana tenang membuat pikiran segar sebelum mulai mengerjakan tugas praktikum.',
    moodUri: 'https://picsum.photos/seed/happy/200',
    heroUri: 'https://picsum.photos/seed/happyhero/800/450',
  },
  {
    id: '2',
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    mood: 'Fokus',
    moodColor: COLORS.moodFocus,
    preview: 'Menyelesaikan modul praktikum dan diskusi seru bareng tim...',
    body: 'Diskusi kelompok berjalan sangat efektif di laboratorium. Pembagian tugas komponen berjalan lancar dan bug layout berhasil teratasi.',
    moodUri: 'https://picsum.photos/seed/focus/200',
    heroUri: 'https://picsum.photos/seed/focushero/800/450',
  },
  {
    id: '3',
    title: 'Senja di Taman',
    date: '2025-10-04',
    mood: 'Tenang',
    moodColor: COLORS.moodCalm,
    preview: 'Membaca buku favorit sambil menikmati langit sore berwarna jingga...',
    body: 'Menghabiskan sore di bangku taman kota sambil menyelesaikan bab terakhir buku. Warna senja yang hangat membuat istirahat terasa maksimal.',
    moodUri: 'https://picsum.photos/seed/calm/200',
    heroUri: 'https://picsum.photos/seed/calmhero/800/450',
  },
  {
    id: '4',
    title: 'Eksplorasi React Native',
    date: '2025-10-03',
    mood: 'Ide',
    moodColor: COLORS.moodIdea,
    preview: 'Belajar styling Flexbox, modal presentation, dan optimasi FlatList...',
    body: 'Mengeksplorasi pembuatan antarmuka dinamis multi-kolom memakai useWindowDimensions. Hasil kodenya modular dan mudah dikembangkan.',
    moodUri: 'https://picsum.photos/seed/idea/200',
    heroUri: 'https://picsum.photos/seed/ideahero/800/450',
  },
  {
    id: '5',
    title: 'Evaluasi Mingguan',
    date: '2025-10-02',
    mood: 'Review',
    moodColor: COLORS.moodReview,
    preview: 'Merangkum semua progres tugas mingguan agar siap menghadapi sesi berikutnya...',
    body: 'Memeriksa kembali catatan kode, memastikan semua branch repository rapi di GitHub, dan menyiapkan target belajar untuk pekan depan.',
    moodUri: 'https://picsum.photos/seed/review/200',
    heroUri: 'https://picsum.photos/seed/reviewhero/800/450',
  },
];

export default function DiaryListScreen() {
  const { width } = useWindowDimensions();
  const twoCols = width >= BREAKPOINTS.tablet;
  const [selected, setSelected] = useState(null);

  const keyForCols = useMemo(() => (twoCols ? 'grid-2-cols' : 'list-1-col'), [twoCols]);

  const renderItem = ({ item }) => (
    <View style={[styles.itemWrap, twoCols && styles.itemWrapTwoCols]}>
      <DiaryCard
        item={item}
        variant={twoCols ? 'grid' : 'list'}
        onPress={(entry) => setSelected(entry)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header dengan Avatar Profil */}
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.header}>Buku Harian</Text>
          <Text style={styles.subHeader}>Koleksi Catatan & Aktivitas</Text>
        </View>
        <Image
          source={{ uri: 'https://picsum.photos/seed/avatar123/100' }}
          style={styles.avatar}
          accessible={true}
          accessibilityLabel="Foto profil pengguna"
        />
      </View>

      {/* FlatList Responsif */}
      <FlatList
        key={keyForCols}
        data={DATA}
        numColumns={twoCols ? 2 : 1}
        keyExtractor={(it) => String(it.id)}
        renderItem={renderItem}
        columnWrapperStyle={twoCols ? { gap: SPACE.m } : undefined}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>Belum Ada Catatan</Text>
            <Text style={styles.emptySubtitle}>Tambahkan catatan harian baru untuk mulai mengisi list.</Text>
          </View>
        }
      />

      {/* Modal Detail */}
      <DiaryDetailModal
        visible={!!selected}
        entry={selected}
        onClose={() => setSelected(null)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACE.l,
    paddingVertical: SPACE.m,
    backgroundColor: COLORS.surface,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  header: {
    fontSize: TYPO.h1,
    fontWeight: '700',
    color: COLORS.text,
  },
  subHeader: {
    fontSize: TYPO.caption,
    color: COLORS.muted,
    marginTop: 2,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: RADIUS.avatar,
    backgroundColor: COLORS.border,
  },
  listContent: {
    padding: SPACE.l,
    gap: SPACE.m,
  },
  itemWrap: {
    flex: 1,
  },
  itemWrapTwoCols: {
    flex: 1 / 2,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
  emptyTitle: {
    fontSize: TYPO.title,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACE.xs,
  },
  emptySubtitle: {
    fontSize: TYPO.body,
    color: COLORS.muted,
    textAlign: 'center',
    paddingHorizontal: SPACE.xl,
  },
});