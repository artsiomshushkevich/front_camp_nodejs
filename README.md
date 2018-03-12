front camp node.js

Set up:

1. Run `npm i`
2. Run `mongorestore -d froncamp_database ./froncamp_database/`
2. Run `npm start`

Auth routes: 
- `/auth` - registration/authentication route (need to pass `username` and `password` fields in a request body; test credentials: `username` - `lol123`, `password` - `12345678`; if an user with such credentials is not found, the new one will be created);

Note: after successful registration/authorization you will get a token which must be passed as value of the header `Authorization` for getting any blogs' data.