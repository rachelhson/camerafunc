import React, {useCallback, useRef, useState}from "react"
import Webcam from "react-webcam"
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';


const videoConstraints ={
    width:250,
    height: 400,
    facingMode: "user",
}

function WebcamCapture() {
    const webcamRef = useRef(null)
    const [image, setImage] = useState(null)

    const capture = useCallback(()=> {
        const imageSrc = webcamRef.current.getScreenshot();
        //setImage(imageSrc);
    },{webcamRef})
    
return <div className ='webcamCapture'>
    <Webcam 
    audio = {false}
    height = {videoConstraints.height}
    ref = {webcamRef}
    screenshotFormat = 'image/jpeg' 
    width = {videoConstraints.width}
    videoConstraints = {videoConstraints}/>
    <RadioButtonCheckedIcon
    className = 'webcamCapture__button'
    onClick = {capture} 
    fontSize = "large" />
    
</div>
}
export default WebcamCapture;