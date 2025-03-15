import { useLocalSearchParams, Stack } from 'expo-router';
import { View, Text, Image, Pressable } from 'react-native';
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
            <Stack.Screen options={{ title: "Event", headerTintColor: "black", headerBackTitle: "Home" }}/>
            
            <Image 
                source={{uri: event.image}}
                className='w-full aspect-video rounded-lg'
            />
            <Text className='text-4xl font-bold' numberOfLines={2}>{event.title}</Text>
            <Text className='text-lg font-semibold text-gray-500 uppercase'>{dayjs(event.datetime).format("ddd, D, MMM")} · {dayjs(event.datetime).format("h:mm A")}</Text>
            <Text className='text-lg'>{event.description}</Text>
        

        {/* Footer */}
        <View className='absolute bottom-0 left-0 right-0 pb-10 p-5 border-t-2 border-gray-200 flex-row justify-between items-center'>
            <Text className='text-xl font-semibold'>Free</Text>
            <Pressable className='p-5 px-8 bg-red-400 rounded-md'>
                <Text className='font-bold text-white text-lg'>
                    Join and RSVP
                </Text>
            </Pressable>
        </View>

        </View>    
    
    )
        
}