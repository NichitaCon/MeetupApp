import { useLocalSearchParams, Stack } from 'expo-router';
import { View, Text, Image } from 'react-native';
import dayjs from "dayjs";

import events from "../assets/events.json"

export default function EventPage() {
    const { id } = useLocalSearchParams();

    const event = events.find((e) => e.id === id)

    if (!event) {
        return <Text>Event not found</Text>
    }
    
    return (

        <View className='flex-1 p-3 gap-3 bg-white'>
            <Stack.Screen options={{ title: "Event", headerBackTitleVisible: false, headerTintColor: "black"}}/>
            
            <Image 
                source={{uri: event.image}}
                className='w-full aspect-video rounded-lg'
            />
            <Text className='text-4xl font-bold' numberOfLines={2}>{event.title}</Text>
            <Text className='text-lg font-semibold text-gray-500 uppercase'>{dayjs(event.datetime).format("ddd, D, MMM")} · {dayjs(event.datetime).format("h:mm A")}</Text>
            <Text className='text-lg'>{event.description}</Text>
        </View>    
    
    
    
    
    
    )
        
}