cc.Class({
    extends: cc.Component,

    properties: {
        level_name_display: {
            default: null,
            type: cc.Label
        }
    },

    onLoad: function () {
        this.level_name = 0;
    },

    level_info_appear: function () {
        this.level_name_display.string = 'Level: ' + this.level_name.toString();
    },
});
