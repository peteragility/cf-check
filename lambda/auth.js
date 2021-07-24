'use strict';

exports.handler = async (event, context, callback) => {

    const request = event.Records[0].cf.request;
    const headers = request.headers;

    console.log(JSON.stringify(headers,null,3));

    let echoResponse = {
        status: '200',
        body: JSON.stringify(headers, null, 3)
    };

    callback(null, echoResponse);
}