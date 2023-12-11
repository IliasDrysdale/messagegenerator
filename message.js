const messageContent = ['Work as hard as you can', 'Don\'t give up', 'You can do it', 'Only losers give up', 'Look in the mirror\, do you see a loser?'];
const randomMessage = [];
const usedIndices = new Set();

const randomNumberGenerator = () => {
    return Math.floor(Math.random() * messageContent.length);
}

for (i = 0; i < 3; i++) {
    let messageIndex1 = randomNumberGenerator();
    while (usedIndices.has(messageIndex1)) { // Check if the index has already been used
        messageIndex1 = randomNumberGenerator();
    }
    usedIndices.add(messageIndex1);
    randomMessage.push(messageContent[messageIndex1]);
}

console.log(randomMessage.join('. '));