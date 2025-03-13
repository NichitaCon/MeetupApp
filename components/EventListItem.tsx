import { View, Text, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import dayjs from "dayjs"

export default function EventListItem({ event }) {
    return (
        <View className='gap-3 p-3 border-b border-gray-200'>
            <View className='flex-row'>
                <View className='flex-1 gap-1'>
                    <Text className='text-lg font-semibold text-amber-800 uppercase'>{dayjs(event.datetime).format("ddd, D, MMM")} · {dayjs(event.datetime).format("h:mm A")}</Text>
                    <Text className='text-xl font-bold' numberOfLines={2}>{event.title}</Text>
                    <Text className='text-gray-700'>{event.location}</Text>
                </View>
                <Image 
                source={{uri: event.image}}
                className='w-2/5 aspect-video rounded-lg'
                />
            </View>

            <View className='flex-row gap-3'>
                <Text className='text-gray-600 mr-auto'>16 Going · ICON BCN</Text>

                <Feather name="bookmark" size={24} color="gray" />
                <Feather name="share" size={24} color="gray" />
            </View>
        </View>
    )
}