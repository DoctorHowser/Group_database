var i=1;

$(document).ready(function(){

    $(".spinner-loader").hide();
    $("#generateEmployee").submit(function(event) {
        event.preventDefault();
        var values = {};

        $.each($(this).serializeArray(), function (i, field) {
            values[field.name] = field.value;
        });


        employeePost(values);



    });
});

function employeePost(values){

    $.ajax({
        type: "POST",
        url: "/employee/data",
        data: values,
        beforeSend: function(){
            //$('.spinner-loader').show() ;
            $(".progress").append( '<div class="progress-bar progress-bar-striped active" role="progressbar" style="width: 100%"> </div>');
        },
        complete: function(){
            $(".spinner-loader").hide();
            $(".progress").remove();
            $("#content").html('<h1>Employees have been added to database</h1>')
        },
        success: function(data){

                console.log(values.numberEmployees);
            while (values.numberEmployees > i){
                    employeePost(values);
            i++;

                console.log(values, i);
            }

        }
    });
}
//
//function employeeGet(){
//    $.ajax({
//        type:"GET",
//        url:"/employee/data",
//        success: function(data){
//            console.log(data.length);
//        }
//    });
//
//}

//<div id="load" class="progress-bar progress-bar-striped active">