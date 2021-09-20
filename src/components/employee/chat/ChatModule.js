import React from 'react'
import { ChatEngine } from 'react-chat-engine';
import { AppData } from '../../../App'
export default function ChatModule() {

    const [appD] = React.useContext(AppData)
    console.log("IN chat module, user = ",appD)
    const userName = `${appD.user.first_name} ${appD.user.last_name}`
    return (
        <ChatEngine
			projectID='920a55aa-99cc-4f00-9ff9-9b660040956f'
			userName ={userName}
			userSecret='123'
            height='70vh'
		/>
    )
}
