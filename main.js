
// Crie a variável canvas
var canvas = new fabric.Canvas('myCanvas');
//Defina as posições iniciais das imagens da bola e do buraco.
	ball_y=0;
	ball_x=0;
	hole_y=400;//A posição y do buraco é 400
	hole_x=800;//A posição x do buraco é 800

block_image_width = 5;//definindo a largura do blco para 5px
block_image_height = 5;//definindo a altura do bloco para 5px

function load_img(){
 fabric.Image.fromURL("golf-b.png", function(Img) {
	hole_obj = Img;//Quer dizer que o buraco é igual a imagem "golf-b.png"
	hole_obj.scaleToWidth(50);//A largura do buraco é de 50px
	hole_obj.scaleToHeight(50);//A altura do buraco é de 50px
	hole_obj.set({
		top:hole_y,
		left:hole_x
	});
	canvas.add(hole_obj);//Adicionar o "hole"(buraco)
	});
	new_image();//Está chamando a função "new image"
 }


function new_image()
{
fabric.Image.fromURL("bola.png", function(Img) { //carrega a imagem da bola
ball_obj = Img;//Quer dizer que a bola é igual a imagem "bola.png"
ball_obj.scaleToWidth(50);//A largura da bola é de 50px
ball_obj.scaleToHeight(50);//A altura da bola é igual a 50px
ball_obj.set({
		top:ball_y,
		left:ball_x
	});
	canvas.add(ball_obj);//Adiciona a bola
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;//Lê a tecla pressionada
	console.log(keyPressed);//consola a tecla
	if((ball_x==hole_x)&&(ball_y==hole_y)){//Se (condicional) para indentificar se a bola está em cima do buraco
	canvas.remove(ball_obj);//remove a bola
	document.getElementById("hd3").innerHTML="Você acertou o buraco!!!";//Quando a bola encostar no buraco aparece a mesagem: Você Ganhou!
	document.getElementById("myCanvas").style.borderColor="red";//A cor da borda do myCanvas é vermelho
		}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("cima");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("baixo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("esquerda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("direita");
		}
	}
	
	function up()
	{
		// Programe o movimento da bola para cima.
	}

	function down()
	{
		 // Programe o movimento da bola para baixo.
	}

	function left()
	{
		if(ball_x >5)
		{
			// Programe o movimento da bola para a esquerda.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Programe o movimento da bola para a direita.
		}
	}
	
}

