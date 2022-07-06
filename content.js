chrome.runtime.sendMessage({todo:"showPageAction"});

chrome.storage.sync.get('imageLink', function(customBackground)
{
    if(customBackground.imageLink)
    {
        $('body').css({'background-image': `url(${customBackground.imageLink})`,"background-size":"cover"});
        $('#fbar').css('display','none');
    }
});
chrome.runtime.onMessage.addListener(function(request,sender,sendMessage){
    console.log(sender.tab ?
        "from a content script:"+ sender.tab.url :
        "from the extension");
    if(request.todo=="changeBg"){
        var image_chosen=request.imageLink;
        let imageURL=image_chosen;
        chrome.storage.sync.set({'imageLink':imageURL},function(){});
        $('body').css({'background-image': `url(${imageURL})`,"background-size":"cover"});
        $('#fbar').css('display','none');
    }
    
})