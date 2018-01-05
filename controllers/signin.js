'use strict'
module.exports = {
    'POST /signin' : async (ctx,next) => {
        var
            email = ctx.request.body.email || '',
            password = ctx.request.body.password || '';
        if (email === '66666@163.com' && password === '66666') {
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