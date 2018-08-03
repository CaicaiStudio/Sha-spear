cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    go_to_map: function(){
        cc.director.loadScene("map")
    },
    
    back_to_manu: function(){
        cc.director.loadScene("main")
    },
    
    level_start: function(){
        cc.director.loadScene("game")
    },
    
    level_quit: function(){
        cc.director.loadScene('map')
        cc.director.isSendCleanupToScene()
    },

    showAlertCallBack: function () {
        Alert.show("游戏菜单");
    },


});
