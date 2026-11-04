function showPage(pageName){
 document.querySelectorAll(".page").forEach(function(page){page.classList.remove("active")});
 var selected=document.getElementById(pageName);
 if(selected){selected.classList.add("active");}
 window.scrollTo({top:0,behavior:"smooth"});
}
function applyFor(jobName){
 document.getElementById("selectedJob").value=jobName;
 showPage("application");
}
function filterJobs(){
 var term=document.getElementById("jobSearch").value.toLowerCase();
 var cards=document.querySelectorAll("#jobList .job-card");
 var count=0;
 cards.forEach(function(card){
  var match=card.innerText.toLowerCase().includes(term);
  card.style.display=match?"block":"none";
  if(match)count++;
 });
 document.getElementById("noJobs").style.display=count===0?"block":"none";
}
function searchFromHome(){
 document.getElementById("jobSearch").value=document.getElementById("homeSearch").value;
 showPage("jobs");filterJobs();
}
document.getElementById("applicationForm").addEventListener("submit",function(event){
 event.preventDefault();
 document.getElementById("applicationMessage").textContent="Application submitted successfully! (Demo only)";
 this.reset();
});
document.getElementById("contactForm").addEventListener("submit",function(event){
 event.preventDefault();
 document.getElementById("contactMessage").textContent="Message sent successfully! (Demo only)";
 this.reset();
});