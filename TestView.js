import React from 'react';
import { StatusBar, SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import { default as color } from "./colors";
import { default as text } from "./text-styles";
import { default as icon } from "./icon-styles";
import { default as margin } from "./margings";

export default () => <>
<StatusBar barStyle="dark-content" />
<SafeAreaView>
  <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    style={styles.container}>
    <View style={styles.header}>
   <Text style={text.title3} >Color:</Text>
   </View>
        {Object.keys(color).map((item, index) => 
        <View style={styles.row} key={`${index}`}>
            <View style={[styles.box, { backgroundColor: color[item] }]} />
            <Text style={styles.body}>{item}</Text>
        </View>)}
        <View style={styles.header}>
   <Text style={text.title3} >Text:</Text>
   </View>
        {Object.keys(text).map((item, index) => 
        <View style={styles.row} key={`${index}`}>
            <Text style={text[item]}>{item}</Text>
        </View>)}
        <Text style={text.title3} >:</Text>
        <View style={styles.header}>
   <Text style={text.title3} >Icon:</Text>
   </View>
        {Object.keys(icon).map((item, index) => 
        <View style={styles.row} key={`${index}`}>
        <View style={[styles.box, icon[item] ]} />
            <Text style={styles.body}>{item}</Text>
        </View>)}
        <View style={styles.header}>
   <Text style={text.title3} >Margin (padding):</Text>
   </View>
        {Object.keys(margin).map((item, index) => 
        <View style={styles.row} key={`${index}`}>
        <View style={[styles.box, { height: 1,  width:margin[item] } ]} />
        <Text style={styles.body}>{item}</Text>
        </View>)}
    </ScrollView>
    </SafeAreaView>
    </>

const styles = StyleSheet.create({
    container: {
        marginLeft: margin.medium1, 
        marginRight: margin.medium1
    },
    header: {
        flex: 1,
        height: 40, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        width: margin.medium1, height: margin.medium1, borderWidth: 0.5, borderColor: color.black
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: margin.tiny2,
        marginBottom: margin.tiny2
    },
    body: StyleSheet.flatten([text.body, { marginLeft: margin.small2}])
})