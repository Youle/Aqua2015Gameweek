ig.module( 'game.levels.level1' )
.requires( 'impact.image','game.entities.player' )
.defines(function(){
LevelLevel1=/*JSON[*/{
	"entities": [
		{
			"type": "EntityPlayer",
			"x": 196,
			"y": 452
		}
	],
	"layer": [
		{
			"name": "main",
			"width": 10,
			"height": 6,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/tileset.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 128,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[2,2,2,2,2,2,2,2,2,2]
			]
		},
		{
			"name": "collision",
			"width": 11,
			"height": 7,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 128,
			"foreground": false,
			"data": [
				[1,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,1],
				[1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1]
			]
		}
	]
}/*]JSON*/;
LevelLevel1Resources=[new ig.Image('media/tileset.png')];
});