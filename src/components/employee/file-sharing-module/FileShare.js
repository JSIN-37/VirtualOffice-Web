import { Button } from '@material-ui/core';
import React, {useState, useEffect} from 'react'
import { filesharekeys } from './filesharekeys';

export default function FileShare() {
   
    const [pickerApiLoaded, setPicker] = useState(false)
    const [accessToken, setToken] = useState(null)
    useEffect(()=>{
        if(window.gapi){
            window.gapi.load('picker', {'callback': onPickerApiLoad})
            console.log("PICKER LOADED", pickerApiLoaded)
        }
        if(window.gapi.auth2){
            const x =  window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token
            if(!accessToken){
              setToken(x)
            }
            console.log("GAPI AUTH 2 TOKEN ", x)
            console.log("got access token ",accessToken)
        }
    })
     // The Browser API key obtained from the window.google API Console.
    // Replace with your own Browser API key, or your own key.
    var developerKey = filesharekeys.developerKey;

    

    // Replace with your own project number from console.developers.window.google.com.
    // See "Project number" under "IAM & Admin" > "Settings"
    var appId = filesharekeys.appId;

    // Scope to use to access user's Drive items.
    var scope = ['https://www.googleapis.com/auth/drive.file'];

    
    var oauthToken;

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
        console.log("CREAT", pickerApiLoaded, accessToken)
      if (pickerApiLoaded && accessToken) {
        var view = new window.google.picker.View(window.google.picker.ViewId.DOCS);
        view.setMimeTypes("image/png,image/jpeg,image/jpg");
        var picker = new window.google.picker.PickerBuilder()
            .enableFeature(window.google.picker.Feature.NAV_HIDDEN)
            .enableFeature(window.google.picker.Feature.MULTISELECT_ENABLED)
            .setAppId(appId)
            .setOAuthToken(accessToken)
            .addView(view)
            .addView(new window.google.picker.DocsUploadView())
            .setDeveloperKey(developerKey)
            .setCallback(pickerCallback)
            .build();
         picker.setVisible(true);
      }
    }

    // A simple callback implementation.
    function pickerCallback(data) {
      if (data.action == window.google.picker.Action.PICKED) {
        var fileId = data.docs[0].id;
        alert('The user selected: ' + fileId);
      }
    }

    
    return (
        <>
        <Button onClick={createPicker}>Click</Button>
        </>
    )
}
