/*
   An object that provides controlled access to a 
   list of strings and notifies subscribers of any changes.
   
   Notifications do not indicate what has changed; only that 
   something in the list has changed. Subscribers can get a copy 
   of the whole list as needed.
*/
import PubSub from 'pubsub-js';
class MessageList {

    /* Start with an empty list. */
    constructor() {
       this.messages = new Array();
    }
    
    /* 
       Give back a *copy* of the messages so that external 
       code cannot modify the list themselves. 
    */
    getMessages() {
       return this.messages.slice();
    }
    
    /*
       Add new message, ignoring attempts to add anything other 
       than a string.
    */
    push(message) {
       if (typeof message !== "string") {
          return;
       }
       this.messages.push(message);
       PubSub.publish('MESSAGES UPDATED', 'added message');
    }
 
    /* Remove last message. */
    pop() {
       this.messages.pop();
       PubSub.publish('MESSAGES UPDATED', 'removed most recent message');
    }
    
    /* Remove all messages. */
    clear() {
       this.messages.length = 0;
       PubSub.publish('MESSAGES UPDATED', 'cleared all messages');
    }
 }
 export default MessageList;