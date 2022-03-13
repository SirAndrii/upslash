const {REACT_APP_UNSPLASH_CLIENT_ID} = process.env;

class FetchImages {
    constructor(){
        this.url = 'https://api.unsplash.com/photos?client_id=' + REACT_APP_UNSPLASH_CLIENT_ID;
    }

    objToQuery (params){
        let paramsQuery = '';
        if ( params instanceof Object && Object.keys(params).length > 0 ) {
            const paramsArray = Object.keys(params).map( key => key + '=' + params[key]); 
            paramsQuery = '&' + paramsArray.join('&');
        }

        return paramsQuery;
    }
    
    async request ( paramsQuery ) {
        try {
            const response = await fetch( this.url + paramsQuery );
            const data = await response.json();

            return data;
        } catch ( error ) {
            console.error( error );
        }
    }

    async getThumbsData ( params = null ) {
        const imgDataArray= await this.request( this.objToQuery ( params ) );
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

