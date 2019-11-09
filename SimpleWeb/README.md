### Start service
[x] Runs the app 
`````
npm start
`````
[x] Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Kill service on port
`````
kill -9 $(lsof -i:3000 -t)
``````