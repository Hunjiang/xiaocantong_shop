<style>
	page{
		background-color: #fff;
		padding:0 20rpx;
		box-sizing: border-box;
	}
</style>
<style lang="scss" scoped>
	view{
		box-sizing: border-box;
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
		
		}
	}
	.row{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 10rpx;
	}
</style>
<template>
	<view class="content" v-if="JSON.stringify(listDetail)!='{}'">
		<view class="item-center">
			<view class="item-good" v-for="item,index of listDetail.goods">
				<image :src="base+item.goods_image" mode="" :key="index"></image>
				<view class="right">
					<view class="row">
						<text>商品名称：{{item.goods_name}}</text>
					</view>
					<view class="row">
						<text>商品单价：{{item.goods_price}}</text>
					</view>
					<view class="row">
						<text>商品规格：{{item.goods_spec_name}}</text>
					</view>
					<view class="row">
						<text>商品数量：{{item.total_num}}</text>
					</view>
				</view>
			</view>


		</view>
		<view class="item-center">
			<view class="right">
				<view class="row">
					<text>{{listDetail.goods_name}}</text>
				</view>
				<view class="row">
					<text>收货人名称：</text><text>{{useraddress.name}}</text>
				</view>
				<view class="row">
					<text>收货人电话：</text><text>{{useraddress.phone}}</text>
				</view>
				<view class="row">
					<text>收货人地址：</text><text>{{useraddress.campus_name}} {{useraddress.address}}</text>
				</view>
				<view class="row">
					<text>下单时间：</text><text>{{listDetail.create_time_text}}</text>
				</view>
				<view class="row">
					<text>支付时间：</text><text>{{listDetail.pay_time_text}}</text>
				</view>
				<view class="row">
					<text>约定派送时间：</text><text>{{listDetail.user_delivery_time}}</text>
				</view>
				<view class="row">
					<text>骑手接单时间：</text><text>{{listDetail.rider_take_time_text}}</text>
				</view>
				<view class="row">
					<text>实际送达时间：</text><text>{{listDetail.delivery_time_text}}</text>
				</view>

				<view class="row">
					<text>总价：</text><text>￥{{listDetail.goods_price}}</text>
				</view>
			</view>
		</view>
		<view style="width:100%;text-align: right;">
			<u-button type="primary" size="mini" @click="print()">打印订单</u-button>
		</view>

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
				id:0,
				isPrinting: false,
				isSearching: false, //是否正在搜索中
				list: [],
				services: [],
				serviceId: 0,
				writeCharacter: false,
				readCharacter: false,
				notifyCharacter: false,
				sendContent: "",
				looptime: 0,
				currentTime: 1,
				lastData: 0,
				oneTimeData: 0,
				returnResult: "",
				canvasWidth: 180,
				canvasHeight: 180,
				imageSrc: '../../static/img/abc_ic_star_black_16dp.png',
				buffSize: [],
				buffIndex: 0,
				printNum: [],
				printNumIndex: 0,
				printerNum: 1,
				currentPrint: 1,
				isReceiptSend: false,
				isLabelSend: false,
				order: '',
				title: null,
				is1: false,
				is2: false,
				isPrinting: false,
				connectedDeviceid: null,
				
				listDetail: {},
				useraddress: {},
				base:this.$base,
			};
		},
		computed: mapState(['sysinfo', 'Bluetooth']),
		onLoad(e) {
			this.id=e.id
			this.$u.get(
				'/api/shop_revenue/orderDetails', {
					order_id: e.id
				}
			).then(res => {
				console.log(res)
				this.listDetail = res.data

				this.useraddress = res.data.user_address[0]
			})
			

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
			print() {
				
				uni.getBluetoothAdapterState({
					success: (res) => {
						console.log(res)
						uni.showModal({
							title: '确定打印？',
							success: (res) => {
								if (res.confirm) {
									
									this.getConnect()
								} else {
						
								}
							}
						});
					},
					fail: (err) => {
						console.log(err)
					}
				}) 
			},
			cancelPrint() {
				console.log('取消定时打印')
				clearInterval(timer)
			},
			onBlueStateChange() {
				uni.onBLEConnectionStateChange((res) => {
					console.log('蓝牙连接状态', res)
				})
			},
			switchSearch(e) {
				uni.hideLoading()
				if (e) {
					this.startSearch()
				} else {
					this.stopSearch()
				}

			},
			getOrder() {
				this.$u.get('/api/shop_order/manualPrint',{
					order_id: this.id
				}).then(res => {
					if (res.data) {

						this.order = res.data
						uni.showToast({
							title: '获取订单数据成功',
							icon: 'success',
							success: () => {
								this.receiptTest()
							}
						})
					}
				})
			},
			//错误码提示
			errorCodeTip(code) {
				if (code == 0) {
					//正常
				} else if (code == 10000) {
					uni.showToast({
						title: '未初始化蓝牙适配器',
						icon: 'none'
					})
				} else if (code == 10001) {
					uni.showToast({
						title: '当前蓝牙适配器不可用',
						icon: 'none'
					})
				} else if (code == 10002) {
					uni.showToast({
						title: '没有找到指定设备',
						icon: 'none'
					})
				} else if (code == 10003) {
					uni.showToast({
						title: '连接失败',
						icon: 'none'
					})
				} else if (code == 10004) {
					uni.showToast({
						title: '没有找到指定服务',
						icon: 'none'
					})
				} else if (code == 10005) {
					uni.showToast({
						title: '没有找到指定特征值',
						icon: 'none'
					})
				} else if (code == 10006) {
					uni.showToast({
						title: '当前连接已断开',
						icon: 'none'
					})
				} else if (code == 10007) {
					uni.showToast({
						title: '当前特征值不支持此操作',
						icon: 'none'
					})
				} else if (code == 10008) {
					uni.showToast({
						title: '其余所有系统上报的异常',
						icon: 'none'
					})
				} else if (code == 10009) {
					uni.showToast({
						title: 'Android 系统特有，系统版本低于 4.3 不支持 BLE',
						icon: 'none'
					})
				}
			},
			//开始搜索蓝牙
			startSearch() {
				let that = this
				uni.openBluetoothAdapter({
					success(res) {
						uni.getBluetoothAdapterState({
							success(res2) {
								console.log('获取本机蓝牙适配器状态：', res2)
								if (res2.available) {
									that.isSearching = true;
									if (res2.discovering) {
										uni.showToast({
											title: '正在搜索附近打印机设备',
											icon: "none"
										})
										return;
									}

									//获取蓝牙设备信息
									that.getBluetoothDevices()

									// that.checkPemission()
								} else {
									uni.showModal({
										title: '提示',
										content: '本机蓝牙不可用',
									})
								}
							}
						});
					},
					fail() {
						uni.showModal({
							title: '提示',
							content: '蓝牙初始化失败，请打开蓝牙',
						})
					}
				})
			},
			stopSearch() {
				uni.stopBluetoothDevicesDiscovery({
					success: (res) => {
						
						console.log('停止搜索蓝牙设备：成功', res)
					},
					fail: (e) => {
						console.log('停止搜索蓝牙设备：失败', e)
						this.errorCodeTip(e.errCode);
					}
				})
			},
			//校验权限
			checkPemission() {
				let that = this
				let {
					BLEInformation
				} = that.Bluetooth;
				let platform = BLEInformation.platform;
				that.getBluetoothDevices();
			},
			//获取蓝牙设备信息
			getBluetoothDevices() {
				let that = this
				that.list = [];
				uni.startBluetoothDevicesDiscovery({
					success(res) {
						// console.log(res)
						//蓝牙设备监听 uni.onBluetoothDeviceFound
						plus.bluetooth.onBluetoothDeviceFound((result) => {
							console.log('监听寻找到新设备的事件：', result)
							let arr = that.list;
							let devices = [];
							let list = result.devices;
							for (let i = 0; i < list.length; ++i) {
								if (list[i].name && list[i].name != "未知设备") {
									let arrNew = arr.filter((item) => {
										return item.deviceId == list[i].deviceId;
									});
									// console.log('arrNew:',arrNew.length)
									if (arrNew.length == 0) {
										devices.push(list[i]);
									}
								}
							}

							that.list = arr.concat(devices);
						});
						that.time = setTimeout(() => {
							// uni.getBluetoothDevices
							plus.bluetooth.getBluetoothDevices({
								success(res2) {
									let devices = [];
									let list = res2.devices;
									for (let i = 0; i < list.length; ++i) {
										if (list[i].name && list[i].name != "未知设备") {
											devices.push(list[i]);
										}
									}

									that.list = devices;
									console.log('获取在蓝牙模块生效期间所有已发现的蓝牙设备：', res2);
								},
								complete() {
									
								}
							})

							clearTimeout(that.time);
						}, 3000);
					}
				});

			},
			//绑定蓝牙
			bindViewTap(e) {
				let that = this;
				let {
					title
				} = e.currentTarget.dataset;
				let {
					BLEInformation
				} = that.Bluetooth;
				this.stopSearch();

				that.serviceId = 0;
				that.writeCharacter = false;
				that.readCharacter = false;
				that.notifyCharacter = false;
				uni.showLoading({
					title: '正在连接',
				})
				console.log('deviceId:', title)
				// uni.createBLEConnection
				plus.bluetooth.createBLEConnection({
					deviceId: title,
					success(res) {
						console.log('连接低功耗蓝牙设备：成功', res)
						BLEInformation.deviceId = title;
						that.$store.commit('BLEInformationSet', BLEInformation);
						uni.hideLoading()
						that.getSeviceId()
					},
					fail(e) {
						console.log('连接低功耗蓝牙设备：失败', e)
						this.title = null
						that.errorCodeTip(e.errCode);
						uni.hideLoading()
					}
				})
			},
			//获取蓝牙设备所有服务(service)。
			getSeviceId() {
				let that = this;
				let {
					BLEInformation
				} = that.Bluetooth;
				console.log('BLEInformation.deviceId:', BLEInformation.deviceId)
				// uni.getBLEDeviceServices
				let t = setTimeout(() => {
					plus.bluetooth.getBLEDeviceServices({
						deviceId: BLEInformation.deviceId,
						success(res) {
							console.log('获取蓝牙设备所有服务：成功', res)
							that.services = res.services;
							that.getCharacteristics()
						},
						fail: function(e) {
							that.errorCodeTip(e.code);
							console.log('获取蓝牙设备所有服务：失败', e)
						}
					})
					clearTimeout(t);
				}, 1500)
			},
			getCharacteristics() {
				var that = this
				let {
					services: list,
					serviceId: num,
					writeCharacter: write,
					readCharacter: read,
					notifyCharacter: notify
				} = that;
				let {
					BLEInformation
				} = that.Bluetooth;
				// uni.getBLEDeviceCharacteristics
				plus.bluetooth.getBLEDeviceCharacteristics({
					deviceId: BLEInformation.deviceId,
					serviceId: list[num].uuid,
					success(res) {
						console.log("获取蓝牙设备某个服务中所有特征值：成功", res);
						for (var i = 0; i < res.characteristics.length; ++i) {
							var properties = res.characteristics[i].properties
							var item = res.characteristics[i].uuid
							if (!notify) {
								if (properties.notify) {
									BLEInformation.notifyCharaterId = item;
									BLEInformation.notifyServiceId = list[num].uuid;
									that.$store.commit('BLEInformationSet', BLEInformation);
									notify = true
								}
							}
							if (!write) {
								if (properties.write) {
									BLEInformation.writeCharaterId = item;
									BLEInformation.writeServiceId = list[num].uuid;
									that.$store.commit('BLEInformationSet', BLEInformation);
									write = true
								}
							}
							if (!read) {
								if (properties.read) {
									BLEInformation.readCharaterId = item;
									BLEInformation.readServiceId = list[num].uuid;
									that.$store.commit('BLEInformationSet', BLEInformation);
									read = true
								}
							}
						}
						if (!write || !notify || !read) {
							num++
							that.writeCharacter = write;
							that.readCharacter = read;
							that.notifyCharacter = notify;
							that.serviceId = num;
							if (num == list.length) {
								uni.showModal({
									title: '提示',
									content: '找不到该读写的特征值',
								})
							} else {
								that.getCharacteristics()
							}
						} else {

							that.openControl()
						}
					},
					fail: function(e) {
						console.log("获取蓝牙设备某个服务中所有特征值：失败", e);
						that.errorCodeTip(e.errCode);
					}
				})
			},
			openControl: function() {
				uni.showToast({
					title: '打印机连接成功',
					icon: 'success'
				})
			},
			//票据测试
			receiptTest() {
				var that = this;
				var canvasWidth = that.canvasWidth
				var canvasHeight = that.canvasHeight
				var command = esc.jpPrinter.createNew()
				var order = this.order
				console.log('本次打印的订单数据',order.shop[0].name + " " + order.shop[0].campus_name)
				command.init()
				// 标题
				command.bold(1); //加粗
				command.setFontSize(16); //字体大小
				command.setSelectJustification(1) //居中
				command.rowSpace(80);
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
		}
	}
</script>

<style lang="less">
	.btn {
		margin-top: 50rpx;
		height: 40px;
		width: 600rpx;
		line-height: 40px;
	}

	.item {
		display: block;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 14px;
		margin: 0 30px;
		margin-top: 10px;
		background-color: #FFA850;
		border-radius: 5px;
		border-bottom: 2px solid #68BAEA;
	}

	.block {
		display: block;
		color: #ffffff;
		padding: 5px;
	}
</style>
