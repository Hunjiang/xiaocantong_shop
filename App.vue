<script>
	
	export default {
		onLaunch: function() {
			console.log('App Launch')
			
			if(uni.getStorageSync('token')){
				setInterval(()=>{
					this.$u.get('/api/shop_order/hint').then(res=>{
						if(res.data==1){
							const innerAudioContext = uni.createInnerAudioContext();
							console.log('src',this.$base+"/apk/warn.mp3")
							// innerAudioContext.src = this.$base+"/apk/warn.mp3";
							innerAudioContext.play();
							innerAudioContext.onPlay((res) => {
							  console.log('开始播放');
							});
							innerAudioContext.onError((res) => {
								console.log(res)
							});
							}
					
					})
				},10000)
			}
			
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData:{
			timer:false,
			isLogin:true
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	/* 引入uView基础样式 */
	@import "uview-ui/index.scss";
	page{
		background-color: #f4f4f4;
	}
</style>
