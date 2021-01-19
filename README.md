<p align="center">
  <img src="./assets/img/logo.jpg" alt="Popcorn Time API" />
</p>

  
<p align="center">
  No more downloads hassle! The best movies & TV shows, for free! Directly on Popcorn Time API in HD + subtitles.
</p>
<p align="center">
  <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />          
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  <img src="https://img.shields.io/badge/PopcornTime-API-brightgreen.svg"/>
</p>

<p align="center">
 <a href="https://nodei.co/npm/popcorntime/"><img src="https://nodei.co/npm/popcorntime.png"></a>
</p> 



# 📖 API Documentation


## movies([options])

|page                 |   
|---------------------|
|[1 .. unknown limit] |


|sortby             |   
|-------------------|
| seeds (Popularity), dateadded, year, title |               


|genre         |
|--------------|
|all,action,adventure,animation,biography,comedy,crime,documentary,drama,family,fantasy,film-noir,history,horror,music,musical,mystery,romance,sci-fi,short,sport,thriller,war,western |      



```javascript
const main = async() =>{
  const options = {
    page: 1,
    sortby: 'seeds',
    genre: 'all',
    q: '' // It is useful to do a search or you can leave it empty
  };
  const data = await movies(options);
};
```

```json
{
  "actors": "",
  "description": "Rewind to the 1980s as Wonder Woman's next big screen adventure finds her facing two all-new foes: Max Lord and The Cheetah.",
  "directors": "",
  "genres": [
    "action",
    "fantasy",
    "adventure"
  ],
  "items": [],
  "items_lang": [],
  "popularity": "2147483646-1-8857",
  "poster_big": "http://image.tmdb.org/t/p/w500/lNVHB85FUDZqLzvug3k6FA07RIr.jpg",
  "poster_med": "http://image.tmdb.org/t/p/w185/lNVHB85FUDZqLzvug3k6FA07RIr.jpg",
  "rating": 6.4,
  "runtime": 151,
  "title": "Wonder Woman 1984 (2020)",
  "trailer_url": "https://www.youtube.com/embed/vNUcjqP11OY",
  "writers": "",
  "year": 2020,
  "torrents": {
    "items": [
      {
        "durability": 0.8398,
        "file": "Wonder.Woman.1984.2020.IMAX.1080p.WEBRip.x265-RARBG.mp4",
        "id": "3cedeba22d3eb1594fc65bf2e74aa2e1491fe9d9",
        "language": "",
        "quality": "1080p",
        "size_bytes": 2523293286,
        "torrent_magnet": "magnet:?xt=urn:btih:3cedeba22d3eb1594fc65bf2e74aa2e1491fe9d9&dn=Wonder.Woman.1984.2020.IMAX.1080p.WEBRip.x265-RARBG&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2860&tr=udp%3A%2F%2F9.rarbg.to%3A2850",
        "torrent_peers": 5232,
        "torrent_seeds": 2360,
        "torrent_url": "",
        "vitality": 0.2707
      },
      {
        "durability": 0.8297,
        "file": "Wonder.Woman.1984.2020.IMAX.WEBRip.x264-ION10.mp4",
        "id": "3a1e1ff063bfedbdb8ee760a8b8d5d9223103d9a",
        "language": "",
        "quality": "720p",
        "size_bytes": 1546188226,
        "torrent_magnet": "magnet:?xt=urn:btih:3a1e1ff063bfedbdb8ee760a8b8d5d9223103d9a&dn=Wonder.Woman.1984.2020.IMAX.WEBRip.x264-ION10&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2840&tr=udp%3A%2F%2F9.rarbg.to%3A2800",
        "torrent_peers": 2201,
        "torrent_seeds": 1237,
        "torrent_url": "",
        "vitality": 0.3171
      },
      {
        "durability": 0.929,
        "file": "wonder.woman.1984.2020.repack.1080p.web.h264-naisu.mkv",
        "id": "925f97c71c31ec8b932c587d2809315023c43b9c",
        "language": "",
        "quality": "1080p",
        "size_bytes": 10214130133,
        "torrent_magnet": "magnet:?xt=urn:btih:925f97c71c31ec8b932c587d2809315023c43b9c&dn=Wonder.Woman.1984.2020.REPACK.IMAX.1080p.WEB.H264-NAISU&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2820&tr=udp%3A%2F%2F9.rarbg.to%3A2890&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.internetwarriors.net:1337/announce&tr=udp://tracker.pirateparty.gr:6969/announce&tr=http://tracker3.itzmx.com:8080/announce&tr=udp://9.rarbg.me:2740/announce&tr=udp://9.rarbg.me:2730/announce&tr=udp://9.rarbg.me:2770/announce&tr=udp://tracker.zer0day.to:1337/announce&tr=udp://9.rarbg.to:2740/announce&tr=udp://9.rarbg.to:2730/announce&tr=udp://9.rarbg.to:2770/announce&tr=udp://tracker.mg64.net:6969/announce&tr=udp://9.rarbg.to:2720/announce&tr=udp://public.popcorn-tracker.org:6969/announce&tr=udp://tracker.cypherpunks.ru:6969/announce&tr=udp://inferno.demonoid.pw:3418/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=udp://asnet.pw:2710/announce&tr=udp://tracker.acg.gg:2710/announce&tr=udp://tracker.port443.xyz:6969/announce&tr=http://bt.acg.gg:1578/announce&tr=udp://tracker.trackerfix.com:80/announce&tr=udp://9.rarbg.me:2710/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://shadowshq.yi.org:6969/announce&tr=udp://eddie4.nl:6969/announce&tr=udp://thetracker.org:80/announce&tr=http://share.camoe.cn:8080/announce&tr=udp://tracker.justseed.it:1337/announce&tr=udp://tracker.coppersurfer.tk:80/announce&tr=udp://ipv6.tracker.harry.lu:80/announce&tr=udp://tracker.torrent.eu.org:451&tr=udp://bt.xxx-tracker.com:2710/announce&tr=udp://glotorrents.pw:6969/announce&tr=udp://p4p.arenabg.ch:1337/announce&tr=udp://9.rarbg.to:2710/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://open.stealth.si:80/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://ipv4.tracker.harry.lu:80/announce",
        "torrent_peers": 648,
        "torrent_seeds": 347,
        "torrent_url": "",
        "vitality": 0.3353
      },
      {
        "durability": 0.8195,
        "file": "Wonder.Woman.1984.2020.720p.AMZN.WEB-DL.DDP5.1.H.264-NTG.mkv",
        "id": "0cc439f59ac9a3ecd9c080a786b0b9c3d03adc3b",
        "language": "",
        "quality": "720p",
        "size_bytes": 5311607519,
        "torrent_magnet": "magnet:?xt=urn:btih:0cc439f59ac9a3ecd9c080a786b0b9c3d03adc3b&dn=Wonder.Woman.1984.2020.IMAX.720p.AMZN.WEBRip.DDP5.1.Atmos.x264-NTG&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2920&tr=udp%3A%2F%2F9.rarbg.to%3A2860&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.internetwarriors.net:1337/announce&tr=udp://tracker.pirateparty.gr:6969/announce&tr=http://tracker3.itzmx.com:8080/announce&tr=udp://9.rarbg.me:2740/announce&tr=udp://9.rarbg.me:2730/announce&tr=udp://9.rarbg.me:2770/announce&tr=udp://tracker.zer0day.to:1337/announce&tr=udp://9.rarbg.to:2740/announce&tr=udp://9.rarbg.to:2730/announce&tr=udp://9.rarbg.to:2770/announce&tr=udp://tracker.mg64.net:6969/announce&tr=udp://9.rarbg.to:2720/announce&tr=udp://public.popcorn-tracker.org:6969/announce&tr=udp://tracker.cypherpunks.ru:6969/announce&tr=udp://inferno.demonoid.pw:3418/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=udp://asnet.pw:2710/announce&tr=udp://tracker.acg.gg:2710/announce&tr=udp://tracker.port443.xyz:6969/announce&tr=http://bt.acg.gg:1578/announce&tr=udp://tracker.trackerfix.com:80/announce&tr=udp://9.rarbg.me:2710/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://shadowshq.yi.org:6969/announce&tr=udp://eddie4.nl:6969/announce&tr=udp://thetracker.org:80/announce&tr=http://share.camoe.cn:8080/announce&tr=udp://tracker.justseed.it:1337/announce&tr=udp://tracker.coppersurfer.tk:80/announce&tr=udp://ipv6.tracker.harry.lu:80/announce&tr=udp://tracker.torrent.eu.org:451&tr=udp://bt.xxx-tracker.com:2710/announce&tr=udp://glotorrents.pw:6969/announce&tr=udp://p4p.arenabg.ch:1337/announce&tr=udp://9.rarbg.to:2710/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://open.stealth.si:80/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://ipv4.tracker.harry.lu:80/announce",
        "torrent_peers": 679,
        "torrent_seeds": 409,
        "torrent_url": "",
        "vitality": 0.3303
      },
      {
        "durability": 0.9457,
        "file": "Wonder.Woman.1984.2020.1080p.AMZN.WEB-DL.DDP5.1.H.264-NTG.mkv",
        "id": "856b71d59f4af56d63ea04aa9cafea91a1683f8d",
        "language": "",
        "quality": "1080p",
        "size_bytes": 11841558304,
        "torrent_magnet": "magnet:?xt=urn:btih:856b71d59f4af56d63ea04aa9cafea91a1683f8d&dn=Wonder.Woman.1984.2020.IMAX.1080p.AMZN.WEBRip.DDP5.1.Atmos.x264-NTG&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2800&tr=udp%3A%2F%2F9.rarbg.to%3A2860&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.internetwarriors.net:1337/announce&tr=udp://tracker.pirateparty.gr:6969/announce&tr=http://tracker3.itzmx.com:8080/announce&tr=udp://9.rarbg.me:2740/announce&tr=udp://9.rarbg.me:2730/announce&tr=udp://9.rarbg.me:2770/announce&tr=udp://tracker.zer0day.to:1337/announce&tr=udp://9.rarbg.to:2740/announce&tr=udp://9.rarbg.to:2730/announce&tr=udp://9.rarbg.to:2770/announce&tr=udp://tracker.mg64.net:6969/announce&tr=udp://9.rarbg.to:2720/announce&tr=udp://public.popcorn-tracker.org:6969/announce&tr=udp://tracker.cypherpunks.ru:6969/announce&tr=udp://inferno.demonoid.pw:3418/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=udp://asnet.pw:2710/announce&tr=udp://tracker.acg.gg:2710/announce&tr=udp://tracker.port443.xyz:6969/announce&tr=http://bt.acg.gg:1578/announce&tr=udp://tracker.trackerfix.com:80/announce&tr=udp://9.rarbg.me:2710/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://shadowshq.yi.org:6969/announce&tr=udp://eddie4.nl:6969/announce&tr=udp://thetracker.org:80/announce&tr=http://share.camoe.cn:8080/announce&tr=udp://tracker.justseed.it:1337/announce&tr=udp://tracker.coppersurfer.tk:80/announce&tr=udp://ipv6.tracker.harry.lu:80/announce&tr=udp://tracker.torrent.eu.org:451&tr=udp://bt.xxx-tracker.com:2710/announce&tr=udp://glotorrents.pw:6969/announce&tr=udp://p4p.arenabg.ch:1337/announce&tr=udp://9.rarbg.to:2710/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://open.stealth.si:80/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://ipv4.tracker.harry.lu:80/announce",
        "torrent_peers": 773,
        "torrent_seeds": 483,
        "torrent_url": "",
        "vitality": 0.2299
      }
    ]
  }
}
```

