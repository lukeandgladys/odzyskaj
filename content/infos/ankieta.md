<!-- wp:html -->
<div id="ankieta"><h3  v-if="step == 0">Rozgrzewka</h3>
<!-- /wp:html -->

<!-- wp:html -->
<p v-if="step == 0">Poniżej znajduje się ankieta. Ma charakter wprowadzający. Jest
absolutnie dobrowolna. Pomoże Ci się zorientować jaki jest stan
Twojej&nbsp;świadomości i&nbsp;nabrać odpowiedniej perspektywy. Odpowiedz
szczerze. Sobie. My mamy juz takich tysiące, nie&nbsp;odbieramy ich, ani
nie&nbsp;podglądamy. Dobrej Zabawy.</p>
<!-- /wp:html -->

<!-- wp:html -->
<h3 v-if="step == 1" class="pokapokapoka">Ankieta </h3>
<!-- /wp:html -->

<!-- wp:html -->
<p v-if="step == 1" class="pokapokapoka">Poniżej lista informacji, którymi dzielimy się z&nbsp;ludźmi, mniej lub  bardziej chętnie. Odpowiedz sobie, w&nbsp;skali od&nbsp;1 do 5, na&nbsp;ile czujesz,  że&nbsp;chcesz się tymi informacjami podzielić. Przyjmijmy, że&nbsp;1 znaczy,  że&nbsp;nie&nbsp;chcę, aby ktokolwiek o&nbsp;tym wiedział, a 5 niech&nbsp;znaczy,  że&nbsp;nie&nbsp;mam problemu, aby wiedzieli o&nbsp;tym wszyscy.</p>
<!-- /wp:html -->

