<template>
	<view>
		<view class="select">
			<view class="time" @click="show=true">{{startTime}}</view>
			<view class="mid">至</view>
			<view class="time" @click="show=true">{{endTime}}</view>
			<u-icon name="search" color="#333333" size="32" @click="getList"></u-icon>
		</view>
		<view class="title">
			<view>订单总数</view>
			<view>收入总额</view>


		</view>
		<view class="title" style="background-color: #FFFFFF;">
			<view>{{count}}</view>
			<view>￥{{sum}}</view>

		</view>
		<view class="card" style="background-color: #f4f4f4;font-weight: bold;">
			<u-row gutter="16">
				<u-col span="4">
					<view>订单编号</view>
				</u-col>
				<u-col span="5">
					<view>订单时间</view>
				</u-col>
				<u-col span="3">
					<view style="text-align: right;">收入金额</view>
				</u-col>
			</u-row>


		</view>
		<view class="card">
			<u-row gutter="16" v-for="item,index of list" class="cardRow">
				<u-col span="4">
					<view style="font-size: 22rpx;">{{item.order_number}}</view>
				</u-col>
				<u-col span="6">
					<view>{{item.delivery_time_text}}</view>
				</u-col>
				<u-col span="2">
					<view>￥{{item.shop_gain_money}}</view>
				</u-col>
			</u-row>


		</view>
		<u-loadmore :status="status"  @loadmore="getList"/>
		<u-calendar v-model="show" mode='range' @change="change" btn-type="info"></u-calendar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				startTime: '',
				endTime: '',
				status:'loadmore',
				list:[],
				count:'',
				sum:''
			}
		},
		methods: {
			change(e) {
				this.startTime = e.startDate
				this.endTime = e.endDate
				console.log(e)
				this.page = 1 
				this.getList()
			},
			getList(){
				this.status = "loading"
				this.$u.get('/api/shop_revenue/dataMore',{
					page:this.page,
					limit:50,
					start_time:this.startTime,
					end_time:this.endTime
				}).then(res=>{
					this.status = "loadmore"
					this.count = res.data.count
					this.sum = res.data.sum
					this.page++
					if(res.data.list.length!=0){
						if(this.list.length!=0){
							this.list = this.list.concat(res.data.list)
						}else{
							this.list = res.data.list 
						}
						
						
						
					}else{
						this.status = "nomore"
					}
				})
			}
		},
		onReachBottom() {
			this.getList()
		}
	}
</script>

<style lang="scss">
	.select {
		width: 750rpx;
		height: 84rpx;
		display: flex;
		align-items: center;
		background-color: #FFFFFF;
		padding-left: 90rpx;

		.time {
			width: 255rpx;
			height: 51rpx;
			background-color: #f0f0f0;
			border-radius: 10rpx;
			font-size: 30rpx;
			line-height: 51rpx;
			text-align: center;
			letter-spacing: 1rpx;
			color: #333333;
			margin: 0 10rpx;
		}
	}

	.title {
		width: 750rpx;
		height: 65rpx;
		padding: 20rpx 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 28rpx;
		font-weight: bold;
		letter-spacing: 1rpx;
		color: #333333;
	}

	.card {
		padding: 0 20rpx;
		background-color: #FFFFFF;
		font-size: 28rpx;
		letter-spacing: 1rpx;
		color: #333333;
	}

	.cardRow {
		padding-bottom: 20rpx;
		border-bottom: 2rpx solid #f4f4f4;
	}
</style>
