var numbrs=[1,2,3,4,5,6,7,8,9]
numbrs[numbrs.length]=10
numbrs[numbrs.length]=11

numbrs.push(12)
numbrs.push(13)
numbrs.push(14)
numbrs.push(15)
numbrs.push(16)
numbrs.push(17)
//numbrs.push(17) inserir dados no larry

numbrs.unshift(-1)
numbrs.unshift(-3)
numbrs.unshift(-4)
numbrs.unshift(-5)
numbrs.unshift(-6)
// numbrs.unshift(-6)   inserindo no valor ano fim

// numbrs.pop() remove elementos no arry no inci
numbrs.pop()
numbrs.pop()
numbrs.pop()
numbrs.pop()

// numbrs.shift() inserindo no fui do arry
numbrs.shift()
numbrs.shift()
numbrs.shift()
numbrs.shift()
numbrs.shift()

numbrs.splice(3,3)
// numbrs.splice(3) remmve os valores desde uma certa posicao

numbrs.splice(3, 0, 3,4,5)
console.log(numbrs);
