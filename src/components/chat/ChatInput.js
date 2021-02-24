import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
import { db } from '../../firebase';
import firebase from 'firebase'

const ChatInput = ({ channelName, roomId }) => {

    const [input, setInput] = useState('')

    const sendMessage = (event) => {
        event.preventDefault()
        if (!roomId) {
            return false
        }

        db.collection('rooms').doc(roomId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Karl Guzman',
            userImage: 'https://i.pinimg.com/564x/21/20/b0/2120b058cb9946e36306778243eadae5.jpg'
        })

        setInput('')
    }

    return (
        <ChatInputContainer>
            <form>
                <input value={input} placeholder={`Message #${channelName}`} onChange={event => setInput(event.target.value)} />
                <Button hidden type='submit' onClick={sendMessage}>
                    <SendIcon />
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div`
    border-radius: 20px;
    > form {
        width: 65%;
        position: relative;
        display: flex;
        justify-content: space-between;
        position: fixed;
        bottom: 10px;
        margin-left: 5px;
    }

    > form >button {
        color: green;
        background-color: lightgray;
        margin-left: 10px;
        flex: 0.1;
    }


    >form >input {
        flex: 0.9;
        border: 1px solid gray;
        padding: 15px;
        outline: none;
        border-radius: 3px;
    }

`
