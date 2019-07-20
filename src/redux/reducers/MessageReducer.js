import { ADD_MESSAGE, GET_MESSAGES } from '../actions/MessageAction';

var initState = {
    messages: [
        {
            id: 1,
            sender: '00dfdfd0d0fdf0fd',
            reciever: '00dfdfd0d0fdf014',
            message: 'Here I am waiting for you',
            postedAt: '15-May-2019'
        },
        {
            id: 2,
            sender: '00dfdfd0d0fdf014',
            reciever: '00dfdfd0d0fdf0fd',
            message: 'Here second message sent to you',
            postedAt: '01-May-2019'
        },
        {
            id: 3,
            sender: '00dfdfd0d0fdf000',
            reciever: '00dfdfd0d0fdf014',
            message: 'Here sdsdsd sdsd adding for you',
            postedAt: '15-Jun-2019'
        },
        {
            id: 4,
            sender: '00dfdfd0d0fdf0fd',
            reciever: '00dfdfd0d0fdf000',
            message: 'WTF, I am waiting for you',
            postedAt: '15-Jan-2019'
        },
        {
            id: 5,
            sender: '00dfdfd0d0fdf014',
            reciever: '00dfdfd0d0fdf000',
            message: 'Not I am ssd for you',
            postedAt: '19-May-2019'
        },
        {
            id: 6,
            sender: '00dfdfd0d0fdf0fd',
            reciever: '00dfdfd0d0fdf000',
            message: 'Here I am waiting for you',
            postedAt: '15-May-2019'
        },
        {
            id: 7,
            sender: '00dfdfd0d0fdf014',
            reciever: '00dfdfd0d0fdf0fd',
            message: 'Here second message sent to you',
            postedAt: '01-May-2019'
        },
        {
            id: 8,
            sender: '00dfdfd0d0fdf000',
            reciever: '00dfdfd0d0fdf014',
            message: 'Here sdsdsd sdsd adding for you',
            postedAt: '15-Jun-2019'
        },
        {
            id: 9,
            sender: '00dfdfd0d0fdf0fd',
            reciever: '00dfdfd0d0fdf000',
            message: 'WTF, I am waiting for you',
            postedAt: '15-Jan-2019'
        },
        {
            id: 10,
            sender: '00dfdfd0d0fdf014',
            reciever: '00dfdfd0d0fdf000',
            message: 'Not I am ssd for you',
            postedAt: '19-May-2019'
        },
        {
            id: 11,
            sender: '00dfdfd0d0fdf0fd',
            reciever: '00dfdfd0d0fdf000',
            message: 'Here I am waiting for you',
            postedAt: '15-May-2019'
        },
        {
            id: 45,
            sender: '00dfdfd0d0fdf0fd',
            reciever: '00dfdfd0d0fdf014',
            message: 'Here I am waiting for you',
            postedAt: '15-May-2019'
        },
        {
            id: 12,
            sender: '00dfdfd0d0fdf014',
            reciever: '00dfdfd0d0fdf0fd',
            message: 'Here second message sent to you',
            postedAt: '01-May-2019'
        },
        {
            id: 13,
            sender: '00dfdfd0d0fdf000',
            reciever: '00dfdfd0d0fdf014',
            message: 'Here sdsdsd sdsd adding for you',
            postedAt: '15-Jun-2019'
        },
        {
            id: 14,
            sender: '00dfdfd0d0fdf0fd',
            reciever: '00dfdfd0d0fdf000',
            message: 'WTF, I am waiting for you',
            postedAt: '15-Jan-2019'
        },
        {
            id: 15,
            sender: '00dfdfd0d0fdf014',
            reciever: '00dfdfd0d0fdf000',
            message: 'Not I am ssd for you',
            postedAt: '19-May-2019'
        },
        {
            id: 16,
            sender: '00dfdfd0d0fdf0fd',
            reciever: '00dfdfd0d0fdf000',
            message: 'Here I am waiting for you',
            postedAt: '15-May-2019'
        },
        {
            id: 17,
            sender: '00dfdfd0d0fdf014',
            reciever: '00dfdfd0d0fdf0fd',
            message: 'Here second message sent to you',
            postedAt: '01-May-2019'
        },
        {
            id: 18,
            sender: '00dfdfd0d0fdf000',
            reciever: '00dfdfd0d0fdf014',
            message: 'Here sdsdsd sdsd adding for you',
            postedAt: '15-Jun-2019'
        },
        {
            id: 19,
            sender: '00dfdfd0d0fdf0fd',
            reciever: '00dfdfd0d0fdf000',
            message: 'WTF, I am waiting for you',
            postedAt: '15-Jan-2019'
        },
        {
            id: 20,
            sender: '00dfdfd0d0fdf014',
            reciever: '00dfdfd0d0fdf000',
            message: 'Not I am ssd for you',
            postedAt: '19-May-2019'
        },
        {
            id: 21,
            sender: '00dfdfd0d0fdf0fd',
            reciever: '00dfdfd0d0fdf000',
            message: 'Here I am waiting for you',
            postedAt: '15-May-2019'
        },
        {
            id: 22,
            sender: '00dfdfd0d0fdf014',
            reciever: '00dfdfd0d0fdf0fd',
            message: 'Here second message sent to you',
            postedAt: '01-May-2019'
        },
        {
            id: 23,
            sender: '00dfdfd0d0fdf000',
            reciever: '00dfdfd0d0fdf014',
            message: 'Here sdsdsd sdsd adding for you',
            postedAt: '15-Jun-2019'
        },
        {
            id: 24,
            sender: '00dfdfd0d0fdf0fd',
            reciever: '00dfdfd0d0fdf000',
            message: 'WTF, I am waiting for you',
            postedAt: '15-Jan-2019'
        },
        {
            id: 25,
            sender: '00dfdfd0d0fdf014',
            reciever: '00dfdfd0d0fdf000',
            message: 'Not I am ssd for you',
            postedAt: '19-May-2019'
        },
        {
            id: 26,
            sender: '00dfdfd0d0fdf0fd',
            reciever: '00dfdfd0d0fdf000',
            message: 'Here I am waiting for you',
            postedAt: '15-May-2019'
        },
        {
            id: 27,
            sender: '00dfdfd0d0fdf014',
            reciever: '00dfdfd0d0fdf0fd',
            message: 'Here second message sent to you',
            postedAt: '01-May-2019'
        },
        {
            id: 28,
            sender: '00dfdfd0d0fdf000',
            reciever: '00dfdfd0d0fdf014',
            message: 'Here sdsdsd sdsd adding for you',
            postedAt: '15-Jun-2019'
        },
        {
            id: 29,
            sender: '00dfdfd0d0fdf0fd',
            reciever: '00dfdfd0d0fdf000',
            message: 'WTF, I am waiting for you',
            postedAt: '15-Jan-2019'
        },
        {
            id: 30,
            sender: '00dfdfd0d0fdf014',
            reciever: '00dfdfd0d0fdf000',
            message: 'Not I am ssd for you',
            postedAt: '19-May-2019'
        },
    ]
};

export default function messageReducer(state = initState, action) {
    switch (action.type) {
        case ADD_MESSAGE:
        {
            let messages = state.messages;
            console.log('=================Messages before addition===================');
            console.log(messages);
            console.log('====================================');
            messages = messages.concat(action.data);
            console.log('=================Messages after addition===================');
            console.log(messages);
            console.log('====================================');
            
            return {
                ...state,
                messages: messages
            }

        }

        case GET_MESSAGES:
        {
            let messages = state.messages;
            return {
                ...state,
                messages: messages.push(action.data)
            }

        }   
    
        default:
            return state;
    }
}