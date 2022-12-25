"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const uuid_1 = require("uuid");
const myVar = "hello";
const myVar1 = "hi";
async function handler(event, context) {
    return {
        statusCode: 200,
        body: 'Hello from Lambda! ' + (0, uuid_1.v4)()
    };
}
exports.handler = handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVsbG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJIZWxsby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBMEI7QUFFMUIsTUFBTSxLQUFLLEdBQVcsT0FBTyxDQUFBO0FBQzdCLE1BQU0sTUFBTSxHQUFXLElBQUksQ0FBQTtBQUUzQixLQUFLLFVBQVUsT0FBTyxDQUFFLEtBQVUsRUFBRSxPQUFZO0lBQzVDLE9BQU87UUFDSCxVQUFVLEVBQUUsR0FBRztRQUNmLElBQUksRUFBRSxxQkFBcUIsR0FBRyxJQUFBLFNBQUUsR0FBRTtLQUNyQyxDQUFBO0FBQ0wsQ0FBQztBQUVRLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJztcclxuXHJcbmNvbnN0IG15VmFyOiBzdHJpbmcgPSBcImhlbGxvXCJcclxuY29uc3QgbXlWYXIxOiBzdHJpbmcgPSBcImhpXCJcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoIGV2ZW50OiBhbnksIGNvbnRleHQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXHJcbiAgICAgICAgYm9keTogJ0hlbGxvIGZyb20gTGFtYmRhISAnICsgdjQoKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBoYW5kbGVyIH0iXX0=