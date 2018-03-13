var config = 
{    
    /*
        Do we want to show the image?
        Note that imageSize still affects the size of the image and where the progressbars are located.
    */
    enableImage: false,

    /* 
        Relative path the the logo we want to display.
    */
    image: "img/logo01.png",

    /*
        How big should the logo be?
        The values are: [width, height].
        Recommended to use square images less than 1024px.
    */
    imageSize: [500, 126],

    /*
        Define the progressbar type
            0 = Single progressbar
            1 = Multiple progressbars
            2 = Collapsed progressbars
     */
    progressBarType: 0,

    /*
        Here you can disable some of progressbars.
        Only applys if `singleProgressbar` is false.
    */
    progressBars:
    {
        "INIT_CORE": {
            enabled: false, //NOTE: Disabled because INIT_CORE seems to not get called properly. (race condition).
        },

        "INIT_BEFORE_MAP_LOADED": {
            enabled: true,
        },

        "MAP": {
            enabled: true,
        },

        "INIT_AFTER_MAP_LOADED": {
            enabled: true,
        },

        "INIT_SESSION": {
            enabled: true,
        }
    },

    /*
        Loading messages will be randomly picked from the array.
        The message is located on the left side above the progressbar.
        The text will slowly fade in and out, each time with another message.
        You can use UTF-8 emoticons inside loading messages! 
    */
    loadingMessages: 
    [
        "Picking up snails... &#x1f40c;",
        "Placing snails on the map... &#x1f40c;",
        "Crushing a snail.... &#x1f40c; &#x1f528;",
        "Stepping on a snail.... &#x1f40c; &#x1f462;",
        "Putting slugs back into their shell.. &#x1f41a.",
        "Playing cricket with a snail... &#x1f3cf",
        "Programming snail AI... &#x1f9e0;",
        "Selling snails to a french guy. &#x1f956;",
        "Eating FiveM's mascot snail... &#x1f374;",
        "Syntasu is snailsome! &#x1f60d;",
        "Oof!",
        "Learning a snail to drive... &#x1f697;",
        "Golfing using a snail... &#x1f3cc;",
        "Calling PETA for animal abuse... &#x1f4f1;",
        "No snails were hurt during this loadscreen. &#x1f691;",
    ],

    /*
        Rotate the loading message every 5000 milliseconds (default value).
    */
    loadingMessageSpeed: 5 * 1000,

    /*
        Array of music id's to play in the loadscreen.
        Enter your youtube video id's here. In order to obtain the video ID
        Take whats after the watch?v= on a youtube link.
        https://www.youtube.com/watch?v=<videoid>
        Do not include the playlist id or anything, it should be a 11 digit code.
        
        Do not use videos that:
            - Do not allow embedding.
            - Copyrighted music (youtube actively blocks this).
    */
    music:
    [
        "VZi5394SzFI", "4GFAZBKZVJY", "4LfJnj66HVQ", "KuMF4EvYsuc",
        "RzC0mRQ6rMU", "tvTRZJ-4EyI", "E5ONTXHS2mM", "7LnBvuzjpr4"
    ],


    /*
        Set to false if you do not want any music.
    */
    enableMusic: true,

    /*
        Default volume for the player. Please keep this under 50%, to not blowout someones eardrums x)
     */
    musicVolume: 10,

    /*
        Should the background change images?
        True: it will not change backgrounds.
        False: it will change backgrounds.
    */
    staticBackground: false,
    
    /*
        Array of images you'd like to display as the background.
        Provide a path to a local image, using images via url is not recommended.
    */
    background: 
    [
        "img/bg1.jpg",
        "img/bg2.jpg",
        "img/bg3.jpg",
    ],

    /*
        Time in milliseconds on how fast the background
        should swap images.
     */
    backgroundSpeed: 10 * 1000,
    backgroundStyle: "zoom",
}
