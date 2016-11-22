var AWS = require("aws-sdk");

AWS.config.update({region: "eu-west-2", endpoint: "https://dynamodb.eu-west-1.amazonaws.com"});

var docClient = new AWS.DynamoDB.DocumentClient();

function create(item, table) {
    let params = {
        TableName: table,
        Item: item
    };
    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
        }
    });
}

function read(key, table) {
    let params = {
        TableName: table,
        Key: key
    };
    docClient.get(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            return data;
        }
    });
}

function update(key, item, table) {
    item.id = key
    let params = {
        TableName: table,
        Item: item
    };
    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Updated item:", JSON.stringify(data, null, 2));
        }
    });
}

function delete(key, table) {
    var params = {
        TableName: table,
        Key: key
    };
    docClient.delete(params, function(err, data) {
        if (err) {
            console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
        }
    });
}
