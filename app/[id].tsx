import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

import events from "../assets/events.json"

export default function EventPage() {
    const { id } = useLocalSearchParams();

    const event = events.find((e) => e.id === id)

    return <Text>Event name: {event?.title}</Text>
}