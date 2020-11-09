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
						<view class="bold">备注:</view>
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
							<u-button type="primary" size="mini" @click="manualPrint(item.id)">手动打单</u-button>
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
				// content: '东临碣石，以观沧海',
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
				
				id: 0,
				// services: [],
				// serviceId: 0,
				// writeCharacter: false,
				// readCharacter: false,
				// notifyCharacter: false,
				// sendContent: "",
				looptime: 0,
				currentTime: 1,
				lastData: 0,
				oneTimeData: 0,
				// returnResult: "",
				canvasWidth: 180,
				canvasHeight: 180,
				// imageSrc: '../../static/img/abc_ic_star_black_16dp.png',
				buffSize: [],
				buffIndex: 0,
				printNum: [],
				printNumIndex: 0,
				printerNum: 1,
				currentPrint: 1,
				isReceiptSend: false,
				isLabelSend: false,
				order: '',
				// title: null,
				// is1: false,
				// is2: false,
				// isPrinting: false,
				connectedDeviceid: null,
				
				// listDetail: {},
				// useraddress: {},
				// base:this.$base,
				
				
				
			}

		},
		computed: mapState(['sysinfo', 'Bluetooth']),
		onLod() {
			let that = this;
			that.tabsChange(0) //首页加载新订单
			// this.getList(0)
			
			// console.log(this.Bluetooth)
			
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
						console.log(res);
						if (res.devices[0]) {
							this.connectedDeviceid = res.devices[0].deviceId
							this.$forceUpdate()
							this.getOrder()
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
			getOrder() {
				this.$u.get('/api/shop_order/manualPrint',{
					order_id: this.id
				}).then(res => {
					console.log(res);
					if (res.data) {
				
						this.order = res.data
						uni.showToast({
							title: '获取数据成功',
							icon: 'success',
							success: () => {
								this.receiptTest()
							}
						})
					}
				})
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
									this.id = id
									this.getConnect()
									// console.log(this.id);
								} else {
									uni.showToast({
										title: '蓝牙已断开',
										
										mask: true
									})
						
								}
							}
						});
					},
					fail: (err) => {
						uni.showToast({
							title: '蓝牙已断开',
							icon: 'none'
							// mask: true
						})
						console.log(err)
					}
				}) 
				
								
				
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
								this.$u.get('/api/shop_order/takeOrder', {
									order_id: id,
									is_shop: 1
								}).then(res => {
									if (res.code == 1) {
										uni.showToast({
											title: '商家自送接单成功',
											icon: 'success',
											mask: true
										})
							let printList = this.orderList[0].filter(item => item.id == id)
							this.$store.commit('addprintOrderInfo', printList)
							this.orderList[0].splice(index, 1)
							this.$forceUpdate()
								}
							})
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
				this.getList(index)
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
			// 获取订单列表
			getList(status) {
				this.$u.get('/api/shop_order/index', {
					cat_id: status + 1
				}).then(res => {
					// console.log(res.data)
					this.orderList[status] = res.data
					console.log(this.orderList[status])
						this.$forceUpdate()
					if (res.data.length == 0) {
						this.loadStatus[status] = "nomore"
					}
				
				})
			},
			getTotalnum(goods) {
				const totalNum = goods.reduce((total, item) => {
					return total + item.total_num
				}, 0)
				// console.log('num', totalNum)
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
			},
			receiptTest() {
				console.log('1111');
				var that = this;
				var canvasWidth = that.canvasWidth
				var canvasHeight = that.canvasHeight
				var command = esc.jpPrinter.createNew()
				var order = this.order
				console.log('本次打印的订单数据',order.shop[0].name + " " + order.shop[0].campus_name)
				command.init()
				// 编号
				command.bold(1); //加粗
				command.setFontSize(16); //字体大小
				command.setSelectJustification(1) //居中
				command.rowSpace(80); //打印空白
				command.setText('#' + order.print_number);
				
				console.log(order.print_number);
				command.setPrint(); //打印
				command.rowSpace(60);
				
				// 标题
				// command.bold(1);//加粗
				command.setFontSize(16); //字体大小
				// command.setSelectJustification(1)//居中
				// command.rowSpace(80);
				command.setText(order.shop[0].name + " " + order.shop[0].campus_name);
				command.setPrint();
				command.rowSpace(60);
				
				command.bold(0); //取消加粗
				command.setFontSize(0); //正常字体
				//时间
				command.setSelectJustification(0); //居左
				command.setText("支付时间：" + order.pay_time_text);
				command.setPrint();
				//编号
				command.setSelectJustification(0); //居左
				command.setText("订单号：" + order.order_number);
				command.setPrintAndFeed(80); //打印并走纸feed个单位
				//列表
				command.rowSpace(80); //间距
				command.bold(5); //加粗
				command.setText("商品");
				command.setAbsolutePrintPosition(130);
				command.setText("规格");
				command.setAbsolutePrintPosition(240);
				command.setText("数量");
				command.setAbsolutePrintPosition(300);
				command.setText("单价");
				command.setPrint()
				command.bold(0); //加粗
				// -------1
				order.goods.forEach((item) => {
					command.setText(item.goods_name);
					command.setAbsolutePrintPosition(130);
					command.setText(item.goods_spec_name);
					command.setAbsolutePrintPosition(240);
					command.setText(item.total_num);
					command.setAbsolutePrintPosition(300);
					command.setText(item.goods_price);
					command.setPrint()
				})
			
			
			
				//合计
				command.bold(5); //加粗
				command.setText("总数：" + order.goods_num);
				command.setAbsolutePrintPosition(180);
				command.setText("合计：￥" + order.pay_price);
				command.setPrint();
			
				//提示
				command.rowSpace(40); //间距
				command.bold(2); //加粗
				command.setSelectJustification(0); //居左
				command.setText("客户姓名：" + order.user_address[0].name);
				command.setPrint();
				command.setText("客户电话：" + order.user_address[0].phone);
				command.setPrint();
				command.setText("收货地址：" + order.user_address[0].campus_name + " " + order.user_address[0].address);
				command.setPrint();
				command.setText("约定送达时间：" + order.user_delivery_time);
				command.setPrint();
				command.setText("(备注：" + order.buyer_remark + ")");
				command.setPrint();
				command.rowSpace(80); //间距
				//电话
			
				command.setSelectJustification(0); //居左
				command.rowSpace(40); //间距
				command.setText("商家电话:" + order.shop[0].phone);
				command.setPrint();
				command.setText("联系地址:" + order.shop[0].address);
				command.setPrint();
			
				command.setPrintAndFeedRow(3);
			
				that.isReceiptSend = true;
				that.prepareSend(command.getData());
			
			
			},
			
			//准备发送，根据每次发送字节数来处理分包数量
			prepareSend(buff) {
				console.log(buff);
				let that = this
				let time = that.oneTimeData
				let looptime = parseInt(buff.length / time);
				let lastData = parseInt(buff.length % time);
				console.log(looptime + "---" + lastData)
				this.looptime = looptime + 1;
				this.lastData = lastData;
				this.currentTime = 1;
				that.Send(buff)
			},
			//分包发送
			Send(buff) {
				let that = this
				let {
					currentTime,
					looptime: loopTime,
					lastData,
					oneTimeData: onTimeData,
					printerNum: printNum,
					currentPrint
				} = that;
				let buf;
				let dataView;
				if (currentTime < loopTime) {
					buf = new ArrayBuffer(onTimeData)
					dataView = new DataView(buf)
					for (var i = 0; i < onTimeData; ++i) {
						dataView.setUint8(i, buff[(currentTime - 1) * onTimeData + i])
					}
				} else {
					buf = new ArrayBuffer(lastData)
					dataView = new DataView(buf)
					for (var i = 0; i < lastData; ++i) {
						dataView.setUint8(i, buff[(currentTime - 1) * onTimeData + i])
					}
				}
				console.log("第" + currentTime + "次发送数据大小为：" + buf.byteLength)
				let {
					BLEInformation
				} = that.Bluetooth;
				plus.bluetooth.writeBLECharacteristicValue({
					deviceId: BLEInformation.deviceId,
					serviceId: BLEInformation.writeServiceId,
					characteristicId: BLEInformation.writeCharaterId,
					value: buf,
					success: (res) => {
						console.log('向低功耗蓝牙设备特征值中写入二进制数据：成功', res)
						console.log('自动打印订单:成功', this.order.id)
						if (currentTime == 5) {
							console.log('this.order.id')
							this.$u.get('/api/shop_order/printNotify', {
								order_id: this.order.id
							}).then(res => {
								console.log('回调成功')
							})
						}
			
					},
					fail: function(e) {
						console.log('向低功耗蓝牙设备特征值中写入二进制数据：失败', e)
					},
					complete: function() {
						currentTime++
						if (currentTime <= loopTime) {
							that.currentTime = currentTime;
							that.Send(buff)
						} else {
							uni.showToast({
								title: '已打印',
							})
							if (currentPrint == printNum) {
								that.looptime = 0;
								that.lastData = 0;
								that.currentTime = 1;
								that.isReceiptSend = false;
								that.isLabelSend = false;
								that.currentPrint = 1;
							} else {
								currentPrint++;
								that.currentPrint = currentPrint;
								that.currentTime = 1;
								that.Send(buff)
							}
						}
					}
				})
			}
		},
		onShow() {
			this.getList(0)
			// this.getList(1)
			// this.getList(2)
			// this.tabsChange(1)
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
		width: 100%;
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
