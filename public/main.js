var socket = io();
var matches = [];

function getIn(){
	$('.yellow.massive.ui.button').transition('fade');
	$('.ui.form').transition('fade up');
}

function reallyGetIn(){
	let code = $('#code').val();
	let matchCoincidence = matches.filter((match) => {
		if(code == match) return true;
		else return false;
	});
	let validation = $('.ui.form').form({
		fields: {
			code: 'empty'
		}
	});

	if($('.ui.form').form('is valid', 'code')){
		if(matchCoincidence != false){
			$('.index').transition('fade');
			$('.tictactoe').transition('fade');
			$('#code').val("");
			socket.emit('join match', code);
		}
		else{
			$('.field').toggleClass('error');
			$('.ui.error.message.not.found').transition('fade');
		}
	}else{
		$('.field').toggleClass('error');
		$('.ui.error.message.not.valid').transition('fade');
	}
}

function newMatch(){
	let generateCode = function(){
		return Math.random().toString(36).substr(7).toUpperCase();
	}

	$('.index').transition('fade');
	$('.new.match').transition('fade');
	$('#codeToSend').val(generateCode());
	socket.emit('new match', $('#codeToSend').val());
}

function shot(enemy){
	$('#00').click((e) => {
		if(e.currentTarget.innerText == ''){
			if(socket.O == true){
				$('#00').append(`<h1 class='ui centered header'>O</h1>`);
				socket.emit('turn', $('#boardTicTacToe').html(), enemy, socket.id);
			}else{
				$('#00').append(`<h1 class='ui centered header'>X</h1>`);
				socket.emit('turn', $('#boardTicTacToe').html(), enemy, socket.id);
			}
		}else return false;
	});
	$('#01').click((e) => {
		if(e.currentTarget.innerText == ''){
			if(socket.O == true){
				$('#01').append(`<h1 class='ui centered header'>O</h1>`);
				socket.emit('turn', $('#boardTicTacToe').html(), enemy, socket.id);
			}else{
				$('#01').append(`<h1 class='ui centered header'>X</h1>`);
				socket.emit('turn', $('#boardTicTacToe').html(), enemy, socket.id);
			}
		}else return false;
	});
	$('#02').click((e) => {
		if(e.currentTarget.innerText == ''){
			if(socket.O == true){
				$('#02').append(`<h1 class='ui centered header'>O</h1>`);
				socket.emit('turn', $('#boardTicTacToe').html(), enemy, socket.id);
			}else{
				$('#02').append(`<h1 class='ui centered header'>X</h1>`);
				socket.emit('turn', $('#boardTicTacToe').html(), enemy, socket.id);
			}
		}else return false;
	});
	$('#10').click((e) => {
		if(e.currentTarget.innerText == ''){
			if(socket.O == true){
				$('#10').append(`<h1 class='ui centered header'>O</h1>`);
				socket.emit('turn', $('#boardTicTacToe').html(), enemy, socket.id);
			}else{
				$('#10').append(`<h1 class='ui centered header'>X</h1>`);
				socket.emit('turn', $('#boardTicTacToe').html(), enemy, socket.id);
			}
		}else return false;
	});
	$('#11').click((e) => {
		if(e.currentTarget.innerText == ''){
			if(socket.O == true){
				$('#11').append(`<h1 class='ui centered header'>O</h1>`);
				socket.emit('turn', $('#boardTicTacToe').html(), enemy, socket.id);
			}else{
				$('#11').append(`<h1 class='ui centered header'>X</h1>`);
				socket.emit('turn', $('#boardTicTacToe').html(), enemy, socket.id);
			}
		}else return false;
	});
	$('#12' ).click((e) => {
		if(e.currentTarget.innerText == ''){
			if(socket.O == true){
				$('#12').append(`<h1 class='ui centered header'>O</h1>`);
				socket.emit('turn', $('#boardTicTacToe').html(), enemy, socket.id);
			}else{
				$('#12').append(`<h1 class='ui centered header'>X</h1>`);
				socket.emit('turn', $('#boardTicTacToe').html(), enemy, socket.id);
			}
		}else return false;
	});
	$('#20').click((e) => {
		if(e.currentTarget.innerText == ''){
			if(socket.O == true){
				$('#20').append(`<h1 class='ui centered header'>O</h1>`);
				socket.emit('turn', $('#boardTicTacToe').html(), enemy, socket.id);
			}else{
				$('#20').append(`<h1 class='ui centered header'>X</h1>`);
				socket.emit('turn', $('#boardTicTacToe').html(), enemy, socket.id);
			}
		}else return false;
	});
	$('#21').click((e) => {
		if(e.currentTarget.innerText == ''){
			if(socket.O == true){
				$('#21').append(`<h1 class='ui centered header'>O</h1>`);
				socket.emit('turn', $('#boardTicTacToe').html(), enemy, socket.id);
			}else{
				$('#21').append(`<h1 class='ui centered header'>X</h1>`);
				socket.emit('turn', $('#boardTicTacToe').html(), enemy, socket.id);
			}
		}else return false;
	});
	$('#22').click((e) => {
		if(e.currentTarget.innerText == ''){
			if(socket.O == true){
				$('#22').append(`<h1 class='ui centered header'>O</h1>`);
				socket.emit('turn', $('#boardTicTacToe').html(), enemy, socket.id);
			}else{
				$('#22').append(`<h1 class='ui centered header'>X</h1>`);
				socket.emit('turn', $('#boardTicTacToe').html(), enemy, socket.id);
			}
		}else return false;
	});	
}

