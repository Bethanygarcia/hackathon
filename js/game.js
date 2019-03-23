
var game = {
    music: "",
    background_image:"",
    levels: {

        start: {
            color: "#006600",
             message: "Green House + Red House",
            choices: [
                {
                    text: "Start here",
                    nextLevel: "second",
                },
            ]
        },

        second: {
            color:"#aa7710",
            background_image: "/img/greenhouse.jpg",
            music: "../music/[Free-scores.com]_grieg-edvard-morgenstimmung-5676.mp3",
            message: "Goodmorning, it's 75 degrees Farenheit in NYC and the sun is beaming through your window. Do you...",
            choices: [
                {
                    text: "Open your curtains and let the natural light in?",
                    nextLevel: "open",
                    
                },
                {
                    text: "Leave the curtains closed and turn on the lights?",
                    nextLevel: "leave",
                },
            ]
        },

        open: {
            color:"",
            music: "kirbyvictory.mp3",
            message: "Congrats, you just saved $1.08! Sneak in some fire selfies. #goldenhour ;)",
            choices: [
                { 
                    text: "Yay!",
                    nextLevel: "three",
                },
            ]
        },
        
        leave: {
            color:"",
            music: "../music/friday-damn.mp3",
            message: "Your electricity bill hates you, and you just released 25.8 grams of CO2",
            choices: [
                {
                    text: "Damn",
                    nextLevel: "three",
                },
            ]
        },
        
        three: {
            color:"",
            music: "../music/careless_whispers.mp3",
            message: "Okay, now it's time to shower and start your day. Do you...",
            choices: [
                {
                    text: "Take a quick 5 minute shower?",
                    nextLevel: "quick",
                    
                },
                
                {
                    text: "Pull off a whole Beyonce dance rountine in the span of 30 mins?",
                    nextLevel: "long",
                    
                },
            ]
        },
        
        quick: {
            color:"",
            music: "kirbyvictory.mp3",
            message: "Awesome you only used 2.25 lbs of CO2 saving $11.25 if you were to take 30 mins, plus you smell great.",
            choices: [
                {
                    text: "Good for you",
                    nextLevel: "four",
                    
                },
                
            ]
        },
        
        long: {
            color:"",
            message: "Okay hurd the dance moves, but you just used 13.5 lbs of CO2 which is equivilant to 1,672 bottles of 2 liter sodas.",
            choices: [
                {
                    text: "Boy, now thats just crazy",
                    nextLevel: "four",
                },
                
            ]
        },
        
        four: {
            color:"",
            message: "Time for breakfast, the most important meal of the day. Do you...",
            choices: [
                {
                    text: "Buy a Bacon, Egg, and Cheese from the deli across the street?",
                    nextLevel: "deli",
                    
                },
                
                {
                    text: "Make oatmeal?",
                    nextLevel: "oatmeal",
                    
                },
                
            ]
        },
        
        deli: {
            color:"",
            message: "As much as this sandwich taste delicious, the sandwich generates 1,441 kilograms of CO2 which is equivilant to a car driving for 12 miles.",
            choices: [
                {
                    text: "Don't risk it next time",
                    nextLevel: "five",
                },
                
            ]
        },
        
        oatmeal: {
            color:"",
            music: "kirbyvictory.mp3",
            message: "Awesome choice. Not only is this a nutritious meal but it realeses only 1.0 kg of C02",
            choices: [
                {
                    text: "Nutritious",
                    nextLevel: "five",
                },
                
            ]
        },
        
        five: {
            color:"",
            message: "Make sure you clean after yourself, especially those plates in the dishwasher. Speaking of cleaning, do you...",
            choices: [
                {
                    text: "Clean the old fashion way?",
                    nextLevel: "old",
                },
                {
                    text: "Use the dishwasher?",
                    nextLevel: "dishwasher",
                },
                
            ]
        },
        
        old: {
            color:"",
            message: "You may think that by not spending money on a dish washer to clean dishes yourself, your actually spending $39.42 a year and 19,750 liters of H20.",
            choices: [
                {
                    text: "Like Zoinks Scoob",
                    nextLevel: "six",
                },
            ]
        },
        
        dishwasher: {
            color:"",
            music: "kirbyvictory.mp3",
            message: "Even if your mom calls you lazy, you are only spending $4 a year for the gas component. As a bonus you  also save 1,000 liter of water per year",
            choices: [
                {
                    text: "See mom i'm not just lazy, i'm environmentally conscious",
                    nextLevel: "six",
                },
                
            ]
        },
        
        six: {
            color:"",
            message: "Now it's time for work, but how do you get there? Do you...",
            choices: [
                {
                    text: "Walk to work?",
                    nextLevel: "walk",
                },
                {
                    text: "Drive to work?",
                    nextLevel: "drive",
                },
            ]
        },
        
        walk: {
            color:"",
            music: "kirbyvictory.mp3",
            message: "As you should!! Not only did you save the environment but you also found $20 bill on the street and made it to work 5 minutes early. SCORE!!",
            choices: [
                {
                    text: "Sonic speed",
                    nextLevel: "seven",
                },
            ]
        }, 
        
        drive: {
            color:"",
            message: "Can't believe how lazy you are man because now you're 15 minutes late to work and your car emitted 24lbs of CO2.",
            choices: [
                {
                    text: "You're in the 'Endgame' now",
                    nextLevel: "seven",
                },
            ]
        },
        
        seven: {
            color:"",
            music: "Halo-Theme.mp3",
            message: "Green House + Red House",
            choices: [
                {
                    text: "How does your morning affect our environment?",
                    nextLevel: "start",
                },
            ]
        },
    }
};