// setting default value to the variable crush
// mainly this file is used to set up the prerequisites for the extension
// plus good practice

var crush = "Nishant";
var c_img = "https://images.hindustantimes.com/img/2021/10/05/1600x900/nora_fatehi_1633441516263_1633441524405.jpg";

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ crush });
    chrome.storage.sync.set({ c_img });

    //this will be reflected in popu console - pretty obvious
    console.log(`crush: ${crush}`);
});