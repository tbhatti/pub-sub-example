/*
   This component is to displaying current 
   contents of the messages list, updating itself anytime some
   change occurs in the list.
*/
import React from 'react';
import PubSub from 'pubsub-js';
class MessageDisplay extends React.Component {

    /*
       Starting state: no messages.
    */
    constructor(props) {
       super(props);
       this.state = {
          messages: [],
       };
    }
    
    /*
       When component is loaded, subscribe to changes in the messages list.
    */
    componentWillMount(){
       // Subscribe this class to the 'MESSAGES UPDATED' subscription.
       // When a publish event for 'MESSAGES UPDATED' has been fired, MessageDisplay.subscriber() will be triggered.
       this.token = PubSub.subscribe('MESSAGES UPDATED', this.subscriber.bind(this));
    }
    
    /* Finalise subscription. */
    componentDidMount(){
       PubSub.publish('MESSAGES UPDATED', this.token);
    }
    
    /* Clean up: un-subscribe. */
    componentWillUnmount(){
       PubSub.unsubscribe(this.token);
    }   
    
    /* This function is called any time a change to the message list occurs. */
    subscriber(msg, data){
       console.log("Subscriber has msg " + msg + " and data " + data);
       // Update the UI with a new copy of all messages.
       this.setState ({
          messages : window.messages.getMessages(), 
       });
    }
    
    /* Update UI with a list all current messages. */
    render() {
       let messagesForDisplay = (this.state.messages ? this.state.messages : new Array());
       if (messagesForDisplay.length === 0) {
          messagesForDisplay.push("No messages");
       }
       return (
          <div>
             <p>Messages:</p>
             <ul className="l-grid">
                {messagesForDisplay.map((item, index) => (
                   <li className="l-grid__item" key={index}>{item}</li>
                ))}
             </ul>
          </div>
       );
    }
 }
 export default MessageDisplay;