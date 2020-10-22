<template>
	<view>
		<view class="card card1">
			<text>评分{{grade}}分</text>
			<u-rate count="5" v-model="rate" active-color="#ffc53b" inactive-color="#f0f0f0" disabled="true"></u-rate>



		</view>
		<u-tabs :list="list" :is-scroll="false" :current="current" @change="change" active-color="#ffc53b" bg-color="#f4f4f4"></u-tabs>
		<view class="card card2" v-for="item,index of commentList">
			<view>
				<view>
					<u-image :src="base+item.avatar" width="70rpx" height="70rpx" border-radius="35rpx"></u-image>
					<view>
						<view>{{item.nickname}}</view>
						<u-rate count="5" v-model="item.score" active-color="#ffc53b" inactive-color="#f0f0f0" disabled="true"></u-rate>
					</view>
				</view>
				<view>{{item.create_time_text}}</view>
			</view>
			<view>{{item.content.length>0?item.content:'无'}}</view>
			<view v-if="item.images.length>0">
				<u-image @click="prevImg(itemx,item.images)" v-for="itemx,indexx of item.images"  :key="itemx" :src="itemx" width="105rpx" height="105rpx" border-radius="10rpx"></u-image>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rate: 1,
				list: [{
					name: '好评'
				}, {
					name: '差评'
				}],
				current: 0,
				page:1,
				commentList:[],
				base:this.$base,
				grade:0
			}
		},
		methods: {
			change(index) {
				this.current = index;
				this.page = 1;
				this.commentList = [] ;
				this.getCommentlist()
			},
			prevImg(item,images){
				uni.previewImage({
					current:item,
					urls:images
				})
			},
			getCommentlist(){
				this.$u.get('/api/shop_setting/getEvaluate',{
					score_type:this.current==0?10:20,
					page:this.page,
					limit:10
				}).then(res=>{
					this.page++
					if(res.data.length!=0){
						if(this.commentList.length==0){
							this.commentList = res.data
						}else{
							this.commentList = this.commentList.concat(res.data)
						}
						console.log(this.commentList)
						this.commentList.forEach((item,index)=>{
							if(item.images.length>0){
								let imglist = item.images.split(',')
								imglist = imglist.map(itemx=>{
									return this.$base+itemx
								})
								this.commentList[index].images = imglist
								console.log(imglist)
							}
							
						})
						
					}else{
						uni.showToast({
							title:'没有更多了',
							icon:'none'
						})
					}
				})
			}

		},
		onLoad(option) {
			this.getCommentlist()
			this.grade = option.grade
		},
		onReachBottom(){
			this.getCommentlist()
		}
	}
</script>

<style lang="scss">
	.card {
		width: 690rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
		margin: 0 auto;
		padding: 33rpx 17rpx;
	}

	.card1 {
		margin-top: 20rpx;
		display: flex;
		align-items: center;
		font-size: 32rpx;
		font-weight: bold;
		font-stretch: normal;
		line-height: 35rpx;
		letter-spacing: 0rpx;
		color: #333333;

		text {
			margin-right: 45rpx;
		}


	}

	.card2 {
		>view:first-child {
			display: flex;
			align-items: flex-start;
			justify-content: space-between;

			>view:first-child {
				display: flex;
				align-items: center;

				>view {
					margin-left: 24rpx;
					height: 70rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					font-size: 28rpx;
					font-weight: bold;
					letter-spacing: 0rpx;
					color: #010101;
				}
			}

			>view:last-child {
				font-size: 22rpx;
				letter-spacing: 0rpx;
				color: #808080;
			}
		}

		>view:nth-child(2) {
			margin: 15rpx 0;
			font-size: 24rpx;
			letter-spacing: 0rpx;
			color: #666666;
		}


	}
</style>
