# Einkaufsliste:

## Kurzfassung:

Mit einem Tutorial als Basis wurde eine Einkaufsliste mit einfachen CRUD Funktionen erstellt.

Turorial:

http://softauthor.com/learn-to-build-firebase-crud-app-with-javascript-part01-reading-data/

GitHub Repository, welches als Basis verwendet wurde: 

https://github.com/softauthor/firebase-crud-javascript-02


Für die Umsetzung wurde Firebase verwendet, welche sowohl die Datenbank als auch die Synchronisation dieser übernimmt.

Bereitgestellt wird der Service mittels Node.js, welches unter folgendem Link heruntergeladen werden kann.

https://nodejs.org/en/


Jedes Firebase Projekt besitzt seinen eigenen Authentication Key. Dieser muss bei einem neuen Projekt angepasst werden. In diesem Beispiel wird wird dies in app.js festgelegt und muss angepasst werden.

### Hosting mit Firebase
Letztlich muss der Service gestartet werden. Dazu sind einige Befehle in der CLI notwendig.

Firebase tools installieren

	npm install -g firebase-tools

Anmeldung mittels Google und Initialisierungsprozess 

	firebase login
	firebase init

Nach der Initialisierung kann das Projekt gestartet werden.

	firebase deploy
	
Danach ist das Projekt unter https://[project_name].firebaseapp.com erreichbar

Bsp. https://pawlikeinkaufsliste.firebaseapp.com/


## Synchronisationsansatz

Synchronisation soll so ablaufen, dass auf der Weboberfläche stets die aktuellen Daten aus der Datenbank zu sehen sind. 
Dies ist möglich, da eine Realtime Database verwendet wird
Selbst wenn die Verbindung verloren geht und man Einträge vornimmt werden diese wieder mit der Datenbank synchronisiert sobald wieder eine Verbindung besteht. Dieser Vorgang wird automatisch von Firebase übernommen.

## Recherche möglicher Systeme

Als mögliche Realtime Databases kommen unter anderem folgende in Frage:

+ Couchbase
+ Firebase
+ RethinkDB
+ uvm.

Ein detailreicher Vergleich dieser und noch anderer ist hier zu finden:

https://medium.baqend.com/real-time-databases-explained-why-meteor-rethinkdb-parse-and-firebase-dont-scale-822ff87d2f87

Gründe für die Wahl von Firebase:

+ Kann gleichzeitig von mehreren Usern verwendet werden, Synchronisation funktioniert
+ Unkomplizierte Einbindung der Datenbank in das Projekt
+ Einfaches deployment in wenigen Schritten
+ Provider kümmert sich um die Sicherheit (https)

Nachteile:

- Es können keine komplexen Queries durchgeführt werden, was ist diesem Zusammenhang aber nicht weiter schlimm ist, da die CRUD Funktionen vordefiniert sind.
- Datenbank liegt in den Händen von Firebase, es sind keine anderen Anbindungen möglich


## Dokumentation der gewählten Schnittstelle

Firebase wird von Google gehostet, somit wird keine lokale Datenbank erstellt, sondern lediglich eine Verbindung mit einer aufgebaut.
Dafür wird ein kurzes Code Snippet im HTML-Code eingefügt, welches auch bereitgestellt wird und es sich somit lediglich um ein copy-paste handelt.
Damit ist nun Zugriff auf die Datenbank mittels der CRUD Funktionen möglich.



## Implementierung der gewählten Umgebung auf lokalem System

Das Tutorial bietet bereits ein Grundgerüst für UI und CRUD Funktionen und muss nur noch auf die Einkaufsliste angepasst werden. Dafür werden die Enthaltenen User entfernt und durch Artikel ersetzt, welche einen Namen und eine Anzahl haben.


## Überprüfung der funktionalen Anforderungen zur Erstellung und Synchronisation der Datensätze

Die Synchronisation der Datensätze kann in der Firebase Konsole überprüft werden. 
Zusätzlich ist zu erkennen, wie die Datensätze sich verändern wenn ein anderer User von einem anderen Gerät aus diese verändert.







