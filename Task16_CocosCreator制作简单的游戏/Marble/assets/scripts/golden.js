cc.Class({
    extends: cc.Component,

    properties: {
        pickRadius:55,
        // 暂存 Game 对象的引用
        game: {
            default: null,
            serializable: false
        }
    },
    
    getPlanetDistance: function (planetPos) {
        // 根据 planet 节点位置判断距离
        // planetPos = this.game.planet.getPosition();
        // 根据两点位置计算两点之间距离
        var dist = cc.pDistance(this.node.position, planetPos);
        // cc.log(dist);
        return dist;
    },
    
    // use this for initialization
    onLoad: function () {

    },
    
    onPicked: function() {
        // 当星星被收集时，调用 Game 脚本中的接口，生成一个新的金块
        this.game.makeSomeGolden();
        // 调用 Game 脚本的得分方法
        this.game.gainScore();
        // 然后销毁当前星星节点
        this.node.destroy();
    },
    update: function(){
        var planetPos = this.game.bg._children[2].getPosition();
        var distance = this.getPlanetDistance(planetPos);
        if (distance < this.pickRadius) {
            this.onPicked();
        }
        // cc.log(distance);
    }
    // update: function (dt) {
    //     // 每帧判断和主角之间的距离是否小于收集距离
    //     // if (this.getPlanetDistance() < this.pickRadius) {
    //         // 调用收集行为
    //         // this.onPicked();
    //         // this.game.planet.dirX *= -1;
    //         // this.game.planet.dirY *= -1;
    //         // cc.log(this.getPlanetDistance());
    //         // this.node.destroy();
    //         // return;
    //     }
        
    // },
    
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
