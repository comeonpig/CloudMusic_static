<template>
	<view class="content">
		<view class="title">推荐歌单</view>
		<view class="recommend">
			<view class="item" v-for="item in list" :key="item.id">
				<image :src="item.picUrl"></image>
				<view>
					{{item.name}}
				</view>
			</view>
		</view>
		<view class="title new-music-title">最新音乐</view>
		<view class="new-music">
			<view class="item" v-for="item in new_list" :key="item.id">
				<view class="left">
					<text class="top">{{item.name}}</text>
					<text class="bottom">{{item.song.artists[0].name}}-{{item.name}}</text>
				</view>
				<image src="@/static/play.png" mode=""></image>
			</view>
			
		</view>
	</view>
</template>
<script>
	import {onLoad} from "@dcloudio/uni-app"
	import { ref } from "vue"
	export default {
		setup(){
			const list =  ref([])
			const new_list = ref([])
			
			onLoad(()=>{
				// console.log("yemianzhixing")
				uni.request({
					url:'http://localhost:3000/personalized/newsong?limit=20',
					success(res){
						new_list.value= res.data.result
					}
				})
				uni.request({
					method:"GET",
					url:'http://localhost:3000/personalized?limit=6',
					success(res){
						// console.log(res.data.result)
						list.value = res.data.result
					}
				})
			})
			return{
				list,
				new_list
			}
		}
	}
</script>
<style lang="scss">
.title{
	background-color: #eeeeee;
	height: 40px;
	line-height: 40px;
	padding-left: 5px;
	margin-bottom: 5px;
}
.recommend{
	display:flex;
	justify-content: space-between;
	flex-wrap: wrap;
	.item{
		width: 32vw;
		image{
			width: 100%;
			height: 32vw;
		}
		view{
			font-size: 12px;
			word-break: break-all;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-box-orient:vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
		}
	}
}

.new-music-title{
	margin-top: 15px;
}
.new-music{
	.item{
		display:flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 10px;
		height: 120rpx;
		border-bottom: 1px solid #ccc;
		.left{
			display: flex;
			flex-direction: column;
			.top{
				font-size: 14px;
			}
			.bottom{
				font-size: 12px;
				color:#ccc;
			}
		}
		image{
			width: 45rpx;
			height: 45rpx;
		}
	}
}
</style>