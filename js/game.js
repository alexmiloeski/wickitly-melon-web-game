
/* Game namespace */
var game =
{
    // Run on page load.
    "onload" : function ()
	{
        // Initialize the video.
        if (!me.video.init(640, 480, {wrapper : "screen", scale : "auto"}))
		{
            alert("Your browser does not support HTML5 canvas.");
            return;
        }
		
        // set and load all resources.
        // (this will also automatically switch to the loading screen)
        me.loader.preload(game.resources, this.loaded.bind(this));
    },
	
    // Run on game resources loaded.
    "loaded" : function ()
	{
		
		this.playScreen = new game.PlayScreen();
        me.state.set(me.state.PLAY, this.playScreen);
		
		// set a global fading transition for the screen
		me.state.transition("fade", "#000000", 300);
		
		// add entities in the entity pool
		me.pool.register("mainPlayer", game.PlayerEntity);
		me.pool.register("interactable1", game.InteractableEntity);
		me.pool.register("interactable2", game.InteractableEntity);
		me.pool.register("interactable_door_enter", game.InteractableEntity);
		me.pool.register("interactable_door_exit", game.InteractableEntity);
		
        // Start the game.
        me.state.change(me.state.PLAY);
    }
};
