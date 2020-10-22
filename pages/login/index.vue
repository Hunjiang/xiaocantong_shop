<template>
	<view class="content" :style="{height:screenHeight+'px'}">


		<view class="form" v-if="isForm">
			<u-field v-model="account"  label="用户名" icon="phone" placeholder="请输入用户名" :field-style="field"
			 placeholder-style="">
			</u-field>
			<u-field v-model="password"  label="密码" password icon="lock" placeholder="请输入密码" :field-style="field">
			</u-field>
			<view @click="isForm=!isForm">忘记密码</view>
			<view class="button">
				<u-button type="primary" ripple size="default" @click="login">登陆</u-button>
			</view>

		</view>
		<view class="form" style="height: 892rpx;" v-else>
			<u-field v-model="phone"  label="手机号" icon="phone" placeholder="请输入手机号" :field-style="field"
			 placeholder-style="">
				<u-button size="mini" slot="right" type="warning" @click="getCode">{{codeText}}</u-button>
			</u-field>
			<u-verification-code ref="uCode" @change="codeChange"></u-verification-code>
			<u-message-input mode="bottomLine" dot-fill @change="changeVercode"></u-message-input>

			<u-field v-model="password1"  label="新密码" password icon="lock" placeholder="请输入新密码" :field-style="field">
			</u-field>
			<u-field v-model="password2"  label="新密码" password icon="lock" placeholder="请再次输入新密码" :field-style="field">
			</u-field>
			<view @click="isForm=!isForm">返回登陆</view>
			<view class="button">
				<u-button type="primary" ripple size="default" @click="reset">修改密码</u-button>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				field: {
					height: '100rpx',
					fontSize: '32rpx'
				},
				// icon:{
				// 	fontSize:'40rpx'
				// }
				screenHeight: 0,
				codeText: '发送验证码',
				isForm: true,
				account: '',
				password: '',
				password1: '',
				password2: '',
				phone: '',
				verCode:''
			}
		},
		onLoad() {
			console.log(this.$u.sys())
			this.screenHeight = this.$u.sys().screenHeight
		},
		onUnload() {
			getApp().globalData.isLogin = true
		},
		methods: {
			login() {
				this.$u.get('/api/shop_login/login', {
					account: this.account,
					password: this.password
				}).then(res => {
					uni.setStorage({
						key: 'token',
						data: res.data[0].token,
						success: () => {
							this.$u.route({
								type: 'tab',
								url: 'pages/index/index'
							})
						}
					})
				})
			},
			codeChange(text) {
				this.codeText = text;
			},
			changeVercode(e){
				console.log(e)
				this.verCode = e
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					this.$u.get('/api/sms/send',{
						type:'shop',
						mobile:this.phone,
						event:'resetpwd'
					}).then(res=>{
						uni.hideLoading();
						// 通知验证码组件内部开始倒计时
						if(res.code==1){
							this.$refs.uCode.start();
						}
						
					})
				} else {
					this.$u.toast('倒计时结束后再发送');
				}
			},
			reset(){
				if(this.password1 == this.password2){
					this.$u.get('/api/shop_login/forgetpwd',{
						mobile:this.phone,
						code:this.verCode,
						newpassword:this.password2
					}).then(res=>{
						if(res.code==1){
							uni.showToast({
								title:'密码重置成功',
								icon:'success',
								success: () => {
									setTimeout(()=>{
										this.isForm = !this.isForm
									},1500)
								}
							})
						}
					})
				}else{
					uni.showToast({
						title:'两次密码不一致',
						icon:"none"
					})
				}
				
			}
		}
	}
</script>

<style lang="scss">
	.content {
		background-image: url(../../static/images/login/card1.png);
		background-size: 100%;
		background-repeat: no-repeat;
	}

	.form {
		// transition: height 0.5s ease-in-out;
		box-sizing: border-box;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 690rpx;
		height: 607rpx;
		background-image: linear-gradient(#ffffff,
			#ffffff),
			linear-gradient(#b0b0b0,
			#b0b0b0);
		background-blend-mode: normal,
			normal;
		box-shadow: 0rpx 23rpx 90rpx 0rpx rgba(156, 156, 156, 0.3);
		border-radius: 65rpx;
		padding: 77rpx 42rpx;
		transition: all 0.5s ease-in-out;

		u-field:first-child {
			margin-bottom: 60rpx;
		}

		>view:nth-child(3),
		>view:nth-child(6) {
			font-size: 34rpx;
			text-align: right;
			color: #999999;
			margin-top: 18rpx;
			margin-bottom: 53rpx;
		}

		.button {
			margin: 0 auto;
			width: 542rpx;
			height: 86rpx;
		}
	}
</style>
