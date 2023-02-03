import { APIGatewayProxyEvent } from 'aws-lambda';
import { handler } from '../../services/SpacesTable/Read';

// Mock the APIGateway event payload
const event: APIGatewayProxyEvent = {
    queryStringParameters: {
        spaceId:'14daebc7-1379-4de2-9539-1788bec8d0aa'
    }
} as any;

const result = handler(event as any, {} as any).then((apiResult)=>{
    const items = JSON.parse(apiResult.body);
    console.log(123)
});



