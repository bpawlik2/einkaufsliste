# Einkaufsliste:

Mit einem Tutorial als Basis wurde eine Einkaufsliste mit einfachen CRUD Funktionen erstellt.

Turorial:

http://softauthor.com/learn-to-build-firebase-crud-app-with-javascript-part01-reading-data/

GitHub Repository, welches als Basis verwendet wurde: 

https://github.com/softauthor/firebase-crud-javascript-02


Für die Umsetzung wurde Firebase verwendet, welche sowohl die Datenbank als auch die Synchronisation dieser übernimmt.

Bereitgestellt wird der Service mittels Node.js

https://nodejs.org/en/


Jedes Firebase Projekt besitzt seinen eigenen Authentication Key. Dieser muss bei einem neuen Projekt angepasst werden. Hier wird dieser in app.js festgelegt.


Letztlich muss der Service gestartet werden. Dazu sind einige Befehle in der CLI notwendig.

Firebase tools installieren

	npm install -g firebase-tools

Anmeldung mittels Google und Initialisierungsprozess 


	firebase login
	firebase init

Nach der Initialisierung kann das Projekt gestartet werden.

	firebase deploy
	
Danach ist das Projekt unter https://[project_name].firebaseapp.com erreichbar

https://pawlikeinkaufsliste.firebaseapp.com/

