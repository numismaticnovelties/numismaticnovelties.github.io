let data;
let ready = false;
            fetch('https://numismaticnovelties.github.io/header.html')
            .then(response => {
                if (!response.ok) {
                    console.error(`HTTP error! status: ${response.status}`);
                }
                // Check if response has content
                return response.text(); // Get as text first
                })
            .then(text => {
            if (!text) {
            console.error('Empty response received');
            return;
            }
            display(text);
            })
            .catch(error => console.error('Fetch error:', error));
            function display(fetchedData){
                data = fetchedData;
                ready=true;
                document.getElementById('nav').innerHTML = data;
            }

//Custom error image
let imageData = [window];
Array.from(document.getElementsByTagName('img')).forEach((image,index)=>{
    if (image.src.includes('menu.png'))return;
    imageData.push(null);
    image.addEventListener("error",(evt)=>{
        evt.target.src = "/placeholder.jpg";
        evt.target.onerror = null;
    })
    image.dataset.status = "closed";
    image.addEventListener("click",()=>{
        if (image.dataset.status == "closed"){
            imageData[index] = window.open(image.src, 'popupWindow', 'width=600,height=400,scrollbars=yes');   
            image.dataset.status = "open"
        }else{
            imageData[index].close();
            imageData[index] = null;
            image.dataset.status= "closed";
        }
    })
})