import { DynamoDB, Response } from 'aws-sdk';
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda'
import { getEventBody } from '../Shared/Utils'

const TABLE_NAME = process.env.TABLE_NAME as string;
const PRIMARY_KEY = process.env.PRIMARY_KEY as string;
const dbClient = new DynamoDB.DocumentClient();

async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult>{
    
    const result: APIGatewayProxyResult = {
        statusCode: 200,
        body: ""
    }

    try {

        const requestBody = getEventBody(event);
        // This is called optional chaining
        const spaceId = event.queryStringParameters?.[PRIMARY_KEY]          
    
        if (requestBody && spaceId) {
            const requestBodyKey = Object.keys(requestBody)[0];
            const requestBodyValue = requestBody[requestBodyKey];
    
            const updateResult = await dbClient.update({
                TableName: TABLE_NAME,
                Key: {
                    [PRIMARY_KEY]: spaceId    
                },
                UpdateExpression: 'set #zzzNew = :new',
                ExpressionAttributeValues: {
                    ':new': requestBodyValue
                },
                ExpressionAttributeNames: {
                    '#zzzNew': requestBodyKey
                },
                ReturnValues: 'UPDATED_NEW'
            }).promise();
    
            result.body = JSON.stringify(updateResult)
        } 
        
    } catch (error) {
        
        result.statusCode = 500
        result.body = error.message

    }

    return result
}

export {handler}