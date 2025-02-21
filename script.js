/* Part 1: Create arrays and variables */
// Use const to create arrays because arrays themselves will not be reassigned
// Each array contains words for each column
const column1Words = [
    "The turkey", 
    "Mom", 
    "Dad", 
    "The Dog", 
    "My teacher", 
    "The elephant", 
    "The cat"
];

const column2Words = [
    "sat on", 
    "ate", 
    "danced with", 
    "saw", 
    "doesn't like", 
    "kissed"
];

const column3Words = [
    "a funny", 
    "a scary", 
    "a goofy", 
    "a slimy", 
    "a barking", 
    "a fat"
];

const column4Words = [
    "goat", 
    "monkey", 
    "fish", 
    "cow", 
    "frog", 
    "bug", 
    "worm"
];

const column5Words = [
    "on the moon", 
    "on the chair", 
    "in my spaghetti", 
    "in my soup", 
    "on the grass", 
    "in my shoes"
];

// Use let because these values will be updated during the program
// lastStory will store the most recently generated story
let lastStory = "";

// Create counters for each column to track which word to show next
// Start each counter at 0 (first position in array)
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;


/* Part 2: Create function to display words in order */
// This function takes two parameters:
// columnArray - the array of words to choose from
// columnNum - which column number (1-5) was clicked
function getNextWord(columnArray, columnNum) {
    // Check which column was clicked and use the right counter
    if(columnNum === 1) {
        // If we've shown all words, start over from beginning
        if (counter1 >= columnArray.length) {
            counter1 = 0;
        }
        // Get the current word
        let word = columnArray[counter1];
        // Move counter to next position for next click
        counter1++;
        // Send back the word we found
        return word;
    }
    else if (columnNum === 2) {
        if (counter2 >= columnArray.length) {
            counter2 = 0;
        }
        let word = columnArray[counter2];
        counter2++;
        return word;
    }
    // similar code for columns 3-5
    else if (columnNum === 3) {
        if (counter3 >= columnArray.length) {
            counter3 = 0;
        }
        let word = columnArray[counter3];
        counter3++;
        return word;
    }
    else if (columnNum === 4) {
        if (counter4 >= columnArray.length) {
            counter4 = 0;
        }
        let word = columnArray[counter4];
        counter4++;
        return word;
    }
    else if (columnNum === 5) {
        if (counter5 >= columnArray.length) {
            counter5 = 0;
        }
        let word = columnArray[counter5];
        counter5++;
        return word;
    }
}

/* Part 3: Set up the colored buttons at the top */
// Get all the buttons and the area where we'll show the words
const buttons = document.querySelectorAll('.top-buttons button');
const storyArea = document.getElementById('story');

// Add click handling to each button
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        const columnNum = i + 1;
        
        // Figure out which array of words to use based on button clicked
        let columnArray;
        if (columnNum === 1) {
            columnArray = column1Words;
        } else if (columnNum === 2) {
            columnArray = column2Words;
        } else if (columnNum === 3) {
            columnArray = column3Words;
        } else if (columnNum === 4) {
            columnArray = column4Words;
        } else if (columnNum === 5) {
            columnArray = column5Words;
        }

        // Call function, get the next word and show it
        const word = getNextWord(columnArray, columnNum);
        storyArea.textContent = word;
    });
};

/* Part 4: Set up the surprises button */
// Function to pick a random word from any array
function getRandomWord(wordArray) {
    // Get a random number between 0 and array length
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    // Use that number to get a random word
    return wordArray[randomIndex];
}

// Get the surprises button
const surprisesBtn = document.getElementById('surprises-btn');
// When surprises button is clicked...
surprisesBtn.addEventListener("click", function() {
    // Call function, get one random word from each column
    const word1 = getRandomWord(column1Words);
    const word2 = getRandomWord(column2Words);
    const word3 = getRandomWord(column3Words);
    const word4 = getRandomWord(column4Words);
    const word5 = getRandomWord(column5Words);
    
    // Put all words together into one sentence
    const story = `${word1} ${word2} ${word3} ${word4} ${word5}`;
    
    // Save this story so playback can use it later
    lastStory = story;
    
    // Show the story on screen
    storyArea.textContent = story;
});

/* Part 5: Set up the playback button */
// Get the playback button
const playbackBtn = document.getElementById('playback-btn');

// When playback button is clicked...
playbackBtn.addEventListener('click', function() {
    // Check if we have a story to show
    if (lastStory !== "") {
        // Show the most recent story again
        storyArea.textContent = lastStory;
    }
 });