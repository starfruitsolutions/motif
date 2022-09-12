//card arrays

/*var abstract=[
    'weirdest music video evar!!!',
    'corny love song',
    'before its time',
    'Overplayed',
    'Party anthem',
    'well that was creepy',
    'coming of age',
    'Got drama?',
    'what are you smoking?',
    'Lover scorned',
    'It was all a dream',
    'anti-establishment',
    'killer solo',
    'do you even rap, bruh?',
    'Narcissism much?',
    'what is this even about?',    
    '*WILD*',
    
];
var specific=[
    'contains the word "rock"',
    'contains the word "everyone"',
    'contains the word "time"',
    'contains the word "gun"',
    'contains the word "bad"',
    'contains the word "good"',
    'contains the word "little"',
    'contains the word "baby"',
    'contains the word "call"',
    'contains the word "heart"',
    'contains the word "hope"',
    'contains the word "hate"',
    'contains the word "breath"',
    'contains the word "world"',
    'contains the word "last"',
    'contains the word "drive"',   
    'starts with the letter "A"',
    'starts with the letter "B"',
    'starts with the letter "C"',
    'starts with the letter "D"',
    'starts with the letter "E"',
    'starts with the letter "F"',
    'starts with the letter "G"',
    'starts with the letter "H"',
    'starts with the letter "I"',
    'starts with the letter "J"',
    'starts with the letter "K"',
    'starts with the letter "L"',
    'starts with the letter "M"',
    'starts with the letter "N"',
    'starts with the letter "O"',
    'starts with the letter "P"',
    'starts with the letter "R"',
    'starts with the letter "S"',
    'starts with the letter "T"',
    'starts with the letter "W"',
    'starts with the letter "Y"',
    'from the 60’s',
    'from the 70’s',
    'from the 80’s',
    'from the 90’s',
    'from the 2000’s',
    'from the 2010’s',
    
    '*WILD*',
    
];
*/
var specific = [
    'Where would you like to live?',
    'What motivates you to work hard?',
    'Favorite thing about your career?',
    'Biggest complaint about your job?',
    'What is your proudest accomplishment?',
    'What is your favorite book?',
    'Last movie you watched? How was it?',
    'What did you want to be as a child?',
    'What is your favorite board game?',
    'What is your favorite food?',
    'Would you rather vacation in Hawaii or Alaska? Why?',
    'Who would you want to be stranded with on a deserted island?',
    'If money was no object, what would you do all day?',
    'If you could time travel, what decade would you visit?',
    'What are your hobbies?',
    'What is the best gift you have been given?',
    'What is the worst gift you have received?',
    'What one thing could you not go a day without?',
    'How many pairs of shoes do you own?',
    'If you were a super-hero, what powers would you have?',
    'What would you do if you won the lottery?',
    'What is your favorite zoo animal?',
    'How many pillows do you sleep with?',
    'What is your favorite holiday?',
    'What was the last TV show you watched?',
    'What was the last book you read?',
    'How long does it take you to get ready in the morning?',
    'What is your favorite fast food chain?',
    'Do you love or hate rollercoasters?',
    'What is your favorite family tradition?',
    'What three items would you take with you on a deserted island?',
    'What was your favorite subject in school?',
    'What is the most unusual thing you\'ve ever eaten?',
    'Which of the five senses would you say is your strongest?',
    'What was your first job?',
    'If you were an animal, which one would you be?',
    'Who knows you the best?',
    
]

 var direction=['+=50%','-=50%'];//direction switches with each shuffle
$('.shuffle button').click(function(){ 
   
    //select random cards
   //var abstractIndex = Math.floor(Math.random() * abstract.length);
    var specificIndex = Math.floor(Math.random() * specific.length);
    
    
 //move cards under deck replace content and move it back
    $('.card-1').animate({
       position: "absolute",
       left: direction[0], 
    }, "fast", function() {
         //replace content
        $('.specific').text(specific[specificIndex]);
        //move it back
        $('.card-1').animate({
            position: "absolute",
            left: direction[1], 
        }, "fast");
    
  });
    /*$('.card-1').animate({
       position: "absolute",
       left: direction[0], 
    }, "fast");
    $('.card-2').animate({
       position: "absolute",
       left: direction[1], 
    }, "fast");
    
    
      
    
 //replace content
    $('.abstract').text(abstract[abstractIndex]);
    $('.specific').text(specific[specificIndex]);
  
    
   //switch direction
    direction[1] = [direction[0], direction[0] = direction[1]][0];
    abstract = [specific, specific = abstract][0];
      */
});
