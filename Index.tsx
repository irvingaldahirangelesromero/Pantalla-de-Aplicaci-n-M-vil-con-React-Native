import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function WhatsAppScreen() {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>WhatsApp</Text>
                <View style={styles.headerIcons}>
                    <Ionicons name="camera-outline" size={24} color="white" />
                    <MaterialIcons name="more-vert" size={24} color="white" />
                </View>
            </View>

            {/* Search Bar */}
            <View style={styles.searchBar}>
                <TextInput 
                    placeholder=" Pregunta a Meta AI o buscar"
                    placeholderTextColor="#888"
                    style={styles.searchInput}
                />
            </View>

            {/* Archived Chat */}
            <View style={styles.chatItem}>
                <Image 
                    source={require("../Tarea1/img/profile.jpg")} 
                    style={styles.profilePic} 
                />
                <View style={styles.chatInfo}>
                    <Text style={styles.chatName}>+52 771 235 1466 (Tu)</Text>
                    <Text style={styles.lastMessage}>Mensaje</Text>
                </View>
                <Text style={styles.timestamp}>Ayer</Text>
            </View>

            {/* Footer Navigation */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerItem}>
                    <Ionicons name="chatbubble-outline" size={24} color="white" />
                    <Text style={styles.optName}>Chats</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem}>
                    <Ionicons name="radio-outline" size={24} color="white" />
                    <Text style={styles.optName}>Estados</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem}>
                    <Ionicons name="people-outline" size={24} color="white" />
                    <Text style={styles.optName}>Comunidades</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem}>
                    <Ionicons name="call-outline" size={24} color="white" />
                    <Text style={styles.optName}>Llamadas</Text>
                </TouchableOpacity>
            </View>

            {/* Floating Buttons */}
            <View style={styles.floatingButtons}>
                <TouchableOpacity style={styles.metaAIButton}>
                    {/* <Ionicons name="logo-react" size={28} color="white" /> */}
                    <Text style={styles.optIA}> O </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.newChatButton}>
                    <Ionicons name="chatbubble-outline" size={28} color="#0b1014" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b1014',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#0b1014',
    },
    headerIcons: {
        flexDirection: 'row',
        gap: 15,
    },
    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    searchBar: {
        backgroundColor: '#0b1014',
        padding: 10,
    },
    searchInput: {
        backgroundColor: '#23282c',
        padding: 8,
        borderRadius: 20,
        color: 'white',
    },
    chatItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        flex: 1,
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    chatInfo: {
        flex: 1,
        marginLeft: 10,
    },
    chatName: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    lastMessage: {
        color: '#888',
        fontSize: 14,
    },
    timestamp: {
        color: '#888',
        fontSize: 12,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 25,
        backgroundColor: '#0b1014',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    optName: {
        color: '#fff',
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 16,
        marginTop:5
    },
    footerItem: {
        alignItems: 'center',
    },
    floatingButtons: {
        position: 'absolute',
        right: 20,
        bottom: 80,
        alignItems: 'center',
    },
    metaAIButton: {
        backgroundColor: '#23282c',
        width: 50,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    newChatButton: {
        backgroundColor: '#25D366',
        width: 50,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    optIA: {
        color: '#80DAEB',
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 36,
    }
});
