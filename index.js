const bilou = require('discord.js');
const bot = new bilou.Client();

bot.on('ready', function(){
    console.log("je démarre");
})

bot.on("message",function(message){
    let usermsg = message.content.split("!");
    console.log(usermsg)
    if(usermsg[0] == ""){
        let verify = false;
        console.log("v");

        if(usermsg[1] == "bonjour"){
            verify = true;
            return message.channel.sendMessage('Salut :ok_hand:  ');
            
        }
         else if(usermsg[1] == 'help'){
            verify = true;
           return message.channel.sendMessage('Les commandes disponibles sont !bonjour,!ping,!help');

        }   
        else if(usermsg[1] == 'ping'){
            verify = true;
            return message.channel.sendMessage("the ping of the bot is " +bot.ping +" ms");

        } 
        else if(usermsg[1] == ""){
            verify = true;
            return message.channel.send("Please enter argument"); // pour les indéfinit
            
        }


        else if(usermsg[1] == 'macron'){
            verify = true;
           return message.channel.sendMessage('https://tenor.com/view/emmanuel-macron-projet-gif-10371648');
    
        }
        else if(usermsg[1] == 'site'){
            verify = true;
           return message.channel.sendMessage('https://niark.xyz/');
    
        }
      
        else if (verify == false) {
            return message.channel.send("I don't know this command enter !help for more information");
                        
        } 

        
            
         
    }
    
   
    
})





























bot.login('NjgzNjYwNzI1MjcyNDQ0OTY0.Xlu0pw.oJ_XO5Tv09P3HLwtqSZP1DIw8Ts');