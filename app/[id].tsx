import { useLocalSearchParams, Stack } from 'expo-router';
import { View, Text, Image, Pressable, ActivityIndicator } from 'react-native';
import dayjs from "dayjs";

import { supabase } from '~/utils/supabase';
import { useEffect, useState } from 'react';

export default function EventPage() {
    const { id } = useLocalSearchParams();

    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchEvent();
    }, [id])

    const fetchEvent = async () => {
        setLoading(true);
        const {data, error} = await supabase.from("events").select("*").eq("id", id).single();
        setEvent(data);
        setLoading(false);
    }

    if (loading) {
        return <ActivityIndicator />;
    }


    if (!event) {
        return <Text>Event not found</Text>
    }
    
    return (

        <View className='flex-1 p-3 gap-3 bg-white'>
            <Stack.Screen options={{ title: "Event", headerTintColor: "black", headerBackTitle: "Home" }}/>
            
            <Image 
                source={{uri: event.image_uri}}
                className='w-full aspect-video rounded-lg'
            />
            <Text className='text-4xl font-bold' numberOfLines={2}>{event.title}</Text>
            <Text className='text-lg font-semibold text-gray-500 uppercase'>{dayjs(event.date).format("ddd, D, MMM")} · {dayjs(event.date).format("h:mm A")}</Text>
            <Text className='text-lg'>{event.description}</Text>
        

        {/* Footer */}
        <View className='absolute bottom-0 left-0 right-0 pb-10 p-5 border-t-2 border-gray-100 flex-row justify-between items-center'>
            <Text className='text-xl font-semibold'>Free</Text>
            <Pressable className='p-4 px-10 bg-red-400 rounded-md'>
                <Text className='font-bold text-white text-lg'>
                    Join and RSVP
                </Text>
            </Pressable>
        </View>

        </View>    
    
    )
        
}