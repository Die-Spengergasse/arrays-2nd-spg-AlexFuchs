const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const output = document.getElementById("output");

function ausgabe(AUSGABE) {
    document.getElementById("output").innerHTML = AUSGABE;
};

function hilfe(HILFETEXT) {
    document.getElementById("hilfe").innerHTML = HILFETEXT;
};

document.getElementById("input").addEventListener("mouseover",hilfelöschen)
document.getElementById("ausgabebereich").addEventListener("mouseover",hilfelöschen)
document.getElementById("samples").addEventListener("mouseover",hilfelöschen)


const button_push = document.getElementById("button_push");
button_push.addEventListener("click", push);
button_push.addEventListener("mouseover", push_hilfe);

const button_indexof = document.getElementById("button_indexof");
button_indexof.addEventListener("click", indexof);
button_indexof.addEventListener("mouseover", indexof_hilfe);

const button_includes = document.getElementById("button_includes");
button_includes.addEventListener("click", includes);
button_includes.addEventListener("mouseover", includes_hilfe);

const button_slice = document.getElementById("button_slice");
button_slice.addEventListener("click", slice);
button_slice.addEventListener("mouseover", slice_hilfe);

const button_splice = document.getElementById("button_splice");
button_splice.addEventListener("click", splice);
button_splice.addEventListener("mouseover", splice_hilfe);

const button_of = document.getElementById("button_of");
button_of.addEventListener("click", of);
button_of.addEventListener("mouseover", of_hilfe);

const button_map = document.getElementById("button_map");
button_map.addEventListener("click", map);
button_map.addEventListener("mouseover", map_hilfe);

const button_filter = document.getElementById("button_filter");
button_filter.addEventListener("click", filter);
button_filter.addEventListener("mouseover", filter_hilfe);

const button_split = document.getElementById("button_split");
button_split.addEventListener("click", split);
button_split.addEventListener("mouseover", split_hilfe);

const button_join = document.getElementById("button_join");
button_join.addEventListener("click", join);
button_join.addEventListener("mouseover", join_hilfe);

const button_some = document.getElementById("button_some");
button_some.addEventListener("click", some);
button_some.addEventListener("mouseover", some_hilfe);

const button_reverse = document.getElementById("button_reverse");
button_reverse.addEventListener("click", reverse);
button_reverse.addEventListener("mouseover", reverse_hilfe);

const button_spread = document.getElementById("button_spread");
button_spread.addEventListener("click", spread);
button_spread.addEventListener("mouseover", spread_hilfe);

const button_reduce = document.getElementById("button_reduce");
button_reduce.addEventListener("click", reduce);
button_reduce.addEventListener("mouseover", reduce_hilfe);

function hilfelöschen(){
    hilfe("");
    console.log("hilfelöschen");
}

function push() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    i1.push(i2);
    e1 = i1;
    console.log(e1);
    ausgabe(e1);
}
function push_hilfe(){
    hilfe("<br/>Push:<br/>Fügt Wert aus Eingabefeld 2 an das Array aus Eingabefeld 1 an")
}

function indexof() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const e1 = i1.indexOf(i2)
    ausgabe(e1);
    console.log(e1);
}
function indexof_hilfe(){
    hilfe("<br/>IndexOf:<br/>Gibt position des in Eingabefeld 2 eingegebnenen string in Array von Eingabefeld 1 an.")
}


function includes() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const e1 = i1.includes(i2)
    ausgabe(e1);
    console.log(e1);
}
function includes_hilfe(){
    hilfe("<br/>Includes:<br/>Gibt an, ob Wert aus Eingabefeld 2 in Array aus Eingabefeld 1 vorhanden ist.")
}

function slice() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const e1 = i1.slice(i2);
    ausgabe(e1);
    console.log(e1);
}
function slice_hilfe(){
    hilfe("<br/>Slice:<br/>Gibt Array aus Einbgabefeld 1 ab der posiotion von Eingabefeld 2 aus.")
}