## shows([options])

|page                 |   
|---------------------|
|[1 .. unknown limit] |


|sortby             |   
|-------------------|
| seeds (Popularity), dateadded, year, title |               


|genre         |
|--------------|
|all,action,adventure,animation,biography,comedy,crime,documentary,drama,family,fantasy,film-noir,history,horror,music,musical,mystery,romance,sci-fi,short,sport,thriller,war,western |      


```javascript
const main = async() =>{
  const options = {
    page: 1,
    sortby: 'seeds',
    genre: 'all',
    q: '' // It is useful to do a search or you can leave it empty
  };
  const data = await shows(options);
};
```

```json
{
  "actors": "",
  "description": "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.",
  "directors": "",
  "genres": [
    "drama"
  ],
  "items": [],
  "items_lang": [],
  "popularity": "0-0-1593",
  "poster_big": "http://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg",
  "poster_med": "http://image.tmdb.org/t/p/w185/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg",
  "rating": 8,
  "runtime": 0,
  "title": "The Queen's Gambit",
  "trailer_url": "https://www.youtube.com/embed/CDrieqwSdgI",
  "writers": "",
  "year": 2020,
  "torrents": [
    {
      "season": 1,
      "data": [
        {
          "air_time": "2020-10-23",
          "episode": "1",
          "id": "10048342-01-01",
          "imdb": "tt10048342-01-01",
          "items": [
            {
              "durability": 0.9331,
              "file": "The.Queens.Gambit.S01E01.1080p.WEB.H264-GGWP.mkv",
              "id": "b57ff84ee760aaca0b7d2fbe25739e510e1a248d",
              "language": "",
              "quality": "1080p",
              "size_bytes": 1838712658,
              "torrent_magnet": "magnet:?xt=urn:btih:b57ff84ee760aaca0b7d2fbe25739e510e1a248d&dn=The.Queens.Gambit.S01.1080p.NF.WEBRip.DDP5.1.x264-GGWP%5Brartv%5D&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2840&tr=udp%3A%2F%2F9.rarbg.to%3A2810&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.internetwarriors.net:1337/announce&tr=udp://tracker.pirateparty.gr:6969/announce&tr=http://tracker3.itzmx.com:8080/announce&tr=udp://9.rarbg.me:2740/announce&tr=udp://9.rarbg.me:2730/announce&tr=udp://9.rarbg.me:2770/announce&tr=udp://tracker.zer0day.to:1337/announce&tr=udp://9.rarbg.to:2740/announce&tr=udp://9.rarbg.to:2730/announce&tr=udp://9.rarbg.to:2770/announce&tr=udp://tracker.mg64.net:6969/announce&tr=udp://9.rarbg.to:2720/announce&tr=udp://public.popcorn-tracker.org:6969/announce&tr=udp://tracker.cypherpunks.ru:6969/announce&tr=udp://inferno.demonoid.pw:3418/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=udp://asnet.pw:2710/announce&tr=udp://tracker.acg.gg:2710/announce&tr=udp://tracker.port443.xyz:6969/announce&tr=http://bt.acg.gg:1578/announce&tr=udp://tracker.trackerfix.com:80/announce&tr=udp://9.rarbg.me:2710/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://shadowshq.yi.org:6969/announce&tr=udp://eddie4.nl:6969/announce&tr=udp://thetracker.org:80/announce&tr=http://share.camoe.cn:8080/announce&tr=udp://tracker.justseed.it:1337/announce&tr=udp://tracker.coppersurfer.tk:80/announce&tr=udp://ipv6.tracker.harry.lu:80/announce&tr=udp://tracker.torrent.eu.org:451&tr=udp://bt.xxx-tracker.com:2710/announce&tr=udp://glotorrents.pw:6969/announce&tr=udp://p4p.arenabg.ch:1337/announce&tr=udp://9.rarbg.to:2710/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://open.stealth.si:80/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://ipv4.tracker.harry.lu:80/announce",
              "torrent_peers": 1222,
              "torrent_seeds": 761,
              "torrent_url": "",
              "vitality": 0.405
            },
            {
              "durability": 0.7917,
              "file": "The.Queens.Gambit.S01E01.WEBRip.x264-ION10.mp4",
              "id": "6fe94da85af52af244afa0c58306f60afb5fc0c1",
              "language": "",
              "quality": "360p",
              "size_bytes": 592108218,
              "torrent_magnet": "magnet:?xt=urn:btih:6fe94da85af52af244afa0c58306f60afb5fc0c1&dn=The.Queens.Gambit.S01.WEBRip.x264-ION10&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2760&tr=udp%3A%2F%2F9.rarbg.to%3A2740&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.internetwarriors.net:1337/announce&tr=udp://tracker.pirateparty.gr:6969/announce&tr=http://tracker3.itzmx.com:8080/announce&tr=udp://9.rarbg.me:2740/announce&tr=udp://9.rarbg.me:2730/announce&tr=udp://9.rarbg.me:2770/announce&tr=udp://tracker.zer0day.to:1337/announce&tr=udp://9.rarbg.to:2740/announce&tr=udp://9.rarbg.to:2730/announce&tr=udp://9.rarbg.to:2770/announce&tr=udp://tracker.mg64.net:6969/announce&tr=udp://9.rarbg.to:2720/announce&tr=udp://public.popcorn-tracker.org:6969/announce&tr=udp://tracker.cypherpunks.ru:6969/announce&tr=udp://inferno.demonoid.pw:3418/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=udp://asnet.pw:2710/announce&tr=udp://tracker.acg.gg:2710/announce&tr=udp://tracker.port443.xyz:6969/announce&tr=http://bt.acg.gg:1578/announce&tr=udp://tracker.trackerfix.com:80/announce&tr=udp://9.rarbg.me:2710/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://shadowshq.yi.org:6969/announce&tr=udp://eddie4.nl:6969/announce&tr=udp://thetracker.org:80/announce&tr=http://share.camoe.cn:8080/announce&tr=udp://tracker.justseed.it:1337/announce&tr=udp://tracker.coppersurfer.tk:80/announce&tr=udp://ipv6.tracker.harry.lu:80/announce&tr=udp://tracker.torrent.eu.org:451&tr=udp://bt.xxx-tracker.com:2710/announce&tr=udp://glotorrents.pw:6969/announce&tr=udp://p4p.arenabg.ch:1337/announce&tr=udp://9.rarbg.to:2710/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://open.stealth.si:80/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://ipv4.tracker.harry.lu:80/announce",
              "torrent_peers": 834,
              "torrent_seeds": 732,
              "torrent_url": "",
              "vitality": 0.2632
            },
            {
              "durability": 0.9167,
              "file": "The.Queens.Gambit.S01E01.1080p.WEB.H264-GGWP[eztv.io].mkv",
              "id": "adcd352307dbec47d9fce02d46a9700a7860fe6c",
              "language": "",
              "quality": "1080p",
              "size_bytes": 1838712658,
              "torrent_magnet": "magnet:?xt=urn:btih:adcd352307dbec47d9fce02d46a9700a7860fe6c&dn=The.Queens.Gambit.S01.1080p.NF.WEBRip.DDP5.1.x264-GGWP%5Beztv.io%5D%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969",
              "torrent_peers": 250,
              "torrent_seeds": 115,
              "torrent_url": "",
              "vitality": 0.3636
            },
            {
              "durability": 1,
              "file": "The.Queens.Gambit.S01E01.Openings.XviD-AFG[eztv.io].avi",
              "id": "3f384f89d365080ad3e599e8c7af9fb7d3831397",
              "language": "",
              "quality": "XviD",
              "size_bytes": 364573242,
              "torrent_magnet": "magnet:?xt=urn:btih:3f384f89d365080ad3e599e8c7af9fb7d3831397&dn=The.Queens.Gambit.S01E01.Openings.XviD-AFG%5Beztv.io%5D.avi%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969",
              "torrent_peers": 6,
              "torrent_seeds": 12,
              "torrent_url": "",
              "vitality": 0.3333
            },
            {
              "durability": 0.75,
              "file": "The.Queens.Gambit.S01E01.Openings.480p.x264-mSD[eztv.io].mkv",
              "id": "0237b7977ad33dcc3ae2f311f0b2516d72ba0c73",
              "language": "",
              "quality": "480p",
              "size_bytes": 378621846,
              "torrent_magnet": "magnet:?xt=urn:btih:0237b7977ad33dcc3ae2f311f0b2516d72ba0c73&dn=The.Queens.Gambit.S01E01.Openings.480p.x264-mSD%5Beztv.io%5D.mkv%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969",
              "torrent_peers": 70,
              "torrent_seeds": 18,
              "torrent_url": "",
              "vitality": 1
            },
            {
              "durability": 0.9333,
              "file": "The.Queens.Gambit.S01E01.Openings.720p.NF.WEB-DL.DDP5.1.x264-[eztv.io].mkv",
              "id": "aa1295cbd42f0ac56ef363aa0e5a442f73946749",
              "language": "",
              "quality": "720p",
              "size_bytes": 919573778,
              "torrent_magnet": "magnet:?xt=urn:btih:aa1295cbd42f0ac56ef363aa0e5a442f73946749&dn=The.Queens.Gambit.S01E01.Openings.720p.NF.WEB-DL.DDP5.1.x264-%5Beztv.io%5D.mkv%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969",
              "torrent_peers": 103,
              "torrent_seeds": 37,
              "torrent_url": "",
              "vitality": 0.2143
            },
            {
              "durability": 0,
              "file": "the.queens.gambit.s01e01.1080p.web.h264-ggwp[eztv.io].mkv",
              "id": "defea1a0002ed127a7d87d02aa7a0fa2cbc770c1",
              "language": "",
              "quality": "1080p",
              "size_bytes": 1838712658,
              "torrent_magnet": "magnet:?xt=urn:btih:defea1a0002ed127a7d87d02aa7a0fa2cbc770c1&dn=the.queens.gambit.s01e01.1080p.web.h264-ggwp%5Beztv.io%5D.mkv%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969",
              "torrent_peers": 59,
              "torrent_seeds": 39,
              "torrent_url": "",
              "vitality": 0
            }
          ],
          "items_lang": [],
          "movie_id": "10048342",
          "runtime": 59,
          "season": "1",
          "synopsis": "Sent to an orphanage at age 9, Beth develops an uncanny knack for chess and a growing dependence on the green tranquilizers given to the children.",
          "title": "Openings"
        },
        {
          "air_time": "2020-10-23",
          "episode": "2",
          "id": "10048342-01-02",
          "imdb": "tt10048342-01-02",
          "items": [
            {
              "durability": 0.959,
              "file": "The.Queens.Gambit.S01E02.1080p.WEB.H264-GGWP.mkv",
              "id": "b57ff84ee760aaca0b7d2fbe25739e510e1a248d",
              "language": "",
              "quality": "1080p",
              "size_bytes": 1969147589,
              "torrent_magnet": "magnet:?xt=urn:btih:b57ff84ee760aaca0b7d2fbe25739e510e1a248d&dn=The.Queens.Gambit.S01.1080p.NF.WEBRip.DDP5.1.x264-GGWP%5Brartv%5D&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2840&tr=udp%3A%2F%2F9.rarbg.to%3A2810&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.internetwarriors.net:1337/announce&tr=udp://tracker.pirateparty.gr:6969/announce&tr=http://tracker3.itzmx.com:8080/announce&tr=udp://9.rarbg.me:2740/announce&tr=udp://9.rarbg.me:2730/announce&tr=udp://9.rarbg.me:2770/announce&tr=udp://tracker.zer0day.to:1337/announce&tr=udp://9.rarbg.to:2740/announce&tr=udp://9.rarbg.to:2730/announce&tr=udp://9.rarbg.to:2770/announce&tr=udp://tracker.mg64.net:6969/announce&tr=udp://9.rarbg.to:2720/announce&tr=udp://public.popcorn-tracker.org:6969/announce&tr=udp://tracker.cypherpunks.ru:6969/announce&tr=udp://inferno.demonoid.pw:3418/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=udp://asnet.pw:2710/announce&tr=udp://tracker.acg.gg:2710/announce&tr=udp://tracker.port443.xyz:6969/announce&tr=http://bt.acg.gg:1578/announce&tr=udp://tracker.trackerfix.com:80/announce&tr=udp://9.rarbg.me:2710/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://shadowshq.yi.org:6969/announce&tr=udp://eddie4.nl:6969/announce&tr=udp://thetracker.org:80/announce&tr=http://share.camoe.cn:8080/announce&tr=udp://tracker.justseed.it:1337/announce&tr=udp://tracker.coppersurfer.tk:80/announce&tr=udp://ipv6.tracker.harry.lu:80/announce&tr=udp://tracker.torrent.eu.org:451&tr=udp://bt.xxx-tracker.com:2710/announce&tr=udp://glotorrents.pw:6969/announce&tr=udp://p4p.arenabg.ch:1337/announce&tr=udp://9.rarbg.to:2710/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://open.stealth.si:80/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://ipv4.tracker.harry.lu:80/announce",
              "torrent_peers": 1222,
              "torrent_seeds": 761,
              "torrent_url": "",
              "vitality": 0.3846
            },
            {
              "durability": 0.8667,
              "file": "The.Queens.Gambit.S01E02.WEBRip.x264-ION10.mp4",
              "id": "6fe94da85af52af244afa0c58306f60afb5fc0c1",
              "language": "",
              "quality": "360p",
              "size_bytes": 647172296,
              "torrent_magnet": "magnet:?xt=urn:btih:6fe94da85af52af244afa0c58306f60afb5fc0c1&dn=The.Queens.Gambit.S01.WEBRip.x264-ION10&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2760&tr=udp%3A%2F%2F9.rarbg.to%3A2740&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.internetwarriors.net:1337/announce&tr=udp://tracker.pirateparty.gr:6969/announce&tr=http://tracker3.itzmx.com:8080/announce&tr=udp://9.rarbg.me:2740/announce&tr=udp://9.rarbg.me:2730/announce&tr=udp://9.rarbg.me:2770/announce&tr=udp://tracker.zer0day.to:1337/announce&tr=udp://9.rarbg.to:2740/announce&tr=udp://9.rarbg.to:2730/announce&tr=udp://9.rarbg.to:2770/announce&tr=udp://tracker.mg64.net:6969/announce&tr=udp://9.rarbg.to:2720/announce&tr=udp://public.popcorn-tracker.org:6969/announce&tr=udp://tracker.cypherpunks.ru:6969/announce&tr=udp://inferno.demonoid.pw:3418/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=udp://asnet.pw:2710/announce&tr=udp://tracker.acg.gg:2710/announce&tr=udp://tracker.port443.xyz:6969/announce&tr=http://bt.acg.gg:1578/announce&tr=udp://tracker.trackerfix.com:80/announce&tr=udp://9.rarbg.me:2710/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://shadowshq.yi.org:6969/announce&tr=udp://eddie4.nl:6969/announce&tr=udp://thetracker.org:80/announce&tr=http://share.camoe.cn:8080/announce&tr=udp://tracker.justseed.it:1337/announce&tr=udp://tracker.coppersurfer.tk:80/announce&tr=udp://ipv6.tracker.harry.lu:80/announce&tr=udp://tracker.torrent.eu.org:451&tr=udp://bt.xxx-tracker.com:2710/announce&tr=udp://glotorrents.pw:6969/announce&tr=udp://p4p.arenabg.ch:1337/announce&tr=udp://9.rarbg.to:2710/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://open.stealth.si:80/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://ipv4.tracker.harry.lu:80/announce",
              "torrent_peers": 834,
              "torrent_seeds": 732,
              "torrent_url": "",
              "vitality": 0.4231
            },
            {
              "durability": 0.9,
              "file": "The.Queens.Gambit.S01E02.1080p.HEVC.x265-MeGusta[eztv.io].mkv",
              "id": "a1312f19a94debbbb166d4a7f10d668b9775c6de",
              "language": "",
              "quality": "1080p",
              "size_bytes": 650400235,
              "torrent_magnet": "magnet:?xt=urn:btih:a1312f19a94debbbb166d4a7f10d668b9775c6de&dn=The.Queens.Gambit.S01E02.1080p.HEVC.x265-MeGusta%5Beztv.io%5D.mkv%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969",
              "torrent_peers": 43,
              "torrent_seeds": 17,
              "torrent_url": "",
              "vitality": 0.7778
            },
            {
              "durability": 1,
              "file": "The.Queens.Gambit.S01E02.XviD-AFG[eztv.io].avi",
              "id": "8760f4eac630beab41ff4682a3573990cf48b881",
              "language": "",
              "quality": "XviD",
              "size_bytes": 544012044,
              "torrent_magnet": "magnet:?xt=urn:btih:8760f4eac630beab41ff4682a3573990cf48b881&dn=The.Queens.Gambit.S01E02.XviD-AFG%5Beztv.io%5D.avi%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969",
              "torrent_peers": 11,
              "torrent_seeds": 11,
              "torrent_url": "",
              "vitality": 0.3333
            },
            {
              "durability": 0.5,
              "file": "The.Queens.Gambit.S01E02.720p.WEB.H264-STRONTiUM[eztv.io].mkv",
              "id": "2dcef19c58050523b29608379b605f13ea24f8ba",
              "language": "",
              "quality": "720p",
              "size_bytes": 1204660487,
              "torrent_magnet": "magnet:?xt=urn:btih:2dcef19c58050523b29608379b605f13ea24f8ba&dn=The.Queens.Gambit.S01E02.720p.WEB.H264-STRONTiUM%5Beztv.io%5D.mkv%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969",
              "torrent_peers": 18,
              "torrent_seeds": 8,
              "torrent_url": "",
              "vitality": 0.4167
            },
            {
              "durability": 0,
              "file": "The.Queens.Gambit.S01E02.480p.x264-mSD[eztv.io].mkv",
              "id": "919573f3275bf9b6f6e551f569cf5892a2861631",
              "language": "",
              "quality": "480p",
              "size_bytes": 451794717,
              "torrent_magnet": "magnet:?xt=urn:btih:919573f3275bf9b6f6e551f569cf5892a2861631&dn=The.Queens.Gambit.S01E02.480p.x264-mSD%5Beztv.io%5D.mkv%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969",
              "torrent_peers": 50,
              "torrent_seeds": 19,
              "torrent_url": "",
              "vitality": 0
            },
            {
              "durability": 0,
              "file": "Le.Jeu.De.La.Dame.S01E02.MULTi.1080p.WEB.H264-N3TFL1X[eztv.io].mkv",
              "id": "04103015b4511c0b1ef810df5fd9f7eca14173be",
              "language": "",
              "quality": "1080p",
              "size_bytes": 3115790906,
              "torrent_magnet": "magnet:?xt=urn:btih:04103015b4511c0b1ef810df5fd9f7eca14173be&dn=Le.Jeu.De.La.Dame.S01E02.MULTi.1080p.WEB.H264-N3TFL1X%5Beztv.io%5D.mkv%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969",
              "torrent_peers": 2,
              "torrent_seeds": 3,
              "torrent_url": "",
              "vitality": 0
            }
          ],
          "items_lang": [],
          "movie_id": "10048342",
          "runtime": 65,
          "season": "1",
          "synopsis": "Suddenly plunged into a confusing new life in suburbia, teenage Beth studies her high school classmates and hatches a plan to enter a chess tournament.",
          "title": "Exchanges"
        },
        {
          "air_time": "2020-10-23",
          "episode": "3",
          "id": "10048342-01-03",
          "imdb": "tt10048342-01-03",
          "items": [
            {
              "durability": 0.9779,
              "file": "The.Queens.Gambit.S01E03.WEBRip.x264-ION10.mp4",
              "id": "6fe94da85af52af244afa0c58306f60afb5fc0c1",
              "language": "",
              "quality": "360p",
              "size_bytes": 455416275,
              "torrent_magnet": "magnet:?xt=urn:btih:6fe94da85af52af244afa0c58306f60afb5fc0c1&dn=The.Queens.Gambit.S01.WEBRip.x264-ION10&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2760&tr=udp%3A%2F%2F9.rarbg.to%3A2740&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.internetwarriors.net:1337/announce&tr=udp://tracker.pirateparty.gr:6969/announce&tr=http://tracker3.itzmx.com:8080/announce&tr=udp://9.rarbg.me:2740/announce&tr=udp://9.rarbg.me:2730/announce&tr=udp://9.rarbg.me:2770/announce&tr=udp://tracker.zer0day.to:1337/announce&tr=udp://9.rarbg.to:2740/announce&tr=udp://9.rarbg.to:2730/announce&tr=udp://9.rarbg.to:2770/announce&tr=udp://tracker.mg64.net:6969/announce&tr=udp://9.rarbg.to:2720/announce&tr=udp://public.popcorn-tracker.org:6969/announce&tr=udp://tracker.cypherpunks.ru:6969/announce&tr=udp://inferno.demonoid.pw:3418/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=udp://asnet.pw:2710/announce&tr=udp://tracker.acg.gg:2710/announce&tr=udp://tracker.port443.xyz:6969/announce&tr=http://bt.acg.gg:1578/announce&tr=udp://tracker.trackerfix.com:80/announce&tr=udp://9.rarbg.me:2710/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://shadowshq.yi.org:6969/announce&tr=udp://eddie4.nl:6969/announce&tr=udp://thetracker.org:80/announce&tr=http://share.camoe.cn:8080/announce&tr=udp://tracker.justseed.it:1337/announce&tr=udp://tracker.coppersurfer.tk:80/announce&tr=udp://ipv6.tracker.harry.lu:80/announce&tr=udp://tracker.torrent.eu.org:451&tr=udp://bt.xxx-tracker.com:2710/announce&tr=udp://glotorrents.pw:6969/announce&tr=udp://p4p.arenabg.ch:1337/announce&tr=udp://9.rarbg.to:2710/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://open.stealth.si:80/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://ipv4.tracker.harry.lu:80/announce",
              "torrent_peers": 834,
              "torrent_seeds": 732,
              "torrent_url": "",
              "vitality": 0.4662
            },
            {
              "durability": 0.9333,
              "file": "The.Queens.Gambit.S01E03.1080p.WEB.H264-GGWP.mkv",
              "id": "b57ff84ee760aaca0b7d2fbe25739e510e1a248d",
              "language": "",
              "quality": "1080p",
              "size_bytes": 1851199067,
              "torrent_magnet": "magnet:?xt=urn:btih:b57ff84ee760aaca0b7d2fbe25739e510e1a248d&dn=The.Queens.Gambit.S01.1080p.NF.WEBRip.DDP5.1.x264-GGWP%5Brartv%5D&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2840&tr=udp%3A%2F%2F9.rarbg.to%3A2810&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.internetwarriors.net:1337/announce&tr=udp://tracker.pirateparty.gr:6969/announce&tr=http://tracker3.itzmx.com:8080/announce&tr=udp://9.rarbg.me:2740/announce&tr=udp://9.rarbg.me:2730/announce&tr=udp://9.rarbg.me:2770/announce&tr=udp://tracker.zer0day.to:1337/announce&tr=udp://9.rarbg.to:2740/announce&tr=udp://9.rarbg.to:2730/announce&tr=udp://9.rarbg.to:2770/announce&tr=udp://tracker.mg64.net:6969/announce&tr=udp://9.rarbg.to:2720/announce&tr=udp://public.popcorn-tracker.org:6969/announce&tr=udp://tracker.cypherpunks.ru:6969/announce&tr=udp://inferno.demonoid.pw:3418/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=udp://asnet.pw:2710/announce&tr=udp://tracker.acg.gg:2710/announce&tr=udp://tracker.port443.xyz:6969/announce&tr=http://bt.acg.gg:1578/announce&tr=udp://tracker.trackerfix.com:80/announce&tr=udp://9.rarbg.me:2710/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://shadowshq.yi.org:6969/announce&tr=udp://eddie4.nl:6969/announce&tr=udp://thetracker.org:80/announce&tr=http://share.camoe.cn:8080/announce&tr=udp://tracker.justseed.it:1337/announce&tr=udp://tracker.coppersurfer.tk:80/announce&tr=udp://ipv6.tracker.harry.lu:80/announce&tr=udp://tracker.torrent.eu.org:451&tr=udp://bt.xxx-tracker.com:2710/announce&tr=udp://glotorrents.pw:6969/announce&tr=udp://p4p.arenabg.ch:1337/announce&tr=udp://9.rarbg.to:2710/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://open.stealth.si:80/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://ipv4.tracker.harry.lu:80/announce",
              "torrent_peers": 1222,
              "torrent_seeds": 761,
              "torrent_url": "",
              "vitality": 0.3333
            },
            {
              "durability": 1,
              "file": "The.Queens.Gambit.S01E03.1080p.HEVC.x265-MeGusta[eztv.io].mkv",
              "id": "3575b10d4ab837df76c785a6b5ed69c7b7e76bfd",
              "language": "",
              "quality": "1080p",
              "size_bytes": 505322320,
              "torrent_magnet": "magnet:?xt=urn:btih:3575b10d4ab837df76c785a6b5ed69c7b7e76bfd&dn=The.Queens.Gambit.S01E03.1080p.HEVC.x265-MeGusta%5Beztv.io%5D.mkv%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969",
              "torrent_peers": 65,
              "torrent_seeds": 37,
              "torrent_url": "",
              "vitality": 0.4286
            },
            {
              "durability": 1,
              "file": "Le.Jeu.De.La.Dame.S01E03.MULTi.1080p.WEB.H264-N3TFL1X[eztv.io].mkv",
              "id": "43ce90b1da77c842408426363562ee0a396abc23",
              "language": "",
              "quality": "1080p",
              "size_bytes": 2332818376,
              "torrent_magnet": "magnet:?xt=urn:btih:43ce90b1da77c842408426363562ee0a396abc23&dn=Le.Jeu.De.La.Dame.S01E03.MULTi.1080p.WEB.H264-N3TFL1X%5Beztv.io%5D.mkv%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969",
              "torrent_peers": 97,
              "torrent_seeds": 19,
              "torrent_url": "",
              "vitality": 0.4
            }
          ],
          "items_lang": [],
          "movie_id": "10048342",
          "runtime": 46,
          "season": "1",
          "synopsis": "The trip to Cincinnati launches Beth and her mother into a whirlwind of travel and press coverage. Beth sets her sights on the U.S. open in Las Vegas.",
          "title": "Doubled Pawns"
        },
        {
          "air_time": "2020-10-23",
          "episode": "4",
          "id": "10048342-01-04",
          "imdb": "tt10048342-01-04",
          "items": [
            {
              "durability": 1.0065,
              "file": "The.Queens.Gambit.S01E04.1080p.HEVC.x265-MeGusta[eztv.io].mkv",
              "id": "ed0364b3e96b7a9225fd967c5447e132e21d07b9",
              "language": "",
              "quality": "1080p",
              "size_bytes": 472235760,
              "torrent_magnet": "magnet:?xt=urn:btih:ed0364b3e96b7a9225fd967c5447e132e21d07b9&dn=The.Queens.Gambit.S01E04.1080p.HEVC.x265-MeGusta%5Beztv.io%5D.mkv%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969",
              "torrent_peers": 164,
              "torrent_seeds": 56,
              "torrent_url": "",
              "vitality": 0.3961
            },
            {
              "durability": 1,
              "file": "The.Queens.Gambit.S01E04.1080p.WEB.H264-GGWP.mkv",
              "id": "b57ff84ee760aaca0b7d2fbe25739e510e1a248d",
              "language": "",
              "quality": "1080p",
              "size_bytes": 1638412629,
              "torrent_magnet": "magnet:?xt=urn:btih:b57ff84ee760aaca0b7d2fbe25739e510e1a248d&dn=The.Queens.Gambit.S01.1080p.NF.WEBRip.DDP5.1.x264-GGWP%5Brartv%5D&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2840&tr=udp%3A%2F%2F9.rarbg.to%3A2810&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.internetwarriors.net:1337/announce&tr=udp://tracker.pirateparty.gr:6969/announce&tr=http://tracker3.itzmx.com:8080/announce&tr=udp://9.rarbg.me:2740/announce&tr=udp://9.rarbg.me:2730/announce&tr=udp://9.rarbg.me:2770/announce&tr=udp://tracker.zer0day.to:1337/announce&tr=udp://9.rarbg.to:2740/announce&tr=udp://9.rarbg.to:2730/announce&tr=udp://9.rarbg.to:2770/announce&tr=udp://tracker.mg64.net:6969/announce&tr=udp://9.rarbg.to:2720/announce&tr=udp://public.popcorn-tracker.org:6969/announce&tr=udp://tracker.cypherpunks.ru:6969/announce&tr=udp://inferno.demonoid.pw:3418/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=udp://asnet.pw:2710/announce&tr=udp://tracker.acg.gg:2710/announce&tr=udp://tracker.port443.xyz:6969/announce&tr=http://bt.acg.gg:1578/announce&tr=udp://tracker.trackerfix.com:80/announce&tr=udp://9.rarbg.me:2710/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://shadowshq.yi.org:6969/announce&tr=udp://eddie4.nl:6969/announce&tr=udp://thetracker.org:80/announce&tr=http://share.camoe.cn:8080/announce&tr=udp://tracker.justseed.it:1337/announce&tr=udp://tracker.coppersurfer.tk:80/announce&tr=udp://ipv6.tracker.harry.lu:80/announce&tr=udp://tracker.torrent.eu.org:451&tr=udp://bt.xxx-tracker.com:2710/announce&tr=udp://glotorrents.pw:6969/announce&tr=udp://p4p.arenabg.ch:1337/announce&tr=udp://9.rarbg.to:2710/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://open.stealth.si:80/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://ipv4.tracker.harry.lu:80/announce",
              "torrent_peers": 1222,
              "torrent_seeds": 761,
              "torrent_url": "",
              "vitality": 0.5185
            },
            {
              "durability": 1,
              "file": "The.Queens.Gambit.S01E04.WEBRip.x264-ION10.mp4",
              "id": "6fe94da85af52af244afa0c58306f60afb5fc0c1",
              "language": "",
              "quality": "360p",
              "size_bytes": 479179337,
              "torrent_magnet": "magnet:?xt=urn:btih:6fe94da85af52af244afa0c58306f60afb5fc0c1&dn=The.Queens.Gambit.S01.WEBRip.x264-ION10&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2760&tr=udp%3A%2F%2F9.rarbg.to%3A2740&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.internetwarriors.net:1337/announce&tr=udp://tracker.pirateparty.gr:6969/announce&tr=http://tracker3.itzmx.com:8080/announce&tr=udp://9.rarbg.me:2740/announce&tr=udp://9.rarbg.me:2730/announce&tr=udp://9.rarbg.me:2770/announce&tr=udp://tracker.zer0day.to:1337/announce&tr=udp://9.rarbg.to:2740/announce&tr=udp://9.rarbg.to:2730/announce&tr=udp://9.rarbg.to:2770/announce&tr=udp://tracker.mg64.net:6969/announce&tr=udp://9.rarbg.to:2720/announce&tr=udp://public.popcorn-tracker.org:6969/announce&tr=udp://tracker.cypherpunks.ru:6969/announce&tr=udp://inferno.demonoid.pw:3418/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=udp://asnet.pw:2710/announce&tr=udp://tracker.acg.gg:2710/announce&tr=udp://tracker.port443.xyz:6969/announce&tr=http://bt.acg.gg:1578/announce&tr=udp://tracker.trackerfix.com:80/announce&tr=udp://9.rarbg.me:2710/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://shadowshq.yi.org:6969/announce&tr=udp://eddie4.nl:6969/announce&tr=udp://thetracker.org:80/announce&tr=http://share.camoe.cn:8080/announce&tr=udp://tracker.justseed.it:1337/announce&tr=udp://tracker.coppersurfer.tk:80/announce&tr=udp://ipv6.tracker.harry.lu:80/announce&tr=udp://tracker.torrent.eu.org:451&tr=udp://bt.xxx-tracker.com:2710/announce&tr=udp://glotorrents.pw:6969/announce&tr=udp://p4p.arenabg.ch:1337/announce&tr=udp://9.rarbg.to:2710/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://open.stealth.si:80/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://ipv4.tracker.harry.lu:80/announce",
              "torrent_peers": 834,
              "torrent_seeds": 732,
              "torrent_url": "",
              "vitality": 0.5882
            },
            {
              "durability": 1,
              "file": "The.Queens.Gambit.S01E04.1080p.WEB.H264-GGWP[eztv.io].mkv",
              "id": "adcd352307dbec47d9fce02d46a9700a7860fe6c",
              "language": "",
              "quality": "1080p",
              "size_bytes": 1638412629,
              "torrent_magnet": "magnet:?xt=urn:btih:adcd352307dbec47d9fce02d46a9700a7860fe6c&dn=The.Queens.Gambit.S01.1080p.NF.WEBRip.DDP5.1.x264-GGWP%5Beztv.io%5D%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969",
              "torrent_peers": 250,
              "torrent_seeds": 115,
              "torrent_url": "",
              "vitality": 0.3333
            },
            {
              "durability": 1,
              "file": "The.Queens.Gambit.S01E04.720p.WEB.H264-STRONTiUM[eztv.io].mkv",
              "id": "c798ba4c481d08c2014a047deeb7b4417a814674",
              "language": "",
              "quality": "720p",
              "size_bytes": 985831393,
              "torrent_magnet": "magnet:?xt=urn:btih:c798ba4c481d08c2014a047deeb7b4417a814674&dn=The.Queens.Gambit.S01.720p.NF.WEBRip.DDP5.1.x264-STRONTiUM%5Beztv.io%5D%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969",
              "torrent_peers": 369,
              "torrent_seeds": 138,
              "torrent_url": "",
              "vitality": 0.5
            },
            {
              "durability": 1,
              "file": "The.Queens.Gambit.S01E04.WEBRip.x264-ION10[eztv.io].mp4",
              "id": "4a4ad10ce285bac33644eec519dfceac2c79160e",
              "language": "",
              "quality": "360p",
              "size_bytes": 479179337,
              "torrent_magnet": "magnet:?xt=urn:btih:4a4ad10ce285bac33644eec519dfceac2c79160e&dn=The.Queens.Gambit.S01.WEBRip.x264-ION10%5Beztv.io%5D%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969",
              "torrent_peers": 171,
              "torrent_seeds": 85,
              "torrent_url": "",
              "vitality": 1
            }
          ],
          "items_lang": [],
          "movie_id": "10048342",
          "runtime": 48,
          "season": "1",
          "synopsis": "Russian class opens the door to a new social scene. In Mexico City, Beth meets the intimidating Borgov, while her mother cozies up with a pen pal.",
          "title": "Middle Game"
        },
        {
          "air_time": "2020-10-23",
          "episode": "5",
          "id": "10048342-01-05",
          "imdb": "tt10048342-01-05",
          "items": [
            {
              "durability": 0.9706,
              "file": "the.queens.gambit.s01e05.1080p.web.h264-ggwp[eztv.io].mkv",
              "id": "b98994710130a488ee3ca7408983f0d08bb3435a",
              "language": "",
              "quality": "1080p",
              "size_bytes": 1843081531,
              "torrent_magnet": "magnet:?xt=urn:btih:b98994710130a488ee3ca7408983f0d08bb3435a&dn=the.queens.gambit.s01e05.1080p.web.h264-ggwp%5Beztv.io%5D.mkv%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969",
              "torrent_peers": 135,
              "torrent_seeds": 81,
              "torrent_url": "",
              "vitality": 0.4364
            },
            {
              "durability": 0.9787,
              "file": "The.Queens.Gambit.S01E05.1080p.WEB.H264-GGWP.mkv",
              "id": "b57ff84ee760aaca0b7d2fbe25739e510e1a248d",
              "language": "",
              "quality": "1080p",
              "size_bytes": 1843081531,
              "torrent_magnet": "magnet:?xt=urn:btih:b57ff84ee760aaca0b7d2fbe25739e510e1a248d&dn=The.Queens.Gambit.S01.1080p.NF.WEBRip.DDP5.1.x264-GGWP%5Brartv%5D&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2840&tr=udp%3A%2F%2F9.rarbg.to%3A2810&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.internetwarriors.net:1337/announce&tr=udp://tracker.pirateparty.gr:6969/announce&tr=http://tracker3.itzmx.com:8080/announce&tr=udp://9.rarbg.me:2740/announce&tr=udp://9.rarbg.me:2730/announce&tr=udp://9.rarbg.me:2770/announce&tr=udp://tracker.zer0day.to:1337/announce&tr=udp://9.rarbg.to:2740/announce&tr=udp://9.rarbg.to:2730/announce&tr=udp://9.rarbg.to:2770/announce&tr=udp://tracker.mg64.net:6969/announce&tr=udp://9.rarbg.to:2720/announce&tr=udp://public.popcorn-tracker.org:6969/announce&tr=udp://tracker.cypherpunks.ru:6969/announce&tr=udp://inferno.demonoid.pw:3418/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=udp://asnet.pw:2710/announce&tr=udp://tracker.acg.gg:2710/announce&tr=udp://tracker.port443.xyz:6969/announce&tr=http://bt.acg.gg:1578/announce&tr=udp://tracker.trackerfix.com:80/announce&tr=udp://9.rarbg.me:2710/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://shadowshq.yi.org:6969/announce&tr=udp://eddie4.nl:6969/announce&tr=udp://thetracker.org:80/announce&tr=http://share.camoe.cn:8080/announce&tr=udp://tracker.justseed.it:1337/announce&tr=udp://tracker.coppersurfer.tk:80/announce&tr=udp://ipv6.tracker.harry.lu:80/announce&tr=udp://tracker.torrent.eu.org:451&tr=udp://bt.xxx-tracker.com:2710/announce&tr=udp://glotorrents.pw:6969/announce&tr=udp://p4p.arenabg.ch:1337/announce&tr=udp://9.rarbg.to:2710/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://open.stealth.si:80/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://ipv4.tracker.harry.lu:80/announce",
              "torrent_peers": 1222,
              "torrent_seeds": 761,
              "torrent_url": "",
              "vitality": 0.4565
            },
            {
              "durability": 0.9048,
              "file": "The.Queens.Gambit.S01E05.WEBRip.x264-ION10.mp4",
              "id": "6fe94da85af52af244afa0c58306f60afb5fc0c1",
              "language": "",
              "quality": "360p",
              "size_bytes": 476305035,
              "torrent_magnet": "magnet:?xt=urn:btih:6fe94da85af52af244afa0c58306f60afb5fc0c1&dn=The.Queens.Gambit.S01.WEBRip.x264-ION10&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2760&tr=udp%3A%2F%2F9.rarbg.to%3A2740&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.internetwarriors.net:1337/announce&tr=udp://tracker.pirateparty.gr:6969/announce&tr=http://tracker3.itzmx.com:8080/announce&tr=udp://9.rarbg.me:2740/announce&tr=udp://9.rarbg.me:2730/announce&tr=udp://9.rarbg.me:2770/announce&tr=udp://tracker.zer0day.to:1337/announce&tr=udp://9.rarbg.to:2740/announce&tr=udp://9.rarbg.to:2730/announce&tr=udp://9.rarbg.to:2770/announce&tr=udp://tracker.mg64.net:6969/announce&tr=udp://9.rarbg.to:2720/announce&tr=udp://public.popcorn-tracker.org:6969/announce&tr=udp://tracker.cypherpunks.ru:6969/announce&tr=udp://inferno.demonoid.pw:3418/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=udp://asnet.pw:2710/announce&tr=udp://tracker.acg.gg:2710/announce&tr=udp://tracker.port443.xyz:6969/announce&tr=http://bt.acg.gg:1578/announce&tr=udp://tracker.trackerfix.com:80/announce&tr=udp://9.rarbg.me:2710/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://shadowshq.yi.org:6969/announce&tr=udp://eddie4.nl:6969/announce&tr=udp://thetracker.org:80/announce&tr=http://share.camoe.cn:8080/announce&tr=udp://tracker.justseed.it:1337/announce&tr=udp://tracker.coppersurfer.tk:80/announce&tr=udp://ipv6.tracker.harry.lu:80/announce&tr=udp://tracker.torrent.eu.org:451&tr=udp://bt.xxx-tracker.com:2710/announce&tr=udp://glotorrents.pw:6969/announce&tr=udp://p4p.arenabg.ch:1337/announce&tr=udp://9.rarbg.to:2710/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://open.stealth.si:80/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://ipv4.tracker.harry.lu:80/announce",
              "torrent_peers": 834,
              "torrent_seeds": 732,
              "torrent_url": "",
              "vitality": 0.4737
            },
            {
              "durability": 1,
              "file": "The.Queens.Gambit.S01E05.1080p.WEB.H264-GGWP[eztv.io].mkv",
              "id": "adcd352307dbec47d9fce02d46a9700a7860fe6c",
              "language": "",
              "quality": "1080p",
              "size_bytes": 1843081531,
              "torrent_magnet": "magnet:?xt=urn:btih:adcd352307dbec47d9fce02d46a9700a7860fe6c&dn=The.Queens.Gambit.S01.1080p.NF.WEBRip.DDP5.1.x264-GGWP%5Beztv.io%5D%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969",
              "torrent_peers": 190,
              "torrent_seeds": 102,
              "torrent_url": "",
              "vitality": 0.6667
            }
          ],
          "items_lang": [],
          "movie_id": "10048342",
          "runtime": 48,
          "season": "1",
          "synopsis": "Back home in Kentucky, a shaken Beth reconnects with a former opponent who offers to help sharpen her game ahead of the U.S. Championship.",
          "title": "Fork"
        },
        {
          "air_time": "2020-10-23",
          "episode": "6",
          "id": "10048342-01-06",
          "imdb": "tt10048342-01-06",
          "items": [
            {
              "durability": 0.9535,
              "file": "The.Queens.Gambit.S01E06.720p.WEB.H264-STRONTiUM[eztv.io].mkv",
              "id": "c798ba4c481d08c2014a047deeb7b4417a814674",
              "language": "",
              "quality": "720p",
              "size_bytes": 1022728700,
              "torrent_magnet": "magnet:?xt=urn:btih:c798ba4c481d08c2014a047deeb7b4417a814674&dn=The.Queens.Gambit.S01.720p.NF.WEBRip.DDP5.1.x264-STRONTiUM%5Beztv.io%5D%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969",
              "torrent_peers": 369,
              "torrent_seeds": 138,
              "torrent_url": "",
              "vitality": 0.439
            },
            {
              "durability": 0.9355,
              "file": "The.Queens.Gambit.S01E06.1080p.WEB.H264-GGWP.mkv",
              "id": "b57ff84ee760aaca0b7d2fbe25739e510e1a248d",
              "language": "",
              "quality": "1080p",
              "size_bytes": 1660235041,
              "torrent_magnet": "magnet:?xt=urn:btih:b57ff84ee760aaca0b7d2fbe25739e510e1a248d&dn=The.Queens.Gambit.S01.1080p.NF.WEBRip.DDP5.1.x264-GGWP%5Brartv%5D&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2840&tr=udp%3A%2F%2F9.rarbg.to%3A2810&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.internetwarriors.net:1337/announce&tr=udp://tracker.pirateparty.gr:6969/announce&tr=http://tracker3.itzmx.com:8080/announce&tr=udp://9.rarbg.me:2740/announce&tr=udp://9.rarbg.me:2730/announce&tr=udp://9.rarbg.me:2770/announce&tr=udp://tracker.zer0day.to:1337/announce&tr=udp://9.rarbg.to:2740/announce&tr=udp://9.rarbg.to:2730/announce&tr=udp://9.rarbg.to:2770/announce&tr=udp://tracker.mg64.net:6969/announce&tr=udp://9.rarbg.to:2720/announce&tr=udp://public.popcorn-tracker.org:6969/announce&tr=udp://tracker.cypherpunks.ru:6969/announce&tr=udp://inferno.demonoid.pw:3418/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=udp://asnet.pw:2710/announce&tr=udp://tracker.acg.gg:2710/announce&tr=udp://tracker.port443.xyz:6969/announce&tr=http://bt.acg.gg:1578/announce&tr=udp://tracker.trackerfix.com:80/announce&tr=udp://9.rarbg.me:2710/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://shadowshq.yi.org:6969/announce&tr=udp://eddie4.nl:6969/announce&tr=udp://thetracker.org:80/announce&tr=http://share.camoe.cn:8080/announce&tr=udp://tracker.justseed.it:1337/announce&tr=udp://tracker.coppersurfer.tk:80/announce&tr=udp://ipv6.tracker.harry.lu:80/announce&tr=udp://tracker.torrent.eu.org:451&tr=udp://bt.xxx-tracker.com:2710/announce&tr=udp://glotorrents.pw:6969/announce&tr=udp://p4p.arenabg.ch:1337/announce&tr=udp://9.rarbg.to:2710/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://open.stealth.si:80/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://ipv4.tracker.harry.lu:80/announce",
              "torrent_peers": 1222,
              "torrent_seeds": 761,
              "torrent_url": "",
              "vitality": 0.3448
            },
            {
              "durability": 1,
              "file": "The.Queens.Gambit.S01E06.WEBRip.x264-ION10[eztv.io].mp4",
              "id": "4a4ad10ce285bac33644eec519dfceac2c79160e",
              "language": "",
              "quality": "360p",
              "size_bytes": 597873509,
              "torrent_magnet": "magnet:?xt=urn:btih:4a4ad10ce285bac33644eec519dfceac2c79160e&dn=The.Queens.Gambit.S01.WEBRip.x264-ION10%5Beztv.io%5D%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969",
              "torrent_peers": 171,
              "torrent_seeds": 85,
              "torrent_url": "",
              "vitality": 0.6667
            },
            {
              "durability": 0.5385,
              "file": "The.Queens.Gambit.S01E06.WEBRip.x264-ION10.mp4",
              "id": "6fe94da85af52af244afa0c58306f60afb5fc0c1",
              "language": "",
              "quality": "360p",
              "size_bytes": 597873509,
              "torrent_magnet": "magnet:?xt=urn:btih:6fe94da85af52af244afa0c58306f60afb5fc0c1&dn=The.Queens.Gambit.S01.WEBRip.x264-ION10&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2760&tr=udp%3A%2F%2F9.rarbg.to%3A2740&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.internetwarriors.net:1337/announce&tr=udp://tracker.pirateparty.gr:6969/announce&tr=http://tracker3.itzmx.com:8080/announce&tr=udp://9.rarbg.me:2740/announce&tr=udp://9.rarbg.me:2730/announce&tr=udp://9.rarbg.me:2770/announce&tr=udp://tracker.zer0day.to:1337/announce&tr=udp://9.rarbg.to:2740/announce&tr=udp://9.rarbg.to:2730/announce&tr=udp://9.rarbg.to:2770/announce&tr=udp://tracker.mg64.net:6969/announce&tr=udp://9.rarbg.to:2720/announce&tr=udp://public.popcorn-tracker.org:6969/announce&tr=udp://tracker.cypherpunks.ru:6969/announce&tr=udp://inferno.demonoid.pw:3418/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=udp://asnet.pw:2710/announce&tr=udp://tracker.acg.gg:2710/announce&tr=udp://tracker.port443.xyz:6969/announce&tr=http://bt.acg.gg:1578/announce&tr=udp://tracker.trackerfix.com:80/announce&tr=udp://9.rarbg.me:2710/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://shadowshq.yi.org:6969/announce&tr=udp://eddie4.nl:6969/announce&tr=udp://thetracker.org:80/announce&tr=http://share.camoe.cn:8080/announce&tr=udp://tracker.justseed.it:1337/announce&tr=udp://tracker.coppersurfer.tk:80/announce&tr=udp://ipv6.tracker.harry.lu:80/announce&tr=udp://tracker.torrent.eu.org:451&tr=udp://bt.xxx-tracker.com:2710/announce&tr=udp://glotorrents.pw:6969/announce&tr=udp://p4p.arenabg.ch:1337/announce&tr=udp://9.rarbg.to:2710/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://open.stealth.si:80/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://ipv4.tracker.harry.lu:80/announce",
              "torrent_peers": 834,
              "torrent_seeds": 732,
              "torrent_url": "",
              "vitality": 0.4286
            }
          ],
          "items_lang": [],
          "movie_id": "10048342",
          "runtime": 60,
          "season": "1",
          "synopsis": "After training with Benny in New York, Beth heads to Paris for her rematch with Borgov. But a wild night sends her into a self-destructive spiral.",
          "title": "Adjournment"
        },
        {
          "air_time": "2020-10-23",
          "episode": "7",
          "id": "10048342-01-07",
          "imdb": "tt10048342-01-07",
          "items": [
            {
              "durability": 0.9552,
              "file": "The.Queens.Gambit.S01E07.WEBRip.x264-ION10.mp4",
              "id": "6fe94da85af52af244afa0c58306f60afb5fc0c1",
              "language": "",
              "quality": "360p",
              "size_bytes": 711894592,
              "torrent_magnet": "magnet:?xt=urn:btih:6fe94da85af52af244afa0c58306f60afb5fc0c1&dn=The.Queens.Gambit.S01.WEBRip.x264-ION10&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2760&tr=udp%3A%2F%2F9.rarbg.to%3A2740&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.internetwarriors.net:1337/announce&tr=udp://tracker.pirateparty.gr:6969/announce&tr=http://tracker3.itzmx.com:8080/announce&tr=udp://9.rarbg.me:2740/announce&tr=udp://9.rarbg.me:2730/announce&tr=udp://9.rarbg.me:2770/announce&tr=udp://tracker.zer0day.to:1337/announce&tr=udp://9.rarbg.to:2740/announce&tr=udp://9.rarbg.to:2730/announce&tr=udp://9.rarbg.to:2770/announce&tr=udp://tracker.mg64.net:6969/announce&tr=udp://9.rarbg.to:2720/announce&tr=udp://public.popcorn-tracker.org:6969/announce&tr=udp://tracker.cypherpunks.ru:6969/announce&tr=udp://inferno.demonoid.pw:3418/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=udp://asnet.pw:2710/announce&tr=udp://tracker.acg.gg:2710/announce&tr=udp://tracker.port443.xyz:6969/announce&tr=http://bt.acg.gg:1578/announce&tr=udp://tracker.trackerfix.com:80/announce&tr=udp://9.rarbg.me:2710/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://shadowshq.yi.org:6969/announce&tr=udp://eddie4.nl:6969/announce&tr=udp://thetracker.org:80/announce&tr=http://share.camoe.cn:8080/announce&tr=udp://tracker.justseed.it:1337/announce&tr=udp://tracker.coppersurfer.tk:80/announce&tr=udp://ipv6.tracker.harry.lu:80/announce&tr=udp://tracker.torrent.eu.org:451&tr=udp://bt.xxx-tracker.com:2710/announce&tr=udp://glotorrents.pw:6969/announce&tr=udp://p4p.arenabg.ch:1337/announce&tr=udp://9.rarbg.to:2710/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://open.stealth.si:80/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://ipv4.tracker.harry.lu:80/announce",
              "torrent_peers": 834,
              "torrent_seeds": 732,
              "torrent_url": "",
              "vitality": 0.4453
            },
            {
              "durability": 0.9718,
              "file": "The.Queens.Gambit.S01E07.1080p.WEB.H264-GGWP.mkv",
              "id": "b57ff84ee760aaca0b7d2fbe25739e510e1a248d",
              "language": "",
              "quality": "1080p",
              "size_bytes": 3230800445,
              "torrent_magnet": "magnet:?xt=urn:btih:b57ff84ee760aaca0b7d2fbe25739e510e1a248d&dn=The.Queens.Gambit.S01.1080p.NF.WEBRip.DDP5.1.x264-GGWP%5Brartv%5D&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2840&tr=udp%3A%2F%2F9.rarbg.to%3A2810&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.internetwarriors.net:1337/announce&tr=udp://tracker.pirateparty.gr:6969/announce&tr=http://tracker3.itzmx.com:8080/announce&tr=udp://9.rarbg.me:2740/announce&tr=udp://9.rarbg.me:2730/announce&tr=udp://9.rarbg.me:2770/announce&tr=udp://tracker.zer0day.to:1337/announce&tr=udp://9.rarbg.to:2740/announce&tr=udp://9.rarbg.to:2730/announce&tr=udp://9.rarbg.to:2770/announce&tr=udp://tracker.mg64.net:6969/announce&tr=udp://9.rarbg.to:2720/announce&tr=udp://public.popcorn-tracker.org:6969/announce&tr=udp://tracker.cypherpunks.ru:6969/announce&tr=udp://inferno.demonoid.pw:3418/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=udp://asnet.pw:2710/announce&tr=udp://tracker.acg.gg:2710/announce&tr=udp://tracker.port443.xyz:6969/announce&tr=http://bt.acg.gg:1578/announce&tr=udp://tracker.trackerfix.com:80/announce&tr=udp://9.rarbg.me:2710/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://shadowshq.yi.org:6969/announce&tr=udp://eddie4.nl:6969/announce&tr=udp://thetracker.org:80/announce&tr=http://share.camoe.cn:8080/announce&tr=udp://tracker.justseed.it:1337/announce&tr=udp://tracker.coppersurfer.tk:80/announce&tr=udp://ipv6.tracker.harry.lu:80/announce&tr=udp://tracker.torrent.eu.org:451&tr=udp://bt.xxx-tracker.com:2710/announce&tr=udp://glotorrents.pw:6969/announce&tr=udp://p4p.arenabg.ch:1337/announce&tr=udp://9.rarbg.to:2710/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://open.stealth.si:80/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://ipv4.tracker.harry.lu:80/announce",
              "torrent_peers": 1222,
              "torrent_seeds": 761,
              "torrent_url": "",
              "vitality": 0.4348
            },
            {
              "durability": 1,
              "file": "The.Queens.Gambit.S01E07.720p.WEB.H264-STRONTiUM[eztv.io].mkv",
              "id": "c798ba4c481d08c2014a047deeb7b4417a814674",
              "language": "",
              "quality": "720p",
              "size_bytes": 1635055423,
              "torrent_magnet": "magnet:?xt=urn:btih:c798ba4c481d08c2014a047deeb7b4417a814674&dn=The.Queens.Gambit.S01.720p.NF.WEBRip.DDP5.1.x264-STRONTiUM%5Beztv.io%5D%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969",
              "torrent_peers": 369,
              "torrent_seeds": 138,
              "torrent_url": "",
              "vitality": 0.3333
            },
            {
              "durability": 1,
              "file": "The.Queens.Gambit.S01E07.WEBRip.x264-ION10[eztv.io].mp4",
              "id": "4a4ad10ce285bac33644eec519dfceac2c79160e",
              "language": "",
              "quality": "360p",
              "size_bytes": 711894592,
              "torrent_magnet": "magnet:?xt=urn:btih:4a4ad10ce285bac33644eec519dfceac2c79160e&dn=The.Queens.Gambit.S01.WEBRip.x264-ION10%5Beztv.io%5D%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969",
              "torrent_peers": 171,
              "torrent_seeds": 85,
              "torrent_url": "",
              "vitality": 0.4
            },
            {
              "durability": 0.8,
              "file": "Le.Jeu.De.La.Dame.S01E07.FiNAL.MULTi.1080p.WEB.H264-N3TFL1X[eztv.io].mkv",
              "id": "6b2d758a83f4e5ab68b25bd9cf9f63977e004a81",
              "language": "",
              "quality": "1080p",
              "size_bytes": 3860429888,
              "torrent_magnet": "magnet:?xt=urn:btih:6b2d758a83f4e5ab68b25bd9cf9f63977e004a81&dn=Le.Jeu.De.La.Dame.S01E07.FiNAL.MULTi.1080p.WEB.H264-N3TFL1X%5Beztv.io%5D.mkv%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969",
              "torrent_peers": 22,
              "torrent_seeds": 32,
              "torrent_url": "",
              "vitality": 0.5
            },
            {
              "durability": 0,
              "file": "The.Queens.Gambit.2020.S01E07.HDR.2160p.WEBRip.x265-iNSPiRiT[eztv.re].mkv",
              "id": "2883fc148a578bca589cabbef21a900d74b5fec6",
              "language": "",
              "quality": "360p",
              "size_bytes": 7886491309,
              "torrent_magnet": "magnet:?xt=urn:btih:2883fc148a578bca589cabbef21a900d74b5fec6&dn=The.Queens.Gambit.2020.S01.HDR.2160p.WEBRip.x265-iNSPiRiT%5Beztv.re%5D%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969",
              "torrent_peers": 25,
              "torrent_seeds": 32,
              "torrent_url": "",
              "vitality": 0
            }
          ],
          "items_lang": [],
          "movie_id": "10048342",
          "runtime": 67,
          "season": "1",
          "synopsis": "A visit from an old friend forces Beth to reckon with her past and rethink her priorities, just in time for the biggest match of her life.",
          "title": "End Game"
        }
      ]
    }
  ]
}
```

