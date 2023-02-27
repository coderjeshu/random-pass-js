const words = [
    'sport', 'did', 'many', 'been', 'page', 'year', 'trail',
    'earth', 'are', 'while', 'off', 'town', 'doing', 'size',
    'steel', 'sale', 'swam', 'put', 'zero', 'week', 'mill',
    'path', 'law', 'list', 'hard', 'plate', 'block', 'two',
    'those', 'late', 'sun', 'map', 'silk', 'lady', 'meant',
    'seat', 'pen', 'broad', 'vapor', 'ocean','1',
    'past', 'aside', 'her', 'cent', 'box', 'fuel', 'block',
    'red', 'plate', 'late', 'that', 'ring', 'swim', 'shown',
    'pupil', 'were', 'lot', 'pay', 'would', 'tired', 'dull',
    'mud', 'sky', 'grew', 'hard', 'ill', 'frame','0',
    'still', 'shine', 'range', 'loud', 'fox', 'gate', 'slide',
    'dried', 'dig', 'new', 'rest', 'play', 'win', 'strong',
    'each', 'nails', 'flag', 'exist', 'door', 'luck', 'down',
    'poem', 'depth', 'press', 'crowd', 'herd', 'drink', 'worry',
    ];

    ///to get random number
    function randomNumber(number){
         return Math.floor(Math.random()*number)
    }

    /// to get random words from words array

    function randomWord(){
        const number = randomNumber(words.length)
        return words[number]
    }

    ///now create main function

    function getPassword(){
        let chars = '0123456789!@#$%^&*()_'
        let length = chars.length;
        let password = ''
        while (password.length < 12){
            password = password.concat(randomWord(chars.length))
            password = password.concat(chars[randomNumber(length)])
        }
        password = password.substring(0,16)
        document.getElementById('password').value = password
    }