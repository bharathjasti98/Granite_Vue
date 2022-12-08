const { MongoClient } = require('mongodb');

async function main() {

    const url = "mongodb+srv://Jastibharath:Ram1426@cluster0.9dj9h9i.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(url);


    try {

        await client.connect();

        await createmultipleListings(client, [
            {
                "Granite_name": "VERDE JADE",
                "Location": "Texas",
                "color": "White",
                "country": "USA",
                "Catageory": "Kitchen"
            },
            {
                "Granite_name": "BIANCO TROPICAL",
                "Location": "Texas",
                "color": "Black",
                "country": "USA",
                "Catageory": "Kitchen"
            },
            {
                "Granite_name": "NEW VENETIAN GOLD",
                "Location": "Texas",
                "color": "Green",
                "country": "USA",
                "Catageory": "Flooring"
            },
            {
                "Granite_name": "GIALLO TROPICAL",
                "Location": "Texas",
                "color": "Blue",
                "country": "USA",
                "Catageory": "Steps"
            },
            {
                "Granite_name": "BOREAL",
                "Location": "Texas",
                "color": "White",
                "country": "USA",
                "Catageory": "Kitchen"
            },
            {
                "Granite_name": "CRISTALINO LIGHT",
                "Location": "Texas",
                "color": "silver",
                "country": "USA",
                "Catageory": "Flooring"
            },
            {
                "Granite_name": "VENETIAN GREEN",
                "Location": "Texas",
                "color": "White",
                "country": "USA",
                "Catageory": "Kitchen"
            },
            {
                "Granite_name": "Jadore",
                "Location": "Massachusetts",
                "color": "Black",
                "country": "USA",
                "Catageory": "Flooring"
            },
            {
                "Granite_name": "Calacatta Gold Supreme",
                "Location": "Massachusetts",
                "color": "White",
                "country": "USA",
                "Catageory": "Kitchen"
            },
            {
                "Granite_name": "HALF BULLNOSE",
                "Location": "Indiana",
                "color": "Green",
                "country": "USA",
                "Catageory": "Steps"
            },
            {
                "Granite_name": "FULL BULLNOSE",
                "Location": "Indiana",
                "color": "Blue",
                "country": "USA",
                "Catageory": "Kitchen"
            },
            {
                "Granite_name": "BEVEL",
                "Location": "Indiana",
                "color": "White",
                "country": "USA",
                "Catageory": "Flooring"
            },
            {
                "Granite_name": "DBL RADIUS",
                "Location": "Indiana",
                "color": "White",
                "country": "USA",
                "Catageory": "Kitchen"
            },
            {
                "Granite_name": "PENCIL",
                "Location": "Indiana",
                "color": "White",
                "country": "USA",
                "Catageory": "Kitchen"
            },
            {
                "Granite_name": "OGEE",
                "Location": "Indiana",
                "color": "Black",
                "country": "USA",
                "Catageory": "Flooring"
            },
            {
                "Granite_name": "Montello Granite",
                "Location": "Wisconsin",
                "color": "White",
                "country": "USA",
                "Catageory": "Steps"
            },
            {
                "Granite_name": "Amberg",
                "Location": "Wisconsin",
                "color": "Blue",
                "country": "USA",
                "Catageory": "Kitchen"
            },
            {
                "Granite_name": "Athelstane",
                "Location": "Wisconsin",
                "color": "White",
                "country": "USA",
                "Catageory": "Kitchen"
            },
            {
                "Granite_name": "Berlin",
                "Location": "Wisconsin",
                "color": "White",
                "country": "USA",
                "Catageory": "Kitchen"
            },
            {
                "Granite_name": "Utley Rhyolite",
                "Location": "Wisconsin",
                "color": "White",
                "country": "USA",
                "Catageory": "Steps"
            }
        ]);
    }

    catch (error) {
        console.error(error);

    } finally {
        await client.close();
    }
}

main().catch(console.error);


async function createmultipleListings(client, Granite_names) {
    const result = await client.db("Granite").collection("Granite_details").insertMany(Granite_names);
}

async function listDatabases(client) {
    const databasesList = await client.db().admin.listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log('-${db.name}');
    })
}