import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, InputLabel, Input, FormControl } from '@material-ui/core';
import Message from './components/Message';
import db from './Firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';



function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
      })
  }, [])

  useEffect(() => {
    //if its blank inside [], this code runs ONCE  when the app component loads
    setUsername(prompt('Please enter your name'));
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();
    //ALL THE LOGIC FOR SENDING MESSAGE
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setMessages([...messages, { username: username, text: input }]);
    setInput('');

  }

  return (
    <div className="App">
      <img className="app_image" src="//upload.wikimedia.org/wikipedia/commons/thumb/8/83/Facebook_Messenger_4_Logo.svg/100px-Facebook_Messenger_4_Logo.svg.png"
/>
      <h2>Welcome {username}</h2>

      <form className="app_form">
        <FormControl className="app_formControl">
          <Input className="app__input" placeholder="Enter a message......" value={input} onChange={event => setInput(event.target.value)} />
         <IconButton className="app_iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
           <SendIcon/>
         </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
