export const environment = {
    backendUrl: 'http://192.168.1.100:8080', 
    // backendUrl: 'http://localhost:8080', 
    paths: {
        species: '/api/species'
    }, 
    functions: {
        species: {
            add: '/add', 
            get: '/get', 
            get_all: '/get_all', 
            get_by_id: '/get_by_id', 
            update: '/update', 
            remove: 'remove', 
            count: '/count'
        }
    }
};
