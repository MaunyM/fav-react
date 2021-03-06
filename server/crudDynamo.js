"use strict";
const AWS = require("aws-sdk");
const uuid = require('uuid');

AWS.config.update({
    region: "eu-west-1",
    endpoint: "https://dynamodb.eu-west-1.amazonaws.com"
});

var docClient = new AWS.DynamoDB.DocumentClient();

module.exports = (table) => {
    return {
        create: item => {
            item.id = uuid();
            let params = {
                TableName: table,
                Item: item
            };
            docClient.put(params, function(err, data) {
                if (err) {
                    console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
                }
            });
            return item
        },

        read: (id,callback) => {
            let params = {
                TableName: table,
                Key: {
                    id: id
                }
            };
            docClient.get(params, function(err, data) {
                if (err) {
                    console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
                } else {
                    console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
                    callback(data);
                }
            });
        },

        readAll: (callback) => {
            let params = {
                TableName: table,
            };
            docClient.scan(params, function(err, data) {
              if (err) {
                  console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
              } else {
                  console.log("Query succeeded.");
                  callback(data.Items);
              }
            });
        }
    }
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

function del(key, table) {
    let params = {
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
