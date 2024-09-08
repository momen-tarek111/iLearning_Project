if ($('#example_video_1').length > 0) {
    var player = videojs('example_video_1');
    var upcoming_list = $('#plylst_upcming');
    var last_video_index = 0;
    var playlist = [
        {
            url: '../Videos/🏹 تذكرتي الزمالك 🏹 - Facebook.mp4',
            thumbnail:
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
            isLive: true,
            title: 'Web Development with PHP & Laravel - Class 01',
            length: '',
            playing: true,
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
            thumbnail:
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
            isLive: false,
            linkedProducts: [],
            title: 'Chromecast â€“ For Bigger Joyrides',
            length: '0:15',
            playing: false,
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            thumbnail:
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
            isLive: false,
            linkedProducts: [],
            title: 'Elephants Dream',
            length: '10:53',
            playing: false,
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            thumbnail:
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
            isLive: false,
            linkedProducts: [],
            title: 'Chromecast â€“ For Bigger Blazes',
            length: '10:53',
            playing: false,
            isLock: true,
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
            thumbnail:
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
            isLive: false,
            linkedProducts: [],
            title: 'Chromecast â€“ For Bigger Escapes',
            length: '10:53',
            playing: false,
            isLock: true,
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
            thumbnail:
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
            isLive: false,
            linkedProducts: [],
            title: 'Sintel',
            length: '10:53',
            playing: false,
            isLock: true,
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            thumbnail:
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
            isLive: false,
            linkedProducts: [],
            title: 'Chromecast â€“ For Bigger Blazes',
            length: '10:53',
            playing: false,
            isLock: true,
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
            thumbnail:
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
            isLive: false,
            linkedProducts: [],
            title: 'Chromecast â€“ For Bigger Escapes',
            length: '10:53',
            playing: false,
            isLock: true,
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
            thumbnail:
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
            isLive: false,
            linkedProducts: [],
            title: 'Web Development with PHP & Laravel - Class 01',
            length: '10:53',
            playing: false,
            isLock: true,
        },
    ];
    // player.dimension("width", 100%);
    player.dimension('height', 420);

    function build_list_item(s) {
        var isLive = s.isLive.toString();
        var length = s.isLive ? 'Live' : s.length;
        var playing = s.playing.toString();
        var isLock = s.isLive;
        var e =
            $(`<div class="single-playlist mb-3" data-playing="${playing}  data-live="${isLive} >
                                <div>
                                    <div class="sp-img-box">
                                        <img src="${s.thumbnail}" alt="playlist">
                                    </div>
                                </div>
                                <div class="sp-desc">
                                    <h2 class="sp-title">${s.title}</h2>
                                    <p class="sp-duration">${length}</p>
                                </div>
                            </div>`);
        var videoTitle = document.getElementById('video-title');
        videoTitle.innerHTML = s.title;

        e.click((i) => {
            player.src(s.url);
            playlist[last_video_index].playing = false;
            last_video_index = playlist.indexOf(s);
            playlist[last_video_index].playing = true;
            populate_playlist();
            videoTitle.innerHTML = s.title;
        });
        return e;
    }
    function populate_list(data, elem) {
        elem.html('');
        for (var item of data) {
            elem.append(build_list_item(item));
        }
    }
    function populate_playlist() {
        populate_list(playlist, $('#plylst_upcming'));
    }

    populate_playlist();
}