<!-- wp:html -->
<form id="form"><p v-if="step == 1"  class="pokapokapoka"  ><br> <input type="radio" name="imie-ocena" value="1" v-model="ocena.imie" >
  <input type="radio" name="imie-ocena" value="2" v-model="ocena.imie" >
  <input type="radio" name="imie-ocena" value="3" v-model="ocena.imie" >
  <input type="radio" name="imie-ocena" value="4" v-model="ocena.imie" >
  <input type="radio" name="imie-ocena" value="5" v-model="ocena.imie" > imię i&nbsp;nazwisko<br>
  <input type="radio" name="pesel-ocena" value="1" v-model="ocena.pesel" >
  <input type="radio" name="pesel-ocena" value="2" v-model="ocena.pesel" >
  <input type="radio" name="pesel-ocena" value="3" v-model="ocena.pesel" >
  <input type="radio" name="pesel-ocena" value="4" v-model="ocena.pesel" >
  <input type="radio" name="pesel-ocena" value="5" v-model="ocena.pesel" > numer pesel<br>
  <input type="radio" name="konto-ocena" value="1" v-model="ocena.konto">
  <input type="radio" name="konto-ocena" value="2" v-model="ocena.konto">
  <input type="radio" name="konto-ocena" value="3" v-model="ocena.konto">
  <input type="radio" name="konto-ocena" value="4" v-model="ocena.konto">
  <input type="radio" name="konto-ocena" value="5" v-model="ocena.konto"> numer konta<br>
  <input type="radio" name="stan-konto-ocena" value="1" v-model="ocena.stan">
  <input type="radio" name="stan-konto-ocena" value="2" v-model="ocena.stan">
  <input type="radio" name="stan-konto-ocena" value="3" v-model="ocena.stan">
  <input type="radio" name="stan-konto-ocena" value="4" v-model="ocena.stan">
  <input type="radio" name="stan-konto-ocena" value="5" v-model="ocena.stan"> stan konta<br>
  <input type="radio" name="praca-ocena" value="1" v-model="ocena.praca">
  <input type="radio" name="praca-ocena" value="2" v-model="ocena.praca">
  <input type="radio" name="praca-ocena" value="3" v-model="ocena.praca">
  <input type="radio" name="praca-ocena" value="4" v-model="ocena.praca">
  <input type="radio" name="praca-ocena" value="5" v-model="ocena.praca"> gdzie pracuje<br>
  <input type="radio" name="lubie-praca-ocena" value="1" v-model="ocena.ludzie">
  <input type="radio" name="lubie-praca-ocena" value="2" v-model="ocena.ludzie">
  <input type="radio" name="lubie-praca-ocena" value="3" v-model="ocena.ludzie">
  <input type="radio" name="lubie-praca-ocena" value="4" v-model="ocena.ludzie">
  <input type="radio" name="lubie-praca-ocena" value="5" v-model="ocena.ludzie"> czy&nbsp;lubię swoją pracę<br>
  <input type="radio" name="zmiana-praca-ocena" value="1" v-model="ocena.zmiana">
  <input type="radio" name="zmiana-praca-ocena" value="2" v-model="ocena.zmiana">
  <input type="radio" name="zmiana-praca-ocena" value="3" v-model="ocena.zmiana">
  <input type="radio" name="zmiana-praca-ocena" value="4" v-model="ocena.zmiana">
  <input type="radio" name="zmiana-praca-ocena" value="5" v-model="ocena.zmiana"> czy&nbsp;myślę by&nbsp;zmienić pracę, na&nbsp;jaką<br>
  <input type="radio" name="hobby-ocena" value="1" v-model="ocena.hobby">
  <input type="radio" name="hobby-ocena" value="2" v-model="ocena.hobby">
  <input type="radio" name="hobby-ocena" value="3" v-model="ocena.hobby">
  <input type="radio" name="hobby-ocena" value="4" v-model="ocena.hobby">
  <input type="radio" name="hobby-ocena" value="5" v-model="ocena.hobby"> czy&nbsp;mam hobby, jakie<br>
  <input type="radio" name="wakacje-ocena" value="1" v-model="ocena.wakacje">
  <input type="radio" name="wakacje-ocena" value="2" v-model="ocena.wakacje">
  <input type="radio" name="wakacje-ocena" value="3" v-model="ocena.wakacje">
  <input type="radio" name="wakacje-ocena" value="4" v-model="ocena.wakacje">
  <input type="radio" name="wakacje-ocena" value="5" v-model="ocena.wakacje"> kiedy i&nbsp;gdzie jeżdżę na&nbsp;wakacje<br>
  <input type="radio" name="nieobecnosc-ocena" value="1" v-model="ocena.nieobecnosc">
  <input type="radio" name="nieobecnosc-ocena" value="2" v-model="ocena.nieobecnosc">
  <input type="radio" name="nieobecnosc-ocena" value="3" v-model="ocena.nieobecnosc">
  <input type="radio" name="nieobecnosc-ocena" value="4" v-model="ocena.nieobecnosc">
  <input type="radio" name="nieobecnosc-ocena" value="5" v-model="ocena.nieobecnosc"> kiedy mnie nie&nbsp;ma w&nbsp;domu<br>
  <input type="radio" name="kosciol-ocena" value="1" v-model="ocena.kosciol">
  <input type="radio" name="kosciol-ocena" value="2" v-model="ocena.kosciol">
  <input type="radio" name="kosciol-ocena" value="3" v-model="ocena.kosciol">
  <input type="radio" name="kosciol-ocena" value="4" v-model="ocena.kosciol">
  <input type="radio" name="kosciol-ocena" value="5" v-model="ocena.kosciol"> czy&nbsp;chodzę do&nbsp;kościoła<br>
  <input type="radio" name="zwiazek-ocena" value="1" v-model="ocena.zwiazek">
  <input type="radio" name="zwiazek-ocena" value="2" v-model="ocena.zwiazek">
  <input type="radio" name="zwiazek-ocena" value="3" v-model="ocena.zwiazek">
  <input type="radio" name="zwiazek-ocena" value="4" v-model="ocena.zwiazek">
  <input type="radio" name="zwiazek-ocena" value="5" v-model="ocena.zwiazek"> czy&nbsp;jestem w&nbsp;związku, małżeństwie<br>
  <input type="radio" name="sex-ocena" value="1" v-model="ocena.sex">
  <input type="radio" name="sex-ocena" value="2" v-model="ocena.sex">
  <input type="radio" name="sex-ocena" value="3" v-model="ocena.sex">
  <input type="radio" name="sex-ocena" value="4" v-model="ocena.sex">
  <input type="radio" name="sex-ocena" value="5" v-model="ocena.sex"> jak często uprawiam seks<br>
  <input type="radio" name="zdrada-ocena" value="1" v-model="ocena.zdrada">
  <input type="radio" name="zdrada-ocena" value="2" v-model="ocena.zdrada">
  <input type="radio" name="zdrada-ocena" value="3" v-model="ocena.zdrada">
  <input type="radio" name="zdrada-ocena" value="4" v-model="ocena.zdrada">
  <input type="radio" name="zdrada-ocena" value="5" v-model="ocena.zdrada"> czy&nbsp;zdradzam w&nbsp;związku, małżeństwie<br>
  <input type="radio" name="mysl-zdrada-ocena" value="1" v-model="ocena.myslZdrada">
  <input type="radio" name="mysl-zdrada-ocena" value="2" v-model="ocena.myslZdrada">
  <input type="radio" name="mysl-zdrada-ocena" value="3" v-model="ocena.myslZdrada">
  <input type="radio" name="mysl-zdrada-ocena" value="4" v-model="ocena.myslZdrada">
  <input type="radio" name="mysl-zdrada-ocena" value="5" v-model="ocena.myslZdrada"> czy&nbsp;myślę by&nbsp;zdradzić i&nbsp;z&nbsp;kim<br>
  <input type="radio" name="choroby-ocena" value="1" v-model="ocena.choroby">
  <input type="radio" name="choroby-ocena" value="2" v-model="ocena.choroby">
  <input type="radio" name="choroby-ocena" value="3" v-model="ocena.choroby">
  <input type="radio" name="choroby-ocena" value="4" v-model="ocena.choroby">
  <input type="radio" name="choroby-ocena" value="5" v-model="ocena.choroby"> czy&nbsp;mam poważne choroby<br>
  <input type="radio" name="o-innych-ocena" value="1"  v-model="ocena.oInnych">
  <input type="radio" name="o-innych-ocena" value="2"  v-model="ocena.oInnych">
  <input type="radio" name="o-innych-ocena" value="3"  v-model="ocena.oInnych">
  <input type="radio" name="o-innych-ocena" value="4"  v-model="ocena.oInnych">
  <input type="radio" name="o-innych-ocena" value="5"  v-model="ocena.oInnych"> co myślę o&nbsp;sąsiadach, znajomych, współpracownikach<br>
  <input type="radio" name="alko-ocena" value="1" v-model="ocena.alko">
  <input type="radio" name="alko-ocena" value="2" v-model="ocena.alko">
  <input type="radio" name="alko-ocena" value="3" v-model="ocena.alko">
  <input type="radio" name="alko-ocena" value="4" v-model="ocena.alko">
  <input type="radio" name="alko-ocena" value="5" v-model="ocena.alko"> czy&nbsp;piję alkohol, jaki, z&nbsp;kim, jak często<br>
  <input type="radio" name="glosowanie-ocena" value="1" v-model="ocena.glosowanie">
  <input type="radio" name="glosowanie-ocena" value="2" v-model="ocena.glosowanie">
  <input type="radio" name="glosowanie-ocena" value="3" v-model="ocena.glosowanie">
  <input type="radio" name="glosowanie-ocena" value="4" v-model="ocena.glosowanie">
  <input type="radio" name="glosowanie-ocena" value="5" v-model="ocena.glosowanie"> czy&nbsp;i&nbsp;na&nbsp;kogo głosuję<br>
  <input type="radio" name="zakupy-ocena" value="1"  v-model="ocena.zakupy">
  <input type="radio" name="zakupy-ocena" value="2"  v-model="ocena.zakupy">
  <input type="radio" name="zakupy-ocena" value="3"  v-model="ocena.zakupy">
  <input type="radio" name="zakupy-ocena" value="4"  v-model="ocena.zakupy">
  <input type="radio" name="zakupy-ocena" value="5"  v-model="ocena.zakupy"> czy&nbsp;lubię robić zakupy<br>
  <input type="radio" name="zakupy-co-ocena" value="1" v-model="ocena.zakupyCo">
  <input type="radio" name="zakupy-co-ocena" value="2" v-model="ocena.zakupyCo">
  <input type="radio" name="zakupy-co-ocena" value="3" v-model="ocena.zakupyCo">
  <input type="radio" name="zakupy-co-ocena" value="4" v-model="ocena.zakupyCo">
  <input type="radio" name="zakupy-co-ocena" value="5" v-model="ocena.zakupyCo"> co kupuję, kiedy, za&nbsp;ile<br>
  <input type="radio" name="wyksztalcenie-ocena" value="1" v-model="ocena.wyksztalcenie">
  <input type="radio" name="wyksztalcenie-ocena" value="2" v-model="ocena.wyksztalcenie">
  <input type="radio" name="wyksztalcenie-ocena" value="3" v-model="ocena.wyksztalcenie">
  <input type="radio" name="wyksztalcenie-ocena" value="4" v-model="ocena.wyksztalcenie">
  <input type="radio" name="wyksztalcenie-ocena" value="5" v-model="ocena.wyksztalcenie"> jakie mam wykształcenie<br>
  <input type="radio" name="samoocena-ocena" value="1" v-model="ocena.samoocena" >
  <input type="radio" name="samoocena-ocena" value="2" v-model="ocena.samoocena" >
  <input type="radio" name="samoocena-ocena" value="3" v-model="ocena.samoocena" >
  <input type="radio" name="samoocena-ocena" value="4" v-model="ocena.samoocena" >
  <input type="radio" name="samoocena-ocena" value="5" v-model="ocena.samoocena" > czy&nbsp;mam wysoką czy&nbsp;niską samoocenę<br>
  <input type="radio" name="muzyka-ocena" value="1" v-model="ocena.muzyka">
  <input type="radio" name="muzyka-ocena" value="2" v-model="ocena.muzyka">
  <input type="radio" name="muzyka-ocena" value="3" v-model="ocena.muzyka">
  <input type="radio" name="muzyka-ocena" value="4" v-model="ocena.muzyka">
  <input type="radio" name="muzyka-ocena" value="5" v-model="ocena.muzyka"> czy&nbsp;lubię muzykę<br>
  <input type="radio" name="instrument-ocena" value="1" v-model="ocena.instrument">
  <input type="radio" name="instrument-ocena" value="2" v-model="ocena.instrument">
  <input type="radio" name="instrument-ocena" value="3" v-model="ocena.instrument">
  <input type="radio" name="instrument-ocena" value="4" v-model="ocena.instrument">
  <input type="radio" name="instrument-ocena" value="5" v-model="ocena.instrument"> czy&nbsp;gram na&nbsp;instrumencie, jakim<br>
  <input type="radio" name="inspiracje-ocena" value="1" v-model="ocena.inspiracje">
  <input type="radio" name="inspiracje-ocena" value="2" v-model="ocena.inspiracje">
  <input type="radio" name="inspiracje-ocena" value="3" v-model="ocena.inspiracje">
  <input type="radio" name="inspiracje-ocena" value="4" v-model="ocena.inspiracje">
  <input type="radio" name="inspiracje-ocena" value="5" v-model="ocena.inspiracje"> czym i&nbsp;kim się inspiruję<br>
  <input type="radio" name="sport-ocena" value="1" v-model="ocena.sport">
  <input type="radio" name="sport-ocena" value="2" v-model="ocena.sport">
  <input type="radio" name="sport-ocena" value="3" v-model="ocena.sport">
  <input type="radio" name="sport-ocena" value="4" v-model="ocena.sport">
  <input type="radio" name="sport-ocena" value="5" v-model="ocena.sport"> czy&nbsp;uprawiam sport<br>
  <input type="radio" name="dieta-ocena" value="1" v-model="ocena.dieta">
  <input type="radio" name="dieta-ocena" value="2" v-model="ocena.dieta">
  <input type="radio" name="dieta-ocena" value="3" v-model="ocena.dieta">
  <input type="radio" name="dieta-ocena" value="4" v-model="ocena.dieta">
  <input type="radio" name="dieta-ocena" value="5" v-model="ocena.dieta"> jaka jest moja dieta, ile jem, jak często<br>
  <input type="radio" name="samotnosc-ocena" value="1" v-model="ocena.samotnosc">
  <input type="radio" name="samotnosc-ocena" value="2" v-model="ocena.samotnosc">
  <input type="radio" name="samotnosc-ocena" value="3" v-model="ocena.samotnosc">
  <input type="radio" name="samotnosc-ocena" value="4" v-model="ocena.samotnosc">
  <input type="radio" name="samotnosc-ocena" value="5" v-model="ocena.samotnosc"> czy&nbsp;czuje samotność<br>
  <input type="radio" name="sens-ocena" value="1" v-model="ocena.sens">
  <input type="radio" name="sens-ocena" value="2" v-model="ocena.sens">
  <input type="radio" name="sens-ocena" value="3" v-model="ocena.sens">
  <input type="radio" name="sens-ocena" value="4" v-model="ocena.sens">
  <input type="radio" name="sens-ocena" value="5" v-model="ocena.sens"> czy&nbsp;moje&nbsp;życie ma sens </p>
