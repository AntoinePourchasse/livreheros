var name;
var race;
var specialite;
var pv=100
var att;
var agi;
var mag;
var narrateur='Brom';


function Nom() 
{
    name = document.getElementById('nom').value;
    setTimeout("document.getElementById("Name").innerHTML = ("Bonjour "+name)",5000);
    document.getElementById('race').style.visibility=(true)?'visible':'hidden';      
}

function race()
{
    race = document.getElementById('Race').value;
    document.getElementById('race2').innerHTML = race;
    document.getElementById('specialite').style.visibility=(true)?'visible':'hidden';
}

function spe()
{
    specialite = document.getElementById('Spe').value;
    document.getElementById('specialite2').innerHTML = specialite;
    recap();
}

function recap()
{
    if(race ==='humain')
    {
        if(specialite==="archer")
        {
            att=40;
            agi=70;
            mag=50;
        }
        else if(specialite==="guerrier")
        {
            att=70;
            agi=50;
            mag=20;
        }
        else
        {
            att=50;
            agi=40;
            mag=65;
        }
    }
    else if(race ==='elfe')
    {
       if(specialite==="archer")
        {
            att=40;
            agi=70;
            mag=50;
        }
        else if(specialite==="guerrier")
        {
            att=50;
            agi=70;
            mag=20;
        }
        else
        {
            att=30;
            agi=60;
            mag=80;
        } 
    }
    else
    {
        if(specialite==="archer")
        {
            att=60;
            agi=40;
            mag=30;
        }
        else if(specialite==="guerrier")
        {
            att=80;
            agi=40;
            mag=10;
        }
        else
        {
            att=40;
            agi=40;
            mag=70;
        }
    }
    //setTimeout(document.getElementById('recap').innerHTML = ("Vous avez choisi un " + specialite +" "+ race),10000);
    /*setTimeout(document.getElementById('PV').innerHTML = ("Vos PV sont de " + pv),10000);
    setTimeout(document.getElementById('ATT').innerHTML = ("Votre attaque est de " +att),10000);
    setTimeout(document.getElementById('MAG').innerHTML = ("Votre magie est de " +mag),10000);
    setTimeout(document.getElementById('AGI').innerHTML = ("Votre agilité est de " +agi),10000);*/
    attente();
    setTimeout("presentation()",5000);  
}

function presentation()
{
    document.getElementById('narrateur').innerHTML = ("Avant de commencer je vais me présenter.<br>"+
        "Je serai votre narrateur, je m'appelle "+narrateur+"<br> Maintenant commençons l'histoire.");
}

function text1()
{
    document.getElementById('text').innerHTML = ("Vous vous trouvez dans une ");
}

function attente()
{
    window.setInterval('...',1000);
}