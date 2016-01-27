;(function(){
var muiseShow = function(obj,list){
	var _song = document.getElementById(obj),
	 	song_list = list,
		loop = false,//单曲循环
		song = 0;//默认从0开始
	//播放音乐	
	function play_muise(index){		
			var song_src = song_list[index];
			_song.src = song_src;
			_song.load();//加载
			_song.play();//播放
	}
	//end
	_song.addEventListener('ended',function(e){	
		console.log(loop);
			if(!loop){
				next();
			}
	},false)
	
	function next(){
		var all = song_list.length-1;
		if(song<all)
		{
			song++;
		}else{
			song = 0;
		}
		play_muise(song)
	}
	//开始播放
	this.start = function(){
		if(!_song.src)
		{
			play_muise(song)
		}else{
			_song.play();
		}
	}
	//暂停播放
	this.stop = function(){
		_song.pause();
	}
	//next
	this.next = function(){
		next();
	}
	//prev
	this.prev = function(){
		var all = song_list.length-1;
		if(song<=0)
		{
			song= all;
		}else{
			song --;
		}
		play_muise(song)
	}
	//跳帧
	this.current = function(num){
		var new_current = (_song.currentTime*1000+num)/1000;
		_song.currentTime = new_current;
	}
	this.loop = function(bool){
		_song.loop = bool;
	}
	//当前状态	
	this.show = function(){ 
		return  {"obj":_song,"index":song,"src":_song.currentSrc,"current":_song.currentTime,"paused":_song.paused,"net":_song.networkState};
		//obj,当前曲目，src,播放位置，是否暂停,当前网络状态
	}
}
	window.q_media = muiseShow;
})(window)
