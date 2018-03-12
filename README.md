front camp node.js

Set up:

1. Run `npm i`
2. Run `mongorestore -d froncamp_database ./froncamp_database/`
2. Run `npm start`

Auth routes: 
- `/users` - registration route (need to pass `username` and `password` fields in a request body)
- `/login` - authorization route (test credentials: `username` - `lol123`, `password` - `12345678`)

Note: after successful registration/authorization you will get a token which must be passed as value of the header `Authorization` for getting any blogs' data.