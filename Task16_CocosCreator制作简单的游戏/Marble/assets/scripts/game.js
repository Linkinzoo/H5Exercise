cc.Class({
    extends: cc.Component,

    properties: {
        // 背景节点
        bg: {
            default: null,
            type: cc.Node
        },
        // MKB节点
        MKB: {
            default: null,
            type: cc.Node
        },
        // 引用金块预制资源
        goldenPrefab: {
            default: null,
            type: cc.Prefab
        },
        // 引用行星预制资源
        planetPrefab: {
            default: null,
            type: cc.Prefab
        },
        // score label 的引用
        scoreDisplay: {
            default: null,
            type: cc.Label
        },
        // 背景音乐资源
        BGAudio: {
            default: null,
            url: cc.AudioClip,
            loop:true
        },
        // 得分音效资源
        scoreAudio: {
            default: null,
            url: cc.AudioClip
        }
    },
    
    makeSomeGolden: function() {
        // 使用给定的模板在场景中生成一个新节点
        var newGolden = cc.instantiate(this.goldenPrefab);
        // 将新增的节点添加到 bg 节点下面
        this.bg.addChild(newGolden);
        // 为星星设置一个随机位置
        newGolden.setPosition(this.setGoldenPosition());
        
        // 将 Game 组件的实例传入行星组件
        newGolden.getComponent('golden').game = this;
    },
    
    makeAPlanet: function() {
        // 使用给定的模板在场景中生成一个新节点
        var newPlanet = cc.instantiate(this.planetPrefab);
        // 将新增的节点添加到 Canvas 节点下面
        this.bg.addChild(newPlanet);
        // this.planet = newPlanet;
        // 为星星设置一个随机位置
        newPlanet.setPosition(this.setPlanetPosition());
        
        // 将 Game 组件的实例传入行星组件
        newPlanet.getComponent('planet').game = this;
        // this.planet = newPlanet;
    },
    
    setPlanetPosition: function () {
        // 返回星星坐标
        return cc.p(0, 0);
    },
    
    setGoldenPosition: function () {
        // 返回金块坐标
        return cc.p(cc.randomMinus1To1()*180,cc.randomMinus1To1()*200);
    },
    
    gainScore: function () {
        this.score += 1;
        // 更新 scoreDisplay Label 的文字
        this.scoreDisplay.string = 'Score: ' + this.score.toString();
        // 播放得分音效
        cc.audioEngine.playEffect(this.scoreAudio, false);
    },
    
    // use this for initialization
    onLoad: function () {
        // 初始化计分：
        this.score = 0;
        // 初始化行星：
        this.makeAPlanet();
        // 初始化金块：
        this.makeSomeGolden();
        cc.audioEngine.playEffect(this.BGAudio, false);
    },
    
    gameOver: function () {
        // this.player.stopAllActions(); //停止 player 节点的跳跃动作
        this.score = 0;
        // 更新 scoreDisplay Label 的文字
        this.scoreDisplay.string = 'Score: ' + this.score.toString();
    },
    
    update: function(){
        // 
        var planetDot = this.bg._children[2].getPosition();
        cc.log(planetDot.y);
        if (planetDot.y < -251) {
            this.gameOver();
        }
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
