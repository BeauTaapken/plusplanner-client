export default class PictureHolder {
    static picture = null;

    static getPicture(fToken, pfp) {
        if (this.picture === null) {
            let data;
            fetch(pfp + "?width=150px&height=150px", {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + fToken
                }
            }).then(response => {
                response.blob().then(blobResponse => {
                    data = blobResponse;
                    const urlCreator = window.URL || window.webkitURL;
                    this.picture = urlCreator.createObjectURL(data);
                })
            });
        }
        return this.picture
    }
}