## animeShows([options])

|page                 |   
|---------------------|
|[1 .. unknown limit] |


|sortby             |   
|-------------------|
| seeds (Popularity), dateadded, year, title |               


|genre         |
|--------------|
|action,adventure,animation,biography,comedy,crime,documentary,drama,family,fantasy,film-noir,history,horror,music,musical,mystery,romance,sci-fi,short,sport,thriller,war,western |      



```javascript
const main = async() =>{
  const options = {
    page: 1,
    sortby: 'seeds',
    genre: 'action'
  };
  const data = await animeShows(options);
};
```

```json
{
  title: 'Bleach',
  year: 2012,
  rating: 7.98,
  imdb: 'tt0434665',
  actors: '',
  writers: '',
  directors: null,
  description: "15-year-old Kurosaki Ichigo is not your everyday high school student. He has from as far he can remember always had the ability to see ghosts and spirits. A fateful day arrives as Ichigo encounters the shinigami Kuchiki Rukia, who saves him and his family from a Hollow at the cost of injuring herself. During this encounter, with Rukia unable to defeat the hollow she transfers her shinigami powers into Ichigo. In the aftermath, unable to continue with her job, Rukia allows Ichigo to take on the role of a shinigami in her place as they together defeat the Hollows plaguing Ichigo's town. ",
  poster_med: 'https://cdn.myanimelist.net/images/anime/3/40451.jpg',
  poster_big: 'https://cdn.myanimelist.net/images/anime/3/40451.jpg',
  genres: [ 'Shounen', 'Action', 'Supernatural', 'Super Power', 'Comedy' ],
  torrents: [
    [Object], [Object],
    [Object], [Object],
    [Object], [Object],
    [Object], [Object],
    [Object], [Object],
    [Object], [Object],
    [Object]
  ]
}

```



## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

### **:busts_in_silhouette: Credits**

- [Chris Michael](https://github.com/ChrisMichaelPerezSantiago) (Project Leader, and Developer)

---

### **:anger: Troubleshootings**

This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may
not be a good fit for your project(s).

---

### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.


---


### **:robot: Author**

_*Chris Michael*_

> You can follow me on
[github](https://github.com/ChrisMichaelPerezSantiago)&nbsp;&middot;&nbsp;[twitter](https://twitter.com/Chris5855M)

---

Copyright © 2020 [Popcorn Time API](https://github.com/ChrisMichaelPerezSantiago/popcorntime).
