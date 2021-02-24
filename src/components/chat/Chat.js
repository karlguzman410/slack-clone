import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { selectRoomId } from '../../features/appSlice';
import ChatInput from './ChatInput';
import { db } from '../../firebase';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';


const Chat = () => {
    const roomId = useSelector(selectRoomId)

    //use this ref to refer the 'bottom of chat' for auto-scroll trick
    const chatRef = useRef(null)

    //fetching the roomDetails using firebase useDocument
    const [roomDetails] = useDocument(
        roomId &&
        db.collection('rooms').doc(roomId)
    )

    const [roomMessages, loading] = useCollection(
        roomId &&
        db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc')
    )

    //useEffect when the chat mounts with roomId/loading status change
    //this is used to run to scrollIntoView
    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: "smooth"
        })
    }, [roomId, loading, roomMessages])



    return (
        <ChatContainer>
            <ChatHeader>
                <ChatHeaderLeft>
                    <h4><strong>#{roomDetails?.data().name}</strong></h4>
                    <StarBorderIcon />
                </ChatHeaderLeft>
                <ChatHeaderRight>
                    <p>
                        <InfoOutlinedIcon />
                        Details
                    </p>
                </ChatHeaderRight>
            </ChatHeader>
            <ChatMessages>
                {roomMessages?.docs.map((doc) => {
                    const { message, timestamp, user, userImage } = doc.data()
                    return (
                        <ChatMessage
                            key={doc.id}
                            message={message}
                            timestamp={timestamp}
                            user={user}
                            userImage={userImage}
                        />
                    )
                })}
                <ChatBottom ref={chatRef} />
            </ChatMessages>

            <ChatInput
                channelName={roomDetails?.data().name}
                roomId={roomId}
            />
        </ChatContainer>
    )
}

const ChatContainer = styled.div`
    flex-grow: 1;
    flex: 0.7;
    overflow-y: scroll;
    margin-top: 50px;
`

const ChatHeader = styled.div`
    display: flex;
    width: inherit;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`

const ChatHeaderLeft = styled.div`
    display: flex;
    flex: 0.7;
    align-items: center;

    >h4 {
        display: flex;
        text-transform: lowercase;
    }

    >.MuiSvgIcon-root {
        margin-left: 5px;
        font-size: 18px;
    }
`

const ChatHeaderRight = styled.div`
    display: flex;
    flex: 0.3;
    justify-content: flex-end;
    align-items: center;

    > p {
        display: flex;
        align-items: center;
    }

    >p >.MuiSvgIcon-root {
        margin-right: 5px;
    }
`

const ChatMessages = styled.div`
`

const ChatBottom = styled.div`
    padding-bottom: 55px;
`



export default Chat
