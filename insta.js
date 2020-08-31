let users = [
    {
        username: "kat@pofficial",
        bio: "This is my bio",
        followers: 0,
        following: 34,
        posts: 4,
        name: "Katrina Kaif",
        src: "https://tinyurl.com/y5uou9c2",
    },
    {
        username: "kat@pofficial",
        bio: "This is my bio",
        followers: 0,
        following: 34,
        posts: 4,
        name: "Katrina Kaif",
        src: "https://tinyurl.com/y5uou9c2",
    },
    {
        username: "kat@pofficial",
        bio: "This is my bio",
        followers: 0,
        following: 34,
        posts: 4,
        name: "Katrina Kaif",
        src: "https://tinyurl.com/y5uou9c2",
    },
    {
        username: "kat@pofficial",
        bio: "This is my bio",
        followers: 0,
        following: 34,
        posts: 4,
        name: "Katrina Kaif",
        src: "https://tinyurl.com/y5uou9c2",
    },
];
let insta = (req, res) => {
    res.send({
        users: users
    })
}

module.exports = {
    insta: insta

}