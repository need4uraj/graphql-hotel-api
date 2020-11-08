const Query = {
    // resolver to query hotels by passing hotelId
    hotelsById: (parent,args, { db }, info) => {            
        if(args && Object.keys(args).length ){
            return db.hotels.find(hotel => hotel.id === parseInt(args.id))
        }
    },
    // resolver to fetch all the hotels
    hotels :(parent,args, { db }, info)=>{
        return db.hotels
    },
    // resolver to fetch hotels based on the latitude and logitude parameters
    hotelsByLatLong: (parent,args, { db }, info) => {            
        if(args && Object.keys(args).length ){
            return db.hotels.filter(hotel => hotel.latitude == args.lat && hotel.longitude == args.long )
        }
    },
    // resolver to fetch tariffs of the hotel by passing hotelId
    tarrif:(parent,args, { db }, info) => {
        if(args && Object.keys(args).length ){
            return db.tariffDetails.filter(td => td.hotelId === args.hotelId)
        }
    },
    // resolver to fetch reviews of the hotel by passing hotelId
    reviews:(parent,args, { db }, info) => {
        if(args && Object.keys(args).length ){
            return db.reviewDetails.filter(td => td.hotelId === args.hotelId)
        }
    },
    // resolver to fetch amenities of the hotel by passing hotelId
    amentities:(parent,args, { db }, info) => {
        if(args && Object.keys(args).length ){
            return db.amentiesDetails.filter(td => td.hotelId === args.hotelId)
        }
    }
}
export {Query as default}