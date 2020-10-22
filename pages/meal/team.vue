<template>
	<view>
		<view class="item" v-for="(item, index) in classList" :key="item.id">
			<view class="bottom">
				{{item.name}}
				<u-icon name="edit-pen" :size="40" color="#999999" @click="editClass(item.name,item.id)"></u-icon>
			</view>
		</view>
		<view class="addSite" @tap="showField=true">
			<view class="add">
				<u-icon name="plus" color="#ffffff" class="icon" :size="30"></u-icon>新建分组
			</view>
		</view>
		<u-modal show-cancel-button v-model="showField"  :async-close="true" @confirm="addClass">
			<u-field v-model="newTeam" label="分组名" placeholder="请填写分组名">
			</u-field>
		</u-modal>
		<u-modal show-cancel-button v-model="showChange"  :async-close="true" @confirm="changeClass">
			<u-field v-model="changeTeam" label="分组名" placeholder="请修改分组名">
			</u-field>
		</u-modal>
		<u-action-sheet :list="list" @click="clickEdit" v-model="showAction"></u-action-sheet>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				changeTeam:'',
				delId:null,
				newTeam:'',
				showField:false,
				showAction: false,
				showChange:false,
				list: [{
					text: '编辑'
				}, {
					text: '删除'
				}],
				classList: [
					
				]
			}
		},
		methods:{
			changeClass(){
				this.$u.get('/api/shop_goods/editCat',{
					goods_cat_id:this.delId,
					name:this.changeTeam
				}).then(res=>{
					this.showChange = false
					this.$u.toast('编辑成功')
					
					this.getClass()
				})
			},
			clickEdit(index){
				if(index==0){
					this.showChange = true
				}
				if(index==1){
					this.$u.get('/api/shop_goods/catDel',{
						goods_cat_id:this.delId
					}).then(res=>{
						this.$u.toast('删除成功')
						this.getClass()
					})
				}
			},
			editClass(name,id){
				this.delId = id
				this.changeTeam = name
				this.showAction = true
			},
			addClass(){
				this.$u.get('/api/shop_goods/addCat',{
					name:this.newTeam
				}).then(res=>{
					setTimeout(()=>{
						this.showField = false 
						this.$u.toast('添加成功')
						this.getClass()
					})
				})
			},
			getClass(){
				this.$u.get('/api/shop_goods/goodsCat').then(res=>{
					this.classList = res.data
				})
			}
		},
		onShow() {
			this.getClass()
		}
	}
</script>

<style lang="scss">
	.item {
		background-color: #FFFFFF;
		padding: 40rpx 20rpx;

		.top {
			display: flex;
			font-weight: bold;
			font-size: 34rpx;

			.phone {
				margin-left: 60rpx;
			}

			.tag {
				display: flex;
				font-weight: normal;
				align-items: center;

				text {
					display: block;
					width: 60rpx;
					height: 34rpx;
					line-height: 34rpx;
					color: #ffffff;
					font-size: 20rpx;
					border-radius: 6rpx;
					text-align: center;
					margin-left: 30rpx;
					background-color: rgb(49, 145, 253);
				}

				.red {
					background-color: red
				}
			}
		}

		.bottom {
			display: flex;
			margin-top: 20rpx;
			font-size: 28rpx;
			justify-content: space-between;
			color: #999999;
		}
	}

	.addSite {
		display: flex;
		justify-content: space-around;
		width: 600rpx;
		line-height: 100rpx;
		position: absolute;
		bottom: 30rpx;
		left: 80rpx;
		background-color: red;
		border-radius: 60rpx;
		font-size: 30rpx;

		.add {
			display: flex;
			align-items: center;
			color: #ffffff;

			.icon {
				margin-right: 10rpx;
			}
		}
	}
</style>