<!-- /wp:html -->

<!-- wp:html -->
<p v-if="step == 2" class="pokapokapoka">  Odpowiedz, proszę, w maksymalnie trzech zdaniach, co to jest internet?<br><textarea v-model="odp.internet" name="internet"> </textarea></p>
<!-- /wp:html -->

<!-- wp:html -->
<p v-if="step == 3" class="pokapokapoka">Czy&nbsp;wiesz gdzie jest internet?<br> <textarea name="gdzie" v-model="odp.gdzie"> </textarea></p>
<!-- /wp:html -->

<!-- wp:html -->
<p v-if="step == 4" class="pokapokapoka"> W&nbsp;skali 1 – 5, jak oceniasz swoją wiedzę o&nbsp;internecie?<br><input type="radio" name="wiedza-ocena" value="1"><input type="radio" name="wiedza-ocena" value="2">
 <input type="radio" name="wiedza-ocena" value="3">
 <input type="radio" name="wiedza-ocena" value="4">
 <input type="radio" name="wiedza-ocena" value="5"> </p>
<!-- /wp:html -->

<!-- wp:html -->
<p v-if="step == 5" class="pokapokapoka"> Z&nbsp;jakich mediów społęcznościowych korzystasz regularnie?<br><textarea v-model="odp.media" name="media"> </textarea> </p>
<!-- /wp:html -->

