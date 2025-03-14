import { Stack } from 'expo-router';
import { View, Text, Image, FlatList } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

import events from '~/assets/events.json';
import EventListItem from '~/components/EventListItem';

export default function Events() {
  return (
    <>
        <Stack.Screen options={{ title: 'Events' }} />

        <FlatList className="bg-white" data = {events} renderItem={({ item }) => <EventListItem event={item} />} />

    </>
  );
}

