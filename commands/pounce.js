module.exports = {
    name: 'pounce',
    description: 'Use this command to pounce on a question!',
    cooldown: 5,
    execute(msg, args, client) {
        const {prefix} = require('../config.json');
        const ans = msg.content.slice(prefix.length).trim();
        
        try{
            let membersWithRole = msg.guild.members.cache.filter(member => { 
                return member.roles.cache.find(ob => ob.name === "QuizMaster");
            }).map(member => {
               return member.user.id;
            });

            client.users.fetch(membersWithRole[0]).then((user) => {
                user.send(`team ${msg.author} ${ans}`);
            });

        } catch (error) {
            console.error(error);
            msg.channel.send('There is no role defined QuizMaster!');
        }

        /*
        let qm = client.users.cache.get(membersWithRole[0]);
        console.log(qm);
        qm.send(`team ${msg.author} pounces ${ans}`);
        */
    }
};