<!-- wp:html -->
<p v-if="step == 6" class="pokapokapoka">Jaki posiadasz telefon? (android, iphone, inny)<br><textarea v-model="odp.telefon" name="telefon"> </textarea> </p>
<!-- /wp:html -->

<!-- wp:html -->
<p v-if="step == 7" class="pokapokapoka">Czy&nbsp;udostępniasz w&nbsp;internecie zdjęcia zrobione swoim telefonem? Jak często?<br>  jakiego rodzaju sa to&nbsp;zdjęcia:<br> selfie, widoczna cała twarz<br> wnętrze mieszkania<br> rodzina i&nbsp;przyjaciele<br> dzieci moje&nbsp;lub znajomych<br> wakacje<br> zobaczone ciekawostki<br> zwierzęta<br> inne, jakie?<br><textarea v-model="odp.zdjecia" name="izdjecia"> </textarea></p>
<!-- /wp:html -->

<!-- wp:html -->
<p v-if="step == 8" class="pokapokapoka"><br> Odpowiedz, proszę, co to&nbsp;są metadane I&nbsp;jakie tam można znaleść informacje.<br><textarea v-model="odp.metadane" name="metadane"> </textarea></p>
<!-- /wp:html -->

<!-- wp:html -->
<p v-if="step == 9" class="pokapokapoka">Gdzie szukasz informacji w&nbsp;internecie?<br><textarea v-model="odp.szukasz" name="gdzie-szukasz"> </textarea></p>
<!-- /wp:html -->

