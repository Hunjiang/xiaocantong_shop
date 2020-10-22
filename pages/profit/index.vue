<template>
	<view>

		<view class="card" v-if="topData">
			<u-section title="数据" sub-title="查看更多" :show-line="false"  font-size="32" @click="onPageJump('/pages/profit/more')"></u-section>
			<u-line color="#f0f0f0" margin="10rpx 0 " />
			<u-row gutter="16">
				<u-col span="4">
					<view class="tag">
						<view>今日订单</view>
						<view>{{topData.today_order}}</view>
					</view>
				</u-col>
				<u-col span="4">
					<view class="tag center">
						<view>今日金额</view>
						<view>￥{{topData.today_money}}</view>
					</view>
				</u-col>
				<u-col span="4">
					<view class="tag">
						<view>总订单数</view>
						<view>{{topData.total_order}}</view>
					</view>
				</u-col>
			</u-row>
			<view class="rowbox" style="display: flex;align-items: center;justify-content: space-between;">
				<view class="tag" style="display: flex;flex-direction: column;align-items: center;">
					<view>余额</view>
					<view>￥{{topData.user_info.money}}</view>
				</view>
				<view class="tag" style="display: flex;flex-direction: column;align-items: center;">
						<u-button type="default" size="medium" ripple @click="onPageJump('/pages/profit/getCash')">提现</u-button>
				</view>
				<view class="tag" style="display: flex;flex-direction: column;align-items: center;">
					<view>已提现</view>
					<view>￥{{topData.user_info.to_money}}</view>
				</view>
			</view>
			
		</view>
		<view class="card2" @click="onSwitchTab('/pages/index/index')">
			<u-notice-bar mode="vertical" :is-circular="false" :list="list" type="none"></u-notice-bar>
		</view>
		<view class="card2">
			<u-row gutter="16">
				<u-col span="6">
					<view class="bold">
						接单时间
					</view>
				</u-col>
				<u-col span="3">
					<view class="bold">
						收入金额
					</view>
				</u-col>
				<u-col span="3">
					<view class="bold">
						提取方式
					</view>
				</u-col>
			</u-row>
		</view>
		<view class="card2" v-for="item,index in orderList">
			<u-row gutter="16"  >
				<u-col span="6">
					<view   @click="getDetail(item.id)">
						{{item.pay_time_text}}
					</view>
				</u-col>
				<u-col span="3">
					<view  @click="getDetail(item.id)">
						￥{{item.shop_gain_money?item.shop_gain_money:'0'}}
					</view>
				</u-col>
				<u-col span="3">
					<view  @click="getDetail(item.id)">
						配送
					</view>
				</u-col>
			</u-row>
			
		</view>
		<u-loadmore :status="status" @click="getList" />
		


	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [

				],
				topData:'',
				status: 'loadmore',
				orderList:[],
				page:1,
				showpop:false,
				listDetail:'',
				base:this.$base,
				useraddress:{}
			}
		},
		onPullDownRefresh() {
			this.getData()
			this.getNewlist()
			this.page = 1
			this.orderList = []
			this.getList()
		},
		methods:{
			getDetail(id){
				uni.navigateTo({
					url:'./info?id='+id
				})
			},
			onPageJump(url){
				uni.navigateTo({
					url
				})
			},
			onSwitchTab(url){
				uni.switchTab({
					url
				})
			},
			getData(){
				this.$u.get('/api/shop_revenue/indexData').then(res=>{
					this.topData = res.data
				})
			},
			getNewlist(){
				
				this.$u.get('/api/shop_revenue/newOrder').then(res=>{
					this.list = ['您有'+res.data.count+'条新订单']
				})
			},
			getList(){
				this.status = 'loading'
				this.$u.get('/api/shop_revenue/orderData',{
					page:this.page,
					limit:20
				}).then(res=>{
					uni.stopPullDownRefresh();
					this.page++
					if(res.data.length!=0){
						this.status = 'loadmore'
						if(this.orderList.length==0){
							this.orderList = res.data
						}else{
							this.orderList = this.orderList.concat(res.data)
						}
					}else{
						this.status = 'nomore'
					}
					
				})
			}
		},
		onShow() {
			this.getData()
			this.getNewlist()
			this.page = 1
			this.getList()
		},
		onReachBottom() {
			this.getList()
		}
	}
</script>

<style lang="scss">
	.order-item{
		width: 700rpx;
		display: flex;
		flex-direction: column;
		background-color: #fff;
		margin: 8px 15px;
		border-radius: 10px;
		// padding: 0 15px;
		height:500rpx ;
	}
	.item-center{
		// display: flex;
		// flex-direction: row;
		margin-top: 12px;
		color: #666;
		font-size: 14px;
		.item-good{
			display: flex;
			align-items: center;
		}
		image{
			border-radius: 6px;
			height: 60px;
			width: 60px;
		}
		.right{
			flex: 1;
			margin-left: 10px;
		}
	}
	.card {
		width: 690rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
		margin: 0 auto;
		padding: 37rpx 22rpx;
	}
	.card2 {
		padding: 10rpx;
		width: 690rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
		margin: 20rpx auto;
	}
	.bold{
			font-size: 30rpx;
			font-weight: bold;
			letter-spacing: 1rpx;
			color: #333333;
	}
	.tag {
		padding: 10rpx 0;
		display: flex;
		align-items: center;
		flex-direction: column;

		>view:first-child {
			margin-bottom: 20rpx;
			font-size: 24rpx;
			letter-spacing: 0rpx;
			color: #666666;
		}

		>view:last-child {
			font-size: 32rpx;
			font-weight: bold;
			color: #333333;
		}
	}

	.tag.center {
		border: 2rpx solid #eaeaea;
		border-top: 0;
		border-bottom: 0;
	}
</style>
