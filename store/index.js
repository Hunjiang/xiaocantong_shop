import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


//蓝牙设置
import Bluetooth from '@/store/bluetooth/index.js'



const store = new Vuex.Store({
	
	state: {
		sysinfo: uni.getSystemInfoSync(),//系统信息
		printOrderInfo: [], //需要打印的订单
		OrderInfoNum: '', //编号
		
	},
	mutations: {
		// 收集需要打印的新订单
		addprintOrderInfo(state, printList) {
			console.log(printList);
			state.printOrderInfo.push(...printList)
			// console.log(state.printOrderInfo);
			uni.setStorage({
			    key: 'printOrderInfo',
			    data: state.printOrderInfo,
			    success: function () {
			        console.log('success');
					// state.OrderInfoNum = state.printOrderInfo.length
					// console.log(state.OrderInfoNum);
			    }
			});
			
			uni.getStorage({
			    key: 'printOrderInfo',
			    success: function (res) {
			        console.log(res.data);
			    }
			});
		}
	
	},
	modules: {
		Bluetooth
	}
})

export default store
