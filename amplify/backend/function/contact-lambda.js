/**
 * AWS Lambda function for processing contact form submissions
 * To be deployed with Amplify CLI: amplify add function
 */

const AWS = require('aws-sdk');
const uuid = require('uuid');

// Initialize AWS services
const dynamodb = new AWS.DynamoDB.DocumentClient();
const ses = new AWS.SES({ region: process.env.REGION });

// Environment variables
const TABLE_NAME = process.env.STORAGE_CONTACTSUBMISSIONS_NAME || 'ContactSubmissions';
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || 'info@granitestatePhoto.com';
const EMAIL_SENDER = process.env.EMAIL_SENDER || 'no-reply@granitestatePhoto.com';

exports.handler = async (event) => {
    try {
        // Parse request body
        const body = JSON.parse(event.body);
        
        // Validate required fields
        if (!body.firstName || !body.lastName || !body.email || !body.subject || !body.message) {
            return {
                statusCode: 400,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ error: 'Missing required fields' })
            };
        }
        
        // Create unique ID for the submission
        const submissionId = uuid.v4();
        
        // Prepare item for DynamoDB
        const item = {
            id: submissionId,
            timestamp: body.timestamp || new Date().toISOString(),
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            phone: body.phone || 'Not provided',
            subject: body.subject,
            serviceType: body.serviceType || 'Not specified',
            message: body.message,
            status: 'new'
        };
        
        // Save to DynamoDB
        await dynamodb.put({
            TableName: TABLE_NAME,
            Item: item
        }).promise();
        
        // Prepare email content
        const emailParams = {
            Destination: {
                ToAddresses: [EMAIL_RECIPIENT]
            },
            Message: {
                Body: {
                    Text: {
                        Charset: 'UTF-8',
                        Data: `
New Contact Form Submission

From: ${body.firstName} ${body.lastName}
Email: ${body.email}
Phone: ${body.phone || 'Not provided'}
Subject: ${body.subject}
Service Type: ${body.serviceType || 'Not specified'}

Message:
${body.message}

Timestamp: ${item.timestamp}
Submission ID: ${submissionId}
                        `
                    }
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: `New Contact Form: ${body.subject}`
                }
            },
            Source: EMAIL_SENDER
        };
        
        // Send email notification
        await ses.sendEmail(emailParams).promise();
        
        // Return success response
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'Form submission successful',
                submissionId
            })
        };
    } catch (error) {
        console.error('Error processing form submission:', error);
        
        // Return error response
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                error: 'Error processing form submission'
            })
        };
    }
};