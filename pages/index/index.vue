<template>
	<view class="wrap">
		<view>
			<u-tabs-swiper ref="uTabs" active-color="#ff5c60" inactive-color="#3a3a3a" :list="list" :current="current" @change="tabsChange"
			 :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
		</view>
		<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish"
		 @change="swiperChange">
			<!-- 待接单 -->
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="onreachBottom">
					<view v-for="item,index in orderList[0]" class="listItem" :key="index">
						<view class="colorRed center">待接单</view>
						<view class="bold">#{{item.order_number}}</view>
						<u-line color="#e1e1e1" />
						<view class="time">{{item.pay_time_text}}</view>
						<view class="col-center">
							<view>
								<view class="bold">{{item.user_address[0].name}} {{getPhone(item.user_address[0].phone)}}</view>
								<view class="bold">{{item.user_address[0].campus_name}} {{item.user_address[0].address}}</view>
							</view>
							<u-image @click="makePhone(item.user_address[0].phone)" src="@/static/images/list/phone.png" width="60rpx"
							 height="60rpx"></u-image>
						</view>
						<u-line color="#e1e1e1" margin="20rpx 0" />
						<view class="bold">商品 {{getTotalnum(item.goods)}}件</view>
						<view class="goodsItem" v-for="item1,index1 of item.goods">
							<view>{{item1.goods_name}} {{item1.goods_spec_name}}X{{item1.total_num}}</view>
							<view>￥{{getGoodsprice(item1)}}</view>
						</view>
						<view class="goodsItem">
							<view class="bold">配送费</view>
							<view>￥{{item.shop[0].shipping_free}}</view>
						</view>
						<view class="goodsItem">
							<view>小计</view>
							<view class="colorRed">￥{{Number(item.goods_price)+Number(item.shipping_free)}}</view>
						</view>
						<u-line color="#e1e1e1" margin="20rpx 0" />
						<view class="bold">备注</view>
						<view class="note">{{item.buyer_remark}}</view>
						<view class="buttonList">
							<u-button type="warning" size="mini" @click="refuse(item.id,index)">拒绝订单</u-button>
							<u-button type="primary" size="mini" @click="accept(item.id,index)">接受订单</u-button>
						</view>
					</view>
					<u-loadmore :status="loadStatus[0]" bgColor="#f2f2f2"></u-loadmore>
				</scroll-view>
			</swiper-item>

			<!-- 进行中 -->
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="onreachBottom">
					<view v-for="item,index in orderList[1]" class="listItem" :key="item.id">
						<view class="colorRed center">进行中</view>
						<view class="bold">#{{item.order_number}}</view>
						<u-line color="#e1e1e1" />
						<view class="time">{{item.pay_time_text}}</view>
						<view class="col-center">
							<view>
								<view class="bold">{{item.user_address[0].name}} {{getPhone(item.user_address[0].phone)}}</view>
								<view class="bold">{{item.user_address[0].campus_name}} {{item.user_address[0].address}}</view>
							</view>
							<u-image @click="makePhone(item.user_address[0].phone)" src="@/static/images/list/phone.png" width="60rpx"
							 height="60rpx"></u-image>
						</view>
						<u-line color="#e1e1e1" margin="20rpx 0" />
						<view class="bold">商品 {{getTotalnum(item.goods)}}件</view>
						<view class="goodsItem" v-for="item1,index1 of item.goods">
							<view>{{item1.goods_name}} {{item1.goods_spec_name}}X{{item1.total_num}}</view>
							<view>￥{{getGoodsprice(item1)}}</view>
						</view>
						<view class="goodsItem">
							<view class="bold">配送费</view>
							<view>￥{{item.shop[0].shipping_free}}</view>
						</view>
						<view class="goodsItem">
							<view>小计</view>
							<view class="colorRed">￥{{Number(item.goods_price)+Number(item.shipping_free)}}</view>
						</view>
						<u-line color="#e1e1e1" margin="20rpx 0" />
						<view class="button_right">
							<u-button type="primary" size="mini" @click="manualPrint(665)">手动打单</u-button>
						</view>

						<view class="bold" v-if="item.rider2[0]">{{item.rider2[0].nickname}} {{getPhone(item.rider2[0].phone)}}</view>
						<view class="col-center" v-if="item.rider2[0]">
							<view>
								<view>{{item.take_time_text}}接单，正在路上</view>
							</view>
							<u-image @click="makePhone(item.rider2[0].phone)" src="@/static/images/list/phone.png" width="60rpx" height="60rpx"></u-image>
						</view>
					</view>
					<u-loadmore :status="loadStatus[1]" bgColor="#f2f2f2"></u-loadmore>
				</scroll-view>
			</swiper-item>
			<!-- 配送中 -->
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="onreachBottom">
					<view v-for="item,index in orderList[2]" class="listItem" :key="index">
						<view class="colorRed center">配送中</view>
						<view class="bold">#{{item.order_number}}</view>
						<u-line color="#e1e1e1" />
						<view class="time">{{item.pay_time_text}}</view>
						<view class="col-center">
							<view>
								<view class="bold">{{item.user_address[0].name}} {{getPhone(item.user_address[0].phone)}}</view>
								<view class="bold">{{item.user_address[0].campus_name}} {{item.user_address[0].address}}</view>
							</view>
							<u-image @click="makePhone(item.user_address[0].phone)" src="@/static/images/list/phone.png" width="60rpx"
							 height="60rpx"></u-image>
						</view>
						<u-line color="#e1e1e1" margin="20rpx 0" />
						<view class="bold">商品 {{getTotalnum(item.goods)}}件</view>
						<view class="goodsItem" v-for="item1,index1 of item.goods">
							<view>{{item1.goods_name}} {{item1.goods_spec_name}}X{{item1.total_num}}</view>
							<view>￥{{getGoodsprice(item1)}}</view>
						</view>
						<view class="goodsItem">
							<view class="bold">配送费</view>
							<view>￥{{item.shop[0].shipping_free}}</view>
						</view>
						<view class="goodsItem">
							<view>小计</view>
							<view class="colorRed">￥{{Number(item.goods_price)+Number(item.shipping_free)}}</view>
						</view>
						<u-line color="#e1e1e1" margin="20rpx 0" />
						<view class="bold">{{item.rider2[0].nickname}} {{getPhone(item.rider2[0].phone)}}</view>
						<view class="col-center">
							<view>
								<view>已取货，正在配送</view>
							</view>
							<u-image @click="makePhone(item.rider2[0].phone)" src="@/static/images/list/phone.png" width="60rpx" height="60rpx"></u-image>
						</view>
					</view>
					<u-loadmore :status="loadStatus[2]" bgColor="#f2f2f2"></u-loadmore>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	let timer
	var tsc = require("../../util/ble/tsc.js");
	var esc = require("../../util/ble/esc.js");
	var encode = require("../../util/ble/encoding.js");
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				show: false,
				content: '东临碣石，以观沧海',
				list: [{
					name: '新订单'
				}, {
					name: '进行中'
				}, {
					name: '配送中'
				}],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				loadStatus: ['loadmore', 'loadmore', 'loadmore', 'loadmore'],
				orderList: [],
				printList: '', //需要打印的订单那一单
				
				oneTimeData: 0,
				buffSize: [],
				printNum: [],
				printerNum: 1,
				
			}

		},
		computed: mapState(['sysinfo', 'Bluetooth']),
		onLod() {
			this.getList(0)
			
			// console.log(this.Bluetooth)
			let that = this;
			let {
				BLEInformation
			} = that.Bluetooth;
		},
		onReady() {
			let list = []
			let numList = []
			let j = 0
			for (let i = 20; i < 200; i += 10) {
				list[j] = i;
				j++
			}
			for (let i = 1; i < 10; i++) {
				numList[i - 1] = i
			}
			this.buffSize = list;
			this.oneTimeData = list[0];
			this.printNum = numList;
			this.printerNum = numList[0];
		},
		onShow() {
		
			this.isPrinting = getApp().globalData.timer
		},
		onUnload() {
			let that = this;
			let {
				BLEInformation
			} = that.Bluetooth;
			// this.cancelPrint();
			//停止搜索蓝牙设备
			
		},
		methods: {
			getConnect() {
				uni.getConnectedBluetoothDevices({
					success: (res) => {						
						if (res.devices[0]) {
							this.connectedDeviceid = res.devices[0].deviceId
							this.$forceUpdate()
							this.getOrder(index)
						} else {
							this.connectedDeviceid = null
							uni.showToast({
								title:'还未连接蓝牙打印机',
								icon:'none'
							})
							setTimeout(()=>{
								uni.navigateTo({
									url:'../printer/bleConnect'
								})
							},1500)
							
						}
			
					}
				})
			},
			switchPrint(e) {
				uni.hideLoading()
				if (e) {
					this.autoPrint()
				} else {
					getApp().globalData.timer = false
					this.isPrinting = false
					this.cancelPrint()
				}			
			},
			swiperChange(e) {
				this.getList(e.detail.current)
				this.swiperCurrent = e.detail.current;

			},
			// 手动打单
			manualPrint(id) {
				uni.getBluetoothAdapterState({
					success: (res) => {
						console.log(res)
						uni.showModal({
							title: '确定打印？',
							success: (res) => {
								if (res.confirm) {													
								// uni.getStorage({
								//     key: 'printOrderInfo',
								//     success: function (res) {
								// 		const {data:printOrderInfo} = res
								// 		let index = printOrderInfo.findIndex(item => item.id == id)
								// 		this.getConnect(index)
								} else {
						
								}
							}
						});
					},
					fail: (err) => {
						console.log(err)
					}
				}) 
				
								
				console.log(id);
				uni.getStorage({
				    key: 'printOrderInfo',
				    success: function (res) {
						const {data:printOrderInfo} = res
						let index = printOrderInfo.findIndex(item => item.id == id)
						// 调用打印
						
						
						
						console.log(index);
				    }
				});
			},
			
			refuse(id, index) {
				uni.showModal({
					title: '提示',
					content: '确认拒绝?',
					success: (res) => {
						if (res.confirm) {
							this.$u.get('/api/shop_order/refuseOrder', {
								order_id: id
							}).then(res => {
								if (res.code == 1) {
									uni.showToast({
										title: '拒绝订单成功',
										icon: 'success',
										mask: true
									})
									// console.log('index', index)
									this.orderList[0].splice(index, 1)
									this.$forceUpdate()
								}
							})
						}
					}
				})
			},
			accept(id, index) {
				uni.showModal({
					title: '提示',
					content: '是否商家自送?',
					success: (res) => {
						// console.log(res);
						if (res.confirm) {
							// 	this.$u.get('/api/shop_order/takeOrder', {
							// 		order_id: id,
							// 		is_shop: 1
							// 	}).then(res => {
							// 		if (res.code == 1) {
							// 			uni.showToast({
							// 				title: '商家自送接单成功',
							// 				icon: 'success',
							// 				mask: true
							// 			})
							let printList = this.orderList[0].filter(item => item.id == id)
							this.$store.commit('addprintOrderInfo', printList)
							// this.orderList[0].splice(index, 1)
							this.$forceUpdate()
							// 	}
							// })
						} else if (res.cancel) {
							this.$u.get('/api/shop_order/takeOrder', {
								order_id: id,
								is_shop: 0
							}).then(res => {
								if (res.code == 1) {
									uni.showToast({
										title: '骑手自送接单成功',
										icon: 'success',
										mask: true
									})
									let printList = this.orderList[0].filter(item => item.id == id)
									this.$store.commit('addprintOrderInfo', printList)
									this.orderList[0].splice(index, 1)
									this.$forceUpdate()
								}
							})
						}
					}
				})
			},
			// tabs通知swiper切换
			tabsChange(index) {
				// this.getList(index)
				this.swiperCurrent = index;


			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;

			},
			// scroll-view到底部加载更多
			onreachBottom() {

			},
			makePhone(num) {
				uni.makePhoneCall({
					phoneNumber: num
				})
			},

			getList(status) {
				this.$u.get('/api/shop_order/index', {
					cat_id: status + 1
				}).then(res => {
					console.log(res.data)
					this.orderList[status] = res.data
					// console.log(this.orderList[0])
					if (res.data.length == 0) {
						this.loadStatus[status] = "nomore"
					}
				})
			},
			getTotalnum(goods) {
				const totalNum = goods.reduce((total, item) => {
					return total + item.total_num
				}, 0)
				console.log('num', totalNum)
				return totalNum
			},
			getGoodsprice(item) {
				return item.goods_price * item.total_num
			},
			getPhone(phone) {
				var str = phone
				var pat = /(\d{3})\d*(\d{4})/
				var b = str.replace(pat, '$1****$2');
				return b
			}
		},
		onShow() {
			this.getList(0)
			this.getList(1)
			this.getList(2)
			this.tabsChange(1)
		}
	}
