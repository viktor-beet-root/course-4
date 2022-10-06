// 1. Створити сторінку, що показує нумерований список пісень:
const playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];


document.querySelector('.music-list').append(createMusicList(playList));

function createMusicList(playList = []) {
    const olPlayMusic = document.createElement('ol');

    for (let i = 0; i < playList.length; i++) {
        const liPlayMusic = document.createElement('li');
        liPlayMusic.textContent = playList[i].author + ' - ' + playList[i].song;
        olPlayMusic.append(liPlayMusic);
    }

    return olPlayMusic;
}
