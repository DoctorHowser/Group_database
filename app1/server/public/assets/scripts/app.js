var i=1;

$(document).ready(function(){

    $("#progress").hide();

    $("#generateEmployee").submit(function(event) {
        event.preventDefault();
        var values = {};

        $.each($(this).serializeArray(), function (i, field) {
            values[field.name] = field.value;
        });
        employeePost(values);
    });
});



function employeePost(values) {

    $.ajax({

        type: "POST",
        url: "/employee/data",
        data: values,
        beforeSend: function () {
            $('#progress').show();
        },
        success: function (data) {
            console.log(data);
            if (values.numberEmployees > i) {
                employeePost(values);
                i++;
                $("#content").text(i);
            } else {
                $("#progress").remove();
                $("#content").text('Employees have been added to database');
            }
        }
    });
}