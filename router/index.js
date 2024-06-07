const Router = require("@koa/router");
const randomString = require("../utils/randomString");
const shortLink = require("../model/shortLink");
const router = new Router();

router.get("/", (ctx) => {
    ctx.body =
        "Hello world, if you want create short link.  Please visit /create-short-link";
});

router.post("/create-short-link", async (ctx) => {
    const { long_link, expires, password, id_link } = ctx.query;
    var Expires, Password;
    if (!long_link) {
        ctx.body = "Pls, add long link!";
        ctx.status = 400;
        return;
    }
    if (!expires) {
        Expires = 0;
    }
    if (!password) {
        Password = "";
    }
    if (!id_link) {
        var Id_new;
        Id_new = randomString(8);
        const checkExistData = await shortLink
            .findOne({ id_link: Id_new })
            .exec();
        if (checkExistData) {
            Id_new = randomString(8);
        }
        const NewShortLink = new shortLink({
            long_url: long_link,
            id_link: Id_new,
            expires: Expires,
            password: Password,
        });
        NewShortLink.save();
        ctx.body = {
            long_link,
            id_link: Id_new,
        };
    } else {
        const checkExistidLink = await shortLink
            .findOne({ id_link: id_link })
            .exec();
        if (checkExistidLink) {
            ctx.body = {
                err: true,
                content: "ID already exists!",
            };
            return;
        }
        const NewShortLink = new shortLink({
            long_url: long_link,
            id_link: id_link,
            expires: Expires,
            password: Password,
        });
        NewShortLink.save();
        ctx.body = {
            long_link,
            id_link: id_link,
        };
    }
});


router.get('/link/:id', async (ctx) => {
    const param = ctx.params.id;
    ctx.body = param
})


module.exports = router;
