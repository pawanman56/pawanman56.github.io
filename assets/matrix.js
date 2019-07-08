// geting canvas by id matrix-rain
var c = document.getElementById('matrix-rain');
var ctx = c.getContext('2d');

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//japanese dumpling recipe
var matrix = '材料人分個白菜カットニラ束豚ひき肉ショウガ 少し白菜をみじん切りしますニラを細かく切りますひき肉をボウルに出します白菜を手で握って水分を落としながらひき肉のボウルに移しますニラもボウルに加えますボウルの中身を混ぜます混ぜたらすこし寝かせますスプーンをつかって餃子の皮の真ん中に乗せていきますだいたいスプーンですくうぐらいがちょうどいいです餃子の皮の周り（半分）に水をつけてくっつけますこの時にひだを作っていきます出来上がったら焼きます油を敷いて餃子を並べていきます強火で焼きますすこし焼いたら水を流しいれふたをします分ほど蒸し焼きしたらふたを開けますお皿をフライパンに逆さにかぶせてひっくり返して出来上がり0123456789PAWANSUNUWAR';

//converting the string into an array of single characters
matrix = matrix.split('');

var font_size = 10;
var columns = c.width / font_size; //number of columns for the rain

//an array of drops - one per column
var drops = [];

//x below is the x coordinate
//Random y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
    drops[x] = Math.floor( Math.random() * matrix.length ); 

//drawing the characters
function draw()
{
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = '#0F0'; //green text
    ctx.font = font_size + 'px arial';
    //looping over drops
    for( var i = 0; i < drops.length; i++ )
    {
        //a random chinese character to print
        var text = matrix[ Math.floor( Math.random() * matrix.length ) ];
        
        /*if (text === "P") {
          var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
          gradient.addColorStop("0"," magenta");
          gradient.addColorStop("0.5", "blue");
          gradient.addColorStop("1.0", "red");
          ctx.fillStyle = gradient;
        }*/

        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if( drops[i] * font_size > c.height && Math.random() > 0.975 )
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval( draw, 45 );