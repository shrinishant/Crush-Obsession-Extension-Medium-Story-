var x = document.getElementById("testing");
var c_n = document.getElementById("cname");
var c_i = document.getElementById("cimg");

x.addEventListener("click", async () => {

  var crush = c_n.value;
  var c_img = c_i.value;

  if(crush){
    chrome.storage.sync.set({ crush });
  }

  if(c_img){
    chrome.storage.sync.set({ c_img });
  }

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: changePara,
  });
});

  function changePara() {

    var para = document.getElementsByTagName("p");
    var h1 = document.getElementsByTagName("h1");
    var h2 = document.getElementsByTagName("h2");

    chrome.storage.sync.get("c_img", ({ c_img }) => {
      var i = document.getElementsByTagName('img');
      
      for(var j=0; j<i.length; j++){
        console.log(c_img);
        i[j].src = c_img;
      }
    })

    chrome.storage.sync.get("crush", ({ crush }) => {
      var crush_name = crush;

      // this will not be reflected in popup console rather be in current active page's console
      console.log(`crush name: ${crush_name}`);
      console.log(`crush: ${crush}`);

      mediator_friend(para, crush_name);
      mediator_friend(h1, crush_name);
      mediator_friend(h2, crush_name);
    });

    const mediator_friend = (y, crush_name) => {
      for(var i=0; i<y.length; i++){
        y[i].innerText = crush_name;
      }
    }
  }
