import React,{useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const feedbacks = [
  {
    id: '1',
    name: 'Alex R.',
    listing: 'Shell Station',
    time: '2 days ago',
    rating: 5,
    comment: 'Great service, clean restrooms!',
    replied: false,
  },
  {
    id: '2',
    name: 'Sam K.',
    listing: "Mike's Repair",
    time: '1 week ago',
    rating: 3,
    comment: 'Took longer than expected.',
    replied: true,
  },
  {
    id: '3',
    name: 'Elena',
    listing: 'Shell Station',
    time: '1 week ago',
    rating: 4,
    comment: 'Good fuel prices.',
    replied: false,
  },
];

const VendorFeedback = () => {
const [feedbackList, setFeedbackList] = useState(feedbacks);

    const handleReply = (id) => {
  setFeedbackList(prev =>
    prev.map(item =>
      item.id === id
        ? { ...item, replied: true }
        : item
    )
  );
};

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Feedback</Text>
        <Text style={styles.subtitle}>
          Manage customer reviews & reports
        </Text>
      </View>

      {/* LIST */}
      <FlatList
        data={feedbackList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>

            {/* TOP */}
            <View style={styles.topRow}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {item.name.charAt(0)}
                </Text>
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.meta}>
                  {item.listing} · {item.time}
                </Text>
              </View>

              <View style={styles.stars}>
                {[1, 2, 3, 4, 5].map(i => (
                  <Text
                    key={i}
                    style={{
                      color: i <= item.rating ? '#FFC107' : '#E0E0E0',
                    }}
                  >
                    ★
                  </Text>
                ))}
              </View>
            </View>

            {/* COMMENT */}
            <Text style={styles.comment}>
              “{item.comment}”
            </Text>

            {/* ACTIONS */}
            <View style={styles.actionRow}>
              {!item.replied ? (
                <TouchableOpacity onPress={() => handleReply(item.id)}>
                  <Text style={styles.reply} >← Reply to Customer</Text>
                </TouchableOpacity>
              ) : (
                <View style={styles.repliedBadge}>
                  <Text style={styles.repliedText}>✔ Replied</Text>
                </View>
              )}

              <TouchableOpacity>
                <Text style={styles.report}>⚠ Report</Text>
              </TouchableOpacity>
            </View>

          </View>
        )}
      />

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginTop: 40,
  },

  header: {
    marginBottom: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#212121',
  },

  subtitle: {
    fontSize: 13,
    color: '#9E9E9E',
    marginTop: 4,
  },

  card: {
    backgroundColor: '#F9FAFB',
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ECEFF1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  avatarText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#424242',
  },

  name: {
    fontSize: 14,
    fontWeight: '700',
    color: '#212121',
  },

  meta: {
    fontSize: 12,
    color: '#9E9E9E',
    marginTop: 2,
  },

  stars: {
    flexDirection: 'row',
  },

  comment: {
    fontSize: 13,
    color: '#424242',
    marginTop: 10,
    lineHeight: 18,
  },

  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },

  reply: {
    fontSize: 13,
    color: '#2962FF',
    fontWeight: '600',
  },

  report: {
    fontSize: 13,
    color: '#9E9E9E',
    fontWeight: '600',
  },

  repliedBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },

  repliedText: {
    fontSize: 12,
    color: '#2E7D32',
    fontWeight: '600',
  },
});

export default VendorFeedback;