</script>

<style lang="scss">
	.listItem {
		margin-bottom: 20rpx;
		background-color: #FFFFFF;
		padding: 20rpx;

		.colorRed {
			color: #ff2b2b;
		}

		.center {
			text-align: center;
			font-size: 30rpx;
			letter-spacing: 1rpx;
		}

		.bold {
			font-weight: bold;
			font-size: 28rpx;
			letter-spacing: 1rpx;
			color: #333333;
		}

		.time {
			margin-bottom: 25rpx;
			font-size: 24rpx;
			letter-spacing: 1rpx;
			color: #666666;
			text-align: center;
		}

		.col-center {
			padding-right: 50rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.goodsItem {
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 24rpx;
			letter-spacing: 1rpx;

			>view:first-child {
				color: #666666;
			}

			>view:last-child {
				color: #333333;
			}


		}

		.note {
			font-size: 26rpx;
			letter-spacing: 1rpx;
			color: #666666;
		}

		.buttonList {
			display: flex;
			align-items: center;
			justify-content: flex-end;

			button {
				margin-left: 20rpx;
			}
		}
	}

	.swiper-item {
		height: 100%;
	}

	.button_right {
		flex: 1;
		text-align: right;
	}

	.swiper-box {
		flex: 1;
	}

	.wrap {
		display: flex;
		flex-direction: column;
		height: calc(100vh - var(--window-top));
		width: 100%;
	}
</style>
