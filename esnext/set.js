const times = new Set()
times.add('Vasco')
times.add('São paulo')
times.add('Flamengo')
times.add('Palmeiras')
times.add('Gremio')
times.add('Gremio')
const time = 'GreMio'
console.log(times.has(time.slice(0,1).toUpperCase() + time.slice(1,time.length).toLowerCase()))
