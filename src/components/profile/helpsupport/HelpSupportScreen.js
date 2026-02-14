import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const HelpSupportScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
       
        {/* Help Card */}
        <LinearGradient
          colors={['#EF4444', '#F97316']}
          style={styles.helpCard}
        >
          <Text style={styles.helpTitle}>Need help?</Text>
          <Text style={styles.helpDesc}>
            Our support team is available 24/7 to assist you with any ride issues.
          </Text>

          <TouchableOpacity style={styles.supportBtn}>
            <Text style={styles.supportText}>Contact Support</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* FAQ */}
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>

        <FaqItem
          question="How is XP calculated?"
          answer="XP is earned by tracking rides, joining events, and adding to the community. Check the 'How to earn XP' section for details."
        />

        <FaqItem
          question="Can I share my live location?"
          answer="Yes! Go to the 'Track' tab and enable Live Sharing before starting your ride."
        />

        <FaqItem
          question="Is my data private?"
          answer="We value privacy. You can toggle visibility in Settings > Privacy."
        />

        {/* Links */}
        <View style={styles.linkCard}>
          <LinkItem
            icon="person-outline"
            title="Privacy Policy"
            onPress={() => navigation.navigate('PrivacyPolicy')}
          />
          <Divider />
          <LinkItem
            icon="shield-checkmark-outline"
            title="Terms of Service"
            onPress={() => navigation.navigate('Terms')}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const FaqItem = ({ question, answer }) => (
  <View style={styles.faqCard}>
    <View style={styles.faqHeader}>
      <Ionicons name="help-circle-outline" size={18} color="#EF4444" />
      <Text style={styles.faqQuestion}>{question}</Text>
    </View>
    <Text style={styles.faqAnswer}>{answer}</Text>
  </View>
);
const LinkItem = ({ icon, title, onPress }) => (
  <TouchableOpacity style={styles.linkRow} onPress={onPress}>
    <View style={styles.linkLeft}>
      <Ionicons name={icon} size={18} color="#6B7280" />
      <Text style={styles.linkText}>{title}</Text>
    </View>
    <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
  </TouchableOpacity>
);

const Divider = () => <View style={styles.divider} />;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 12,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },

  helpCard: {
    borderRadius: 14,
    padding: 16,
    marginBottom: 20,
  },

  helpTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },

  helpDesc: {
    color: '#FFE4E6',
    fontSize: 13,
    marginBottom: 14,
  },

  supportBtn: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },

  supportText: {
    color: '#EF4444',
    fontWeight: '600',
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
  },

  faqCard: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },

  faqHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },

  faqQuestion: {
    fontWeight: '600',
    fontSize: 13,
  },

  faqAnswer: {
    fontSize: 12,
    color: '#6B7280',
  },

  linkCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginTop: 14,
  },

  linkRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
  },

  linkLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  linkText: {
    fontSize: 14,
    fontWeight: '500',
  },

  divider: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginLeft: 44,
  },
});
export default HelpSupportScreen;
