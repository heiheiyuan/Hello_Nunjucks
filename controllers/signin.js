'use strict'
module.exports = {
    'POST /signin' : async (ctx,next) => {
        var
            email = ctx.request.body.email || '',
            password = ctx.request.body.password || '';
        if (email === 'hyy8516998@163.com' && password === 'asd8516998') {
            console.log('signin ok!');
            ctx.render('signin-ok.html', {
                title : "Signin OK!",
                name : 'GoodBoy'
            });
        }else {
            console.log('signin faild!');
            ctx.render('signin-failed.html', {
                title : 'Sign in Faild!'
            });
        }
    }
};