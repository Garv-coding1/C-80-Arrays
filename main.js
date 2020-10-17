name_students = [];

function submit() {
    var display_names = [];

    for (var i=1; i<=4; i++) {
       var name=document.getElementById("name_of_the_student_"+i).value;
       console.log(name);
       name_students.push(name);
    }
    console.log(name_students);
    length=name_students.length;
    for (var j =0; j<length; j++){
        display_names.push("<h4>NAME -"+ name_students[j]+"</h4>");
        console.log(display_names);
    }
    console.log(display_names);
    document.getElementById("display_name_with_commas").innerHTML=display_names;
   var remove_commas=display_names.join(" ");
   console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

 
   
}

function sorting() {
 name_students.sort();
 console.log(name_students);
 var display_names = [];
 length=name_students.length;
 for (var j =0; j<length; j++){
     display_names.push("<h4>NAME -"+ name_students[j]+"</h4>");
     console.log(display_names);
 }
 document.getElementById("display_name_with_commas").innerHTML=display_names;
 var remove_commas=display_names.join(" ");
 console.log(remove_commas);
  document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}