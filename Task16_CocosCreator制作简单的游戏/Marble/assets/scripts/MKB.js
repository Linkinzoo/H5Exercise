cc.Class({
    extends: cc.Component,

    properties: {
        // 移动速度
        speed:0
    },
    setInputControl: function () {
        var self = this;
        // 添加键盘事件监听
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            // 有按键按下时，判断是否为指定的方向控制键，并设置移动方向
            onKeyPressed: function(keyCode, event) {
                switch(keyCode) {
                    case cc.KEY.a:
                        self.direct = 1;
                        break;
                    case cc.KEY.d:
                        self.direct = 2;
                        break;
                }
            },
            
            // 松开按键时，停止向该方向的加速
            onKeyReleased: function(keyCode, event) {
                switch(keyCode) {
                    case cc.KEY.a:
                        self.direct = 0;
                        break;
                    case cc.KEY.d:
                        self.direct = 0;
                        break;
                }
            }
        }, self.node);
    },
    
    // use this for initialization
    onLoad: function () {
        // 加速方向开关：
        this.direct = 0;
        // 主角当前水平方向速度
        this.xSpeed = 0;
        
        // 初始化键盘输入监听
        this.setInputControl();
    },
    
    update: function (dt) {
        // 根据当前加速度方向每帧更新速度
        if (this.direct == 1) {
            this.xSpeed -= this.speed * dt;
        } else if (this.direct == 2) {
            this.xSpeed += this.speed * dt;
        } else if (this.direct === 0){
            this.xSpeed = 0;
        }
        // 限制主角的速度不能超过最大值
        if ( Math.abs(this.xSpeed) > this.speed ) {
            // if speed reach limit, use max speed with current direction
            this.xSpeed = this.speed * this.xSpeed / Math.abs(this.xSpeed);
        }

        // 根据当前速度更新主角的位置
        this.node.x += this.xSpeed * dt;
        if (this.node.x < -100){
            this.node.x = -100;
        }else if(this.node.x > 100){
            this.node.x = 100;
        }
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
