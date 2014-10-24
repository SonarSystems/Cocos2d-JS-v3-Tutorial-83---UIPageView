var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var sprite = new cc.Sprite.create(res.CloseNormal_png);
        sprite.setAnchorPoint(cc.p(0.5, 0.5));
        sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        //this.addChild(sprite, 0);

        var pageView = new ccui.PageView();
        pageView.setTouchEnabled(true);
        pageView.setContentSize(cc.size(240, 900));
        pageView.setAnchorPoint(cc.p(0.5, 0.5));
        pageView.x = size.width / 2;
        pageView.y = size.height / 2;

        for (var i = 0; i < 5; i++)
        {
            var layout = new ccui.Layout();

            var imageView = new ccui.ImageView();
            imageView.loadTexture(res.CloseNormal_png);
            imageView.x = pageView.width / 2;
            imageView.y = pageView.height / 2;
            layout.addChild(imageView);

            var text = new ccui.Text();
            text.string = "Page " + (i + 1);
            text.font = "30px 'Marker Felt'";
            text.color = cc.color(192, 192, 192);
            text.x = pageView.width / 2;
            text.y = pageView.height / 2 + 300;
            layout.addChild(text);

            pageView.addPage(layout);
        }

        pageView.addEventListener(this.pageViewEvent, this);
        this.addChild(pageView);

        return true;
    },

    pageViewEvent: function(sender, type)
    {
        switch (type)
        {
            case ccui.PageView.EVENT_TURNING:
                cc.log("Page: " + sender.getCurPageIndex());

                break;
        }
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

