"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericTable = void 0;
const aws_dynamodb_1 = require("aws-cdk-lib/aws-dynamodb");
class GenericTable {
    constructor(name, primaryKey, stack) {
        this.name = name;
        this.primaryKey = primaryKey;
        this.stack = stack;
        this.initialize();
    }
    initialize() {
        this.createTable();
    }
    createTable() {
        this.table = new aws_dynamodb_1.Table(this.stack, this.name, {
            partitionKey: {
                name: this.primaryKey,
                type: aws_dynamodb_1.AttributeType.STRING
            },
            tableName: this.name
        });
    }
}
exports.GenericTable = GenericTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY1RhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR2VuZXJpY1RhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDJEQUFnRTtBQUloRSxNQUFhLFlBQVk7SUFPckIsWUFBbUIsSUFBWSxFQUFFLFVBQWtCLEVBQUUsS0FBWTtRQUM3RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVPLFVBQVU7UUFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVPLFdBQVc7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksb0JBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDMUMsWUFBWSxFQUFFO2dCQUNWLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVTtnQkFDckIsSUFBSSxFQUFFLDRCQUFhLENBQUMsTUFBTTthQUM3QjtZQUNELFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSTtTQUN2QixDQUFDLENBQUE7SUFDTixDQUFDO0NBRUo7QUE1QkQsb0NBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhY2sgfSBmcm9tIFwiYXdzLWNkay1saWJcIjtcclxuaW1wb3J0IHsgQXR0cmlidXRlVHlwZSwgVGFibGUgfSBmcm9tIFwiYXdzLWNkay1saWIvYXdzLWR5bmFtb2RiXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBHZW5lcmljVGFibGUge1xyXG5cclxuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBwcmltYXJ5S2V5OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHN0YWNrOiBTdGFjaztcclxuICAgIHByaXZhdGUgdGFibGU6IFRhYmxlO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHByaW1hcnlLZXk6IHN0cmluZywgc3RhY2s6IFN0YWNrKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucHJpbWFyeUtleSA9IHByaW1hcnlLZXk7XHJcbiAgICAgICAgdGhpcy5zdGFjayA9IHN0YWNrO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZSgpe1xyXG4gICAgICAgIHRoaXMuY3JlYXRlVGFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVRhYmxlKCl7XHJcbiAgICAgICAgdGhpcy50YWJsZSA9IG5ldyBUYWJsZSh0aGlzLnN0YWNrLCB0aGlzLm5hbWUsIHtcclxuICAgICAgICAgICAgcGFydGl0aW9uS2V5OiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnByaW1hcnlLZXksXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBdHRyaWJ1dGVUeXBlLlNUUklOR1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0YWJsZU5hbWU6IHRoaXMubmFtZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59Il19