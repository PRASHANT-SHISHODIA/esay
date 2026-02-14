 import {
  StyleSheet,
} from 'react-native';
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingTop:20
  },

  profileHeader: {
    alignItems: 'center',
    paddingVertical: 24,
  },

  avatarWrapper: {
    position: 'relative',
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#FB7185',
  },

  onlineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#22C55E',
    position: 'absolute',
    bottom: 4,
    right: 4,
    borderWidth: 2,
    borderColor: '#fff',
  },

  name: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 10,
  },

  level: {
    fontSize: 13,
    color: '#6B7280',
  },

  rankCard: {
    backgroundColor: '#E5391A',
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 16,
  },

  rankLabel: {
    color: '#FEE2E2',
    fontSize: 11,
  },

  rankTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 6,
  },

  progressBar: {
    height: 8,
    backgroundColor: '#FCA5A5',
    borderRadius: 6,
    overflow: 'hidden',
    marginVertical: 8,
  },

  progressFill: {
    width: '70%',
    height: '100%',
    backgroundColor: '#fff',
  },

  rankRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  rankText: {
    color: '#fff',
    fontSize: 11,
  },

  leaderboardBtn: {
    flexDirection: 'row',
    gap: 6,
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 8,
    borderRadius: 8,
    marginTop: 10,
    alignSelf: 'flex-start',
  },

  leaderboardText: {
    color: '#fff',
    fontSize: 12,
  },

  nextRank: {
    position: 'absolute',
    right: 16,
    top: 20,
    color: '#fff',
    fontSize: 11,
  },

  actionRow: {
    flexDirection: 'row',
    gap: 12,
    padding: 16,
  },

  actionCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 14,
  },

  actionTitle: {
    fontWeight: '600',
    marginTop: 6,
  },

  actionSub: {
    fontSize: 11,
    color: '#6B7280',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 8,
  },

  sectionTitle: {
    fontWeight: '700',
  },

  viewAll: {
    color: '#EF4444',
    fontSize: 12,
  },

  badgesRow: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 16,
  },

  badge: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 14,
    alignItems: 'center',
  },

  badgeText: {
    fontSize: 11,
    marginTop: 6,
  },

  settingsCard: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 14,
  },

  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
  },

  settingLeft: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },

  settingText: {
    fontSize: 14,
  },

  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  badgeCount: {
    backgroundColor: '#EF4444',
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },

  badgeNum: {
    color: '#fff',
    fontSize: 10,
  },

  signOut: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    marginBottom: 30,
  },

  signOutText: {
    color: '#EF4444',
    fontWeight: '600',
  },
});
export default styles