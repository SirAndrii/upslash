const {REACT_APP_UNSPLASH_CLIENT_ID} = process.env;

class FetchImages {
    constructor( page, perPage = 9 ){
        this.page = page;
        this.perPage = perPage;
        this.url = 'https://api.unsplash.com/photos?client_id=' + REACT_APP_UNSPLASH_CLIENT_ID;
    }
    
    async request () {
        const response = await fetch(`${ this.url }&page=${ this.page }&per_page=${ this.perPage }`);
        const data = await response.json();

        return data;
    }

    async getThumbsData () {
        const imgDataArray= await this.request();
        const filteredArray = imgDataArray.map(
            ({
              id, 
              description, 
              urls, 
              user:{name}, 
              links:{download}
            }) => ({
                key: id,
                description,
                urls,
                author: name,
                download
            })
        );
        
        return filteredArray;
    } 
}

export default FetchImages;

