// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
    extends: cc.Component,

    properties: {
        lblName:cc.Label, 
        settings:cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        cc.log("=====================111111111")
     },

    start () {
        cc.log("=====================")
    },

    // update (dt) {},
    touchBtnEvent:function(target, param){
        if(param==1){
          //  this.
        }
        else if(param==2){
            this.openSettingView(); 
        }
    },
    
    openSettingView:function(){
        var newSetting = cc.instantiate(this.settings);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.addChild(newSetting);
        newStar.setPosition(this.node.width/2, this.node.height/2);
    },

});
