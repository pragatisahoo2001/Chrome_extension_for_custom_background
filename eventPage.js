chrome.runtime.onMessage.addListener(function(request,sender, sendRequest){
    if(request.todo=="showPageAction"){
        chrome.tabs.query({active:true,currentWindow:true},function(tabs){
            chrome.pageAction.show(tabs[0].id);
        });
    }
});