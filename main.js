var images = ["https://img.freepik.com/free-vector/continuous-line-drawing-happy-father-piggybacking-cute-little-daughter-playing-with-dad-vector_500861-737.jpg?w=740", "https://static.vecteezy.com/system/resources/previews/002/124/893/large_2x/one-single-line-drawing-of-young-happy-mom-holding-her-daughter-a-mother-playing-together-with-her-child-at-home-isolated-on-white-background-family-parenthood-concept-illustration-vector.jpg" , "https://i.pinimg.com/564x/36/3e/61/363e61b2820616fbe1618f82277bb5a8--disney-princess-belle-iron-on-transfer.jpg"];
           
var names = ["Thiago ", "Lidiane ", "Eu Sophia"];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 3
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}