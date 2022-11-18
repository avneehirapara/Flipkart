import { StyleSheet, Text, View, ScrollView, TouchableOpacity, } from "react-native";
import styles from './Style';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export const MyAccount = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            < Ionicons name='ios-chevron-back' style={styles.backIcon} />
          </TouchableOpacity>
        </View>

        {/* -----------------------------------TOP ICONS ----------------------------------------- */}
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <TouchableOpacity>
            <AntDesign name='search1' style={styles.TOPhIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name='shoppingcart' style={styles.TOPhIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.BIGBox}>
          {/* -----------------------------------2 box ----------------------------------------- */}
          <View style={{ marginTop: 20 }}>
            <View style={styles.mainBox}>
              <View>
                <TouchableOpacity style={styles.box}>
                  <TouchableOpacity>
                    <SimpleLineIcons name="social-dropbox" color={'blue'} size={25} style={styles.bIcon} />
                  </TouchableOpacity>
                  <Text style={styles.bText}>Order</Text>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity style={styles.box}>
                  <TouchableOpacity>
                    <AntDesign name="hearto" color={'blue'} size={24} style={styles.bIcon} />
                  </TouchableOpacity>
                  <Text style={styles.bText}>Order</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* -----------------------------------2 box ----------------------------------------- */}

            <View style={styles.mainBox}>
              <View>
                <TouchableOpacity style={styles.box}>
                  <TouchableOpacity>
                    <AntDesign name="gift" color={'blue'} size={25} style={styles.bIcon} />
                  </TouchableOpacity>
                  <Text style={styles.bText}>Order</Text>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity style={styles.box}>
                  <TouchableOpacity>
                    <Feather name="help-circle" color={'blue'} size={25} style={styles.bIcon} />
                  </TouchableOpacity>
                  <Text style={styles.bText}>Order</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.ColorBox}></View>

          <View>
            <Text style={styles.CreditText}>Credit Options</Text>
          </View>
          <View style={{ marginBottom: 15 }}>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row' }}>
                <AntDesign name="creditcard" color={'blue'} size={25} style={styles.CIcon} />
                <Text style={styles.Ctext}>Flipkard Axis Bank Credit Card</Text>
              </View>
              <View><Text style={styles.C1Text}>Aplly & enter world of unlimited benefits!</Text></View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row' }}>
                <FontAwesome name="rupee" color={'blue'} size={25} style={[styles.CIcon, { marginLeft: 23 }]} />
                <Text style={styles.Ctext}>Flipkard Pay Later</Text>
              </View>
              <View><Text style={styles.C1Text}>Aplly for instan credit & get RS 1000* gift Card</Text></View>
            </TouchableOpacity>
          </View>
          <View style={styles.ColorBox}></View>
          <View>
            <Text style={[styles.CreditText, { marginBottom: 10 }]}>Account Setting</Text>
          </View>

          <View>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row' }}>
                <AntDesign name="pluscircleo" color={'blue'} size={25} style={[styles.CIcon, { marginLeft: 23 }]} />
                <Text style={styles.Ctext}>Flipkart Plus</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row' }}>
                <AntDesign name="user" color={'blue'} size={25} style={[styles.CIcon, { marginLeft: 23 }]} />
                <Text style={styles.Ctext}>Edit Profile</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row' }}>
                <Feather name="credit-card" color={'blue'} size={25} style={[styles.CIcon, { marginLeft: 23 }]} />
                <Text style={styles.Ctext}>Saved Card & Waller</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row' }}>
                <Ionicons name="location-outline" color={'blue'} size={25} style={[styles.CIcon, { marginLeft: 23 }]} />
                <Text style={styles.Ctext}>saved Address</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row' }}>
                <Ionicons name="language-outline" color={'blue'} size={25} style={[styles.CIcon, { marginLeft: 23 }]} />
                <Text style={styles.Ctext}>Selected language</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row' }}>
                <Ionicons name="notifications-outline" color={'blue'} size={25} style={[styles.CIcon, { marginLeft: 23 }]} />
                <Text style={styles.Ctext}>Notification Setting </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.ColorBox}></View>

        <View>
          <Text style={[styles.CreditText, { marginBottom: 10 }]}>My  Activity</Text>
        </View>
        <View>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row' }}>
                <FontAwesome name="sticky-note-o" color={'blue'} size={25} style={[styles.CIcon, { marginLeft: 23 }]} />
                <Text style={styles.Ctext}>Reviews </Text>
              </View>
            </TouchableOpacity>
          </View>
        
          <View>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row' }}>
                <Feather name="message-square" color={'blue'} size={25} style={[styles.CIcon, { marginLeft: 23 }]} />
                <Text style={styles.Ctext}>Questions & Answers </Text>
              </View>
            </TouchableOpacity>
          </View>    
      </View> 
    </ScrollView>

  )
}  