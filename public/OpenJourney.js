async function generate(p, imgId) {
    const url = 'https://openjourney1.p.rapidapi.com/models/runwayml/stable-diffusion-v1-5';
    const prompt = p;
    const source = imgId;
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '705ec7820cmsh6b54d731073f532p14aeb6jsn7f2809099b0d',
            'X-RapidAPI-Host': 'openjourney1.p.rapidapi.com'
        },
        body: JSON.stringify({inputs: prompt})
    };

    try {
        const response = await fetch(url, options);
        const result = await response.blob();
        const imageURL = URL.createObjectURL(result);
        const imageElement = document.getElementById(source);
        imageElement.src = imageURL;
    } catch (error) {
        console.error(error);
    }
}