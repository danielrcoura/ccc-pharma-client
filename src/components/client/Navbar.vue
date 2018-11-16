<template>
	<div class="navbar">
		<img src="../../assets/logo.svg" alt="" class="logo">
		<nav>
			<a href=""><button>Login</button></a>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'Navbar'
}
</script>


<style lang="scss" scoped>
.navbar {
	display: flex;
	padding: 1.3rem 2rem;
	justify-content: space-between;
	align-items: center;
	box-shadow: 5px 0 1rem #999;
	margin-bottom: 3rem;
}
nav button {
	padding: .7rem 2rem;
	border: 2px solid #06b1d3;
	background: #fff;
	color: #06b1d3;
	font-size: 1rem;
	border-radius: 5px;
	outline: none;
	cursor: pointer;
}
</style>

