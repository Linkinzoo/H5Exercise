cc.Class({
    extends: cc.Component,

    properties: {
        // 方向属性：
        dirX:1,
        dirY:1,
        // 暂存 Game 对象的引用
        game: {
            default: null,
            serializable: false
        }
    },
    
    crashOrNot: function () {
        // 根据 player 节点位置判断距离
        var MKBPosition = this.game.MKB.getPosition();
        
        // 判断行星是否碰到金箍棒：
        
        // 行星圆心的横坐标：
        var planetCenterX = this.node.x + 15;
        // 行星底部的纵坐标：
        var planetBottomY = this.node.y;
        
        // MKB的纵坐标
        var MKBTopY = MKBPosition.y +15;
        
        // 判断纵坐标是否接触：
        if (MKBTopY - planetBottomY > -5 && MKBTopY - planetBottomY < 5) {
            // 纵坐标重合时判断横坐标：
            if (planetCenterX > MKBPosition.x - 105 && planetCenterX < MKBPosition.x + 117) {
                return true;
            }
        }
        return false;
    },
    
    catchOrNot:function(){
        
    },
    
    moveAction:function(){
        
        this.node.x = this.node.x + this.dirX * 9;
        this.node.y = this.node.y + this.dirY * 9;
        // 跳跃上升
        // var planetMove = cc.moveBy(1, cc.p(5,5)).easing(cc.easeCubicActionOut());
        // 添加一个回调函数，用于在动作结束时调用我们定义的其他方法
        // var callback = cc.callFunc(this.playJumpSound, this);
        // 重复
        // return cc.repeatForever(cc.sequence(planetMove));
    },
    
    // use this for initialization
    onLoad: function () {
        // 初始化跳跃动作：
        // this.moveAction = this.setJumpAction();
        // var theMove = cc.repeatForever(cc.sequence(this.moveAction()));
        // this.node.runAction(theMove());
        // 获得一个随机方向：
        this.dirX =1;
        this.dirY =1;
    },
    
    
    update: function (dt) {
        // 获取变量：
        var planetX = this.node.x;
        var planetY = this.node.y;
        var crashMKB = this.crashOrNot();
        // 判断是否该转向：
        if (planetX < -188 || planetX > 188){
            this.dirX *= -1;
        }
        if(planetY < -280 || planetY > 282){
            this.dirY *= -1;
        }
        if (crashMKB === true) {
            this.dirY *= -1;
        }
        // 根据当前方向更新行星位置：
        // this.node.x += planetX + this.direction.x * 10;
        // this.node.y += planetY + this.direction.y * 10;
        
        this.node.x = planetX + this.dirX * 9;
        this.node.y = planetY + this.dirY * 9;
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
