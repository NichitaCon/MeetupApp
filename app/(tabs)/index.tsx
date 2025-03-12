import { Stack } from 'expo-router';
import { View, Text, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

import EventListItem from '~/components/EventListItem';

export default function Events() {
  return (
    <>
        <Stack.Screen options={{ title: 'Events' }} />

        {/* Event list item */}
        <EventListItem/>
    </>
  );
}

