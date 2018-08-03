var Deck = require("Deck")
var Player = require("Player")

var player_list = cc.Enum({
    player_1: new Player(),
    player_2: new Player(),
    player_3: new Player(),
    player_4: new Player()
})

var Job = cc.Enum({
    Null: 0,
    Detective: 1,
    Civilian: 2,
    Killer: 3,
    Enemy: 4
})
var Level_type = cc.Enum({
    Two_Player: 2,
    Four_Player: 4
})

function Game() {
    this.deck = deck_in_game
    this.level_name = level_name
    this.level_type = level_type
}
/**
 * 玩家的操作
 */
Player.Actions = function(){
    this.bidian(),
    this.check_card(),
    this.discards(),
    this.pass(),
    this.attack(),
    this.defend()
}
/**
 * 弃牌
 * @param {*} target 
 * @param {*} arguments 
 */
Player.Actions.discards = function(target,){
    for(var arg in this.arguments){
        player_list.player_1
    }
}
/**
 * 攻击类型
 */
Player.Actions.attack = function(){
    this.j_virus()
    this.p_virus()
    this.sha_spear()
    this.skill()
},

Actions.attack.j_virus = function(target){
    player_list[target].Actions.discard(2)
},

/**
 * 防御类型
 */
Actions.defend = function(){
    this.k_virus()
    this.cancel()
    this.reflect()
},
/**
 * 比点
 */
Actions.bidian = function() {
    var card1 = Deck.get_card();
    var card2 = Deck.get_card();
    if(card1[1]>card2[1]){
        return 0;
    }
    else if(card1[1]<card2[1]){
        return 1;
    }
    else{
        return -1;
    }
},
/**
 * 卡牌检查
 */
Actions.check_card = function(){
    if (length.arguments = 1) {
        switch (this.arguments[0][1]) {
            case 11://j_virus
                
                break;
            case 12://q_virus
                
                break;
            case 13://k_virus
                
                break;
            case 0:
                switch (this.arguments[0][0]) {
                    case Suit.cancel://cancel
                        
                        break;
                
                    case Suit.reflect://reflect
                        
                        break;
                    default:
                    return 1
                        break;
                }
                break;
            default:
            return 1
                break;
        }
    }
    else if(length.arguments = 2){
        if (arguments[0][1] = arguments[1][1] && this.arguments[0][1] <11){
            //Sha-spear
        }
        else{
            return 1
        }
    }
    else if(length.arguments = 3){
        var cards = [this.arguments[0][1],this.arguments[1][1],this.arguments[2][1]]
        function sortNumber(a,b){ return a - b }
        cards = cards.sort(sortNumber)
        cards[1] -= cards[0]
        cards[2] -= cards[0]
        cards[0] = 0
        if(cards == [0,1,2]){
            //发大招

        }
        else{//没有大招
            return 1
        }
    }
    else{
        return 1
    }
},

cc.Class({
    extends: cc.Component,

    properties: {
        level_name:"0",
        turn:0
    },
    onLoad:{
        
    }
});

function newFunction() {
    Game.deck_in_game = Deck.create;
}
