import { StyleSheet, TouchableOpacity,Text, View, ScrollView } from 'react-native'
import React from 'react'




const ProgressBar = ({ value }) => (
  <View style={styles.progressBg}>
    <View style={[styles.progressFill, { width: `${value}%` }]} />
  </View>
);
const MilestoneCard = ({ title, desc, progressText, percent, badge }) => (
  <View style={styles.card}>
    <View style={styles.rowBetween}>
      <Text style={styles.cardTitle}>{title}</Text>
      {badge && <Text style={styles.badge}>{badge}</Text>}
    </View>
    <Text style={styles.cardDesc}>{desc}</Text>
    <Text style={styles.progressLabel}>Progress</Text>
    <ProgressBar value={percent} />
    <Text style={styles.progressText}>{progressText}</Text>
  </View>
);

const BadgeItem = ({ title, sub }) => (
  <View style={styles.badgeCard}>
    <Text style={styles.badgeTitle}>{title}</Text>
    <Text style={styles.badgeSub}>{sub}</Text>
  </View>
);

export default function Achievement() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
   {/* <View style={styles.tabs}> */}
        {/* <TouchableOpacity style={styles.tabActive}>
          <Text style={styles.tabTextActive}>Achievements</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Leaderboard</Text>
        </TouchableOpacity>
      </View> */}

      {/* Active Milestones */}
      <Text style={styles.sectionTitle}>⚡ Active Milestones</Text>

      <MilestoneCard
        title="Weekend Warrior"
        desc="Cover 200 km in 2 days"
        progressText="145 / 200 km"
        percent={72}
        badge="500 XP"
      />

      <MilestoneCard
        title="Community Pillar"
        desc="Host 3 Events this month"
        progressText="1 / 3 events"
        percent={33}
        badge="Badge"
      />

      <MilestoneCard
        title="Social Butterfly"
        desc="Refer 5 friends"
        progressText="2 / 5 referrals"
        percent={40}
        badge="300 XP"
      />

      {/* Collection */}
      <Text style={styles.sectionTitle}>🏆 Collection</Text>

      <View style={styles.badgeGrid}>
        <BadgeItem title="Safety First" sub="10 safe rides" />
        <BadgeItem title="Veteran" sub="Member > 1 yr" />
        <BadgeItem title="Speed Demon" sub="Avg 80 km/h" />
        <BadgeItem title="Explorer" sub="5 new places" />
        <BadgeItem title="Night Owl" sub="5 night rides" />
        <BadgeItem title="Gear Head" sub="Add Bike Detail" />
        <BadgeItem title="Socialite" sub="Ref 3 Friends" />
        <BadgeItem title="Legend" sub="Reach Level 10" />
      </View>
      </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9FAFB',
  },
   tabs: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 12,
    padding: 4,
  },
  tabActive: {
    flex: 1,
    backgroundColor: '#111827',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  tabTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
  tabText: {
    color: '#6B7280',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginHorizontal: 16,
    marginVertical: 12,
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 14,
    borderRadius: 14,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontWeight: '700',
    fontSize: 14,
  },
  cardDesc: {
    color: '#6B7280',
    fontSize: 12,
    marginVertical: 4,
  },
  progressLabel: {
    fontSize: 12,
    marginTop: 8,
    color: '#6B7280',
  },
  progressText: {
    fontSize: 12,
    marginTop: 4,
    color: '#6B7280',
    textAlign: 'right',
  },
  progressBg: {
    height: 8,
    backgroundColor: '#FDBA74',
    borderRadius: 6,
    overflow: 'hidden',
    marginTop: 6,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#fff',
  },
  badge: {
    backgroundColor: '#FEF3C7',
    color: '#92400E',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    fontSize: 11,
  },

  badgeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
  },
  badgeCard: {
    width: '46%',
    backgroundColor: '#fff',
    margin: '2%',
    padding: 14,
    borderRadius: 14,
  },
  badgeTitle: {
    fontWeight: '700',
    fontSize: 13,
  },
  badgeSub: {
    fontSize: 11,
    color: '#6B7280',
    marginTop: 4,
  },
})