$(function () {
    //get data from the api route
   $.getJSON('api', updateFeedback);
   
   //POST verb
   //write to file.  
   $('.feedback-form').submit(function (e) {
       e.preventDefault();
       
       $.post('api', {
           name: $('#feedback-form-name').val(),
           title: $('#feedback-form-title').val(),
           message: $('#feedback-form-message').val()
       }, updateFeedback);//instant update page.
   });
   
   //Delete a message
   $('.feedback-messages').on('click', function (evt) {
       if(evt.target.className === 'glyphicon glyphicon-remove') {
           $.ajax({
               url: 'api/' + evt.target.id,
               type: 'DELETE',
               success: updateFeedback
           });//ajax
       }//if
   });
   
   //retrieve data
    function updateFeedback(data) {
        var output = '';
        $.each(data, function (key, item) {
            
            output += '    <div class="feedback-item item-list media-list">';
            output += '        <div class="feedback-item media">';
            
            //delete btn
            output += '        <div class="media-left"><button class="feedback-delete btn btn-xs btn-danger">\n\
 <span id='+key+' class="glyphicon glyphicon-remove"></span></button></div>';
            
            output += '          <div class="feedback-info media-body">';
            output += '            <div class="feedback-head">';
            output += '              <div class="feedback-title">'+item.title+' &nbsp;<small class="feedback-name label label-info">'+item.name+'</small></div>';
            output += '            </div>';                                                      
            output += '            <div class="feedback-message">'+item.message+'</div>';
            output += '          </div>';
            output += '        </div>';
            output += '    </div>';
            
        });
        
        $('.feedback-messages').html(output);
    }
    
});