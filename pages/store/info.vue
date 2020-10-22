<template>
	<view>
		<view class="card">
			<u-field v-model="name" label="店铺名称" placeholder="请填写名称">
			</u-field>
			<u-field v-model="notice" label="店铺公告" placeholder="请填写公告" type="textarea">
			</u-field>
			<view  class="pic">
				<view class="title">店铺照片<text style="font-size:24rpx ;color:#999999;">(第一张为店铺头像，第二张为店铺背景图)</text></view>
				<u-upload ref="upload" max-count="2" :max-size="5 * 1024 * 1024" :action="base+'/api/common/upload'" :file-list="images" :form-data="header"></u-upload>
				<view class="button">
					<u-button type="primary" ripple  @click="submit">保存信息</u-button>
				</view>
				
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				name:null,
				notice:null,
				images:[],
				base:this.$base,
				header:{
					token:uni.getStorageSync('token')
				}
			}
		},
		onLoad() {
			this.$u.get('/api/shop_setting/message').then(res => {
				this.name = res.data.name;
				this.notice = res.data.notice;
				
			})
		},
		methods:{
			submit() {
							let files = [];
							// 通过filter，筛选出上传进度为100的文件(因为某些上传失败的文件，进度值不为100，这个是可选的操作)
							files = this.$refs.upload.lists.filter(val => {
								return val.progress == 100;
							})
							// 如果您不需要进行太多的处理，直接如下即可
							// files = this.$refs.uUpload.lists;
							console.log(files)
							if(files.length!=2){
								uni.showToast({
									title:'请按要求上传完整图片',
									icon:'none'
								})
								return
							}
							this.$u.get('/api/shop_setting/messageEdit',{
								params:{
									name:this.name,
									notice:this.notice,
									logo:files[0].response.data.url,
									shop_image:files[1].response.data.url
								}
							}).then(res=>{
								uni.showToast({
									title:'更新成功',
									success: () => {
										setTimeout(()=>{
											uni.navigateBack()
										},1500)
									}
								})
							})
						}
		}
	}
</script>

<style lang="scss">
	.card{
		background-color: #FFFFFF;
		width: 690rpx;
		border-radius: 10rpx;
		margin: 0 auto;
		margin-top:20rpx ;
	}
	.pic{
		padding: 0 30rpx;
		.title{
			margin: 10rpx 0 ;
		}
		.button{
			padding: 10rpx 0;
			
		}
	}
	
	
</style>
