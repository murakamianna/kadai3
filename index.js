enchant();
window.onload = function(){
    var game = new Game(320,480);
    
    game.onload = function(){
        var bgSprite = new Sprite(320,480);		//背景画像
        
        var bgSurface = new Surface(320,480); 	//スプライトの画像データ
        bgSurface.context.strokeStyle = 'red';	//線の色を赤
        bgSurface.context.beginPath();			//描画開始
        bgSurface.context.rect(100,100,150,150);	//四角形
        bgSurface.context.moveTo(200,200);		//直線の始点
        bgSurface.context.lineTo(300,300);		//直線の終点
       
       
            
        
        bgSurface.context.stroke();				//描画指示
        
       
        bgSprite.image = bgSurface;	//image属性として指定
        
        game.rootScene.addChild(bgSprite);	//子として追加
        
        bgSprite.addEventListener(Event.TOUCH_START,function(event){
            if (event.x > 160){ //画面の右半分タッチしたら
                bgSprite.rotate(90);
            } else{	
                bgSprite.rotate(270);
            }
        });
    
    };
    
    	game.start();	//ゲームスタート
};