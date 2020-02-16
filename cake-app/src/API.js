const baseUrl = "http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes"

const getCakes = () => {
    return fetch(baseUrl)
    .then(resp => resp.json())
    }

const postCake = (newCake) => 
    fetch(baseUrl, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCake)
    }).then(resp => resp.json())

export default {getCakes, postCake}