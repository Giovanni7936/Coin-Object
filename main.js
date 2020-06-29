let coin = {
    state: 0,
    flip: function() {
        //Use .math.random and sat it to this.state
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
           //update Math.radom
            this.state = Math.round(Math.random())
    },
    toString: function() {
        coin.flip()
        if(this.state===0){
            document.body.append('Heads')
            
        }
        else{
            document.body.append('Tails')
        }
        //use an if statement and else deppending on the flip and wright it to the html
        //call the flip function inside here
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let image = document.createElement('img');

        coin.flip()
        if(this.state===0){
            image.src = './heads.png'
        }
        else{
            image.src = './tails.jpg'
        }
        
        
        //call the flip funtion inside here as well.
        //use and if else statement
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        document.body.appendChild(image)

    },
    display20Flips: function() {
        for(let index = 0; index < 20; index ++){
            coin.toString()
        }

    },
    display20Images: function(){
        for(let picture = 0; picture < 20; picture ++){
            coin.toHTML()

        }
    }
};
 function check(){
     coin.display20Flips()
     coin.display20Images()
coin.toHTML()
}
check()
//write 2 functions that roll the coin 20 times