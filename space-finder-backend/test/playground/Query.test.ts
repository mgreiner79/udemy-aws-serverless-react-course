import { APIGatewayProxyEvent } from 'aws-lambda';
import { handler } from '../../services/SpacesTable/Read';

// This tests if our handler for querying on secondary indexes is working
const event: APIGatewayProxyEvent = {
    queryStringParameters: {
        location:'London'
    }
} as any;

const result = handler(event as any, {} as any).then((apiResult)=>{
    const items = JSON.parse(apiResult.body);
    console.log(123)
});



