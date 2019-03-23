
var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "Green House + Red House",
            choices: [
                {
                    text: "Start here",
                    nextLevel: "startHere",
                },
            ]
        },

        startHere: {
            background_image: "fire.gif",
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
                    text: "",
                    nextLevel: "",
                },
                {
                    text: "",
                    nextLevel: "",
                },
            ]
        },
        
        leave: {
            message: "your electricity bill hates you, and you just relesed 25.8 grams of CO2",
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