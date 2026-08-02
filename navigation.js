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