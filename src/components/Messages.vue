<template>
	<div class="messages">
		<template v-for='(msg, index) in msgList'>
			<div class="message others" :key='index' v-if='msg.userName !== myName'>
				<div class="msg-box">
					<label>{{msg.userName}} : </label>
					<p>{{msg.message}}</p>
				</div>
				<div class="msg-time">
					<span>{{msg.timeStamp}}</span>
				</div>
			</div>
			<div class="message mine" :key='index' v-else>
				<div class="msg-box">
					<p>{{msg.message}}</p>
				</div>
				<div class="msg-time">
					<span>{{msg.timeStamp}}</span>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
export default {
	name: 'messages',
	props: ['msgList'],
	computed: {
		myName () {
			return this.$store.state.userName
		}
	}
}
</script>
