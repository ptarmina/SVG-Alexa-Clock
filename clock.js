/**
Digital Clock
*/
class Clock{

	constructor(){
		this.InitClock();
	}

	InitClock(){
		const _this = this;
 		setInterval (() =>  { _this.renderClock() },1000)
	}

	getTime() {
		var time = new Date();

	  return [this.comvertHour(time.getHours()), time.getMinutes(), time.getSeconds()]
	  .map(current => current >= 10 ? current : "0" + current)
	  .join(":");
	}
	comvertHour(m){
		return (m < 12 ? m : m - 12);
	}
	renderClock(){
		let time = this.getTime();
		$('#digitalClock').html(time);
	};

}
var clock = new Clock();

/**
Analog Clock
*/
class AnalogClock extends Clock{
	constructor(){
		super();
		this.drawTicks();
	}

	getTime() {
			var time = new Date();
	    return [time.getHours(), time.getMinutes(), time.getSeconds()]
	}

	renderClock(){
		let time = this.getTime();

		$('#analog_second_hand')[0].setAttribute("transform", "rotate("+time[2]*6+" 110 110)");
		$('#analog_minute_hand')[0].setAttribute("transform", "rotate("+time[1]*6+" 110 110)");
		$('#analog_hour_hand')[0].setAttribute("transform", "rotate("+time[0]*30+" 110 110)");
	};

	drawTicks(){
		let asvg = $('#angularClock');

		for(let i  = 1; i < 13; i++){

			let ang = Math.floor((i * Math.PI / 6)*57.3);
			let shape = document.createElementNS("http://www.w3.org/2000/svg", "circle");

			asvg[0].appendChild(shape);

			shape.setAttribute("cx", "110");
			shape.setAttribute("cy", "20");
			shape.setAttribute("fill", "#ccc");
			shape.setAttribute("r", "2");
			shape.setAttribute("transform", "rotate("+ ang +" 110 110)");
	  }
	}
}
var analog_clock = new AnalogClock();
