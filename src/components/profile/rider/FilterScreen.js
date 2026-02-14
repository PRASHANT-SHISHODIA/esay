import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FilterScreen = ({ sortBy, setSortBy,timeRange,setTimeRange }) => {

  return (
    <View style={styles.container}>
      {/* TIME RANGE */}
      <Text style={styles.heading}>Time Range</Text>

      <View style={styles.row}>
        <FilterButton
          label="All Time"
          active={timeRange === 'all'}
          onPress={() => setTimeRange('all')}
        />
        <FilterButton
          label="This Month"
          active={timeRange === 'month'}
          onPress={() => setTimeRange('month')}
        />
        <FilterButton
          label="Last Month"
          active={timeRange === 'last'}
          onPress={() => setTimeRange('last')}
        />
      </View>

      {/* SORT BY */}
      <Text style={styles.heading}>Sort By</Text>

      <View style={styles.row}>
        <FilterButton
          label="Date"
          active={sortBy === 'date'}
          onPress={() => setSortBy('date')}
        />
        <FilterButton
          label="Distance"
          active={sortBy === 'km'}
          onPress={() => setSortBy('km')}
        />
        <FilterButton
          label="Speed"
          active={sortBy === 'avg'}
          onPress={() => setSortBy('avg')}
        />
      </View>
    </View>
  );
};

const FilterButton = ({ label, active, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.btn, active && styles.activeBtn]}
  >
    <Text style={[styles.btnText, active && styles.activeText]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 12,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  btn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  activeBtn: {
    backgroundColor: '#ef4444',
    borderColor: '#ef4444',
  },
  btnText: {
    fontSize: 13,
    color: '#333',
  },
  activeText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default FilterScreen;
