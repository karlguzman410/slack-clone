import React from 'react'
import styled from 'styled-components'
const ChatMessage = ({ message, timestamp, user, userImage }) => {
    return (
        <MessageContainer>
            <img src={userImage} alt="my-image" />
            <MessageInfo>
                <h4>
                    {user}{' '}
                    <span>
                        {new Date(timestamp?.toDate()).toLocaleTimeString()}
                    </span>
                </h4>
                <p>{message}</p>
            </MessageInfo>
        </MessageContainer>
    )
}

const MessageContainer = styled.div`
    margin-top: 15px;
    display: flex;
    align-items: center;
    padding: 10px;

    > img {
        height: 50px;
        border-radius: 50px;
    }
`

const MessageInfo = styled.div`
    padding-left: 10px;

    >h4 >span{
        color: darkgray;
        font-weight: 400;
        margin-left: 20px;
        font-size: 11px;
    }

    >p {
        padding-top: 10px;
    }

`

export default ChatMessage
