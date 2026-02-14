import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons';


const Stat = ({ label, value, danger, success }) => (
  <View style={styles.statItem}>
    <Text style={styles.statLabel}>{label}</Text>
    <Text
      style={[
        styles.statValue,
        danger && { color: '#EF4444' },
        success && { color: '#22C55E' },
      ]}
    >
      {value}
    </Text>
  </View>
);

export const FuelStat = ({ value, label, highlight }) => (
  <View style={styles.fuelStat}>
    <Text
      style={[
        styles.fuelValue,
        highlight && { color: '#22C55E' },
      ]}
    >
      {value}
    </Text>
    <Text style={styles.fuelLabel}>{label}</Text>
  </View>
);

export const SectionHeader = ({ title, icon }) => (
  <View style={styles.sectionHeader}>
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
      {icon && <Ionicons name={icon} size={16} color="#EF4444" />}
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  </View>
);

 export const DocumentItem = ({ icon, title, status, date, action, danger, success, onPress }) => (
  <View style={styles.docItem}>
    <Ionicons
      name={icon}
      size={22}
      color={success ? '#22C55E' : danger ? '#EF4444' : '#6B7280'}
    />
    <View style={{ flex: 1 }}>
      <Text style={styles.docTitle}>{title}</Text>
      <View style={styles.docRow}>
        <Text
          style={[
            styles.docStatus,
            danger && { color: '#EF4444' },
            success && { color: '#22C55E' },
          ]}
        >
          {status}
        </Text>
        <Text style={styles.docDate}>{date}</Text>
      </View>
    </View>
    {action && (
      <TouchableOpacity onPress={onPress} style={styles.docActionTouchable}>
        <Text style={styles.docAction}>{action}</Text>
      </TouchableOpacity>
    )}
  </View>
);

export const ServiceItem = ({ title, date, price, note, highlight }) => (
  <View style={styles.serviceItem}>
    <View>
      <Text style={styles.serviceTitle}>{title}</Text>
      <Text style={styles.serviceDate}>{date}</Text>
    </View>
    <View style={{ alignItems: 'flex-end' }}>
      <Text style={styles.servicePrice}>{price}</Text>
      {note && (
        <Text
          style={[
            styles.serviceNote,
            highlight && { color: '#22C55E' },
          ]}
        >
          {note}
        </Text>
      )}
    </View>
  </View>
);
export default Stat
