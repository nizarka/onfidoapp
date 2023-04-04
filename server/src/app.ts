import {
  ApplicantRequest,
  Onfido,
  Region,
  SdkTokenRequest,
  WorkflowRun,
  WorkflowRunRequest,
} from "@onfido/api";



(async () => {
  const start = async () => {
    


    let onfido: Onfido = new Onfido({
        apiToken: "xxxxxxxx",  // api token generated under developer tab
        region: Region.EU,
      });
 
    const applicantRequest: ApplicantRequest = {
      firstName: "Jane", 
      lastName: "Doe",
      dob: "1990-01-31",
      address: {
        street: "Main Street",
        town: "London",
        postcode: "SW4 6EH",
        country: "GBR",
      }, 
    }; 

    const applicant = await onfido.applicant.create(applicantRequest);

    const workflowRunRequest: WorkflowRunRequest = {
      applicantId: applicant.id,
      workflowId: "xxxxxxxxx",  // workflow id under studio tab
    };

    const workflowRun  = await onfido.workflowRun
      .create(workflowRunRequest)
      .catch((error) => {
        console.log(error);
      });

    console.log((workflowRun as WorkflowRun).id);

    const sdkTokenRequest: SdkTokenRequest = {
       applicantId: applicant.id,  
      // referrer: "*",
    };

    try {
      const sdkToken = await onfido.sdkToken.generate(sdkTokenRequest);
      console.log(sdkToken);
    } catch (error) {
      console.log(error);
    }
  };

  await start();  
})();