<!-- wp:html -->
<p v-if="step == 10" class="pokapokapoka">Gdzie posiadasz swoje konto mejlowe?<br> Ile znaków ma twoje&nbsp;hasło do&nbsp;skrzynki email? Kiedy ostatnio zostało zmienione?<br><textarea v-model="odp.konto" name="mejl"> </textarea></p>
<!-- /wp:html -->

<!-- wp:html -->
<p v-if="step == 11" class="pokapokapoka">Czy&nbsp;robisz kopie swoich danych? Gdzie?<br><textarea v-model="odp.kopia" name="kopia-danych"> </textarea></p>
<!-- /wp:html -->

<!-- wp:html -->
<p v-if="step == 12" class="pokapokapoka">Odpowiedz, proszę co to&nbsp;jest szyfrowanie?<br>jakie elementy swojej aktywności w&nbsp;internecie szyfrujesz?<br> dane<br> rozmowy<br> wiadomości<br> skrzynka mejlowa<br> lista odwiedzanych stron<br> wyszukiwanie treści<br> inne, jakie?<br><textarea v-model="odp.szyfr" name="szyfrowanie"> </textarea></p>
<!-- /wp:html -->

<!-- wp:html -->
<p v-if="step == 13" class="pokapokapoka"><br> Jak często korzystasz z&nbsp;youtuba?<br> Czy&nbsp;znasz inne serwisy, gdzie można oglądać filmy, lub słuchać muzyki? Jakie?<br> Czy&nbsp;wrzucasz do&nbsp;internetu swoje filmy? Jakiego rodzaju?<br><textarea v-model="odp.youtube" name="youtube"> </textarea></p>
<!-- /wp:html -->

<!-- wp:html -->
<p v-if="step == 14" class="pokapokapoka"> Jakie znasz rodzaje licencji udostępniania treści w&nbsp;internecie?<br> Czy&nbsp;czytasz licencje serwisów z&nbsp;których&nbsp;korzystasz? Jakich?<br><textarea v-model="odp.licencje" name="licencje"> </textarea></p>
<!-- /wp:html -->

<!-- wp:html -->
<p v-if="step == 15" class="pokapokapoka">W&nbsp;skali 1 – 5, jak ocenisz swoją świadomość zagrożeń jakie mogę Cię spotkać w&nbsp;internecie?<br><input type="radio" name="zagrozenie" value="1">
 <input type="radio" name="zagrozenie" value="2">
 <input type="radio" name="zagrozenie" value="3">
 <input type="radio" name="zagrozenie" value="4">
 <input type="radio" name="zagrozenie" value="5"> </p>
<!-- /wp:html -->

<!-- wp:html -->
<p v-if="step == 16" class="pokapokapoka">Poniżej znana już nam lista informacji. Tym razem pomyśl, proszę,  w&nbsp;skali od&nbsp;1 do 5, na&nbsp;ile Twoim zdaniem można zdobyć taka wiedzę  o&nbsp;Tobie. Przyjmijmy, że&nbsp;1 znaczy, że&nbsp;nie&nbsp;ma możliwości by&nbsp;ktoś o&nbsp;tym  wiedział, jeśli Ty tego nie&nbsp;chcesz, a 5 niech&nbsp;znaczy, że&nbsp;nie&nbsp;jest  problemem, aby każdy kto chce się o&nbsp;tym dowiedział.</p>
<!-- /wp:html -->

