import React from 'react'
import { Button } from 'react-native'
import { Audio } from 'expo-av'

const AudioRecord = () => {
const [recording, setRecording] = React.useState()

const startRecording = async() => {
    try {
        const permission = await Audio.requestPermissionsAsync();

        if (permission.status === 'granted') {
            await Audio.setAudioModeAsync({
                allowRecordingAndroid: true,
                playsInSilentModeAndroid: true
            });

            const { recording } = await Audio.Recording.createAsync(
                Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
            )
            setRecording(recording);
        } else{
            setMessage('Please grant permission');
        }
    } catch (e) {
        console.log('failed to start recording', e)
    }
}
const stopRecording = async() => {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
}
  return (
    <Button title='record' color='red'
    onPress={recording ? stopRecording : startRecording}
    />
  )
}

export default AudioRecord