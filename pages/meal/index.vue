<template>
	<view>
		<view>
			<u-tabs :list="list" :is-scroll="false" :current="tagCurrent" @change="change" active-color="#ffe270" inactive-color="#333333"></u-tabs>
		</view>
		<view class="button_left" @click="onPageJump('/pages/meal/team')">
			<u-image src="@/static/images/meal/class.png" width="72rpx" height="54rpx"></u-image>
			<view>分组管理</view>
		</view>
		<view class="button_right" @click="onPageJump('/pages/meal/upload')">
			<u-image src="@/static/images/meal/plus.png" width="68rpx" height="68rpx"></u-image>
			<view>上架菜品</view>
		</view>
		<view class="u-menu-wrap">
			<scroll-view scroll-y scroll-with-animation class="u-tab-view menu-scroll-view" :scroll-top="scrollTop">
				<view v-for="(item,index) in classList" :key="index" class="u-tab-item" :class="[current==index ? 'u-tab-item-active' : '']"
				 :data-current="index" @tap.stop="swichMenu(index)">
					<text class="u-line-2">{{item.name}}</text>
				</view>
			</scroll-view>
			<block v-for="(item,index) in classList" :key="index">
				<scroll-view scroll-y class="right-box" v-if="current==index">
					<view class="page-view">
						<view class="class-item">
							<view class="item-title">
								<text>{{item.name}}</text>
							</view>
							<view class="item-container">
								<view class="thumb-box" v-for="(item1, index1) in item.goods" :key="index1" v-if="showGood(item1.status)">
									<view>
										<u-image  @click="onPageJumpWith('/pages/meal/upload',item1.id)" :src="base+item1.images.split(',')[0]" width="134rpx" height="134rpx" border-radius="10rpx"></u-image>
										<view>
											<view>{{item1.name}}</view>
											<view>￥{{item1.price}}</view>
											<view>已售：{{item1.sales}}</view>
										</view>
									</view>
									<view>
										<view>{{item1.status==1?'上架中':'已下架'}}</view>
										<u-image src="@/static/images/meal/more.png" width="62rpx" height="37rpx" @click="edit(item1.status,item1.id)"></u-image>
									</view>
									
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</block>
		</view>
<u-action-sheet :tips="tips" @click="act" :list="sheetlist" v-model="show"></u-action-sheet>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				status:null,
				goods_id:null,
				
				base:this.$base,
				list: [{
					name: '全部'
				}, {
					name: '已下架'
				}],
				tagCurrent: 0,
				scrollTop: 0, //tab标题的滚动条位置
				current: 0, // 预设当前项的值
				menuHeight: 0, // 左边菜单的高度
				menuItemHeight: 0, // 左边菜单item的高度
				show: false,
				sheetlist: [{
					text: '上架'
				}, {
					text: '置顶'
				}, {
					text: '删除'
				}],
				tips: {
									text: '请继续操作',
									color: '#909399',
									fontSize: 24
								},
				classList:[]
			}
		},
		onShow() {
			this.getClass()
		},
		methods: {
			showGood(status){
				if(this.tagCurrent == 1){
					if(status==1){
						return false
					}
					
					
				}
				return true
			},
			act(index){
				console.log(index)
				var type
				if(index==1){
					type = 3
				}else if (index==2){
					type = 4 
				}else if (this.status == 1 ){
					type = 2
				}else{
					type = 1
				}
				this.$u.get('/api/shop_goods/goodsOperation',{
					goods_id:this.goods_id,
					type
				}).then(res=>{
					this.$u.toast('操作成功')
					this.getClass()
				})
			},
			edit(status,id){
				this.status = status
				this.goods_id = id 
				if(this.status==1){
					this.sheetlist[0].text = '下架'
				}else{
					this.sheetlist[0].text = '上架'
				}
				this.show = true
			},
			getClass(){
				this.$u.get('/api/shop_goods/goodsCat').then(res=>{
					this.classList = res.data
					uni.stopPullDownRefresh()
				})
			},
			onPageJump(url){
				this.$u.route({
								url
							})
			},
			onPageJumpWith(url,id){
				uni.navigateTo({
					url:url+"?id="+id
				})
			},
			change(index) {
				this.tagCurrent = index;
			},
			getImg() {
				return Math.floor(Math.random() * 35);
			},
			// 点击左边的栏目切换
			async swichMenu(index) {
				if (index == this.current) return;
				this.current = index;
				// 如果为0，意味着尚未初始化
				if (this.menuHeight == 0 || this.menuItemHeight == 0) {
					await this.getElRect('menu-scroll-view', 'menuHeight');
					await this.getElRect('u-tab-item', 'menuItemHeight');
				}
				// 将菜单菜单活动item垂直居中
				this.scrollTop = index * this.menuItemHeight + this.menuItemHeight / 2 - this.menuHeight / 2;
			},
			// 获取一个目标元素的高度
			getElRect(elClass, dataVal) {
				new Promise((resolve, reject) => {
					const query = uni.createSelectorQuery().in(this);
					query.select('.' + elClass).fields({
						size: true
					}, res => {
						// 如果节点尚未生成，res值为null，循环调用执行
						if (!res) {
							setTimeout(() => {
								this.getElRect(elClass);
							}, 10);
							return;
						}
						this[dataVal] = res.height;
					}).exec();
				})
			}
		},
		onPullDownRefresh() {
			this.getClass()
		}
	}
