import Store from '../store/index.js'

export default {
    getPicture(session) {
        let token = session.get("plusplannerToken");
        let parts = token.split('.');
        let payload = JSON.parse(atob(parts[1]));
        let data;
        fetch(payload.pfp + "?width=150px&height=150px", {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + session.get("fontysToken")
            }
        }).then(response => {
            response.blob().then(blobResponse => {
                data = blobResponse;
                const urlCreator = window.URL || window.webkitURL;
                let picture = urlCreator.createObjectURL(data);
                Store.dispatch("user/setImage", picture);
            })
        });
    }
}
