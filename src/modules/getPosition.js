const getPosition = (cb)=>{
	
	//定位....
	let timer = null
	timer = setTimeout(()=>{
		let city = '北京'
	
		cb(city)
	},1000)
	clearTimeout(timer)
}

export default getPosition