
var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "Green House + Red House",
            choices: [
                {
                    text: "Start here",
                    nextLevel: "second",
                },
            ]
        },

        second: {
            background_image: "/img/greenhouse.jpg",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "Goodmorning, its 75 degrees Farenheit in NYC and the sun is beciming through your window. Do you...",
            choices: [
                {
                    text: "Open your curtins and let the natral light in",
                    nextLevel: "open",
                },
                {
                    text: "Leave the curtians closed and turn on the lights",
                    nextLevel: "leave",
                },
            ]
        },

        open: {
            message: "Congrats, you just saved $1.08 and sneak in some fire selfies. #goldenhour ;)",
            choices: [
                {
                    text: "Yay",
                    nextLevel: "three",
                },
            ]
        },
        
        leave: {
            message: "your electricity bill hates you, and you just relesed 25.8 grams of CO2",
            choices: [
                {
                    text: "Damn",
                    nextLevel: "three",
                },
            ]
        },
        
        three: {
            message: "Okay, now its time to shower and start your day. Do you...",
            choices: [
                {
                    text: "Take a quick 5 minute shower",
                    nextLevel: "quick",
                    
                },
                
                {
                    text: "Pull off a whole Beyonce dance rountine in the span of 30 mins",
                    nextLevel: "long",
                    
                },
            ]
        },
        
        quick: {
            message: "Awsome you only used 2.25 lbs of CO2 saving 11.25 if you were to take 30 mins, plus you smell great.",
            choices: [
                {
                    text: "Good for you",
                    nextLevel: "four",
                    
                },
                
            ]
        },
        
        long: {
            message: "Okay hurd the dance moves, but you just used 13.5 lbs of CO2 which is equivilant to 1.672 bottles of 2 liter sodas.",
            choices: [
                {
                    text: "Now you're just dragging it",
                    nextLevel: "four",
                    
                },
                
            ]
        },
        
        four: {
            message: "",
            choices: [
                {
                    text: "",
                    nextLevel: "",
                    
                },
                {
                    text: "",
                    nextLevel: "",
                    
                },
                
            ]
        },
    }
};