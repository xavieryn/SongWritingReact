import React from 'react'
import { Button } from 'react-native'
import { Audio } from 'expo-av'
import { View } from 'react-native'

const AudioRecord = () => {
const [recording, setRecording] = React.useState()
const [recordings, setRecordings] = React.useState([]);

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

    let updatedRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI()
      
    });

    setRecordings(updatedRecordings);
}

function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes = minutesDisplay)*60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
}

function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      return (
        <View key={index} style={styles.row}>
          <Text style={styles.fill}>Recording {index + 1} - {recordingLine.duration}</Text>
          <Button style={styles.button} onPress={() => recordingLine.sound.replayAsync()} title="Play"></Button>
          <Button style={styles.button} onPress={() => Sharing.shareAsync(recordingLine.file)} title="Share"></Button>
        </View>
      );
    });
  }

return (
    <View>
        <Button     
        title={recording ? 'Stop Recording' : 'Start Recording'}
        color='red'
        onPress={recording ? stopRecording : startRecording}/>
        
        {getRecordingLines()}
    </View>
  )
}

export default AudioRecord