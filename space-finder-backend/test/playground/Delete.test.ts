import { APIGatewayProxyEvent } from 'aws-lambda';
import { handler } from '../../services/SpacesTable/Delete';

const event: APIGatewayProxyEvent = {
    queryStringParameters: {
        spaceId:'dfbcafc2-7691-4df0-b5d0-71cd2a175eef'
    }
} as any;

const result = handler(event, {} as any).then((apiResult)=>{
    const items = JSON.parse(apiResult.body);
    console.log(123)
});



