const songs = [
    {
        title: "Rest On Us",
       lyrics: `
           As the Spirit was moving over the waters
Spirit, come move over us
Come rest on us
Come rest on us <br><br><br>
Spirit, when You move You make my heart pound
When You fill the room
You're here and I know You are moving
I'm here and I know You will fill me
Come down
Spirit, when You move You make my heart pound
When You fill the room
You're here and I know You are moving
I'm here and I know You will fill me
Hey
Come fill us up
Come fill us up
Come fill us up
And as the Spirit was moving over the waters
Spirit, come move over us (come on)
Come rest on us
Come rest on us
As the Spirit was moving over the waters
Spirit, come move over us
Come rest on us
Come rest on us (I feel the fire)
Fire and wind, come and do it again
Open up the gates, let Heaven on in (come)
Come rest on us (won't you come)
Come rest on us (I feel the fire)
Fire and wind, come and do it again
Open up the gates, let Heaven on in
Come rest on us
Come rest on us
So come down
Spirit, when You move You make my heart pound
When You fill the room
You're here and I know You are moving
I'm here and I know You will fill me
Come down
Spirit, when You move You make my heart pound
When You fill the room
You're here and I know You are moving
I'm here and I know You will fill me
Won't You fill me afresh?
Fill me afresh (ooh-ooh, ooh, ooh)
Holy Spirit, come rest on us
You're all we want
You're all we want
Holy Spirit, come rest on us
You're all we want
You're all we want
Holy Spirit, come rest on us
You're all we want (yeah)
You're all we want
Oh, Holy Spirit, come rest on us
You're all we want
You're all we want (Holy Spirit)
Holy Spirit, come rest on us
You're all we want (yeah, you're all)
You're all we want (hey)
Holy Spirit, come rest on us
You're all we want
You're all we want
So come down
Spirit, when You move You make my heart pound
When You fill this room
You're here and I know You are moving
I'm here and I know You will fill me
Come down
Spirit, when You move You make my heart pound
When You fill the room
You're here and I know You are moving (hey)
I'm here and I know You will fill me (won't You come down, come down?)
Come down
Spirit, when You move You make my heart pound
When You fill the room
You're here and I know You are moving
I'm here and I know You will fill me
Come down
Spirit, when You move You make my heart pound
When You fill the room
You're here and I know You are moving
I'm here and I know You will fill me
'Cause You love to meet us here
Hey, baptize us afresh tonight
Baptize us afresh tonight
       `
    },
    {
        title: "Song 2",
        lyrics: "Lyrics for song 2 go here."
    },
    {
        title: "Song 3",
        lyrics: "Lyrics for song 3 go here."
    },
    {
        title: "Song 4",
        lyrics: "Lyrics for song 4 go here."
    },
    {
        title: "Song 5",
        lyrics: "Lyrics for song 5 go here."
    },
    {
        title: "Song 6",
        lyrics: "Lyrics for song 6 go here."
    },
    {
        title: "Song 7",
        lyrics: "Lyrics for song 7 go here."
    },
    {
        title: "Song 8",
        lyrics: "Lyrics for song 8 go here."
    },
    {
        title: "Song 9",
        lyrics: "Lyrics for song 9 go here."
    },
    // Add more songs as needed
];

let currentSongIndex = 0;
const lyricsElement = document.querySelector('.lyrics');
const titleElement = document.querySelector('h1');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function displaySong(index) {
    const song = songs[index];
    titleElement.textContent = song.title;
    lyricsElement.textContent = song.lyrics;
}

displaySong(currentSongIndex);

prevButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    displaySong(currentSongIndex);
});

nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    displaySong(currentSongIndex);
});

// Add event listener for arrow key navigation
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        prevButton.click();
    } else if (event.key === 'ArrowRight') {
        nextButton.click();
    }
});



const prevButton2 = document.getElementById('prev2');
const nextButton2 = document.getElementById('next2');

// Event listener for the second "Previous" button
prevButton2.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    displaySong(currentSongIndex);
});

// Event listener for the second "Next" button
nextButton2.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    displaySong(currentSongIndex);
});




function displaySong(index) {
   const song = songs[index];
   titleElement.textContent = song.title;

   // Split the lyrics by line breaks and create an array of paragraphs
   const lyricsLines = song.lyrics.split('\n');
   const paragraphs = lyricsLines.map(line => {
       return `<p class="lyrics">${line}</p>`;
   });

   // Join the paragraphs and set them as the inner HTML of the lyrics element
   lyricsElement.innerHTML = paragraphs.join('');
}