
var game = {
    music: "",
    background_image:"",
    levels: {

        start: {
            music: "../music/ve.mp3",
            color: "#e699ff",
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
            color:"#aa7710",
            music: "kirbyvictory.mp3",
            responseImage:"https://steemitimages.com/DQmRQEeG7Lbe6qfKU9LsTRDvGgkSvGDoyfSFKd2ZonAaXyM/gm.jpg",
            message: "Congrats, you just saved $1.08! Sneak in some fire selfies. #goldenhour ;)",
            choices: [
                { 
                    text: "Yay!",
                    nextLevel: "three",
                },
            ]
        },
        
        leave: {
            color:"#585858",
            music: "../music/friday-damn.mp3",
            responseImage:"https://www.energyogre.com/Content/images/slides/slide-1.png",
            message: "Your electricity bill hates you, and you just released 25.8 grams of CO2",
            choices: [
                {
                    text: "Damn",
                    nextLevel: "three",
                },
            ]
        },
        
        three: {
            color:"#1a75ff",
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
            color:"#4d94ff",
            music: "kirbyvictory.mp3",
            responseImage:"https://www.fnasafety.com/wp-content/uploads/2016/11/wash.jpg",
            message: "Awesome you only used 2.25 lbs of CO2 saving $11.25 if you were to take 30 mins, plus you smell great.",
            choices: [
                {
                    text: "Good for you",
                    nextLevel: "four",
                    
                },
                
            ]
        },
        
        long: {
            music:"../music/youstink.mp3",
            color:"#505050",
            responseImage:"https://media.giphy.com/media/xgIE7sqLdaQta/giphy.gif",
            message: "Okay hurd the dance moves, but you just used 13.5 lbs of CO2 which is equivilant to 1,672 bottles of 2 liter sodas.",
            choices: [
                {
                    text: "Boy, now thats just crazy",
                    nextLevel: "four",
                },
                
            ]
        },
        
        four: {
            music: "../music/fallout.mp3",
            color:"#ff4d4d",
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
            music: "../music/jjj.mp3",
            color:"#484848",
            responseImage:"https://media0.giphy.com/media/2xPPiPgwjVgSFmg5Ei/giphy.gif?cid=3640f6095c968b1e613248505126aaa2",
            message: "As much as this sandwich taste delicious, the sandwich generates 1,441 kilograms of CO2 which is equivilant to a car driving for 12 miles.",
            choices: [
                {
                    text: "Don't risk it next time",
                    nextLevel: "five",
                },
                
            ]
        },
        
        oatmeal: {
            color:"#ff3333",
            music: "kirbyvictory.mp3",
            responseImage:"https://media.giphy.com/media/HsmYAhe5Wlkuk/giphy.gif",
            message: "Awesome choice. Not only is this a nutritious meal but it realeses only 1.0 kg of C02",
            choices: [
                {
                    text: "Nutritious",
                    nextLevel: "five",
                },
                
            ]
        },
        
        five: {
            music: "../music/kahoot.mp3",
            color:"#6699ff",
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
            music:"../music/gow.mp3",
            color:"	#383838",
            responseImage:"https://media1.giphy.com/media/12o0tOMUPNozPG/giphy.gif?cid=3640f6095c968bb34b3630582e7dbab1",
            message: "You may think that by not spending money on a dish washer to clean dishes yourself, your actually spending $39.42 a year and 19,750 liters of H20.",
            choices: [
                {
                    text: "Like Zoinks Scoob",
                    nextLevel: "six",
                },
            ]
        },
        
        dishwasher: {
            color:"#0055ff",
            music: "kirbyvictory.mp3",
            responseImage:"https://media1.giphy.com/media/7XULYpqQaZNBe/giphy.gif?cid=3640f6095c968bb34b3630582e7dbab1",
            message: "Even if your mom calls you lazy, you are only spending $4 a year for the gas component. As a bonus you  also save 1,000 liter of water per year",
            choices: [
                {
                    text: "See mom i'm not just lazy, i'm environmentally conscious",
                    nextLevel: "six",
                },
                
            ]
        },
        
        six: {
            music: "../music/Jeopardy Theme Song.mp3",
            color:"#669999",
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
            color:"#339933",
            music: "kirbyvictory.mp3",
            responseImage:"https://media3.giphy.com/media/hdEhU942MSM6Y/giphy.gif?cid=3640f6095c968cd570315461670280f0",
            message: "As you should!! Not only did you save the environment but you also found $20 bill on the street and made it to work 5 minutes early. SCORE!!",
            choices: [
                {
                    text: "Sonic speed",
                    nextLevel: "seven",
                },
            ]
        }, 
        
        drive: {
            music:"../music/sadt.mp3",
            color:"#282828",
            responseImage:"https://media1.giphy.com/media/1zhIci7w4Kqug9hu7x/giphy.gif?cid=3640f6095c968e133253346d77006e30",
            message: "Can't believe how lazy you are man because now you're 15 minutes late to work and your car emitted 24lbs of CO2.",
            choices: [
                {
                    text: "You're in the 'Endgame' now",
                    nextLevel: "seven",
                },
            ]
        },
        
        seven: {
            color:"#00cc66",
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