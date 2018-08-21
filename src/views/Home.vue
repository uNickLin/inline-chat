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
					<messages :msgList='msgList' />
				</div>
				<div class="chat-box-footer">
					<textarea name="message" id="msg-input" v-model='msg' @keypress.enter='sendMsg'></textarea>
					<a class='sent-msg' @click='sendMsg'>sent ⏎</a>
				</div>
		</div>
	</main>
</template>

<script>
import Messages from '../components/Messages'
const msgData = window.firebase.database().ref('/messages/')
export default {
	name: 'home',
	components: {
		Messages
	},
	data () {
		return {
			msg: '',
			msgList: [],
			msgsElement: null
		}
	},
	methods: {
		getTime () {
			const now = new Date()
			const hours = now.getHours()
			const minutes = now.getMinutes()
			const format = hours >= 12 ? '下午' : '上午'
			return `${format} ${hours}:${minutes}`
		},
		sendMsg (e) {
			// const msgs = document.querySelector('.messages')

			if (e.shiftKey) {
				return false
			} else if (this.msg.length <= 1 && this.msg.trim() === '') {
				e.preventDefault()
				return false
			}

			msgData.push({
				userName: this.userName,
				message: this.msg,
				timeStamp: this.getTime()
			})

			this.msg = ''
			e.preventDefault()

			// scroll msgbody to bottom
			setTimeout(() => {
				this.msgs.scrollTop = this.msgs.scrollHeight
			}, 200)
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

		this.msgs = document.querySelector('.messages')
		this.msgs.scrollTop = this.msgs.scrollHeight

		const getData = () => {
			return new Promise((resolve, reject) => {
				resolve(
					msgData.on('value', (logs) => {
						this.msgList = logs.val()
					})
				)
			})
		}

		getData().then(() => {
			// const msgs = document.querySelector('.messages')
			this.msgs.scrollTop = this.msgs.scrollHeight
		})
	},
	watch: {
		msgList (oldVal, newVal) {
			// const msgs = document.querySelector('.messages')
			if (newVal) {
				setTimeout(() => {
					this.msgs.scrollTop = this.msgs.scrollHeight
				}, 200)
			}
		}
	}
}
</script>
