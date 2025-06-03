import eventEmitter from 'emitor';

const emitter = new eventEmitter();

emitter.on('eventName', (data) => {
    console.log('Event received:', data);
});

emitter.emit('eventName', { key: 'value' });
