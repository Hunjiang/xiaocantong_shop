<template>
	<view>
		<view class="card" v-if="shop_info">
			<view class="row1">
				<view v-if="shop_info.logo">
					<u-image :src="base+shop_info.logo" width="130rpx" height="130rpx" border-radius="65rpx"></u-image>
					<view>
						<view>{{shop_info.name}}</view>
						<view>{{user_info.phone}}</view>
					</view>
				</view>
				
				<u-button type="error" size="mini" ripple @click="logOut">退出登陆</u-button>
			</view>
			<view class="row2"  @click="onPageJumpWith('/pages/store/rate',shop_info.total_grade)">
				<view>
					<view>{{shop_info.total_grade}}</view>
					<view>评分</view>
				</view>
				<view>
					<view>
						<u-image src="@/static/images/store/face-1.png" width="37rpx" height="37rpx"></u-image>
						<text>好评：{{good}}</text>
					</view>
					<view>
						<u-image src="@/static/images/store/face-0.png" width="37rpx" height="37rpx"></u-image>
						<text>差评：{{bad}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="sectionlist">
			<view @click="onPageJump('/pages/store/info')">
				<u-section title="店铺信息" sub-title="修改"></u-section> 
			</view>
			<view  @click="onPageJump('/pages/store/detail')">
				<u-section title="店铺详情" sub-title="设置"></u-section>
			</view>
			<view @click="show=true">
				<u-section title="营业状态" :sub-title="status==1?'营业中':'休息中'" sub-color="#ffbd27"></u-section>
			</view>
			<view   @click="onPageJump('/pages/printer/bleConnect')">
				<u-section title="连接蓝牙打印机" sub-title="点击链接" sub-color="#ffbd27"></u-section>
			</view>
			<view @click="aboutApp">
				<u-section title="关于APP" sub-title="点击了解"></u-section>
			</view>
			
			
			
			
			
		</view>
		<u-popup v-model="show" mode="right" border-radius="14">
			<view class="button">
				<view>
					<u-button type="success" @click="changeStatus(1)">营业中</u-button>
				</view>
				<view>
					<u-button type="warning" @click="changeStatus(2)">休息中</u-button>
				</view>
			</view>
				
			</u-popup>
			<u-modal v-model="showModal" :show-title="false">
						<view class="slot-content">
							<rich-text :nodes="content"></rich-text>
						</view>
					</u-modal>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				content:'',
				showModal:false,
				status:1,
				show:false,
				user_info:null,
				shop_info:null,
				good:0,
				bad:0,
				base:this.$base
			}
		},
		onLoad(){
			
		},
		methods:{
			logOut(){
				this.$u.get('/api/shop_setting/logout').then(res=>{
					uni.removeStorageSync('token')
					this.$u.toast('退出成功')
					setTimeout(()=>{
						this.$u.route('/pages/login/index')
					},1500)
					
				}) 
			},
			onPageJump(url){
				uni.navigateTo({
					url
				})
			},
			onPageJumpWith(url,grade){
				uni.navigateTo({
					url:url+"?grade="+grade
				})
			},
			aboutApp(){
				this.$u.get('/api/shop_setting/aboutApp').then(res=>{
					this.content = res.data.content
					this.showModal = true
				})
			},
			changeStatus(status){
				this.$u.get('/api/shop_setting/operating',{
					status
				}).then(res=>{
					this.$u.toast('修改成功')
					if(status==1){
						this.status=1;
					}  else {
						this.status=2;
					}
					this.show = false
				})
			}
		},
		onShow() {
			this.$u.get('/api/shop_setting/index').then(res => {
				this.user_info = res.data.user_info
				this.shop_info = res.data.shop_info
				this.good = res.data.good
				this.bad = res.data.bad
				this.status = res.data.shop_info.operating_status
			})
		},
		onPullDownRefresh() {
			this.$u.get('/api/shop_setting/index').then(res => {
				this.user_info = res.data.user_info
				this.shop_info = res.data.shop_info
				this.good = res.data.good
				this.bad = res.data.bad
				this.status = res.data.shop_info.operating_status
				uni.stopPullDownRefresh()
			})
		}
	}
</script>

<style lang="scss">
		.slot-content {
			font-size: 28rpx;
			padding: 30rpx;
		}
	.button{
		padding-top: 200rpx;
		width: 300rpx;
		>view{
			margin: 0 auto;
			margin-bottom: 50rpx;
			width: 200rpx;
			
		}
	}
	.card{
		background-color: #ffdf67;
	}
	.row1{
		
		padding: 0 40rpx;
		padding-bottom: 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		>view{
			height: 130rpx;
			display: flex;
			align-items: center;
			>view{
				height: 100%;
				padding:10rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				>view:first-child{
					font-size: 32rpx;
						letter-spacing: 1rpx;
						color: #333333;
				}
				>view:last-child{
						font-size: 32rpx;
						color: #666666;
				}
			}
			
		}
	}
	.row2{
		width: 750rpx;
			height: 177rpx;
			border-radius: 50rpx 50rpx 0 0;
			background-color: #FFFFFF;
			display: flex;
			align-items: center;
			justify-content: center;
			>view:first-child{
				display: flex;
				align-items: center;
				flex-direction: column;
				>view:first-child{
						font-size: 36rpx;
						letter-spacing: 1rpx;
						color: #ff2b2b;
				}
				>view:last-child{
						font-size: 26rpx;
						letter-spacing: 1rpx;
						color: #333333;
				}
			}
			>view:last-child{
				margin-left: 100rpx;
				>view{
						width: 260rpx;
						height: 53rpx;
						background-color: #f3f3f3;
						border-radius: 10rpx;
						display: flex;
						align-items: center;
						padding-left: 12rpx;
							font-size: 26rpx;
							letter-spacing: 1rpx;
							color: #333333;
							u-image{
								margin-right: 12rpx;
							}
							
				}
				>view:first-child{
					margin-bottom: 20rpx;
				}
			}
	}
	
	
	.sectionlist{
		background-color: #f4f4f4;
		>view{
				margin-top:20rpx ;
				padding: 20rpx;
				background-color: #FFFFFF;
		}
	}
</style>