<!-- wp:html -->
<p  v-if="step == 16" class="pokapokapoka" ><br> <input type="radio" name="imie-ocena-2" value="1">
 <input type="radio" name="imie-ocena-2" value="2">
 <input type="radio" name="imie-ocena-2" value="3">
 <input type="radio" name="imie-ocena-2" value="4">
 <input type="radio" name="imie-ocena-2" value="5"> imię i&nbsp;nazwisko<br>
 <input type="radio" name="pesel-ocena-2" value="1">
 <input type="radio" name="pesel-ocena-2" value="2">
 <input type="radio" name="pesel-ocena-2" value="3">
 <input type="radio" name="pesel-ocena-2" value="4">
 <input type="radio" name="pesel-ocena-2" value="5"> numer pesel<br>
 <input type="radio" name="konto-ocena-2" value="1">
 <input type="radio" name="konto-ocena-2" value="2">
 <input type="radio" name="konto-ocena-2" value="3">
 <input type="radio" name="konto-ocena-2" value="4">
 <input type="radio" name="konto-ocena-2" value="5"> numer konta<br>
 <input type="radio" name="stan-konto-ocena-2" value="1">
 <input type="radio" name="stan-konto-ocena-2" value="2">
 <input type="radio" name="stan-konto-ocena-2" value="3">
 <input type="radio" name="stan-konto-ocena-2" value="4">
 <input type="radio" name="stan-konto-ocena-2" value="5"> stan konta<br>
 <input type="radio" name="praca-ocena-2" value="1">
 <input type="radio" name="praca-ocena-2" value="2">
 <input type="radio" name="praca-ocena-2" value="3">
 <input type="radio" name="praca-ocena-2" value="4">
 <input type="radio" name="praca-ocena-2" value="5"> gdzie pracuje<br>
 <input type="radio" name="lubie-praca-ocena-2" value="1">
 <input type="radio" name="lubie-praca-ocena-2" value="2">
 <input type="radio" name="lubie-praca-ocena-2" value="3">
 <input type="radio" name="lubie-praca-ocena-2" value="4">
 <input type="radio" name="lubie-praca-ocena-2" value="5"> czy&nbsp;lubię swoją pracę<br>
 <input type="radio" name="zmiana-praca-ocena-2" value="1">
 <input type="radio" name="zmiana-praca-ocena-2" value="2">
 <input type="radio" name="zmiana-praca-ocena-2" value="3">
 <input type="radio" name="zmiana-praca-ocena-2" value="4">
 <input type="radio" name="zmiana-praca-ocena-2" value="5"> czy&nbsp;myślę by&nbsp;zmienić pracę, na&nbsp;jaką<br>
 <input type="radio" name="hobby-ocena-2" value="1">
 <input type="radio" name="hobby-ocena-2" value="2">
 <input type="radio" name="hobby-ocena-2" value="3">
 <input type="radio" name="hobby-ocena-2" value="4">
 <input type="radio" name="hobby-ocena-2" value="5"> czy&nbsp;mam hobby, jakie<br>
 <input type="radio" name="wakacje-ocena-2" value="1">
 <input type="radio" name="wakacje-ocena-2" value="2">
 <input type="radio" name="wakacje-ocena-2" value="3">
 <input type="radio" name="wakacje-ocena-2" value="4">
 <input type="radio" name="wakacje-ocena-2" value="5"> kiedy i&nbsp;gdzie jeżdżę na&nbsp;wakacje<br>
 <input type="radio" name="nieobecnosc-ocena-2" value="1">
 <input type="radio" name="nieobecnosc-ocena-2" value="2">
 <input type="radio" name="nieobecnosc-ocena-2" value="3">
 <input type="radio" name="nieobecnosc-ocena-2" value="4">
 <input type="radio" name="nieobecnosc-ocena-2" value="5"> kiedy mnie nie&nbsp;ma w&nbsp;domu<br>
 <input type="radio" name="kosciol-ocena-2" value="1">
 <input type="radio" name="kosciol-ocena-2" value="2">
 <input type="radio" name="kosciol-ocena-2" value="3">
 <input type="radio" name="kosciol-ocena-2" value="4">
 <input type="radio" name="kosciol-ocena-2" value="5"> czy&nbsp;chodzę do&nbsp;kościoła<br>
 <input type="radio" name="zwiazek-ocena-2" value="1">
 <input type="radio" name="zwiazek-ocena-2" value="2">
 <input type="radio" name="zwiazek-ocena-2" value="3">
 <input type="radio" name="zwiazek-ocena-2" value="4">
 <input type="radio" name="zwiazek-ocena-2" value="5"> czy&nbsp;jestem w&nbsp;związku, małżeństwie<br>
 <input type="radio" name="sex-ocena-2" value="1">
 <input type="radio" name="sex-ocena-2" value="2">
 <input type="radio" name="sex-ocena-2" value="3">
 <input type="radio" name="sex-ocena-2" value="4">
 <input type="radio" name="sex-ocena-2" value="5"> jak często uprawiam seks<br>
 <input type="radio" name="zdrada-ocena-2" value="1">
 <input type="radio" name="zdrada-ocena-2" value="2">
 <input type="radio" name="zdrada-ocena-2" value="3">
 <input type="radio" name="zdrada-ocena-2" value="4">
 <input type="radio" name="zdrada-ocena-2" value="5"> czy&nbsp;zdradzam w&nbsp;związku, małżeństwie<br>
 <input type="radio" name="mysl-zdrada-ocena-2" value="1">
 <input type="radio" name="mysl-zdrada-ocena-2" value="2">
 <input type="radio" name="mysl-zdrada-ocena-2" value="3">
 <input type="radio" name="mysl-zdrada-ocena-2" value="4">
 <input type="radio" name="mysl-zdrada-ocena-2" value="5"> czy&nbsp;myślę by&nbsp;zdradzić i&nbsp;z&nbsp;kim<br>
 <input type="radio" name="choroby-ocena-2" value="1">
 <input type="radio" name="choroby-ocena-2" value="2">
 <input type="radio" name="choroby-ocena-2" value="3">
 <input type="radio" name="choroby-ocena-2" value="4">
 <input type="radio" name="choroby-ocena-2" value="5"> czy&nbsp;mam poważne choroby<br>
 <input type="radio" name="o-innych-ocena-2" value="1">
 <input type="radio" name="o-innych-ocena-2" value="2">
 <input type="radio" name="o-innych-ocena-2" value="3">
 <input type="radio" name="o-innych-ocena-2" value="4">
 <input type="radio" name="o-innych-ocena-2" value="5"> co myślę o&nbsp;sąsiadach, znajomych, współpracownikach<br>
 <input type="radio" name="alko-ocena-2" value="1">
 <input type="radio" name="alko-ocena-2" value="2">
 <input type="radio" name="alko-ocena-2" value="3">
 <input type="radio" name="alko-ocena-2" value="4">
 <input type="radio" name="alko-ocena-2" value="5"> czy&nbsp;piję alkohol, jaki, z&nbsp;kim, jak często<br>
 <input type="radio" name="glosowanie-ocena-2" value="1">
 <input type="radio" name="glosowanie-ocena-2" value="2">
 <input type="radio" name="glosowanie-ocena-2" value="3">
 <input type="radio" name="glosowanie-ocena-2" value="4">
 <input type="radio" name="glosowanie-ocena-2" value="5"> czy&nbsp;i&nbsp;na&nbsp;kogo głosuję<br>
 <input type="radio" name="zakupy-ocena-2" value="1">
 <input type="radio" name="zakupy-ocena-2" value="2">
 <input type="radio" name="zakupy-ocena-2" value="3">
 <input type="radio" name="zakupy-ocena-2" value="4">
 <input type="radio" name="zakupy-ocena-2" value="5"> czy&nbsp;lubię robić zakupy<br>
 <input type="radio" name="zakupy-co-ocena-2" value="1">
 <input type="radio" name="zakupy-co-ocena-2" value="2">
 <input type="radio" name="zakupy-co-ocena-2" value="3">
 <input type="radio" name="zakupy-co-ocena-2" value="4">
 <input type="radio" name="zakupy-co-ocena-2" value="5"> co kupuję, kiedy, za&nbsp;ile<br>
 <input type="radio" name="wyksztalcenie-ocena-2" value="1">
 <input type="radio" name="wyksztalcenie-ocena-2" value="2">
 <input type="radio" name="wyksztalcenie-ocena-2" value="3">
 <input type="radio" name="wyksztalcenie-ocena-2" value="4">
 <input type="radio" name="wyksztalcenie-ocena-2" value="5"> jakie mam wykształcenie<br>
 <input type="radio" name="samoocena-ocena-2" value="1">
 <input type="radio" name="samoocena-ocena-2" value="2">
 <input type="radio" name="samoocena-ocena-2" value="3">
 <input type="radio" name="samoocena-ocena-2" value="4">
 <input type="radio" name="samoocena-ocena-2" value="5"> czy&nbsp;mam wysoką czy&nbsp;niską samoocenę<br>
 <input type="radio" name="muzyka-ocena-2" value="1">
 <input type="radio" name="muzyka-ocena-2" value="2">
 <input type="radio" name="muzyka-ocena-2" value="3">
 <input type="radio" name="muzyka-ocena-2" value="4">
 <input type="radio" name="muzyka-ocena-2" value="5"> czy&nbsp;lubię muzykę<br>
 <input type="radio" name="instrument-ocena-2" value="1">
 <input type="radio" name="instrument-ocena-2" value="2">
 <input type="radio" name="instrument-ocena-2" value="3">
 <input type="radio" name="instrument-ocena-2" value="4">
 <input type="radio" name="instrument-ocena-2" value="5"> czy&nbsp;gram na&nbsp;instrumencie, jakim<br>
 <input type="radio" name="inspiracje-ocena-2" value="1">
 <input type="radio" name="inspiracje-ocena-2" value="2">
 <input type="radio" name="inspiracje-ocena-2" value="3">
 <input type="radio" name="inspiracje-ocena-2" value="4">
 <input type="radio" name="inspiracje-ocena-2" value="5"> czym i&nbsp;kim się inspiruję<br>
 <input type="radio" name="sport-ocena-2" value="1">
 <input type="radio" name="sport-ocena-2" value="2">
 <input type="radio" name="sport-ocena-2" value="3">
 <input type="radio" name="sport-ocena-2" value="4">
 <input type="radio" name="sport-ocena-2" value="5"> czy&nbsp;uprawiam sport<br>
 <input type="radio" name="dieta-ocena-2" value="1">
 <input type="radio" name="dieta-ocena-2" value="2">
 <input type="radio" name="dieta-ocena-2" value="3">
 <input type="radio" name="dieta-ocena-2" value="4">
 <input type="radio" name="dieta-ocena-2" value="5"> jaka jest moja dieta, ile jem, jak często<br>
 <input type="radio" name="samotnosc-ocena-2" value="1">
 <input type="radio" name="samotnosc-ocena-2" value="2">
 <input type="radio" name="samotnosc-ocena-2" value="3">
 <input type="radio" name="samotnosc-ocena-2" value="4">
 <input type="radio" name="samotnosc-ocena-2" value="5"> czy&nbsp;czuje samotność<br>
 <input type="radio" name="sens-ocena-2" value="1">
 <input type="radio" name="sens-ocena-2" value="2">
 <input type="radio" name="sens-ocena-2" value="3">
 <input type="radio" name="sens-ocena-2" value="4">
 <input type="radio" name="sens-ocena-2" value="5"> czy&nbsp;moje&nbsp;życie ma sens</p></form>
