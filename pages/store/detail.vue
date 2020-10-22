<template>
	<view>
		<view class="card">
			<u-field v-model="address" label="地址" placeholder="请填写地址">
			</u-field>
			<u-field v-model="phone" label="电话" placeholder="请填写电话">
			</u-field>
			<u-field v-model="time" label="配送时间" placeholder="请选择时间" disbled="true" @click="show=true">
			</u-field>
			<u-field v-model="min_price" label="起送价" placeholder="请填写起送价">
			</u-field>
			<u-field v-model="shipping_free" label="配送费" placeholder="请填写配送费">
			</u-field>
			<view class="pic">
				<view class="title">食品安全档案图</view>
				<u-upload ref="upload"  :file-list="fileList" :max-size="5 * 1024 * 1024" :action="base+'/api/common/upload'" :form-data="header"></u-upload>
				<view class="button">
					<u-button type="primary" ripple @click="submit">保存信息</u-button>
				</view>

			</view>



		</view>
		<u-select v-model="show" mode="mutil-column" :list="list" @confirm="confirm"></u-select>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address:'',
				phone:null,
				show: false,
				min_price: 0,
				shipping_free: 0,
				base:this.$base,
				time: '',
				header:{
					token:uni.getStorageSync('token')
				},
				list: [
					[{
							value: '1',
							label: '7:00'
						},
						{
							value: '2',
							label: '8:00'
						},
						{
							value: '3',
							label: '9:00'
						},
						{
							value: '4',
							label: '10:00'
						},
						{
							value: '5',
							label: '11:00'
						},
						{
							value: '6',
							label: '12:00'
						}
					],
					[{
							value: '7',
							label: '13:00'
						},
						{
							value: '8',
							label: '14:00'
						},
						{
							value: '9',
							label: '15:00'
						},
						{
							value: '10',
							label: '16:00'
						},
						{
							value: '11',
							label: '17:00'
						},
						{
							value: '12',
							label: '18:00'
						},
						{
							value: '13',
							label: '19:00'
						},
						{
							value: '14',
							label: '20:00'
						},
						{
							value: '15',
							label: '21:00'
						},
						{
							value: '16',
							label: '22:00'
						}
					],

				],
				fileList:[]
			}
		},
		methods: {
			submit() {
				let files = [];
				// 通过filter，筛选出上传进度为100的文件(因为某些上传失败的文件，进度值不为100，这个是可选的操作)
				files = this.$refs.upload.lists.filter(val => {
					return val.progress == 100;
				})
				let list = []
				files.forEach((item) => {
					list.push(item.response.data.url)


				})
				list = list.join(',')
				// 如果您不需要进行太多的处理，直接如下即可
				// files = this.$refs.uUpload.lists;
				console.log(files)
				console.log(Number(this.min_price),Number(this.shipping_free))
				if(Number(this.min_price)&&Number(this.shipping_free)){
					this.$u.get('/api/shop_setting/detailsEdit', {
						params: {
							address: this.address,
							phone: this.phone,
							give_time: this.time,
							food_safety_images: list,
							min_price: this.min_price,
							shipping_free: this.shipping_free
						}
					}).then(res => {
						uni.showToast({
							title: '修改成功',
							success: () => {
								setTimeout(() => {
									uni.navigateBack()
								}, 1500)
							}
						})
					})
					
				}else{
					uni.showToast({
						title:'费用价格需为数字',
						icon:'none'
					})
					
				}
				
			},
			confirm(e) {
				console.log(e)
				this.time = e[0].label + ' - ' + e[1].label
			}
		},
		onLoad() {
			this.$u.get('/api/shop_setting/message').then(res => {
				this.address = res.data.address;
				this.phone = res.data.phone;
				this.time = res.data.give_time_text;
				this.min_price = res.data.min_price;
				this.shipping_free = res.data.shipping_free;
			})
		}
	}
</script>

<style lang="scss">
	.card {
		background-color: #FFFFFF;
		width: 690rpx;
		border-radius: 10rpx;
		margin: 0 auto;
		margin-top: 20rpx;
	}

	.pic {
		padding: 0 30rpx;

		.title {
			margin: 10rpx 0;
		}

		.button {
			padding: 10rpx 0;

		}
	}
</style>
