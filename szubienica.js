function resetowanie()
{
document.getElementById("resecik").setAttribute("onclick", "location.reload()");
}

var zbior_hasel = new Array(40);

zbior_hasel[1] = "Teścik";
zbior_hasel[2] = "korona";
zbior_hasel[3] = "wirus";
zbior_hasel[4] = "dom";
zbior_hasel[5] = "katoski";
zbior_hasel[6] = "Wszędzie dobrze ale w domu najlepiej";
zbior_hasel[7] = "kocham kasię";
zbior_hasel[8] = "mamy fajną kanapę";
zbior_hasel[9] = "jest super";
zbior_hasel[10] = "więc o co Ci chodzi";
zbior_hasel[11] = "gdzie nocują jeże";
zbior_hasel[12] = "co w trawie piszczy";
zbior_hasel[13] = "ala ma kota";
zbior_hasel[14] = "kot ma ale";
zbior_hasel[15] = "samoloty latają bardzo wysoko";
zbior_hasel[16] = "niebo jest niebieskie";
zbior_hasel[17] = "wiem że nic nie wiem";
zbior_hasel[18] = "szczebrzeszyn";
zbior_hasel[19] = "chrabąszcz";
zbior_hasel[20] = "chrząszcz";
zbior_hasel[21] = "pada deszczyk";
zbior_hasel[22] = "koronawirus jest groźny";
zbior_hasel[23] = "kocham polskę";
zbior_hasel[24] = "kocham andrzeja dude";
zbior_hasel[25] = "duda na prezydenta";
zbior_hasel[26] = "co ja robię tu";
zbior_hasel[27] = "lelum polelum";
zbior_hasel[28] = "atomówka";
zbior_hasel[29] = "kaftan bezpieczeństwa";
zbior_hasel[30] = "kosmonauta";
zbior_hasel[31] = "lot nad kukułczym gniazdem";
zbior_hasel[32] = "telenowela";
zbior_hasel[33] = "najlepszy programista";
zbior_hasel[34] = "java script";
zbior_hasel[35] = "nauka języków obcych";
zbior_hasel[36] = "najlepszy samochód to audi";
zbior_hasel[37] = "praca zdalna";
zbior_hasel[38] = "telefon samsung";
zbior_hasel[39] = "zbiór haseł to czterdzieści";
zbior_hasel[40] = "domek na drzwie";

//var nr_hasla = Math.floor(Math.random() * 10) + 1;
var haslo = zbior_hasel[Math.floor(Math.random() * (40 - 1 + 1) ) + 1];
//var haslo = zbior_hasel[Math.floor(Math.random() * 10) + 1];
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;
var ile_skuch = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var haslo1 = "";

for (i=0; i<dlugosc; i++)
{
	if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
	else haslo1 = haslo1 + "-"
}


function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";




function start()
{
	var tresc_diva = "";
	
	for (i=0; i<=34; i++)
	{
		var element = "lit" + i;
		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
		if ((i+1) % 7 ==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
	}
		
	
	document.getElementById("alfabet").innerHTML = tresc_diva;
	
	
	wypisz_haslo();
	resetowanie();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}

function sprawdz(nr)
{
	
	var trafiona = false;
	
	for (i=0; i<dlugosc; i++)
	{
		if (haslo.charAt(i)== litery[nr])
		{
			haslo1 = haslo1.ustawZnak(i, litery[nr]);
			trafiona = true;
		}
	}
	if(trafiona == true)
	{
		yes.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
			wypisz_haslo();
	}
	else
	{
		no.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick",";");
		
		//skucha
		ile_skuch++;
		var obraz= "img/s"+ ile_skuch +".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';
	}
	
	//wygrana
	if(haslo==haslo1)
	{
		document.getElementById("alfabet").innerHTML = "Tak jest! Podano prawidłowe hasło: "+haslo+
		'<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
	}
	
	//przegrana
	if(ile_skuch>=9)
	{
				document.getElementById("alfabet").innerHTML = "Przegrana! Prawidłowe hasło: "+haslo+
		'<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
	}

}

 

