console.log("Welcome To Spotify")
let songIndex=0;
let audioElement= new Audio('2.mp3.mp3');
let masterPlay=document.getElementById('masterPlay')
let myprogressbar=document.getElementById('myprogressbar')
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "The Less I know The Better",filePath:"1.mp3.mp3",coverPath:""},
    {songName: "Let It Happen",filePath:"songs/2.mp3.mp3",coverPath:""},
    {songName: "Eventually",filePath:"songs/3.mp3.mp3",coverPath:""},
    {songName: "Neverender",filePath:"songs/4.mp3.mp3",coverPath:""},
    {songName: "One More Year",filePath:"songs/5.mp3",coverPath:""},
    {songName: "Instant Destiny",filePath:"songs/6.mp3",coverPath:""},
    {songName: "Posthumous Forgiveness",filePath:"songs/7.mp3",coverPath:""},
    {songName: "Breathe Deeper",filePath:"songs/8.mp3",coverPath:""},
    {songName: "Tomorrow's Dust",filePath:"songs/9.mp3",coverPath:""},
    {songName: "On Track",filePath:"songs/10.mp3",coverPath:""},
]

songItems.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].src=songs[i].songName;

})

// audioElement.play();

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');

    }
})

audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate')
    progress = parseInt((audioElement.currentTime / audioElement.duration)*100);
    // console.log(progress);
    myprogressbar.value=progress

})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value * audioElement.duration/100;
})

const makeAllPlays=()=>{
    // e.target.classList.add('fa-pause-circle');
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target);
        makeAllPlays();
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src='songs/${index+1}mp3.mp3';
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})