const messageContent = ['Work as hard as you can', 'Don\'t give up', 'You can do it', 'Only losers give up', 'Look in the mirror, do you see a loser?'];
const randomMessage = [];

const randomNumberGenerator = () => {
    return Math.floor(Math.random() * 5);
}

for (i = 0; i < 3; i++) {
    let messageIndex = randomNumberGenerator();
    randomMessage.push(messageContent[messageIndex]);
}