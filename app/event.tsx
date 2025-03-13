import { View, Text, StyleSheet } from 'react-native';

const Event: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Event Page</Text>
            <Text style={styles.details}>Details about the event will go here.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    details: {
        fontSize: 16,
    },
});

export default Event;