const checkResponse = res => {
    if(res.status === 200){
        console.log(`Error with request! ${res.status} `);
        return;
    }
    return res.json();
};

export const githubData = username => {
    return fetch(`http://api.github.com/users/${username}`)
    .then(checkResponse)
    .catch(err => {
        throw new Error(`Error with fetch api! ${err}`) ;
    });
};

