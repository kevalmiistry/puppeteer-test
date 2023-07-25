const template = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .main {
            width: 850px;
            margin: auto;
            font-family: 'Roboto', sans-serif;
            padding: 1rem;
        }

        .date {
            text-align: end;
            padding-block: 1rem 2rem;
            color: #555;
            font-size: 0.85rem;
        }

        .date span {
            font-weight: 500;
            font-style: italic;
            color: #444;
            font-size: 1rem;
        }

        .header {
            display: flex;
            align-items: flex-start;
            gap: 2rem;
        }

        .profile {
            width: 125px;
            height: 125px;
            object-fit: cover;
            border-radius: 100%;
        }

        .names .username {
            color: #0000ffc7;
            font-weight: 300;
            font-size: 0.9rem;
        }

        .categories {
            display: flex;
            justify-content: flex-start;
            gap: 0.5rem;
            flex-wrap: wrap;
        }

        .categories .cat {
            background-color: #d9d9d9;
            padding: 0.2rem 0.5rem;
            border-radius: 50vw;
            color: #444;
            font-size: 0.85rem;
            font-weight: 500;
        }

        .desc {
            color: #444;
            font-style: italic;
        }

        .cards {
            display: flex;
            gap: 1.5rem;
            margin-top: 2rem;

        }

        .card {
            flex: 1;
            aspect-ratio: 1/1;
            border: 2px dashed palevioletred;
            border-radius: 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.75rem;
        }

        .highlight {
            font-weight: 900;
            color: palevioletred;
        }

        .muted {
            color: #444;
            font-weight: 700;
            font-size: 1rem;
        }
    </style>
</head>

<body>
    <div class="main">
        <div class="date">Saved On: <span>25/07/2023</span></div>
        <div class="header">
            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="profile" class="profile">

            <div class="names">
                <h3>John Doe</h3>
                <a href="https://www.instagram.com/mrbeast/" target="_blank" rel="noopener noreferrer">
                    <p class="username">john.the.mfing.dow</p>
                </a>
            </div>

            <div class="categories">
                <span class="cat">Animation</span>
                <span class="cat">Art</span>
                <span class="cat">Sport</span>
                <span class="cat">Movie</span>
                <span class="cat">Cultural</span>
            </div>
            <p class="desc">
                Hello this is description no one reads, but if you want to read it anyways that go f#&k yo self!
            </p>
        </div>

        <div class="cards">
            <div class="card">
                <h1 class="highlight">110M</h1>
                <p class="muted">Followers</p>
            </div>
            <div class="card">
                <h1 class="highlight">250</h1>
                <p class="muted">Followings</p>
            </div>
            <div class="card">
                <h1 class="highlight">120</h1>
                <p class="muted">Posts</p>
            </div>
            <div class="card">
                <h1 class="highlight">2.89%</h1>
                <p class="muted">Engagements</p>
            </div>
        </div>
    </div>
</body>

</html>`;

module.exports = template;
