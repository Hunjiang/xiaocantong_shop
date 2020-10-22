<template>
	<view>
		<view class="card">
			<view>提现金额</view>
			<u-field v-model="money" label="￥" placeholder="请输入提现金额">
			</u-field>
			<view class="now">当前余额为￥{{to_money}}</view>
			<u-field v-model="name" label="支付宝实名认证" placeholder="请输入真实姓名" border-bottom="false" label-width="210">
			</u-field>
			<u-field v-model="account" label="支付宝账号" placeholder="请填写账号" border-bottom="false" label-width="210">
			</u-field>
			<u-button type="primary" ripple style="margin-top: 20rpx;" @click="getCash">提现</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				money:0,
				name:'',
				account:'',
				to_money:''
			}
		},
		methods:{
			getPage(){
				this.$u.get('/api/shop_revenue/withdraw',{
					status:1
				}).then(res=>{
					this.to_money = res.data.money
					
				})
			},
			getCash(){
				if(!Number(this.money)){
					uni.showToast({
						title:'请输入正确的金额',
						icon:'none'
					})
					return
				}
				uni.showModal({
					title:'提示',
					content:'确认提现？',
					success: (res) => {
						if(res.confirm){
							this.$u.get('/api/shop_revenue/withdraw',{
								status:2,
								alipay_name:this.name,
								alipay_account:this.account,
								money:Number(this.money)
							}).then(res=>{
								if(res.code==1){
									uni.showToast({
										title:res.msg,
										icon:'none',
										success: () => {
											setTimeout(()=>{
												uni.navigateBack({
													delta:1
												})
											},1500)
										}
									})
								}
							})
						}
					}
				})
				
			}
		},
		onShow() {
			this.getPage()
		}
	}
</script>

<style lang="scss">
	.card {
		width: 690rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
		margin: 20rpx auto;
		padding: 40rpx 30rpx;
	}
	.now{
			font-size: 26rpx;
			font-weight: normal;
			font-stretch: normal;
			line-height: 30rpx;
			letter-spacing: 1rpx;
			color: #666666;
			margin-top: 20rpx;
	}
</style>
