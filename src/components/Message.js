import React,{forwardRef} from 'react'
import { Typography, Card, CardContent } from '@material-ui/core'
import './Message.css';
const Message = forwardRef(({message, username},ref) => {
    const isUser = username ===message.username;

    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ? "message_userCard" : "message_guestCard"}>
                <CardContent>
                    <Typography
                        color="white"
                        variant="h5"
                        component="h2">
                        <h2>{!isUser && `${message.username || 'Unknown User'}:`} {message.message}</h2>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
