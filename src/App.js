import './App.css';
import React from 'react';
import MessageDisplay from './message-display/MessageDisplay';
import MessageList from './message-list/MessageList';
/* 
   Single instance of a message list that can be used 
   globally to add or remove messages.
*/
window.messages = new MessageList();
/*
   Message UI and provide some buttons to allow the user to 
   update the message list which in turn drives Pub-Sub activity.
*/
class App extends React.Component {

  /* Add a message. */
  onAddMessage = () => {
    window.messages.push("A new message based on date: " + new Date());
  }

  /* Remove last message. */
  onRemoveLastMessage = () => {
    window.messages.pop();
  }

  /* Clear all messages. */
  onClearMessages = () => {
    window.messages.clear();
  }

  /* Display buttons and the messsage UI. */
  render() {
    return (
      <div id="App" >
        <header className="App-header grey-background">
          <h1>Publisher and Subscriber Example</h1>
          <div>
            <button className="btn btn-primary" type="button" onClick={this.onAddMessage}>
              Add a message
            </button>
            &nbsp;&nbsp;&nbsp;
            <button className="btn btn-info" type="button" onClick={this.onRemoveLastMessage}>
              Remove last message
            </button>
            &nbsp;&nbsp;&nbsp;
            <button className="btn btn-success" type="button" onClick={this.onClearMessages}>
              Clear messages
            </button>
            <MessageDisplay />
          </div>

        </header>
      </div>
    );
  }
}


export default App;

