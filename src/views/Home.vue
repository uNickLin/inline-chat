<template>
	<main id="home">
		<div class="chat-box-container">
				<div class="chat-box-header">
					<h1>inline Chat</h1>
					<div class="user-info">
						你的名稱：{{userName}}
					</div>
				</div>
				<div class="chat-box-body">
					<p>msgs</p>
				</div>
				<div class="chat-box-footer">
					<textarea name="message" id="msg-input" v-model='msg'></textarea>
					<a class='sent-msg'>sent ⏎</a>
				</div>
		</div>
	</main>
</template>

<script>
export default {
	name: 'home',
	data () {
		return {
			msg: ''
		}
	},
	computed: {
		userName () {
			return this.$store.state.userName
		}
	},
	mounted () {
		if (this.userName === '') {
			this.$router.replace('/')
		}
	}
}
</script>
