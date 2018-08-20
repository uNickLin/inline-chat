<template>
	<main id='entry'>
		<form class='user-name-form'>
			<label>請輸入使用者名稱</label>
			<input type='text' v-model='userName'>
			<button>確認</button>
		</form>
	</main>
</template>

<script>
// @ is an alias to /src
export default {
	name: 'entry',
	data() {
		return {
			userName: ''
		}
	},
}
</script>
