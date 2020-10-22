<template>
	<view>
		<view  class="form">
					<u-field v-model="name" label="菜品名称" label-width="134" placeholder="请填写菜品名称"/>
					<u-field v-model="catName"    label-width="134"label="菜品分组" disabled @click="show=true"  placeholder="请选择菜品分组"/>
					<u-field v-model="depict"   label-width="134"label="菜品描述"  placeholder="请填写菜品描述"/>
					<u-field v-model="ingredient"  label-width="134"label="菜品主料"  placeholder="请填写菜品主料"/>
					<u-field v-model="specName"  label-width="134"label="菜品规格"  placeholder="请添加菜品规格" :clearable="false"  right-icon="plus" @right-icon-click="addSpec"/>
					<view style="margin: 10rpx;display: inline-block;" v-for="item,index in spec"><u-tag  closeable @close="tagClick(index)"  :text="item" type="error" /></view>
					
					<u-field v-model="taste"   label-width="134"label="菜品口味"  placeholder="请填写菜品口味"/>
					<u-field v-model="note"  label-width="134"label="菜品备注"  placeholder="请填写菜品备注"/>
				
				
			
		</view>
		<view class="form">
				<u-field v-model="line_price"   label-width="134"label="原价"  placeholder="请填写菜品原价"/>
				<u-field v-model="price"   label-width="134"label="促销价"  placeholder="请填写菜品促销价(维持原价请填0)"/>
		</view>
		<view class="form">
			<view>菜品图</view>
			<u-upload ref="upload" :action="action" :file-list="fileList"></u-upload>
		</view>
		<view class="button" v-if="!goods_id">
			<u-button type="primary" ripple style="color: #000000;" @click="addMeal">上架菜品</u-button>
		</view>
		<view class="button" v-else>
			<u-button type="primary" ripple style="color: #000000;" @click="EditMeal">编辑菜品</u-button>
		</view>
		<u-select v-model="show" mode="single-column" :list="classList" @confirm="confirm"></u-select>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				specName:'',
				show:false,
				classList:[],
				name:'',
				catName:'',
				goods_cat_id:null,
				depict:'',
				ingredient:'',
				taste:'',
				note:'',
				action: this.$base + '/api/common/upload',
				fileList: [],
				spec:[],
				price:null,
				line_price:null,
				goods_id:null,
				base:this.$base
			}
		},
		methods:{
			tagClick(index){
				this.spec.splice(index,1)
			},
			addSpec(){
				if(this.specName.length>0){
					this.spec.push(this.specName)
					this.specName = ''
				}else{
					uni.showToast({
						title:'规格不能为空！',
						icon:'none'
					})
				}
				
			},
			getClass(){
				this.$u.get('/api/shop_goods/goodsCat').then(res=>{
					this.classList = []
					res.data.forEach((item,index)=>{
						this.classList.push({
							value:item.id,
							label:item.name
						})
					})
				})
			},
			EditMeal(){
				if(this.spec.length==0){
					uni.showToast({
						title:'至少添加一种规格（如:默认）',
						icon:'none'
					})
					return
				}
				let files = [];
				// 通过filter，筛选出上传进度为100的文件(因为某些上传失败的文件，进度值不为100，这个是可选的操作)
				files = this.$refs.upload.lists.filter(val => {
					return val.progress == 100;
				})
				console.log('files',files)
				let list = []
				files.forEach((item) => {
					if(item.response){
						list.push(item.response.data.url)
					}else{
						list.push(item.url.substring(this.base.length,item.url.length))
					}
					
				
				
				})
				list = list.join(',')
				this.$u.get('/api/shop_goods/editGoods',{
					goods_id:this.goods_id,
					status:2,
					params:{
						name: this.name,
						goods_cat_id: this.goods_cat_id,
						depict: this.depict,
						ingredient: this.ingredient,
						taste: this.taste,
						note: this.note,
						price: this.price,
						line_price: this.line_price,
						images:list
					},
					spec:{spec:this.spec||null}
				}).then(res=>{
					uni.showToast({
						title:'编辑成功',
						icon:'success',
						mask:true,
						success: () => {
							setTimeout(()=>{
								uni.navigateBack({
									delta:1
								})
							},1500)
						}
					})
				})
			},
			addMeal(){
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
				if(!this.goods_cat_id){
					uni.showToast({
						title:'请先选择菜品分组',
						icon:'none'
					})
					return
				}
				if(this.spec.length==0){
					uni.showToast({
						title:'至少添加一种规格（如:默认）',
						icon:'none'
					})
					return
				}
					this.$u.get('/api/shop_goods/addGoods', {
						params: {
							name: this.name,
							goods_cat_id: this.goods_cat_id,
							depict: this.depict,
							ingredient: this.ingredient,
							taste: this.taste,
							note: this.note,
							price: this.price,
							line_price: this.line_price,
							images:list
							
						},
						spec:{spec:this.spec||null}
					}).then(res => {
						console.log('上传的res',res)
						uni.showToast({
							title: '添加成功',
							success: () => {
								setTimeout(() => {
									uni.navigateBack()
								}, 1500)
							}
						})
					})
				
				
			},
			confirm(e){
				console.log(e)
				this.catName = e[0].label
				this.goods_cat_id = e[0].value
			}
		},
		onLoad(option) {
			this.getClass()
			if(option.id){
				this.goods_id = option.id 
				this.$u.get('/api/shop_goods/editGoods',{
					status:1,
					goods_id:this.goods_id
				}).then(res=>{
					this.name = res.data.name;
					this.goods_cat_id = res.data.goods_cat_id;
					setTimeout(()=>{
						this.classList.forEach((item,index)=>{
							if(item.value == this.goods_cat_id){
								console.log(1111)
								this.catName = item.label
							}
						})
					},500)
					this.depict = res.data.depict;
					this.ingredient = res.data.ingredient;
					this.taste = res.data.taste;
					this.note = res.data.note;
					this.price = res.data.price;
					this.line_price = res.data.line_price;
					this.images = res.data.images;
					this.spec = res.data.goods_spec.map(item=>item.name);
					if(res.data.images.length>0){
						res.data.images.split(',').forEach(item =>{
							this.fileList.push({
								url:this.base + item
							})
						})
					}
					
				})
			}
		}
	}
</script>

<style lang="scss">
	.form{
		background-color: #FFFFFF;
		margin: 0 auto;
		width: 690rpx;
		padding: 30rpx;
		border-radius: 10rpx;
		margin-top: 20rpx;
	}
	.button{
		margin-top: 20rpx;
		width: 690rpx;
		margin: 0 auto;
	}
	
</style>