<!-- /wp:html -->

<!-- wp:html -->
<p v-if="step == 17" class="pokapokapoka">Mam nadzieję, że&nbsp;powyższa ankieta poszerza Twój&nbsp;ogląd. Myślę, że&nbsp;teraz możesz rozpocząć odzyskiwanie sieci! </p>
<!-- /wp:html -->

<!-- wp:html -->
<p v-if="step == 17" class="pokapokapoka">Jeśli w odzyskiwaniu sieci stawiasz pierwsze kroki, na początek rzuć okiem na kilka elementarnych spraw, zacznij od tego <a href="https://odzyskaj.net/co-to-jest-internet/">co to właściwie jest ten internet?</a></p>
<!-- /wp:html -->

<!-- wp:html -->
<p v-if="step == 17" class="pokapokapoka">Jeśli sprawy elementarne nie sa Ci obce, przejdź od razu do pierwszej pomocy. Zacznij od <a href="http://odzyskaj.net/przewodnik-krok-po-kroku/hasla/">haseł</a>, jest to trudny, ale bardzo ważny temat. Warto poświęcić mu dużo czasu na początek. Powodzenia.</p>
<!-- /wp:html -->

<!-- wp:html -->
<p><button class="toper" v-if="step != 0" @click.prevent="odejmijKrok"> WSTECZ</button>    | {{ step }} |  <button  class="toper" id="dalej" v-if="step != totalsteps" @click.prevent="dodajKrok"> DALEJ</button></p></div>
<!-- /wp:html -->

