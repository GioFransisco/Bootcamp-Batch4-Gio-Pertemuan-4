const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('what is your name : ', (name) => {
    rl.question('\nwhat is your email : ', (email) => {
        rl.question('\nwhat is your phone : ', (phone) => {
            console.log(`\nyour information : \nyour name : ${name} \nyour email : ${email} \nyour phone : ${phone}`)
            rl.close();
        })
    })
    // console.log(`thank you ${name}`);
    // rl.close();
})