</script>

<style lang="scss">
	.button_left {
		z-index: 100;
		position: fixed;
		bottom: 70rpx;
		left: 40rpx;
		font-size: 28rpx;
		letter-spacing: 1rpx;
		color: #333333;
		display: flex;
		flex-direction: column;
		align-items: center;

		u-image {
			margin-bottom: 10rpx;
		}
	}

	.button_right {
		z-index: 100;
		position: fixed;
		bottom: 70rpx;
		right: 40rpx;
		font-size: 28rpx;
		letter-spacing: 1rpx;
		color: #333333;
		display: flex;
		flex-direction: column;
		align-items: center;

		u-image {
			margin-bottom: 10rpx;
		}
	}

	.u-menu-wrap {
		flex: 1;
		display: flex;
		overflow: hidden;
		.u-line-2{
			padding: 0 10rpx;
		}
	}

	.u-tab-view {
		width: 200rpx;
		height: 100%;
	}

	.u-tab-item {
		height: 110rpx;
		background: #f6f6f6;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26rpx;
		color: #444;
		font-weight: 400;
		line-height: 1;
	}

	.u-tab-item-active {
		position: relative;
		color: #000;
		font-size: 30rpx;
		font-weight: 600;
		background: #fff;
	}

	.u-tab-item-active::before {
		content: "";
		position: absolute;
		border-left: 4px solid $u-type-primary;
		height: 32rpx;
		left: 0;
		top: 39rpx;
	}

	.u-tab-view {
		height: 100%;
	}

	.right-box {
		background-color: rgb(250, 250, 250);
	}

	.page-view {
		padding: 16rpx;
	}

	.class-item {
		margin-bottom: 30rpx;
		background-color: #fff;
		padding: 16rpx;
		border-radius: 8rpx;
	}

	.item-title {
		font-size: 26rpx;
		color: $u-main-color;
		font-weight: bold;
	}

	.item-menu-name {
		font-weight: normal;
		font-size: 24rpx;
		color: $u-main-color;
	}

	.item-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		flex-wrap: wrap;
	}

	.thumb-box {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 20rpx;

		>view {


			display: flex;
			align-items: center;

			>view {
				height: 134rpx;
				padding: 10rpx 0;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				margin-left: 24rpx;

				>view:first-child {
					font-size: 28rpx;
					letter-spacing: 1rpx;
					color: #333333;
				}

				>view:nth-child(2) {
					font-size: 22rpx;
					letter-spacing: 1rpx;
					color: #ff0000;
				}

				>view:last-child {
					font-size: 22rpx;
					letter-spacing: 1rpx;
					color: #333333;
				}
			}

		}
	}

	.item-menu-image {
		width: 120rpx;
		height: 120rpx;
	}
</style>
