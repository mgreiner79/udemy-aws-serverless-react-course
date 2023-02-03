import { APIGatewayProxyEvent } from 'aws-lambda';
import { handler } from '../../services/SpacesTable/Create';

const event: APIGatewayProxyEvent = {
    body: {
        name: 'Paris'
    }
} as any;

const result = handler(event, {} as any).then((apiResult)=>{
    const items = apiResult.body
    console.log(123)
});