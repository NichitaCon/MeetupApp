import { View, Text, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export default function EventListItem() {
    return (
        <View className='gap-3 p-3'>
            <View className='flex-row'>
                <View className='flex-1 gap-1'>
                    <Text className='text-lg font-semibold text-amber-800 uppercase'>Wed 11 Sep · 19:30 CET</Text>
                    <Text className='text-xl font-bold' numberOfLines={2}>This is the title</Text>
                    <Text className='text-gray-700'>eCommerce in Barcelona</Text>
                </View>
                <Image 
                source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/9.jpg'}}
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