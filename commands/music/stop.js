module.exports = {
    config: {
        name: "stop",
        description: "Stop the music command",
        aliases: ['dc', 'disconnect']
    },
    run: async(bot, message) => { 
      const player = message.client.manager.players.get(message.guild.id);
      if (!player) return message.reply("I have not joined a channel because I have nothing to play. Use the play command to play the song.");
  
      const { channel } = message.member.voice;
      
      if (!channel) return message.reply("You need to join a voice channel.");
      if (channel.id !== player.voiceChannel) return message.reply("You're not in the same voice channel.");
      
      player.destroy();
      return message.reply("Player stopped. Bye");
    }
  }