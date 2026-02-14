import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
  },

  addBtn: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },

  addText: {
    color: '#EF4444',
    fontWeight: '600',
  },

  right: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },

  addvehicle: {
    color: '#EF4444',
    fontWeight: '600',
    marginLeft: 4,
  },

  vehicleCard: {
    margin: 16,
    borderRadius: 16,
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#EF4444',
  },

  vehicleCardsContainer: {
    // Container for multiple vehicle cards
  },

  selectedVehicleCard: {
    borderWidth: 4,
    borderColor: '#EF4444',
    shadowColor: '#EF4444',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },

  bikeImage: {
    height: 160,
    width: '100%',
  },

  overlay: {
    position: 'absolute',
    bottom: 70,
    left: 14,
  },

  bikeName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  bikeMeta: {
    color: '#E5E7EB',
    fontSize: 12,
  },

  vehicleStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
  },

  statItem: {
    alignItems: 'center',
  },

  statLabel: {
    fontSize: 10,
    color: '#6B7280',
  },

  statValue: {
    fontWeight: '700',
    marginTop: 4,
  },

  fuelCard: {
    marginHorizontal: 16,
    backgroundColor: '#111827',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },

  fuelHeader: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 10,
  },

  fuelTitle: {
    color: '#fff',
    fontWeight: '600',
  },

  fuelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  fuelStat: {
    alignItems: 'center',
  },

  fuelValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  fuelLabel: {
    color: '#9CA3AF',
    fontSize: 11,
  },

  sectionHeader: {
    paddingHorizontal: 16,
    marginVertical: 8,
  },

  sectionTitle: {
    fontWeight: '700',
  },

  docItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
    gap: 10,
  },

  docTitle: {
    fontWeight: '600',
  },

  docRow: {
    flexDirection: 'row',
    gap: 10,
  },

  docStatus: {
    fontSize: 11,
  },

  docDate: {
    fontSize: 11,
    color: '#6B7280',
  },

  docAction: {
    color: '#EF4444',
    fontWeight: '600',
    fontSize: 12,
  },

  serviceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
  },

  serviceTitle: {
    fontWeight: '600',
  },

  serviceDate: {
    fontSize: 11,
    color: '#6B7280',
  },

  servicePrice: {
    fontWeight: '700',
  },

  serviceNote: {
    fontSize: 11,
    color: '#6B7280',
  },
  // addvehicle: {
  //   color: '#EF4444',
  //   fontWeight: '600',
  //   marginLeft: 4,
  // },
  // right: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginRight: 16,
  // },
});
export default styles;
