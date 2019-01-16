game.PlayScreen = me.ScreenObject.extend(
{
    /**
     *  action to perform on state change
     */
    onResetEvent: function()
	{
		//me.game.world.addChild(new me.ColorLayer("background", "#00ff0050"), 0); // adds a transparent green layer over the loading screen
		
		// load a level
		me.levelDirector.loadLevel("area01");
		
		// enable the keyboard
		me.input.bindKey(me.input.KEY.LEFT,		"left");
		me.input.bindKey(me.input.KEY.RIGHT,	"right");
		me.input.bindKey(me.input.KEY.X,	 	"jump", true);
		me.input.bindKey(me.input.KEY.ESC,   	"escape");
		// main action used for interacting with everything
		me.input.bindKey(me.input.KEY.F,		"interact", true);
		me.input.bindKey(me.input.KEY.ENTER, 	"interact", true)
		//me.input.bindPointer(me.input.pointer.LEFT, me.input.KEY.F); // left mouse key
		
    },
	
    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function()
	{
		me.input.unbindKey(me.input.KEY.F);
		me.input.unbindKey(me.input.KEY.ENTER);
		//me.input.unbindPointer(me.input.pointer.LEFT);
    }
});
