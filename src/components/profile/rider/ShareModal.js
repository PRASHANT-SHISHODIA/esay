import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function ShareModal({ visible, onClose, onSave }) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Share Ride</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.close}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* Map Preview */}
          <View style={styles.mapBox}>
            <Text style={styles.km}>18.1 km</Text>
          </View>

          {/* Ride Info */}
          <Text style={styles.route}>
            Cycle Sisters Low Hall to Highams Park Lake
          </Text>

          {/* Share Options */}
          <View style={styles.shareRow}>
            <Text>WhatsApp</Text>
            <Text>Instagram</Text>
            <Text>Facebook</Text>
            <Text>Copy</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  close: {
    fontSize: 18,
  },
  mapBox: {
    height: 120,
    backgroundColor: '#ccc',
    borderRadius: 12,
    justifyContent: 'flex-end',
    padding: 10,
    marginVertical: 12,
  },
  km: {
    color: '#fff',
    fontWeight: 'bold',
  },
  route: {
    fontSize: 13,
    marginBottom: 14,
  },
  shareRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
