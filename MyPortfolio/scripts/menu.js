$(".menuItem").on('mouseenter', function () {
    console.log('showing menuList');
    $(this).find("div.menuList").show(200);
}).on('mouseleave', function () {
    console.log('hiding menuList');
    $(this).find("div.menuList").hide(200);
});
$(".menuItem").on('click', function () {
    if ($(this).attr('id') == 'jokeAPI')
        var url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
        var xhr = new XMLHttpRequest();
        console.log(xhr.open('GET', url, true));

        $('.jokeText').text(xhr.open('GET', url, true));
        // console.log(JokeAPI.getFlags());
        // JokeAPI.getJokes({

        //     Flags: {
        //         "nsfw": false,
        //         "religious": false,
        //         "political": false,
        //         "racist": false,
        //         "sexist": false,
        //         "explicit": false
        //     }
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         // data.attr('setup');
        //         // data[];
        //         $('.jokeText').text(data);
        //         console.log(data);
        //     })

});
$(".menuOption").on('click', function () {
    console.log($(this).text().match('Git\#'));
    if ($(this).text() == 'RPG Table Maker') {
        console.log('no maker yet');
    } else if ($(this).text() == 'RPG Shop Viewer') {
        console.log('no Shop viewer yet');
    } else if ($(this).text().match('Git\*')) {
        projectVal = $(this).text().replace('Git ', '');
        console.log(`${projectVal}`);
        var URL = '';
        switch (projectVal) {
            case '1':
                console.log(`project ${projectVal}`);
                // URL = 'https://github.com/Shev-Felgrand/CS2420_Projects-Fall2021/tree/main/assign02';
                break
            case '2':
                console.log(`project ${projectVal}`);
                URL = `https://github.com/Shev-Felgrand/CS2420_Projects-Fall2021/tree/main/assign0${projectVal}`;
                break
            case '3':
                console.log(`project ${projectVal}`);
                URL = `https://github.com/Shev-Felgrand/CS2420_Projects-Fall2021/tree/main/assign0${projectVal}`;
                break
            case '4':
                console.log(`project ${projectVal}`);
                URL = `https://github.com/Shev-Felgrand/CS2420_Projects-Fall2021/tree/main/assign0${projectVal}`;
                break
            case '5':
                console.log(`project ${projectVal}`);
                URL = `https://github.com/Shev-Felgrand/CS2420_Projects-Fall2021/tree/main/assign0${projectVal}`;
                break
            case '6':
                console.log(`project ${projectVal}`);
                URL = `https://github.com/Shev-Felgrand/CS2420_Projects-Fall2021/tree/main/assign0${projectVal}`;
                break
            case '7':
                console.log(`project ${projectVal}`);
                URL = `https://github.com/Shev-Felgrand/CS2420_Projects-Fall2021/tree/main/assign0${projectVal}`;
                break
            case '8':
                console.log(`project ${projectVal}`);
                URL = `https://github.com/Shev-Felgrand/CS2420_Projects-Fall2021/tree/main/assign0${projectVal}`;
                break
            case '9':
                console.log(`project ${projectVal}`);
                URL = `https://github.com/Shev-Felgrand/CS2420_Projects-Fall2021/tree/main/assign0${projectVal}`;
                break
            case '10':
                console.log(`project ${projectVal}`);
                URL = `https://github.com/Shev-Felgrand/CS2420_Projects-Fall2021/tree/main/assign${projectVal}`;
                break
            case 'comprehensive':
                console.log(`project ${projectVal}`);
                URL = `https://github.com/Shev-Felgrand/CS2420_Projects-Fall2021/tree/main/${projectVal}`;
                break
        }
        window.location = URL;
    }
});
