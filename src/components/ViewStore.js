import { Dimensions,Image,StyleSheet, ScrollView,TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
const { width } = Dimensions.get('window');

export default function ViewStore() {
  return (
       <View style={styles.container}>
      <View style={styles.section}>
          <View style={styles.merchHeader}>
            <Text style={styles.sectionHeading}>Official Merch</Text>
            <TouchableOpacity>
              <Text style={styles.viewStore}>View Store</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.merchScroll}
          >
            <MerchItem
              title="Rider Tee"
              price="$24.99"
              image={{uri:'https://media.istockphoto.com/id/821282266/photo/white-mug-isolated.jpg?s=2048x2048&w=is&k=20&c=aMUoxLBq_4VOE5HbYpWebboQNerQzoH4ASAiFjk0R3g='}}
            />
            <MerchItem
              title="Travel Mug"
              price="$14.99"
              image={{uri:'https://market99.com/cdn/shop/files/mug-with-sipper-lid-tea-and-coffee-mug-black-stainless-steel-330-ml-mug-1-29021172400298_2048x2048.jpg?v=1737454828'}}
            />
            <MerchItem
              title="Snapback"
              price="$19.99"
              image={{uri:'https://media.istockphoto.com/id/1157599346/photo/black-baseball-cap-isolated-on-white-background-with-clipping-path.jpg?s=2048x2048&w=is&k=20&c=Bt_4bG2hIaJ443kGl0BwJmQ6U5kAWYHhZcYpks0MHck='}}
            />
          </ScrollView>
        </View>

        {/* Separator Line */}
    </View>
  )
}
const MerchItem = ({ title, price, image }) => (
  <View style={styles.merchItem}>
    <Image source={image} style={styles.merchImage} />

    <Text style={styles.merchTitle}>{title}</Text>
    <Text style={styles.merchPrice}>{price}</Text>

    <TouchableOpacity style={styles.buyButton}>
      <Text style={styles.buyButtonText}>Buy Now</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 13,
  },
     merchItem: {
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    padding: 20,
    marginRight: 15,
    width: width * 0.65,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  merchImage: {
  width: '100%',
  height: 100,
  borderRadius: 8,
  backgroundColor: '#f1f5f9',
  marginBottom: 8,
},
 merchTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  merchPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ed2424ff',
    marginBottom: 20,
  },
   buyButton: {
    backgroundColor: '#2c3c61ff',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
    sectionHeading: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
   viewStore: {
    fontSize: 14,
    color: '#ed2424ff',
    fontWeight: '600',
  },
   merchScroll: {
    flexDirection: 'row',
    
  },
  section: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  merchHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
})