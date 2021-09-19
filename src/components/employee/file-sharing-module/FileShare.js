import { Button } from '@material-ui/core';
import React, {useState, useEffect} from 'react'

import { AppData } from '../../../App';

export default function FileShare(props) {
    const [appD] = React.useContext(AppData);
   
    const [pickerApiLoaded, setPicker] = useState(false)
    const [accessToken, setToken] = useState(null)

  //   const isGoogleSignedIn = props.isGoogleSignedIn
  //   const auth2Instance = props.auth2Instance

  //   function logRef(){
  //     console.log("isGoogleSignedIn", isGoogleSignedIn)
  //     console.log("auth2Instance", auth2Instance)
  // }

    useEffect(()=>{
        if(window.gapi){
            window.gapi.load('picker', {'callback': onPickerApiLoad})
        }
        if(window.gapi.auth2){
            const x =  window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token
            if(!accessToken){
              setToken(x)
            }
        }
    })
     // The Browser API key obtained from the window.google API Console.
    // Replace with your own Browser API key, or your own key.
    var developerKey = appD.keys.FILE_SHARE_DEV_KEY;

    

    // Replace with your own project number from console.developers.window.google.com.
    // See "Project number" under "IAM & Admin" > "Settings"
    var appId = appD.keys.FILE_SHARE_APP_ID;

    // Scope to use to access user's Drive items.
    //var scope = ['https://www.googleapis.com/auth/drive.file'];

    

    // Use the window.google API Loader script to load the window.google.picker script.
    
    function onPickerApiLoad() {
      if(!pickerApiLoaded){
        setPicker(true)
      }
    }

    // function handleAuthResult(authResult) {
    //   if (authResult && !authResult.error) {
    //       console.log("HEEHEE", authResult.access_token)
    //     oauthToken = authResult.access_token;

    //   }
    // }

    // Create and render a Picker object for searching images.
    function createPicker() {
      if (pickerApiLoaded && accessToken) {
        var view = new window.google.picker.View(window.google.picker.ViewId.FOLDERS);
        view.setMimeTypes("image/png,image/jpeg,image/jpg");
        var picker = new window.google.picker.PickerBuilder()
            .enableFeature(window.google.picker.Feature.MULTISELECT_ENABLED)
            .enableFeature((window.google.picker.Feature.MULTISELECT_ENABLED))
            .setAppId(appId)
            .setOAuthToken(accessToken)
            .addView(view)
            .addView(new window.google.picker.DocsUploadView().setIncludeFolders(true))
            .setDeveloperKey(developerKey)
            .build();
         picker.setVisible(true);
      }
    }

    
    return (
        <>
        <Button onClick={createPicker} variant='contained' color='primary'>Google Drive</Button>
        {/* <Button variant='contained' color='primary' onClick={logRef}>Get Ref Vals</Button> */}
        </>
    )
}
