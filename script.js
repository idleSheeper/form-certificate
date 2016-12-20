$(document).ready(function(){

//////////////////////////////////////////////
//////////////// front-certificate ///////////
//////////////////////////////////////////////    

    // The change color certificate and school's name
    $('#school').on('change', function() {
        $('#front-certificate').css({'background': 'url('+ $(this).find(':selected').data('gilosz') +'Front.svg)', 
                                    'background-size': '100% 100%' });
        $('#back-certificate').css({'background': 'url('+ $(this).find(':selected').data('gilosz') +'Back.svg)' , 
                                   'background-size': '100% 100%' });
        $('#school-name').text($(this).find(':selected').val()); 
    });
    
    //The change data of student and school
    $('#form-1 input, #form-2 input:not([type=radio]), #form-3 input').on('keyup', function(){
        $('#' + $(this).prop('name')).text($(this).val());
    });
            
    $('#form-2 input[name=student-name], #form-2 input[name=student-lastname]').on('keyup', function(){
        var name = $('#form-2 input[name=student-name]').val();
        var lastname = $('#form-2 input[name=student-lastname]').val();
        $('#name').text(name + ' ' + lastname);
    });
    
    //Bonus primus
    $('#primus').click(function() {
        $('div.primus').toggle(this.checked);
    });
    
    //Not-passed
    $('#not-passed').click(function() {
        if((this).checked) {
            $('#next-year p:nth-child(1)').text('nie')  ;
            $('#next-year p:nth-child(3)').text('i')  ;
        } else {
            $('#next-year p:nth-child(1)').text('-')  ;
            $('#next-year p:nth-child(3)').text('ę')  ;
        }
    });
    
    //The change sex
    $('input[name=sex]').on('change', function() {
        if($(this).val() === 'man'){
            $('#year p:nth-child(2)').text('-')  ;
            $('#next-year p:nth-child(2)').text('-')  ;
        }
        else {
            $('#year p:nth-child(2)').text('a')  ;
            $('#next-year p:nth-child(2)').text('a')  ;
        }
    });
    
//////////////////////////////////////////////
//////////////// back-certificate ////////////
//////////////////////////////////////////////
    
    $('#behavior, #religion').on('change', function() {
      $('#' + $(this).prop('name') + '-mark').text($(this).find(':selected').val());
    });
    
    // checkbox with marks (the change attribute 'disable' for input text and radio)
    $('#form-5 input[type=checkbox]').click(function() {
        var index = $(this).data('number');
        if((this).checked) {
            // show input text and radio for marks
            $(this).next().removeAttr("disabled");
            $('input[name=mark-' + index+ ']').removeAttr("disabled");
            // remove last line 
            $('#marks').children().last().remove(); 
            // find opportunely place and add new subject
            for(var i = index -1 ; i > -2; i--){
                if(( $( "#subject-" + i ).length ) ){
                    $("#subject-" + i).parent()
                        .after( "<div class='row'><p id='subject-" + index + "' class='left'>" 
                               + $(this).next('input[type=text]').val() + "</p><p id='mark-" + index 
                                + "' class='right'>" + $('input[name=mark-' + index + ']').val() + "</p></div>");
                    break;
               }  else if(index === 0) {
                    $("#marks").prepend( "<div class='row'><p id='subject-" + index + "' class='left'>" 
                               + $(this).next('input[type=text]').val() + "</p><p id='mark-" + index 
                                + "' class='right'>" + $('input[name=mark-' + index + ']').val() + "</p></div>");
                    break;
               }
            }
            
            // display a mark of this subject
            $('#mark-' + index ).text($('input[name=mark-' + index +']:checked').val());

        } else {
            // hide input text and radio for marks
            $(this).next().attr('disabled', 'disabled');
            $('input[name=mark-' + index+ ']').attr('disabled', 'disabled');
            $('#subject-' + index).parent().remove();
            // add new line to end div iwth amrks
            var newDiv = $('<div/>').addClass("row");
            newDiv.append( $('<p/>').addClass("left") );
            newDiv.append( $('<p/>').addClass("right") );
            $('#marks').append(newDiv);
        }
    });
    
    // The change name of subjects
    $('#form-5 input[type=text]').on('keyup', function(){
        var index = $(this).prev('input').data('number');
        $('#subject-' + index).text($(this).val());
    });
    
    // The change value of marks
    $('#form-5 input[type=radio]').on('change', function(){
        $('#' + $(this).prop('name') ).text($(this).val());
    });
    
    // The change field with success
    $('#form-6 textarea[name=success-info]').on('keyup', function(){
        $('#' + $(this).prop('name') ).text($(this).val()).removeClass('invisibility');
        
    });
    
    // enlarging certificate
    $('#front-certificate').on('dblclick', function(){
        $('#front-form').toggle();
        $('#back-form').toggle();
        $('#back-certificate').toggle();
        $(this).toggleClass('showBig');
    });    
    
    $('#back-certificate').on('dblclick', function(){
        $('#front-form').toggle();
        $('#back-form').toggle();
        $('#front-certificate').toggle();
        $(this).toggleClass('showBig');
    });
    
});