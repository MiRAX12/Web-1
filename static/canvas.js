const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d");

// Ось X
ctx.beginPath()
ctx.moveTo(10, canvas.height / 2)
ctx.lineTo(canvas.width - 10, canvas.height / 2)
ctx.strokeStyle = "rgb(156,192,214)"
ctx.lineWidth = 2
ctx.stroke()

// Ось Y
ctx.beginPath()
ctx.moveTo(canvas.width / 2, 10)
ctx.lineTo(canvas.width / 2, canvas.height - 10)
ctx.strokeStyle = "rgb(156,192,214)"
ctx.lineWidth = 2
ctx.stroke()

for(let i = 10; i <= canvas.width - 10; i+=80){
    // Рисуем засечки
    if (i < canvas.width - 10) {
        ctx.moveTo(i, canvas.height / 2 - 10)
        ctx.lineTo(i, canvas.height / 2 + 10)
        ctx.strokeStyle = "rgb(156,192,214)"
        ctx.lineWidth = 2
        ctx.stroke()
    }
    // Рисуем стрелочку
    if (i === canvas.width - 10) {
        ctx.moveTo(i, canvas.height / 2)
        ctx.lineTo(i-10, canvas.height / 2 - 10)
        ctx.moveTo(i, canvas.height / 2)
        ctx.lineTo(i-10, canvas.height / 2 + 10)
        ctx.strokeStyle = "rgb(156,192,214)"
        ctx.lineWidth = 2
        ctx.stroke()
    }
}

for(let i = canvas.height - 10; i >=10 ; i-=80){
    // Рисуем засечки
    if (i > 10) {
        ctx.moveTo(canvas.width / 2 - 10, i)
        ctx.lineTo(canvas.width / 2 + 10, i)
        ctx.strokeStyle = "rgb(156,192,214)"
        ctx.lineWidth = 2
        ctx.stroke()
    }
    // Рисуем стрелочку
    if (i === 10) {
        ctx.moveTo(canvas.width / 2, i)
        ctx.lineTo(canvas.width / 2 - 10, i + 10)
        ctx.moveTo(canvas.width / 2, i)
        ctx.lineTo(canvas.width / 2 + 10, i + 10)
        ctx.strokeStyle = "rgb(156,192,214)"
        ctx.lineWidth = 2
        ctx.stroke()
    }
}

ctx.fillStyle = "rgb(156,192,214)"
ctx.font = "14px Arial"
ctx.textBaseline = "middle"
// Буквы ось Х
ctx.fillText("-R", 90, 230)
ctx.fillText("-R/2", 170, 230)
ctx.fillText("R/2", 330, 230)
ctx.fillText("R", 410, 230)
ctx.fillText("x", 490, 230)
// Буквы ось Y
ctx.fillText("y", 270, 10)
ctx.fillText("R", 270, 90)
ctx.fillText("R/2", 270, 170)
ctx.fillText("-R/2", 270, 330)
ctx.fillText("-R", 270, 410)
// Квадрат
ctx.fillStyle = "rgb(156,192,214, 30%)"
ctx.fillRect(90, 170, 160, 80)
// Треугольник
ctx.beginPath()
ctx.moveTo(250, 90)
ctx.lineTo(410, 250)
ctx.lineTo(250, 250)
ctx.fill()
// Четверть-окружность
ctx.beginPath()
ctx.arc(250, 250, 80, Math.PI, Math.PI/2, true)
ctx.lineTo(250, 250)
ctx.fill()

















//
//

