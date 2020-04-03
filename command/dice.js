module.exports= class Dice {
    static match(message){
        return message.content.startsWith('$roll')
    }

    static roll(message){
        let args = message.content.split(' ')
        console.log(args)
        //Si un seul param
        const number_args=args.length
        if (number_args==2){
            let dice=Math.floor(Math.random() * args[1]) + 1
            message.channel.send(`Tu as fait : `+ dice)
        }
        else{
        //If multi roll dice
        const list_score=[]
        for (let i = 0; i <args[1] ; i++) {
            let dice=Math.floor(Math.random() * args[2]) + 1  // returns a random integer from 1 to 10 
            list_score[i]=dice
        }
        
        if (args[2]>1){
            message.channel.send(`Tes lancés sont : `+ list_score)
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            const total=list_score.reduce(reducer)
            message.channel.send(`Le total de vos lancé vaut `+ total)
        }
        else{
            message.channel.send(`Tu as fait : `+ list_score)
        }

        }

    }
}