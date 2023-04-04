var onfido = {};

function triggerOnfido() {
  onfido = Onfido.init({
    // useModal: true,
    // isModalOpen: true,
    containerId: "onfido-mount",
    // onModalRequestClose: function () {
    //   // Update options with the state of the modal
    //   onfido.setOptions({ isModalOpen: false });
    // },
    token:
      "xxxxxxxx", //sdk token got from server project
    onComplete: function (data) {
      // callback for when everything is complete
      console.log("everything is complete");
    },
    workflowRunId: "xxxxxxx"  //workflow runid got from server project
   
  });
}
