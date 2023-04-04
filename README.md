The primary premise behind opinion polling is that the collective judgment of a group of individuals is typically more correct than any single individual's view, however, the open format in which you can register to vote, simply using an email, leaves this method open to issues such as security, risk of manipulation, and lack of confidence in the results. This work will focus on how opinion polling can thrive by making use of face identification supplemented with iris identification to convey stronger confidence in the opinion polling results, mitigating the issues previously discussed.



Project contains server and a UI application. Server will return workflow runid and SDK token from onfido web application. These details will be used while creating onfido user interface in UI project.


Steps

1. User has to create a valid account in onfido pportal
2. User should create api token under developer tab
3. User must create active workflow under studio tab
4. Fill details from step2 & 3 inside server project src/app.ts file 
5. Run server projet and copy workflow runid and sdk token
6. Use details from step5 inside UI project app.js file
7. Run index.html file and follow steps.
8. sample id and image is provided inside docs folder
