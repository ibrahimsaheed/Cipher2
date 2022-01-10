$(document).ready(function () {

    $("#push").click(function (event) {
        event.preventDefault();
        function real(event){
        const firstsentence = ("#latin").charAt(0).toUpperCase()
        event.preventDefault();
        const sen = $("#latin").length

        const lastsentence = $("#latin").charAt(sen - 1).toUpperCase();

        const buck = ($("#latin").concat(lastsentence.concat(firstsentence)));

        const divide = Math.floor(sen / 2)

        const division2 = $("#latin").charAt(divide);
        const division3 = division2.concat(buck)
    }
    real(event)
        $("#result").text(division3)
    });

});