function splice() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const i3 = eval(input3.value);
    i1.splice(i2,i3, "SPLEIZI1", "SPLEIZI2");
    const e1 = i1
    ausgabe(e1);
    console.log(e1);
}
function splice_hilfe(){
    hilfe("<br/>Splice:<br/>Fügt das Array aus Eingabefeld 1 an position von Eingabefeld 2, 2 Werte ein. Mittels Eingabefeld 3 können noch werte an dieser Position entfernt werden.")
}

function of() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const i3 = eval(input3.value);
    const e1 = Array.of(i1,i2,i3);
    console.log(e1);
    ausgabe(e1);
}
function of_hilfe(){
    hilfe("<br/>Of:<br/>Erstellt ung gibt ein Array mit den Werten aus Eingabefeld 1-3 aus.")
}

function map() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const e1 = i1.map(rechnertasche);
    function rechnertasche(zahl){
        return zahl*i2;
    }
    console.log(e1);
    ausgabe(e1);
}
function map_hilfe(){
    hilfe("<br/>Map:<br/>Übergibt die Werte (NUR ZAHLEN) aus dem Array von Eingabefeld 1 an eine Funktion und rechnet damit. In diesen Fall werden alle Werte des Arrays mit den Wert aus Eingabefeld 2 multipliziert.")
}

function filter() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const e1 = i1.filter(zierifiungver)
    function zierifiungver(zahl){
        return zahl >= i2;
    }
    console.log(e1);
    ausgabe(e1);
}
function filter_hilfe(){
    hilfe("<br/>Filter:<br/>Gibt alle Werte des Arrays (NUR ZAHLEN) aus Eingabefeld 1 aus, bei welchem die überprüfung stimmt. In diesen Fall ob die Werte größergleich dem Wert aus Eingabefeld 2 sind.")
}

function split() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const i3 = [""];
    for(string of i1){
        const e1 = string.split(i2);
        console.log(e1);
        i3.push(e1);
    }
    i3.splice(0,1);
    console.log(i3);
    ausgabe(i3);
}
function split_hilfe(){
    hilfe("<br/>Split:<br/> Teilt Strings aus dem Array (NUR STRINGS) in Strings an dem Symbol aus Eingabefeld 2.")
}

function join() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const e1 = i1.join(i2);
    console.log(e1);
    ausgabe(e1);
}
function join_hilfe(){
    hilfe("<br/>Join:<br/>Fügt alle Werte aus dem Array vom Eingabefeld 1 zu einem String zusammen und setzt dazwischen (optional) ein zwischenstring aus Eingabefeld 2 ein.")
}

function some() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const e1 = i1.some(faKtenczec);
    function faKtenczec(zahl){
        return zahl <i2;
    }
    console.log(e1);
    ausgabe(e1);
}
function some_hilfe(){
    hilfe("<br/>Some:<br/>Prüft ob irgendein Wert aus dem Array von Eingabefeld 1 die prüfung whar ergibt. In diesem Fall ob ein Wert kleinergleich dem Wert aus Eingabefled 2 ist.")
}

function reverse() {
    const i1 = eval(input1.value);
    const e1 = i1.reverse();
    console.log(e1);
    ausgabe(e1);
}
function reverse_hilfe(){
    hilfe("<br/>Reverse:<br/>Gibtdie Werte aus dem Array von Eingabefeld 1 umgekehrt aus.")
}

function spread() {
    const i1 = eval(input1.value);
    const i2 = eval(input1.value);
    const e1 = [...i1, ...i2];
    console.log(e1);
    ausgabe(e1);
}
function spread_hilfe(){
    hilfe("<br/>Spread:<br/>Ausgabe muss nicht ausgeschreiben werden, sondern wird vereinfacht. in deisen Fall müssen in Eingbefeld 1 und 2 Arrays eingegeben werden.")
}

function reduce() {
    const i1 = eval(input1.value);
    const e1 = i1.reduce(rechnen);
    function rechnen(total, wert){
        return total - wert;
    }
    console.log(e1);
    ausgabe(e1);
}
function reduce_hilfe(){
    hilfe("<br/>Reduce:<br/>Übergibt die Werte aus dem Array vom Eingabefeld 1 an eine funktion, welche damit rechnet. In deisem Fall werden von links nach rechts alle volgenden Werte des Arrays vom ersten in der Reihe abgezogen.")
}