function checkWinner(enemy){
	let ganador = 0;
	
	for (var i = 0; i < 3; i++){
		if($(`#0${i}`)[0].innerText == 'X' && $(`#1${i}`)[0].innerText == 'X' && $(`#2${i}`)[0].innerText == 'X') ganador = 1;
		else if($(`#${i}0`)[0].innerText == 'X' && $(`#${i}1`)[0].innerText == 'X' && $(`#${i}2`)[0].innerText == 'X') ganador = 1;
		else if($(`#00`)[0].innerText == 'X' && $(`#11`)[0].innerText == 'X' && $(`#22`)[0].innerText == 'X') ganador = 1;
		else if($(`#02`)[0].innerText == 'X' && $(`#11`)[0].innerText == 'X' && $(`#20`)[0].innerText == 'X') ganador = 1;
		else if($(`#0${i}`)[0].innerText == 'O' && $(`#1${i}`)[0].innerText == 'O' && $(`#2${i}`)[0].innerText == 'O') ganador = 2;
		else if($(`#${i}0`)[0].innerText == 'O' && $(`#${i}1`)[0].innerText == 'O' && $(`#${i}2`)[0].innerText == 'O') ganador = 2;
		else if($(`#00`)[0].innerText == 'O' && $(`#11`)[0].innerText == 'O' && $(`#22`)[0].innerText == 'O') ganador = 2;
		else if($(`#02`)[0].innerText == 'O' && $(`#11`)[0].innerText == 'O' && $(`#20`)[0].innerText == 'O') ganador = 2;
		else if(($(`#00`)[0].innerText == 'X' || $(`#00`)[0].innerText == 'O')
			&& ($(`#01`)[0].innerText == 'X' || $(`#01`)[0].innerText == 'O')
			&& ($(`#02`)[0].innerText == 'X' || $(`#02`)[0].innerText == 'O')
			&& ($(`#10`)[0].innerText == 'X' || $(`#10`)[0].innerText == 'O')
			&& ($(`#11`)[0].innerText == 'X' || $(`#11`)[0].innerText == 'O')
			&& ($(`#12`)[0].innerText == 'X' || $(`#12`)[0].innerText == 'O')
			&& ($(`#20`)[0].innerText == 'X' || $(`#20`)[0].innerText == 'O')
			&& ($(`#21`)[0].innerText == 'X' || $(`#21`)[0].innerText == 'O')
			&& ($(`#22`)[0].innerText == 'X' || $(`#22`)[0].innerText == 'O')) ganador = 3;
	}

	if(ganador == 1) socket.emit('someone has won', 'X', enemy, $('#boardTicTacToe').html());
	else if(ganador == 2) socket.emit('someone has won', 'O', enemy, $('#boardTicTacToe').html());
	else if(ganador == 3) socket.emit('someone has won', '=', enemy, $('#boardTicTacToe').html());
}

for(var i = 0; i<3; i++){
	for(var j = 0; j<3; j++){
		let div = document.createElement("div");
		$('#boardTicTacToe').append(div);
		div.id = i+''+j;
		div.style.top = j*100+'px';
		div.style.left = i*100+'px';
	}
}

socket.emit('matches');

socket.on('matches', matchesBack => {
	matches = [];
	matchesBack.forEach(matchBack => {
		matches.push(matchBack);
	});
});

socket.on('someone is on room', enemy => {
	
	if($('.new.match').is(':visible')) $('.new.match').transition('fade');

	if($('.tictactoe').is(':visible')){
		$('.ui.active.dimmer').transition('fade');
		socket.O = true;
	}else{
		$('.tictactoe').transition('fade');	
		socket.X = true;
	}

	shot(enemy);
});

socket.on('turn', (html, enemy) => {
	$('#boardTicTacToe').empty();
	$('#boardTicTacToe').append(html);
	$('.ui.active.dimmer').transition('fade');

	shot(enemy);
	checkWinner(enemy);
});

socket.on('wait', () => {
	$('.ui.active.dimmer').transition('fade');
});

socket.on('someone has won', (winner, html) => {
	$('#boardTicTacToe').empty();
	$('#boardTicTacToe').append(html);
	$('.ui.active.dimmer').hide();

	if(winner == '=') alert('Han empadatado');
	else if(socket.X && 'X' == winner) alert('Has ganado');
	else if(socket.O && 'O' == winner) alert('Has ganado');
	else alert('Has perdido');

	setTimeout(() => {
		window.location.replace('/');
	}, 5000);
});