<!-- wp:html -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>new Vue({
        el: "#ankieta",
        data: {
step: 0,
totalsteps: 17,
test: "vue",
ocena:{
imie: "",
pesel:"",
konto:"",
stan:"",
praca:"",
ludzie:"",
zmiana:"",
hobby:"",
wakacje:"",
nieobecnosc:"",
kosciol:"",
zwiazek:"",
sex:"",
zdrada:"",
myslZdrada:"",
choroba:"",
oInnych:"",
alko:"",
glosowanie:"",
zakupy:"",
zakupyCo:"",
wyksztalcenie:"",
samoocena:"",
muzyka:"",
instrument:"",
inspiracje:"",
sport:"",
dieta:"",
samotnosc:"",
sens:""

},
odp: {
internet: "",
gdzie: "",
media: "",
telefon: "",
zdjecia: "",
metadane: "",
szukasz: "",
konto: "",
kopia: "",
szyfr: "",
youtube: "",
licencje: ""



       }   
        }
        ,
        methods: {
dodajKrok() {
this.step++,
gsap.to(window, {duration: 0.7, scrollTo:"#top"})
},
odejmijKrok() {
this.step--,
gsap.to(window, {duration: 0.7, scrollTo:"#top"})
}

}

        })</script>
<!-- /wp:html -->
