<template>
	<main id='entry'>
		<form class='user-name-form'>
			<label>請輸入使用者名稱</label>
			<input type='text' v-model='userName'>
			<button @click.prevent='saveUserName'>確認</button>
		</form>
	</main>
</template>

<script>
export default {
	name: 'entry',
	data () {
		return {
			userName: ''
		}
	},
	methods: {
		saveUserName () {
			if (this.userName) {
				this.$store.commit('saveUserName', this.userName)
				this.$router.push('/home')
			}
		}
	}
}
</script>
