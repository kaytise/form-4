function onlyDotsAndNumbers(event) {
  var charCode = event.which ? event.which : event.keyCode;
  if (charCode == 46) {
    return true;
  }
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;

  return true;
}
function InProgress() {
  var panelProg = $get("divProgress");
  panelProg.style.display = "";
}

function onComplete() {
  var panelProg = $get("divProgress");
  panelProg.style.display = "none";
}
var theForm = document.forms["ctl01"];
if (!theForm) {
  theForm = document.ctl01;
}
function __doPostBack(eventTarget, eventArgument) {
  if (!theForm.onsubmit || theForm.onsubmit() != false) {
    theForm.__EVENTTARGET.value = eventTarget;
    theForm.__EVENTARGUMENT.value = eventArgument;
    theForm.submit();
  }
}
if (typeof Sys === "undefined")
  throw new Error("ASP.NET Ajax client-side framework failed to load.");
Sys.WebForms.PageRequestManager._initialize(
  "ctl00$ctl12",
  "ctl01",
  [
    "tctl00$MainContent$UpdatePanelAll",
    "MainContent_UpdatePanelAll",
    "tctl00$MainContent$UpdatePanel04",
    "MainContent_UpdatePanel04",
  ],
  [],
  [],
  90,
  "ctl00"
);
function WebForm_OnSubmit() {
  if (typeof ValidatorOnSubmit == "function" && ValidatorOnSubmit() == false)
    return false;
  return true;
}
