// Plugging api chatgpt
const apiKey = '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';
const apiUrl = "https://api.openai.com/v1/engines/curie-instruct-beta/completions";

const requestButton = document.querySelector('.chat-request');
const textArea = document.querySelector('.request-info');
const enteringValue = document.querySelector('.text')
console.log(document.querySelector('.text'))
requestButton.addEventListener('click', () => { 
     console.log('some data',enteringValue.value.length ? enteringValue.value : null)
     const data = enteringValue.value.length ? enteringValue.value : null;
     if (data) { 
         request(data).then(gptData => textArea.innerHTML = gptData);
         textArea.innerHTML = '<span>loading............</span>';
         return 
    };

     textArea.innerHTML = 'please fill the field'
})
const maxTokens = 150;

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
};

async function request(ask) { 
    const body = JSON.stringify({
        prompt: ask,
        max_tokens: maxTokens
    });
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: headers,
            body: body
        });
        if (response.ok !== true) { 
            console.log('error')
            throw new Error(`we have some proble ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
        console.log(data.choices[0].text)
        return data.choices[0].text;
    } catch (error) {
        console.log('error name', error.name)
        return error.name
    }
}