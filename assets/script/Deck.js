/*
//负责牌堆的部分
*/
var Suit = cc.Enum({
    Spade: 1,   // 黑桃
    Heart: 2,   // 红桃
    Club: 3,    // 梅花(黑)
    Diamond: 4, // 方块(红)
    Cancel: 5,  //抵消牌
    Reflect: 6,   //反射牌
});
/**
 * 
 */
function Deck(){
    this.deck = deck;
    this.create();
    this.reset();
    this.get_card(number);
}
/**
*对牌堆112张牌的生成
*/
Deck.create = function (){
    var deck = Array(112);

    //构建112张手牌
    for(var i=0;i<13;i++){
    //添加前104张牌
        for(var j = 0; j < 8; j++){
            deck[i * 8 + j]=[j ,i]
            }
    }

    //写上花色信息
    for(var i = 0; i < 13*8; i++){
        switch (i) {
            case 0:
                deck[i][1] = Suit.Spade;
                break;
            case 1:
                deck[i][1] = Suit.Spade;
                break;
            case 2:
                deck[i][1] = Suit.Heart;
                break;
            case 3:
                deck[i][1] = Suit.Heart;
                break;   
            case 4:
                deck[i][1] = Suit.Club;
                break;
            case 5:
                deck[i][1] = Suit.Club;
                break;
            case 6:
                deck[i][1] = Suit.Diamond;
                break;
            case 7:
                deck[i][1] = Suit.Diamond;
                break;   
            default:
                break;
        }
    }
    //添加特殊牌

    for(var i=0;i<8;i++){
       deck[i+104] = [Suit.Reflect,0];
        deck[i+109] = [Suit.Cancel,0];
    }

    //打乱顺序
    for(var i=0;i<500;i++){
        deck.push(deck.splice(112*Math.random() | 0,1))
    }

    return deck
}
/**
 * 刷新牌堆
 */
Deck.reset = function(){
    if(deck.length<10){
        Deck.create()
    }
}
/**
 *摸牌 
 */
Deck.get_card = function(number=1){
    for (var i=1;i<number;i++){
        return deck[(random()*112 | 0)]
    }
}
