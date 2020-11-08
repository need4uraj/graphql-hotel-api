const Mutation = {
    createHotel:(parent,args, {db}, info)=>{
        const hotelIds = db.hotels.map(r=>r.id)
        //to get unique integer for hotel Id, alternatively can use 'uuid/v4' npm library, just to keep uniformity using math.random
        const hotelId = getUniqueId(1,100,hotelIds)
        console.log(args.data)
        const amenityIds = db.amentiesDetails.map(r=>r.id)
        //to get unique integer for amenities Id, alternatively can use 'uuid/v4' npm library, just to keep uniformity using math.random
        const amenityId = getUniqueId(1,100,amenityIds)
        //construct the hotel object with all the required fields
        const hotelObj = {
            id:hotelId,
            name    : args.data.name,
            address :   args.data.address,
            rating:args.data.rating,
            phone:args.data.phone,
            email:args.data.email,
            latitude:args.data.latitude,
            longitude:args.data.longitude,
            country:args.data.country,
            pincode:args.data.pincode,
            checkIn:args.data.checkIn,
            checkOut:args.data.checkOut
        }
        //construct the amenities object with all the required fields and relationship with hotel object
        const amenitiesObj = {
            id:amenityId,
            hotelId : hotelId,
            wifi: args.data.wifi || false,
            roomService: args.data.roomService || false,
            laundry: args.data.laundry || false,
            locker: args.data.locker || false,
            swimmingPool: args.data.swimmingPool || false,
            giftShops: args.data.giftShops || false
        }
        db.hotels.push(hotelObj)
        db.amentiesDetails.push(amenitiesObj)
        return hotelObj
    }
}

function getUniqueId(min, max, hotelIds) {
    const id =  Math.floor(Math.random() * (max - min) + min);
    if(hotelIds && hotelIds.includes(id)){
        getUniqueId(min, max, hotelIds)
    }else{
        return id;
    }
}
export {Mutation as default}